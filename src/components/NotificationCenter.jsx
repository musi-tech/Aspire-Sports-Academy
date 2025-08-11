import { useState, useEffect, useRef } from 'react';
import { Bell, X, CheckCircle, AlertCircle, Info, AlertTriangle, ChevronUp, ChevronDown } from 'lucide-react';

// Demo notifications for testing
const initialNotifications = [
  {
    id: 1,
    type: 'success',
    message: `✨ Grand Aspire Ganesh Nritya Fest! ✨
Join us for two magical evenings of dance, music & celebration!      
📅 30th & 31st August 2025 | 🕓 4:00 PM onwards
📍 Aspire Sports Club`,
    time: '2 min ago'
  }
];


// Add CSS for animations
const styles = `
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}

.animate-slideUp {
  animation: slideUp 0.3s ease-out forwards;
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out forwards;
}
`;

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(initialNotifications.length);
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  
  // Add the styles to the document
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  // Check if device is mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Toggle notification panel
  const toggleNotifications = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
      setShowCarousel(false);
    } else {
      // When closing the panel, show the carousel if there are notifications
      if (notifications.length > 0) {
        setShowCarousel(true);
        setActiveCarouselIndex(0);
      }
    }
  };
  
  // Close notification panel
  const closeNotifications = () => {
    setIsOpen(false);
    if (notifications.length > 0) {
      setShowCarousel(true);
      setActiveCarouselIndex(0);
    }
  };
  
  // Remove a notification
  const removeNotification = (id) => {
    setNotifications(prev => {
      const filtered = prev.filter(notification => notification.id !== id);
      if (filtered.length === 0) {
        setShowCarousel(false);
      } else if (activeCarouselIndex >= filtered.length) {
        setActiveCarouselIndex(filtered.length - 1);
      }
      return filtered;
    });
  };
  
  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
    setUnreadCount(0);
    setShowCarousel(false);
  };
  
  // Handle carousel navigation
  const nextCarouselItem = () => {
    if (activeCarouselIndex < notifications.length - 1) {
      setActiveCarouselIndex(activeCarouselIndex + 1);
    }
  };
  
  const prevCarouselItem = () => {
    if (activeCarouselIndex > 0) {
      setActiveCarouselIndex(activeCarouselIndex - 1);
    }
  };
  

  
  // Carousel auto-scroll effect
  useEffect(() => {
    if (showCarousel && notifications.length > 1) {
      const interval = setInterval(() => {
        setActiveCarouselIndex(prev => 
          prev < notifications.length - 1 ? prev + 1 : 0
        );
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [showCarousel, notifications.length]);
  
  // Get the icon based on notification type
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={18} />;
      case 'error':
        return <AlertCircle className="text-red-500" size={18} />;
      case 'warning':
        return <AlertTriangle className="text-yellow-500" size={18} />;
      case 'info':
      default:
        return <Info className="text-blue-500" size={18} />;
    }
  };
  
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      {/* Carousel for displaying notifications one by one (when panel is closed) */}
      {showCarousel && notifications.length > 0 && !isOpen && (
        <div 
          ref={carouselRef}
          className="mb-2 bg-white rounded-lg shadow-xl border border-gray-200 w-72 overflow-hidden transform transition-all duration-300 ease-in-out animate-slideUp"
          style={{ maxWidth: isMobile ? 'calc(100vw - 32px)' : '18rem' }}
        >
          <div className="p-3 border-b border-gray-100 flex items-start">
            <div className="mr-3 mt-1">
              {getIcon(notifications[activeCarouselIndex].type)}
            </div>
            <div className="flex-1">
              <p className="text-sm">{notifications[activeCarouselIndex].message}</p>
              <p className="text-xs text-gray-500 mt-1">{notifications[activeCarouselIndex].time}</p>
            </div>
            <div className="flex flex-col">
              <button 
                onClick={() => removeNotification(notifications[activeCarouselIndex].id)}
                className="text-gray-400 hover:text-gray-600 mb-1"
              >
                <X size={14} />
              </button>
              <div className="flex flex-col space-y-1">
                <button 
                  onClick={prevCarouselItem} 
                  disabled={activeCarouselIndex === 0}
                  className={`text-gray-400 ${activeCarouselIndex > 0 ? 'hover:text-gray-600' : 'opacity-50 cursor-not-allowed'}`}
                >
                  <ChevronUp size={14} />
                </button>
                <button 
                  onClick={nextCarouselItem}
                  disabled={activeCarouselIndex === notifications.length - 1}
                  className={`text-gray-400 ${activeCarouselIndex < notifications.length - 1 ? 'hover:text-gray-600' : 'opacity-50 cursor-not-allowed'}`}
                >
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-1 px-2 flex justify-between items-center text-xs">
            <span className="text-gray-500">{activeCarouselIndex + 1} of {notifications.length}</span>
            <button 
              onClick={toggleNotifications}
              className="text-blue-500 hover:text-blue-700"
            >
              View all
            </button>
          </div>
        </div>
      )}
      
      {/* Full notification panel (when bell is clicked) */}
      {isOpen && (
        <div 
          className="bg-white rounded-lg shadow-xl border border-gray-200 mb-2 overflow-hidden"
          style={{ 
            width: isMobile ? 'calc(100vw - 32px)' : '20rem',
            maxWidth: isMobile ? 'calc(100vw - 32px)' : '20rem',
            maxHeight: isMobile ? 'calc(80vh)' : '30rem'
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <Bell size={18} className="mr-2" />
              <h3 className="font-medium">Notifications</h3>
              <span className="ml-2 text-xs text-gray-500">({notifications.length})</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={clearAllNotifications}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Clear all
              </button>
              <button onClick={closeNotifications}>
                <X size={18} className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>
          </div>
          
          {/* Notifications list - scrolls upward (newest at top) */}
          <div className="overflow-y-auto" style={{ maxHeight: isMobile ? 'calc(60vh)' : '24rem' }}>
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className="p-3 border-b border-gray-100 hover:bg-gray-50 flex items-start"
                >
                  <div className="mr-3 mt-1">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                  <button 
                    onClick={() => removeNotification(notification.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                <p>No notifications</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Notification bell button - works in both mobile and desktop */}
      <button
        onClick={toggleNotifications}
        className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>
    </div>
  );
}