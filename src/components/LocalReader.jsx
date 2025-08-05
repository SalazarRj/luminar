import { useEffect, useRef, useState } from 'react';
import ePub from 'epubjs';
import { ArrowLeft } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import pdfjsWorker from 'pdfjs-dist/legacy/build/pdf.worker.js?worker';

const LocalReader = ({ file, onBack }) => {
  const viewerRef = useRef(null);
  const renditionRef = useRef(null);
  const pdfDocRef = useRef(null);
  const [pdfPageNum, setPdfPageNum] = useState(1);
  const [pdfTotalPages, setPdfTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (!file || !viewerRef.current) return;

    viewerRef.current.innerHTML = '';
    setError(null);
    const fileURL = URL.createObjectURL(file);

    const renderPdfPage = (pdf, pageNum) => {
      pdf.getPage(pageNum).then((page) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        page.render({ canvasContext: ctx, viewport });
        if (viewerRef.current) {
          viewerRef.current.innerHTML = '';
          viewerRef.current.appendChild(canvas);
        }
      });
    };

    const processFile = async () => {
      try {
        if (file.name.endsWith('.epub')) {
          const book = ePub(fileURL);
          const rendition = book.renderTo(viewerRef.current, {
            width: '100%',
            height: '100%',
            flow: 'paginated',
            spread: 'auto',
          });
          renditionRef.current = rendition;
          await rendition.display();
        } else if (file.name.endsWith('.pdf')) {
          pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
          const loadingTask = pdfjsLib.getDocument(fileURL);
          const pdf = await loadingTask.promise;
          if (!isMounted) return;
          pdfDocRef.current = pdf;
          setPdfTotalPages(pdf.numPages);
          renderPdfPage(pdf, 1);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) setError(err.message);
      }
    };

    processFile();

    return () => {
      isMounted = false;
      URL.revokeObjectURL(fileURL);
    };
  }, [file]);

  useEffect(() => {
    if (pdfDocRef.current && file.name.endsWith('.pdf')) {
      const pdf = pdfDocRef.current;
      const renderPage = async () => {
        const page = await pdf.getPage(pdfPageNum);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        page.render({ canvasContext: ctx, viewport });
        if (viewerRef.current) {
          viewerRef.current.innerHTML = '';
          viewerRef.current.appendChild(canvas);
        }
      };
      renderPage();
    }
  }, [pdfPageNum]);

  const goToPrev = () => {
    if (file.name.endsWith('.epub') && renditionRef.current) {
      renditionRef.current.prev();
    } else if (file.name.endsWith('.pdf')) {
      setPdfPageNum((prev) => Math.max(1, prev - 1));
    }
  };

  const goToNext = () => {
    if (file.name.endsWith('.epub') && renditionRef.current) {
      renditionRef.current.next();
    } else if (file.name.endsWith('.pdf')) {
      setPdfPageNum((prev) => Math.min(pdfTotalPages, prev + 1));
    }
  };

  return (
    <div className="flex flex-col p-4 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="text-gray-50">
          <ArrowLeft className="inline-block mr-2" />
          Voltar
        </button>
        <div className="flex items-center gap-4">
        <button
          onClick={goToPrev}
          disabled={file.name.endsWith('.epub') && !renditionRef.current}
          className="bg-purple-600 text-white rounded px-4 py-2 disabled:opacity-50"
        >
          Anterior
        </button>
          {file.name.endsWith('.pdf') && (
            <span className="text-white">
              {pdfPageNum} / {pdfTotalPages}
            </span>
          )}
          <button
            onClick={goToNext}
            disabled={file.name.endsWith('.epub') && !renditionRef.current}
            className="bg-purple-600 text-white rounded px-4 py-2 disabled:opacity-50"
          >
            Próximo
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded w-full h-[80vh] overflow-auto" ref={viewerRef}></div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default LocalReader;
