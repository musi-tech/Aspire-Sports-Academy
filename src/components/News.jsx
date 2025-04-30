import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaBullhorn, FaTrophy, FaArrowRight, FaClock } from 'react-icons/fa';

// Sample data - replace with your actual data fetching logic
const sampleEvents = {
  latest: [
    {
      id: 1,
      title: "Annual Cricket Tournament Finals",
      date: "May 15, 2025",
      location: "Main Stadium, Aspire Sports Complex",
      image: "/api/placeholder/600/400",
      description: "Join us for the exciting finale of our annual cricket tournament featuring the top teams from our club.",
      category: "latest"
    },
    {
      id: 2,
      title: "New Swimming Coach Announcement",
      date: "May 10, 2025",
      location: "Swimming Arena",
      image: "/api/placeholder/600/400",
      description: "We're delighted to welcome Olympic medalist Sarah Johnson as our new head swimming coach.",
      category: "latest"
    }
  ],
  upcoming: [
    {
      id: 3,
      title: "Summer Sports Camp Registration",
      date: "June 1-15, 2025",
      location: "Multiple Venues",
      image: "/api/placeholder/600/400",
      description: "Registration opens for our popular summer sports camp for kids aged 7-15 years.",
      category: "upcoming"
    },
    {
      id: 4,
      title: "Football Friendly Match: Aspire vs City Stars",
      date: "May 30, 2025",
      location: "Football Ground",
      image: "/api/placeholder/600/400",
      description: "Watch our club team face off against City Stars in this exciting friendly match.",
      category: "upcoming"
    }
  ],
  past: [
    {
      id: 5,
      title: "Yoga & Wellness Workshop",
      date: "April 20, 2025",
      location: "Aspire Fitness Center",
      image: "/api/placeholder/600/400",
      description: "Over 50 members participated in our special wellness workshop led by certified yoga instructors.",
      category: "past"
    },
    {
      id: 6,
      title: "Junior Tennis Championship",
      date: "April 5-7, 2025",
      location: "Tennis Courts",
      image: "/api/placeholder/600/400",
      description: "Congratulations to all participants in our junior tennis championship event!",
      category: "past"
    }
  ],
  notifications: [
    {
      id: 7,
      title: "Maintenance Notice: Swimming Pool",
      date: "May 5-7, 2025",
      description: "The swimming pool will be closed for routine maintenance. We apologize for any inconvenience.",
      priority: "high"
    },
    {
      id: 8,
      title: "Updated Operating Hours",
      date: "From May 1, 2025",
      description: "Our facilities will now be open from 5:30 AM to 10:30 PM on weekdays and 6:00 AM to 9:00 PM on weekends.",
      priority: "medium"
    },
    {
      id: 9,
      title: "New Membership Packages",
      date: "Available Now",
      description: "Check out our new family and corporate membership packages with special discounts!",
      priority: "medium"
    }
  ]
};

const NewsAndUpdates = () => {
  const [activeTab, setActiveTab] = useState("latest");
  
  // Tab navigation items
  const tabs = [
    { id: "latest", label: "Latest Events", icon: <FaBullhorn /> },
    { id: "upcoming", label: "Upcoming Events", icon: <FaCalendarAlt /> },
    { id: "past", label: "Past Events", icon: <FaTrophy /> },
    { id: "notifications", label: "Notifications", icon: <FaBullhorn /> }
  ];
  
  // Render notification items
  const renderNotifications = () => {
    return (
      <div className="space-y-4">
        {sampleEvents.notifications.map(notification => (
          <div 
            key={notification.id}
            className={`p-4 rounded-lg shadow-md border-l-4 ${
              notification.priority === 'high' 
                ? 'border-red-500 bg-red-50' 
                : notification.priority === 'medium'
                ? 'border-yellow-500 bg-yellow-50'
                : 'border-blue-500 bg-blue-50'
            }`}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg">{notification.title}</h3>
              <span className="text-sm text-gray-600 flex items-center">
                <FaClock className="mr-1" /> {notification.date}
              </span>
            </div>
            <p className="mt-2 text-gray-700">{notification.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  // Render event cards
  const renderEventCards = () => {
    const events = sampleEvents[activeTab] || [];
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-lg text-sm font-medium">
                {event.category === "latest" ? "Latest" : event.category === "upcoming" ? "Upcoming" : "Past"}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              
              <div className="flex items-center text-gray-600 mb-1">
                <FaCalendarAlt className="mr-2 text-blue-600" />
                <span>{event.date}</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-3">
                <FaMapMarkerAlt className="mr-2 text-blue-600" />
                <span>{event.location}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{event.description}</p>
              
              <button className="flex items-center text-blue-600 font-medium transition-colors hover:text-blue-800">
                Read More <FaArrowRight className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">News & Updates</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-800 max-w-2xl mx-auto">
          Stay updated with the latest events, announcements, and activities at Aspire Sports Club.
        </p>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-10 bg-black rounded-lg p-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-6 py-3 m-1 rounded-lg font-medium transition-colors ${
              activeTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Dynamic Content Based on Tab */}
      <div className="min-h-96">
        {activeTab === "notifications" ? renderNotifications() : renderEventCards()}
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center">
          View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default NewsAndUpdates;