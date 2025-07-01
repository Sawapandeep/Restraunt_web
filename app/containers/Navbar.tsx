import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      fetchLocationByIP();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          const city = data.city || data.locality || "Unknown City";
          const region = data.principalSubdivision || "Unknown Region";
          setLocation(`${city}, ${region}`);
        } catch (error) {
          setLocation("Unable to fetch location");
        }
      },
      () => {
        fetchLocationByIP();
      }
    );
  };

  const fetchLocationByIP = async () => {
    try {
      const response = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client");
      const data = await response.json();
      const city = data.city || data.locality || "Unknown City";
      const region = data.principalSubdivision || "Unknown Region";
      setLocation(`${city}, ${region}`);
    } catch (error) {
      setLocation("Unable to fetch location");
    }
  };

  const { cart } = useCart();
  return (
    <header className="w-full shadow-md bg-black fixed z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo + Location */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="FoodieHUB" className="h-8 w-auto" />
          <div className="flex flex-col text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <span role="img" aria-label="location">📍</span>
              <button onClick={getLocation} className="text-white hover:text-orange-500 underline">
                Update Location
              </button>
            </div>
            <p className="text-gray-400">{location}</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <div>
            📞 Call us at <span className="font-semibold text-orange-600">0123456789</span>
          </div>
          <Link href="/cart" className="relative hover:text-orange-600">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Link>
          {/* <Link href="/cart" className="hover:text-orange-600">Cart</Link> */}
          {/* <Link href="/signin" className="hover:text-orange-600">My Profile</Link> */}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black shadow-md px-4 py-2 text-white transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-2 text-sm">
          <div>
            📞 Call us at <span className="font-semibold text-orange-600">0123456789</span>
          </div>
          <Link href="/cart" className="block hover:text-orange-600">Cart</Link>

          {/* <Link href="/signin" className="block hover:text-orange-600">My Profile</Link> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

