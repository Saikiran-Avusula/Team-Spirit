import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaShoppingCart, FaBars, FaTimes, FaHome, FaHotel, FaBuilding,
  FaUsers, FaTicketAlt, FaInfoCircle, FaPhoneAlt, FaRunning
} from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Hotels', dropdown: [
        { label: 'Luxury Hotels', path: '/hotels/luxury' },
        { label: 'Budget Hotels', path: '/hotels/budget' },
        { label: 'Hotel Deals', path: '/hotels/deals' }
      ]
    },
    {
      name: 'Guest House', dropdown: [
        { label: 'Family Guest Houses', path: '/guesthouses/family' },
        { label: 'Pet Friendly', path: '/guesthouses/pets' }
      ]
    },
    {
      name: 'Service Apartments', dropdown: [
        { label: 'City View Apartments', path: '/service-apartments/cityview' },
        { label: 'Premium Suites', path: '/service-apartments/premium' }
      ]
    },
    {
      name: 'Activities', dropdown: [
        { label: 'Adventure Tours', path: '/activities/adventure' },
        { label: 'City Walks', path: '/activities/citywalks' }
      ]
    },
    { name: 'Coupons', path: '/coupons' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const getIcon = (name) => {
    const iconMap = {
      'Home': <FaHome className="mr-1 text-blue-500" />,
      'Hotels': <FaHotel className="mr-1 text-blue-500" />,
      'Guest House': <FaUsers className="mr-1 text-green-500" />,
      'Service Apartments': <FaBuilding className="mr-1 text-purple-500" />,
      'Activities': <FaRunning className="mr-1 text-orange-500" />,
      'Coupons': <FaTicketAlt className="mr-1 text-pink-500" />,
      'Contact Us': <FaPhoneAlt className="mr-1 text-gray-500" />,
      'About Us': <FaInfoCircle className="mr-1 text-gray-500" />
    };
    return iconMap[name] || null;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-blue-600 font-bold text-xl">Booking<span className="text-black">.com</span></Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-gray-700 text-sm font-medium items-center">
            {navItems.map(item => {
              const isSimple = !item.dropdown;
              return (
                <li key={item.name}
                    className="relative group"
                    onMouseEnter={() => !isSimple && setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}>
                  <div className="flex items-center cursor-pointer hover:text-blue-600">
                    {getIcon(item.name)}
                    {isSimple ? (
                      <Link to={item.path}>{item.name}</Link>
                    ) : (
                      <>
                        <span>{item.name}</span>
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2"
                             viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </div>
                  {/* Dropdown */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-white border rounded-xl shadow-lg z-50 transition-all duration-200 ease-in transform ${
                      hoveredItem === item.name ? 'opacity-100 translate-y-1' : 'opacity-0 pointer-events-none'
                    }`}>
                      <ul className="py-2">
                        {item.dropdown.map(drop => (
                          <li key={drop.label}>
                            <Link to={drop.path}
                                  className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 rounded-lg">
                              {drop.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">Create Account</button>
          <button className="border border-black px-4 py-2 rounded-md hover:text-blue-700 text-sm">Log in</button>
          <FaShoppingCart className="text-gray-600 hover:text-blue-600 text-xl cursor-pointer" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-lg space-y-4">
          {navItems.map((item) => (
            <div key={item.name} className="text-gray-800">
              {item.dropdown ? (
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-2 border-b">
                    <span className="flex items-center space-x-2">{getIcon(item.name)}<span>{item.name}</span></span>
                    <span className="group-open:rotate-180 transition-transform">&#9662;</span>
                  </summary>
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.dropdown.map((drop) => (
                      <li key={drop.label}>
                        <Link to={drop.path} className="block text-sm text-blue-600 hover:underline">
                          {drop.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link to={item.path} className="block py-2 border-b text-sm">{item.name}</Link>
              )}
            </div>
          ))}
          <div className="pt-4 border-t">
            <button className="w-full bg-blue-600 text-white py-2 rounded mb-2">Create Account</button>
            <button className="w-full border border-black py-2 rounded text-sm">Log in</button>
            <div className="flex justify-center mt-3">
              <FaShoppingCart className="text-gray-600 text-xl" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
