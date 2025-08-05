import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Play, Info, Calendar, Users, Trophy, Star } from "lucide-react";
import Header from  "../components/Header";
import Footer from "../components/Footer";

const sportsData = [
  {
    name: "Swimming",
    emoji: "🏊‍♂️",
    color: "from-blue-500 to-cyan-500",
    accent: "bg-blue-500",
    description: "Dive into our Olympic-standard swimming pools with professional coaching for all skill levels. Experience the joy of swimming in crystal-clear waters with state-of-the-art filtration systems.",
   
    images: [
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754418524/hypxfeaepoojb59qu3al.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754418536/skzmxlryldfjpytdkoou.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754418548/zqs5gulnwklj1hg7bgrz.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754418561/xdnnk5w5z81tpp5hb2b9.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754418574/ptbt6td4bb4vndtf6gsi.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754418587/u8sgnfw0jeul1dxwlfho.jpg"
    ]
  },
  {
    name: "Cricket",
    emoji: "🏏",
    color: "from-green-500 to-emerald-500",
    accent: "bg-green-500",
    description: "Master the gentleman's game on our professionally maintained cricket grounds. From batting techniques to bowling strategies, our expert coaches will elevate your cricket skills.",
   
    images: [
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754421779/xdabqwoo8jefwvdrizxg.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754421785/sdshsunx7q1cczfeemyo.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754421791/rfwolkunmcm0stej6lum.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754421797/mn30keypiy39wr94artp.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754421804/ydjiaeq3vsjzf9jylh5n.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754421811/hnh5x0c8o8rwyznzgomj.jpg"
    ]
  },
  {
    name: "Football",
    emoji: "⚽",
    color: "from-orange-500 to-red-500",
    accent: "bg-orange-500",
    description: "Score your goals on our FIFA-standard football pitches. Whether you're learning basic skills or perfecting advanced techniques, our comprehensive training programs cater to all.",
  
    images: [
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420552/f4kfr0pgp6oijvn8v75h.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420559/h4crxhxpza6qpo5m0sfh.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420567/plkvj5edsyyygfgbif1w.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420573/qgxbdtkxrh3wgukz2gal.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420579/bocgdlr0parsquyal3sm.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420588/r6rwqjy9ua8i2dw85ziw.jpg"
    ]
  },
  {
    name: "Toddler Discovery",
    emoji: "🧸",
    color: "from-pink-500 to-purple-500",
    accent: "bg-pink-500",
    description: "A safe and fun environment for toddlers to explore movement, develop motor skills, and enjoy early sports activities through play-based learning and gentle guidance.",
   
    images: [
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420110/epc0bpy5ksyanoa0ost9.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420116/hd2gogsiogrgyp6gvzrf.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420125/nlwcz9bbrk4kqp1ymtls.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420133/kmblyunvbfjpc58vc5sr.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420150/rzc0933sgatrrbzdqlse.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420162/ifgvjswjzbbweonagpw4.jpg"
    ]
  },
  {
    name: "Basketball",
    emoji: "🏀",
    color: "from-purple-500 to-indigo-500",
    accent: "bg-purple-500",
    description: "Shoot hoops on our professional basketball courts with adjustable heights. From dribbling basics to advanced team strategies, experience the thrill of basketball.",
   
    images: [
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420597/eimjdegtpokaaorj9tia.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420605/worajupszguoakitgfro.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420613/d4dxybn1w8tt1drqd1hk.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420621/cngm41torsiqmrrgx9u6.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754420630/tabadvrlvoj0hnbqoha1.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754421817/zteetficanve5kylmv1z.jpg"
    ]
  },
  {
    name: "Lawn Tennis",
    emoji: "🎾",
    color: "from-yellow-500 to-green-500",
    accent: "bg-yellow-500",
    description: "Perfect your serve and volley on our premium tennis courts. With professional coaching and modern facilities, take your tennis game to championship level.",
  
    images: [
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419897/oyeulfw7jrhncvaw7pua.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419904/slwar1z6cadgb1tu60mt.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419912/aj9eodtqytwice7gnqhj.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419923/yplxxroqyht1cp5cdyg4.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419931/vh727f9j5tg2xhlco8bl.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419941/sxsu5w47fpdf7rry0k1y.jpg"
    ]
  },
  {
    name: "Badminton",
    emoji: "🏸",
    color: "from-red-500 to-pink-500",
    accent: "bg-red-500",
    description: "Experience fast-paced badminton action on our international-standard courts. From casual rallies to competitive matches, enjoy this exciting racquet sport.",
   
    images: [
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419674/e3zzyrgxt5wepq9slxz8.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419686/fodiywhkalzhfb1g03iz.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419696/duff1nokmoud48ejakdv.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419704/rayeld7dfewr5c19udac.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419719/vkzbuo1amsy2qtujmdu9.jpg",
      "https://res.cloudinary.com/dutlotmmd/image/upload/v1754419728/pjupqeox9xu2z3les0gn.jpg"
    ]
  }
];

