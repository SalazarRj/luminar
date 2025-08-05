import { useState, useEffect } from 'react';
import { 
  Book, Orbit, FlaskConical, Microscope, Globe, ScrollText, BookText, ShieldEllipsis, ArrowLeft, Search, ExternalLink, ArrowDownAZ, ArrowUpAZ, Calendar, 
  Laptop, Heart, TrendingUp, Brain, Utensils, Compass, Eye, Zap, Ghost, HeartHandshake, Code, Plane, Baby, Megaphone, Stethoscope, Laugh, Dumbbell,
  Atom, Dna, CircuitBoard, Church, Leaf, Target, TestTube, Telescope, LandPlot, Pi, Languages, Users, Footprints, Briefcase, Music, Palette, Film,
  GraduationCap, Smile, Scale, Building, Hammer, Trees, LibraryBig, PanelLeft, Map, Flower2, MoreHorizontal, Rocket, Sparkles, Sprout
} from 'lucide-react';

const categoriasData = [
  {
    nome: "Literatura",
    icone: <BookText className="text-purple-300" />,
    subcategorias: ["Romance", "Conto", "Poesia", "Drama", "Novela", "Ficção histórica", "Ficção contemporânea"]
  },
  {
    nome: "Ficção Especulativa",
    icone: <Rocket className="text-purple-300" />,
    subcategorias: ["Ficção científica", "Fantasia", "Distopia", "Utopia", "Cyberpunk", "Steampunk"]
  },
  {
    nome: "Mitologia e Religião",
    icone: <Church className="text-purple-300" />,
    subcategorias: ["Mitologia grega", "Mitologia romana", "Mitologia nórdica", "Mitologia egípcia", "Cristianismo", "Budismo", "Islamismo", "Judaísmo", "Religiões africanas", "Filosofia religiosa", "Teologia"]
  },
  {
    nome: "Ciências",
    icone: <Microscope className="text-purple-300" />,
    subcategorias: ["Biologia", "Física", "Química", "Astronomia", "Geologia", "Matemática", "Ciências ambientais", "Ciências da Terra", "Neurociência", "Psicologia"]
  },
  {
    nome: "Tecnologia e Computação",
    icone: <Laptop className="text-purple-300" />,
    subcategorias: ["Ciência da computação", "Programação", "Inteligência artificial", "Engenharia de software", "Redes e segurança", "Robótica", "Internet das Coisas", "Hardware", "Sistemas operacionais", "Tecnologias emergentes"]
  },
  {
    nome: "Idiomas",
    icone: <Languages className="text-purple-300" />,
    subcategorias: ["Gramática e vocabulário", "Dicionários", "Tradução", "Inglês", "Espanhol", "Francês", "Alemão", "Japonês", "Mandarim", "Latim", "Línguas indígenas", "Curso de idiomas"]
  },
  {
    nome: "Ciências Humanas e Sociais",
    icone: <Users className="text-purple-300" />,
    subcategorias: ["História", "Geografia", "Sociologia", "Antropologia", "Filosofia", "Ciência política", "Economia", "Ética", "Direitos humanos"]
  },
  {
    nome: "Artes e Cultura",
    icone: <Palette className="text-purple-300" />,
    subcategorias: ["Música", "Pintura", "Cinema", "Teatro", "Fotografia", "Escultura", "Moda", "Design", "Dança", "Arquitetura"]
  },
  {
    nome: "Educação",
    icone: <GraduationCap className="text-purple-300" />,
    subcategorias: ["Pedagogia", "Psicopedagogia", "Didática", "Alfabetização", "Educação especial", "Metodologias de ensino", "Currículo escolar"]
  },
  {
    nome: "Saúde e Bem-Estar",
    icone: <Heart className="text-purple-300" />,
    subcategorias: ["Medicina", "Enfermagem", "Nutrição", "Psicologia clínica", "Fisioterapia", "Esportes e exercícios", "Saúde mental", "Desenvolvimento pessoal", "Autoajuda"]
  },
  {
    nome: "Direito e Legislação",
    icone: <Scale className="text-purple-300" />,
    subcategorias: ["Direito civil", "Direito penal", "Direito constitucional", "Direito ambiental", "Leis e códigos", "Justiça social"]
  },
  {
    nome: "Administração e Negócios",
    icone: <Building className="text-purple-300" />,
    subcategorias: ["Administração de empresas", "Finanças", "Contabilidade", "Marketing", "Empreendedorismo", "Recursos humanos", "Economia", "Gestão de projetos"]
  },
  {
    nome: "Engenharia e Exatas",
    icone: <Hammer className="text-purple-300" />,
    subcategorias: ["Engenharia civil", "Engenharia elétrica", "Engenharia mecânica", "Engenharia de produção", "Estatística", "Cálculo", "Desenho técnico"]
  },
  {
    nome: "Agropecuária e Meio Ambiente",
    icone: <Trees className="text-purple-300" />,
    subcategorias: ["Agronomia", "Zootecnia", "Veterinária", "Agricultura sustentável", "Silvicultura", "Gestão ambiental"]
  },
  {
    nome: "Infantil e Juvenil",
    icone: <Baby className="text-purple-300" />,
    subcategorias: ["Contos infantis", "Literatura juvenil", "Fábulas", "Histórias ilustradas", "Educação moral"]
  },
  {
    nome: "HQs, Mangás e Graphic Novels",
    icone: <PanelLeft className="text-purple-300" />,
    subcategorias: ["Heróis", "Mangás japoneses", "Manhwa (coreanos)", "Graphic novels literárias"]
  },
  {
    nome: "Gastronomia",
    icone: <Utensils className="text-purple-300" />,
    subcategorias: ["Culinária internacional", "Receitas", "Nutrição e dietas", "Confeitaria", "Cozinha vegetariana", "Cozinha vegana"]
  },
  {
    nome: "Viagens e Turismo",
    icone: <Plane className="text-purple-300" />,
    subcategorias: ["Guias de viagem", "Cultura de países", "Relatos de viagem", "Mapas e roteiros"]
  },
  {
    nome: "Espiritualidade e Esoterismo",
    icone: <Flower2 className="text-purple-300" />,
    subcategorias: ["Meditação", "Yoga", "Astrologia", "Tarot", "Chakras", "Reencarnação"]
  },
  {
    nome: "Outros / Miscelânea",
    icone: <MoreHorizontal className="text-purple-300" />,
    subcategorias: ["Humor", "Curiosidades", "Hobbies", "Jogos e passatempos", "DIY (faça você mesmo)", "Biografias e memórias", "Ensaios e crônicas", "Cartas e discursos"]
  }
];

