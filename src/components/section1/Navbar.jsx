import React from "react";
import { Search, ShoppingCart, Heart, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-white shadow-md">
      <div className="flex ">
        <img
          src="https://i.pinimg.com/736x/da/86/20/da86201bad116526d1a3eae51a8084d2.jpg"
          alt="Company Logo"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>

     <ul className="flex gap-10 text-gray-700 font-medium">
  <li>
    <a
      href="/home"
      className="hover:text-green-600 transition-colors duration-200"
    >
      Home
    </a>
  </li>
  <li>
    <a
      href="/products"
      className="hover:text-green-600 transition-colors duration-200"
    >
      Products
    </a>
  </li>
  <li>
    <a
      href="/about"
      className="hover:text-green-600 transition-colors duration-200"
    >
      About Us
    </a>
  </li>
  <li>
    <a
      href="/contact"
      className="hover:text-green-600 transition-colors duration-200"
    >
      Contact
    </a>
  </li>
</ul>
      <div className="flex items-center gap-5 text-gray-600">
        <button className="hover:text-green-600 transition-colors duration-200">
          <Search size={22} />
        </button>
        <button className="hover:text-green-600 transition-colors duration-200">
          <ShoppingCart size={22} />
        </button>
        <button className="hover:text-green-600 transition-colors duration-200">
          <Heart size={22} />
        </button>
        <button className="hover:text-green-600 transition-colors duration-200">
          <User size={22} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;