// Lazy Image Component
const LazyImage = ({ src, alt, className, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 cursor-pointer hover:scale-110 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        onClick={onClick}
      />
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image not available</div>
          </div>
        </div>
      )}
    </div>
  );
};

// Lightbox Component
const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div className="relative max-w-6xl max-h-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X size={32} />
        </button>
        
        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Main Image */}
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => onNext(index - currentIndex)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Loading Animation Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  </div>
);

// Enhanced Sports Card Component
const SportsCard = ({ sport }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (offset = 1) => {
    setCurrentImageIndex((prev) => (prev + offset + sport.images.length) % sport.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sport.images.length) % sport.images.length);
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl">
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${sport.color} opacity-5 animate-pulse`}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-12 -translate-x-12 animate-float-delayed"></div>
        
        <div className="relative z-10 p-8 md:p-12">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-2xl ${sport.accent} flex items-center justify-center text-3xl shadow-lg transform hover:rotate-12 transition-all duration-300 hover:scale-110`}>
                {sport.emoji}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{sport.name}</h3>
                <div className={`w-20 h-1 ${sport.accent} rounded-full animate-pulse`}></div>
              </div>
            </div>
           
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-4xl">
            {sport.description}
          </p>

          {/* Image Gallery Grid */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
              Facility Gallery
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sport.images.slice(0, 6).map((image, index) => (
                <LazyImage
                  key={index}
                  src={image}
                  alt={`${sport.name} facility ${index + 1}`}
                  className="aspect-video rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>
          </div>

         

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
                      
            <button 
              onClick={() => openLightbox(0)}
              className="group px-8 py-4 bg-gray-800 text-white font-semibold rounded-2xl hover:bg-gray-700 transition-all duration-300 flex items-center space-x-2 transform hover:-translate-y-1"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>View Gallery</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={sport.images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => nextImage()}
          onPrev={prevImage}
        />
      )}
    </>
  );
};

// Main Component
export default function SportsFacilities() {
  const [selectedSport, setSelectedSport] = useState(sportsData[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSportChange = (sport) => {
    if (sport.name !== selectedSport.name) {
      setIsLoading(true);
      setTimeout(() => {
        setSelectedSport(sport);
        setTimeout(() => setIsLoading(false), 300);
      }, 200);
    }
  };

  return (

    <>
    <Header />
    <div className="min-h-screen bg-black">
      {/* Hero Section with Enhanced Animations */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#000000] via-[#2c2c2c] to-[#000000] text-white">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-36 -translate-y-36 animate-float"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 animate-bounce-slow"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white/10 rounded-full translate-y-32 animate-float-delayed"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center pt-36">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Sports <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6CD123] to-[#38BDF8]">Facilities</span>

            </h1>
            <div className="w-32 h-1 bg-white/80 mx-auto mb-8 rounded-full animate-expand"></div>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light opacity-90">
              Experience world-class sports facilities with expert coaches and premium infrastructure. 
              Your journey to fitness, wellness, and athletic excellence starts here.
            </p>
          </div>
          
          {/* Enhanced Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: <Trophy className="w-5 h-5" />, text: "Expert Coaching" },
              { icon: <Star className="w-5 h-5" />, text: "Premium Equipment" },
              { icon: <Users className="w-5 h-5" />, text: "Flexible Timings" }
            ].map((feature, index) => (
              <div 
                key={feature.text} 
                className="group bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 font-semibold hover:bg-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Sports Navigation with Enhanced Animations */}
        <div className="mb-16">
<h2 className="text-5xl font-bold text-center mb-12 animate-fade-in bg-gradient-to-r from-[#6CD123] to-[#B5FF4D] text-transparent bg-clip-text">
  Choose Your Sport
</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {sportsData.map((sport, index) => (
              <button
                key={sport.name}
                onClick={() => handleSportChange(sport)}
                className={`group relative px-2 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-fade-in ${
                  selectedSport.name === sport.name 
                    ? `bg-gradient-to-r ${sport.color} text-white shadow-xl scale-105` 
                    : "bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-200"
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                    {sport.emoji}
                  </span>
                  <span className="text-sm md:text-base whitespace-nowrap">{sport.name}</span>
                </div>
                
                {/* Enhanced Selection Indicator */}
                {selectedSport.name === sport.name && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-8 h-0.5 bg-white/50 rounded-full mt-1 animate-pulse"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Sports Card with Loading Animation */}
        <div className="relative">
          {isLoading ? (
            <div className="animate-fade-in">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <SportsCard sport={selectedSport} />
            </div>
          )}
        </div>

    </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 8rem; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>

    <Footer />
    </>
  );
}