const subcategoriaIcones = {
    romance: <Sparkles className="text-purple-300" />,
    conto: <BookText className="text-purple-300" />,
    poesia: <BookText className="text-purple-300" />,
    drama: <BookText className="text-purple-300" />,
    novela: <BookText className="text-purple-300" />,
    "ficção histórica": <ScrollText className="text-purple-300" />,
    "ficção contemporânea": <BookText className="text-purple-300" />,
    "ficção científica": <Atom className="text-purple-300" />,
    fantasia: <Orbit className="text-purple-300" />,
    distopia: <Dna className="text-purple-300" />,
    utopia: <Sparkles className="text-purple-300" />,
    cyberpunk: <CircuitBoard className="text-purple-300" />,
    steampunk: <Sparkles className="text-purple-300" />,
    "mitologia grega": <Church className="text-purple-300" />,
    "mitologia romana": <Church className="text-purple-300" />,
    "mitologia nórdica": <Church className="text-purple-300" />,
    "mitologia egípcia": <Church className="text-purple-300" />,
    cristianismo: <Church className="text-purple-300" />,
    budismo: <Church className="text-purple-300" />,
    islamismo: <Church className="text-purple-300" />,
    judaísmo: <Church className="text-purple-300" />,
    "religiões africanas": <Church className="text-purple-300" />,
    "filosofia religiosa": <Flower2 className="text-purple-300" />,
    teologia: <Flower2 className="text-purple-300" />,
    biologia: <Leaf className="text-purple-300" />,
    física: <Target className="text-purple-300" />,
    química: <TestTube className="text-purple-300" />,
    astronomia: <Telescope className="text-purple-300" />,
    geologia: <LandPlot className="text-purple-300" />,
    matemática: <Pi className="text-purple-300" />,
    "ciências ambientais": <Trees className="text-purple-300" />,
    "ciências da terra": <Trees className="text-purple-300" />,
    neurociência: <Brain className="text-purple-300" />,
    psicologia: <Brain className="text-purple-300" />,
    "ciência da computação": <Laptop className="text-purple-300" />,
    programação: <Code className="text-purple-300" />,
    "inteligência artificial": <Brain className="text-purple-300" />,
    "engenharia de software": <Code className="text-purple-300" />,
    "redes e segurança": <CircuitBoard className="text-purple-300" />,
    robótica: <Briefcase className="text-purple-300" />,
    "internet das coisas": <CircuitBoard className="text-purple-300" />,
    hardware: <CircuitBoard className="text-purple-300" />,
    "sistemas operacionais": <Laptop className="text-purple-300" />,
    "tecnologias emergentes": <Sparkles className="text-purple-300" />,
    "gramática e vocabulário": <Languages className="text-purple-300" />,
    dicionários: <BookText className="text-purple-300" />,
    tradução: <Languages className="text-purple-300" />,
    inglês: <Languages className="text-purple-300" />,
    espanhol: <Languages className="text-purple-300" />,
    francês: <Languages className="text-purple-300" />,
    alemão: <Languages className="text-purple-300" />,
    japonês: <Languages className="text-purple-300" />,
    mandarim: <Languages className="text-purple-300" />,
    latim: <Languages className="text-purple-300" />,
    "línguas indígenas": <Languages className="text-purple-300" />,
    "curso de idiomas": <GraduationCap className="text-purple-300" />,
    história: <ScrollText className="text-purple-300" />,
    geografia: <Globe className="text-purple-300" />,
    sociologia: <Users className="text-purple-300" />,
    antropologia: <Footprints className="text-purple-300" />,
    filosofia: <FlaskConical className="text-purple-300" />,
    "ciência política": <Megaphone className="text-purple-300" />,
    economia: <TrendingUp className="text-purple-300" />,
    ética: <HeartHandshake className="text-purple-300" />,
    "direitos humanos": <HeartHandshake className="text-purple-300" />,
    música: <Music className="text-purple-300" />,
    pintura: <Palette className="text-purple-300" />,
    cinema: <Film className="text-purple-300" />,
    teatro: <Film className="text-purple-300" />,
    fotografia: <Palette className="text-purple-300" />,
    escultura: <Palette className="text-purple-300" />,
    moda: <Briefcase className="text-purple-300" />,
    design: <Briefcase className="text-purple-300" />,
    dança: <Footprints className="text-purple-300" />,
    arquitetura: <Building className="text-purple-300" />,
    pedagogia: <GraduationCap className="text-purple-300" />,
    psicopedagogia: <GraduationCap className="text-purple-300" />,
    didática: <GraduationCap className="text-purple-300" />,
    alfabetização: <GraduationCap className="text-purple-300" />,
    "educação especial": <GraduationCap className="text-purple-300" />,
    "metodologias de ensino": <GraduationCap className="text-purple-300" />,
    "currículo escolar": <GraduationCap className="text-purple-300" />,
    medicina: <Stethoscope className="text-purple-300" />,
    enfermagem: <Stethoscope className="text-purple-300" />,
    nutrição: <Utensils className="text-purple-300" />,
    "psicologia clínica": <Brain className="text-purple-300" />,
    fisioterapia: <Stethoscope className="text-purple-300" />,
    "esportes e exercícios": <Dumbbell className="text-purple-300" />,
    "saúde mental": <Heart className="text-purple-300" />,
    "desenvolvimento pessoal": <HeartHandshake className="text-purple-300" />,
    autoajuda: <HeartHandshake className="text-purple-300" />,
    "direito civil": <Scale className="text-purple-300" />,
    "direito penal": <Scale className="text-purple-300" />,
    "direito constitucional": <Scale className="text-purple-300" />,
    "direito ambiental": <Scale className="text-purple-300" />,
    "leis e códigos": <Scale className="text-purple-300" />,
    "justiça social": <Scale className="text-purple-300" />,
    "administração de empresas": <Building className="text-purple-300" />,
    finanças: <TrendingUp className="text-purple-300" />,
    contabilidade: <Building className="text-purple-300" />,
    marketing: <Megaphone className="text-purple-300" />,
    empreendedorismo: <Building className="text-purple-300" />,
    "recursos humanos": <Users className="text-purple-300" />,
    "gestão de projetos": <Hammer className="text-purple-300" />,
    "engenharia civil": <Hammer className="text-purple-300" />,
    "engenharia elétrica": <Hammer className="text-purple-300" />,
    "engenharia mecânica": <Hammer className="text-purple-300" />,
    "engenharia de produção": <Hammer className="text-purple-300" />,
    estatística: <Pi className="text-purple-300" />,
    cálculo: <Pi className="text-purple-300" />,
    "desenho técnico": <Hammer className="text-purple-300" />,
    agronomia: <Sprout className="text-purple-300" />,
    zootecnia: <Sprout className="text-purple-300" />,
    veterinária: <Heart className="text-purple-300" />,
    "agricultura sustentável": <Trees className="text-purple-300" />,
    silvicultura: <Trees className="text-purple-300" />,
    "gestão ambiental": <Trees className="text-purple-300" />,
    "contos infantis": <Baby className="text-purple-300" />,
    "literatura juvenil": <LibraryBig className="text-purple-300" />,
    fábulas: <BookText className="text-purple-300" />,
    "histórias ilustradas": <PanelLeft className="text-purple-300" />,
    "educação moral": <HeartHandshake className="text-purple-300" />,
    heróis: <Sparkles className="text-purple-300" />,
    "mangás japoneses": <PanelLeft className="text-purple-300" />,
    "manhwa (coreanos)": <PanelLeft className="text-purple-300" />,
    "graphic novels literárias": <PanelLeft className="text-purple-300" />,
    "culinária internacional": <Utensils className="text-purple-300" />,
    receitas: <Utensils className="text-purple-300" />,
    "nutrição e dietas": <Utensils className="text-purple-300" />,
    confeitaria: <Utensils className="text-purple-300" />,
    "cozinha vegetariana": <Utensils className="text-purple-300" />,
    "cozinha vegana": <Utensils className="text-purple-300" />,
    "guias de viagem": <Plane className="text-purple-300" />,
    "cultura de países": <Globe className="text-purple-300" />,
    "relatos de viagem": <Plane className="text-purple-300" />,
    "mapas e roteiros": <Map className="text-purple-300" />,
    meditação: <Flower2 className="text-purple-300" />,
    yoga: <Flower2 className="text-purple-300" />,
    astrologia: <Flower2 className="text-purple-300" />,
    tarot: <Flower2 className="text-purple-300" />,
    chakras: <Flower2 className="text-purple-300" />,
    reencarnação: <Flower2 className="text-purple-300" />,
    humor: <Laugh className="text-purple-300" />,
    curiosidades: <MoreHorizontal className="text-purple-300" />,
    hobbies: <MoreHorizontal className="text-purple-300" />,
    "jogos e passatempos": <MoreHorizontal className="text-purple-300" />,
    "diy (faça você mesmo)": <MoreHorizontal className="text-purple-300" />,
    "biografias e memórias": <BookText className="text-purple-300" />,
    "ensaios e crônicas": <BookText className="text-purple-300" />,
    "cartas e discursos": <BookText className="text-purple-300" />,
};

const pageSize = 30;

function App() {
 
  const [view, setView] = useState('home');
  const [previousView, setPreviousView] = useState('home');
  const [isVisualLayout, setIsVisualLayout] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [subcategoriaSelecionada, setSubcategoriaSelecionada] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  const [livros, setLivros] = useState([]);
  const [isLoadingBooks, setIsLoadingBooks] = useState(false);
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  
  const [favorites, setFavorites] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc_title');

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem('luminar-favorites'));
      if (storedFavorites) {
        setFavorites(storedFavorites);
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('luminar-favorites', JSON.stringify(favorites));
    } catch (error)      {
      console.error("Erro ao salvar favoritos:", error);
    }
  }, [favorites]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const navigateTo = (newView) => {
    setPreviousView(view);
    setView(newView);
  };

  const fetchGoogleBooks = async (query, page = 1) => {
    setIsLoadingBooks(true);
    setLivros([]);
    window.scrollTo(0, 0);

    const startIndex = (page - 1) * pageSize;
    const formattedQuery = encodeURIComponent(query.toLowerCase().trim());
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}&maxResults=${pageSize}&startIndex=${startIndex}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      const data = await response.json();
      
      setTotalBooks(data.totalItems || 0);

      if (data.items && data.items.length > 0) {
        const mappedBooks = data.items.map(item => ({
          id: item.id,
          titulo: item.volumeInfo.title || 'Título indisponível',
          autor: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Autor(es) indisponível(eis)',
          sinopse: item.volumeInfo.description || 'Descrição indisponível.',
          imagem: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'https://placehold.co/150x220/3d3d3d/f5f5f5?text=Sem+Capa',
          categoria: query,
          previewLink: item.volumeInfo.previewLink || null,
          dataPublicacao: item.volumeInfo.publishedDate ? new Date(item.volumeInfo.publishedDate).getFullYear() : null,
        }));
        setLivros(mappedBooks);
      } else {
        setLivros([]);
      }
    } catch (error) {
      console.error("Falha ao buscar os livros:", error);
      setLivros([]);
    } finally {
      setIsLoadingBooks(false);
    }
  };

  const sortBooks = (books, order) => {
    return [...books].sort((a, b) => {
      if (order.includes('title')) {
        return order === 'asc_title' ? a.titulo.localeCompare(b.titulo) : b.titulo.localeCompare(a.titulo);
      } else if (order.includes('date')) {
        const dateA = a.dataPublicacao || 0;
        const dateB = b.dataPublicacao || 0;
        return order === 'desc_date' ? dateB - dateA : dateA - dateB;
      }
      return 0;
    });
  };

  const handleMainCategoryClick = (categoria) => {
    setCategoriaSelecionada(categoria);
    setSubcategoriaSelecionada(null); 
    navigateTo('subcategories');
  };

  const handleSubcategoryClick = (subcategoria) => {
    setSubcategoriaSelecionada(subcategoria);
    setSearchQuery('');
    setCurrentPage(1);
    setSortOrder('asc_title');
    setFilterQuery(''); 
    navigateTo('list');
    fetchGoogleBooks(subcategoria, 1);
  };
  
  const handleLivroClick = (livro) => {
    setLivroSelecionado(livro);
    navigateTo('detail');
  };

  const handleBackClick = () => {
    setFilterQuery(''); 
    setLivroSelecionado(null);

    if (view === 'detail') {
        setView(previousView); 
    } else if (view === 'favorites') {
        setView('home');
    } else if (view === 'list') {
        if (subcategoriaSelecionada) {
            setView('subcategories');
            setSubcategoriaSelecionada(null);
        } else {
            setView('home');
        }
        setLivros([]);
        setTotalBooks(0);
    } else if (view === 'subcategories') {
        setView('home');
        setCategoriaSelecionada(null);
    } else {
        setView('home');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      setCategoriaSelecionada(null);
      setSubcategoriaSelecionada(null);
      setCurrentPage(1);
      setSortOrder('asc_title');
      setFilterQuery(''); 
      navigateTo('list');
      fetchGoogleBooks(searchQuery, 1);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalBooks / pageSize)) {
      setCurrentPage(newPage);
      const query = subcategoriaSelecionada || searchQuery;
      fetchGoogleBooks(query, newPage);
    }
  };

  const handleOpenReader = (previewLink) => {
    if (previewLink) {
        window.open(previewLink, '_blank', 'noopener,noreferrer');
    }
  };

  const toggleFavorite = (book) => {
    setFavorites(prevFavorites => {
      const isFavorited = prevFavorites.some(fav => fav.id === book.id);
      if (isFavorited) {
        return prevFavorites.filter(fav => fav.id !== book.id);
      } else {
        return [...prevFavorites, book];
      }
    });
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-950 font-[Inter] text-gray-50">
        <div className="text-center">
          <Book size={100} className="mx-auto animate-pulse text-purple-400" />
          <h1 className="text-4xl font-extrabold mt-4">Luminar</h1>
          <p className="text-lg text-gray-400 mt-2">Um santuário para o conhecimento</p>
        </div>
      </div>
    );
  }

  const renderHome = () => (
    <div className="flex flex-col items-center p-4 space-y-6 flex-grow overflow-y-auto">
      <h1 className="text-4xl font-extrabold text-gray-50 text-center drop-shadow-md mb-2">
        Luminar
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-md">
        Explore nossa coleção ou use a busca para encontrar um livro.
      </p>

      {/* Campo de Busca */}
      <form onSubmit={handleSearchSubmit} className="relative w-full max-w-lg mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por título ou autor..."
          className="w-full py-3 px-5 pr-12 rounded-full bg-gray-700 text-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
        />
        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors duration-200">
          <Search size={24} />
        </button>
      </form>

      {/* Botões de Layout e Favoritos */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="flex space-x-4">
            <button
            onClick={() => setIsVisualLayout(true)}
            className={`py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-200 ${
                isVisualLayout
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300'
            }`}
            >
            Visual
            </button>
            <button
            onClick={() => setIsVisualLayout(false)}
            className={`py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-200 ${
                !isVisualLayout
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300'
            }`}
            >
            Lista
            </button>
        </div>
        <button
            onClick={() => navigateTo('favorites')}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white`}
        >
            <Heart size={16} className="mr-2" />
            Meus Favoritos ({favorites.length})
        </button>
      </div>


      {/* Renderiza o layout de categorias baseado no estado */}
      {isVisualLayout ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-lg pb-8">
          {categoriasData.map((cat) => (
            <div
              key={cat.nome}
              onClick={() => handleMainCategoryClick(cat)}
              className="w-full p-6 bg-gray-800 rounded-xl shadow-lg cursor-pointer
                         hover:bg-gray-700 transition transform hover:-translate-y-1 duration-300 ease-in-out flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-2">{cat.icone}</div>
              <span className="text-sm font-bold text-gray-50">{cat.nome}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col w-full max-w-lg space-y-4 pb-8">
          {categoriasData.map((cat) => (
            <div
              key={cat.nome}
              onClick={() => handleMainCategoryClick(cat)}
              className="w-full text-gray-50 text-lg font-semibold py-2 px-4 cursor-pointer
                         hover:text-purple-300 transition-colors duration-300 ease-in-out border-b border-gray-700 last:border-b-0 flex justify-between items-center"
              >
                <span>{cat.nome}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );

  const renderSubcategories = () => {
    const mainCategory = categoriaSelecionada;
    if (!mainCategory) return null;

    return (
      <div className="flex flex-col p-4 flex-grow overflow-y-auto">
        <button
          onClick={handleBackClick}
          className="self-start text-gray-50 flex items-center mb-4 transition-transform transform hover:-translate-x-1"
        >
          <ArrowLeft size={24} className="mr-2"/>
          Voltar
        </button>
        <h2 className="text-3xl font-extrabold text-gray-50 mb-6 text-center drop-shadow-md">
          {mainCategory.nome}
        </h2>
        
        {isVisualLayout ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-lg pb-8 self-center">
            {mainCategory.subcategorias.map((subcat) => (
              <div
                key={subcat}
                onClick={() => handleSubcategoryClick(subcat)}
                className="w-full p-6 bg-gray-800 rounded-xl shadow-lg cursor-pointer
                           hover:bg-gray-700 transition transform hover:-translate-y-1 duration-300 ease-in-out flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-2">{subcategoriaIcones[subcat.toLowerCase()] || <Book className="text-purple-300" />}</div>
                <span className="text-sm font-bold text-gray-50">{subcat}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col w-full max-w-lg space-y-4 pb-8 self-center">
            {mainCategory.subcategorias.map((subcat) => (
              <div
                key={subcat}
                onClick={() => handleSubcategoryClick(subcat)}
                className="w-full text-gray-50 text-lg font-semibold py-2 px-4 cursor-pointer
                           hover:text-purple-300 transition-colors duration-300 ease-in-out border-b border-gray-700 last:border-b-0 flex justify-between items-center"
              >
                <span>{subcat}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderLista = () => {
    const titulo = subcategoriaSelecionada
      ? subcategoriaSelecionada
      : `Resultados para "${searchQuery}"`;

    const sortedBooks = sortBooks(livros, sortOrder);
    const filteredBooks = sortedBooks.filter(livro =>
        livro.titulo.toLowerCase().includes(filterQuery.toLowerCase()) ||
        livro.autor.toLowerCase().includes(filterQuery.toLowerCase())
    );
    const totalPages = Math.ceil(totalBooks / pageSize);
    const showPagination = totalBooks > pageSize && filterQuery === ''; 
    return (
      <div className="flex flex-col p-4 flex-grow overflow-y-auto">
        <button
          onClick={handleBackClick}
          className="self-start text-gray-50 flex items-center mb-4 transition-transform transform hover:-translate-x-1"
        >
          <ArrowLeft size={24} className="mr-2"/>
          Voltar
        </button>
        <h2 className="text-3xl font-extrabold text-gray-50 mb-6 text-center drop-shadow-md">
          {titulo}
        </h2>

        {/* Campo de pesquisa para a subcategoria */}
        <div className="relative w-full max-w-lg mb-4 self-center">
            <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filtrar livros nesta página..."
            className="w-full py-3 px-5 pr-12 rounded-full bg-gray-700 text-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
            />
            <Search size={24} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Botões de Ordenação */}
        <div className="flex justify-end items-center mb-4 gap-2">
            <button onClick={() => setSortOrder('asc_title')} className={`flex items-center px-3 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${sortOrder === 'asc_title' ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300'}`}>
              <ArrowDownAZ size={16} className="mr-1 sm:mr-2" />
              Nome (A-Z)
            </button>
            <button onClick={() => setSortOrder('desc_title')} className={`flex items-center px-3 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${sortOrder === 'desc_title' ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300'}`}>
              <ArrowUpAZ size={16} className="mr-1 sm:mr-2" />
              Nome (Z-A)
            </button>
            <button onClick={() => setSortOrder('desc_date')} className={`flex items-center px-3 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${sortOrder === 'desc_date' ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300'}`}>
              <Calendar size={16} className="mr-1 sm:mr-2" />
              Recentes
            </button>
        </div>

        {isLoadingBooks ? (
          <div className="flex justify-center items-center h-40">
            <svg className="animate-spin h-10 w-10 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : livros.length > 0 ? (
          filteredBooks.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
                {filteredBooks.map((livro, index) => {
                  const isFavorited = favorites.some(fav => fav.id === livro.id);
                  return (
                    <div
                      key={`${livro.id}-${index}`}
                      className="relative bg-gray-800 p-3 rounded-xl shadow-lg group
                                 transition transform hover:-translate-y-1 duration-300 ease-in-out"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(livro);
                        }}
                        className={`absolute top-2 right-2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white 
                                   hover:bg-opacity-75 hover:text-pink-400 transition-all
                                   ${isFavorited ? 'text-pink-500' : ''}`}
                        aria-label="Favoritar"
                      >
                        <Heart size={18} className={isFavorited ? 'fill-current' : ''} />
                      </button>
                      <div onClick={() => handleLivroClick(livro)} className="cursor-pointer">
                        <img
                          src={livro.imagem}
                          alt={`Capa do livro ${livro.titulo}`}
                          className="w-full h-auto rounded-lg shadow-md mb-2 object-cover aspect-[2/3]"
                        />
                        <h3 className="text-sm font-semibold text-gray-50 truncate group-hover:text-purple-300">{livro.titulo}</h3>
                        <p className="text-xs text-gray-400 truncate">{livro.autor}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              {showPagination && (
                <div className="flex justify-center items-center space-x-4 mt-8 pb-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-purple-600 text-white rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    Anterior
                  </button>
                  <span className="text-lg font-bold">
                    {currentPage} de {totalPages}
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className="px-4 py-2 bg-purple-600 text-white rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    Próximo
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-gray-400 mt-10">
                Nenhum livro corresponde ao seu filtro nesta página.
            </div>
          )
        ) : (
          <div className="text-center text-gray-400 mt-10">
            Nenhum livro encontrado para a pesquisa.
          </div>
        )}
      </div>
    );
  };
    
  const renderFavorites = () => (
    <div className="flex flex-col p-4 flex-grow overflow-y-auto">
        <button
            onClick={handleBackClick}
            className="self-start text-gray-50 flex items-center mb-4 transition-transform transform hover:-translate-x-1"
        >
            <ArrowLeft size={24} className="mr-2"/>
            Voltar
        </button>
        <h2 className="text-3xl font-extrabold text-gray-50 mb-6 text-center drop-shadow-md">
            Meus Favoritos
        </h2>

        {favorites.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
                {favorites.map((livro, index) => (
                    <div
                        key={`${livro.id}-${index}-fav`}
                        className="relative bg-gray-800 p-3 rounded-xl shadow-lg group
                                   transition transform hover:-translate-y-1 duration-300 ease-in-out"
                    >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(livro);
                          }}
                          className={`absolute top-2 right-2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-pink-500 
                                     hover:bg-opacity-75 hover:text-pink-400 transition-all`}
                          aria-label="Desfavoritar"
                        >
                          <Heart size={18} className="fill-current" />
                        </button>
                        <div onClick={() => handleLivroClick(livro)} className="cursor-pointer">
                            <img
                                src={livro.imagem}
                                alt={`Capa do livro ${livro.titulo}`}
                                className="w-full h-auto rounded-lg shadow-md mb-2 object-cover aspect-[2/3]"
                            />
                            <h3 className="text-sm font-semibold text-gray-50 truncate group-hover:text-purple-300">{livro.titulo}</h3>
                            <p className="text-xs text-gray-400 truncate">{livro.autor}</p>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center text-gray-400 mt-10">
                <Heart size={48} className="mx-auto text-purple-300 mb-4" />
                <p>Sua lista de favoritos está vazia.</p>
                <p>Clique no coração na capa de um livro para adicioná-lo aqui.</p>
            </div>
        )}
    </div>
  );

  const renderDetalhe = () => {
    if (!livroSelecionado) return null;
    
    const isFavorited = favorites.some(fav => fav.id === livroSelecionado.id);
    
    return(
        <div className="flex flex-col p-4">
        <button
            onClick={handleBackClick}
            className="self-start text-gray-50 flex items-center mb-4 transition-transform transform hover:-translate-x-1"
        >
            <ArrowLeft size={24} className="mr-2"/>
            Voltar
        </button>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 bg-gray-800 p-6 rounded-3xl shadow-2xl">
            <img
            src={livroSelecionado.imagem}
            alt={`Capa do livro ${livroSelecionado.titulo}`}
            className="w-48 h-auto rounded-xl shadow-lg object-cover aspect-[2/3]"
            />
            <div className="flex flex-col text-gray-50 text-center md:text-left flex-1">
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 drop-shadow-md">{livroSelecionado.titulo}</h2>
                <p className="text-lg text-gray-300 mb-4 font-medium italic">- {livroSelecionado.autor}</p>
                <p className="text-base leading-relaxed text-gray-200 max-h-60 overflow-y-auto pr-2">{livroSelecionado.sinopse}</p>
                
                <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                  {livroSelecionado.previewLink && (
                      <button
                          onClick={() => handleOpenReader(livroSelecionado.previewLink)}
                          className="w-full md:w-auto px-6 py-3 rounded-full bg-transparent border-2 border-purple-500 text-purple-300 font-bold text-lg flex items-center justify-center
                                     transition-all duration-300 transform hover:scale-105 hover:bg-purple-500 hover:text-white"
                      >
                          <ExternalLink size={20} className="mr-2" />
                          Abrir Livro
                      </button>
                  )}
                  <button
                      onClick={() => toggleFavorite(livroSelecionado)}
                      className="w-full md:w-auto px-6 py-3 rounded-full bg-transparent border-2 border-pink-500 text-pink-300 font-bold text-lg flex items-center justify-center
                                 transition-all duration-300 transform hover:scale-105 hover:bg-pink-500 hover:text-white"
                      aria-label="Favoritar"
                  >
                      <Heart size={20} className={`mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                      {isFavorited ? 'Favoritado' : 'Favoritar'}
                  </button>
                </div>
            </div>
        </div>
        </div>
    );
  }
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-gray-900 to-indigo-950 font-[Inter] text-gray-50">
      <main className="w-full flex-grow p-4 md:p-8 max-w-7xl mx-auto">
        {view === 'home' && renderHome()}
        {view === 'subcategories' && renderSubcategories()}
        {view === 'list' && renderLista()}
        {view === 'detail' && renderDetalhe()}
        {view === 'favorites' && renderFavorites()}
      </main>
    </div>
  );
}

export default App;
