import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <nav className="sticky w-full top-0 p-6 flex justify-between items-center z-50 bg-white shadow-sm">
        <button className="text-2xl font-light">
          <Link to="/" className="hover:opacity-50">
            J.L.
          </Link>
        </button>
        <div className="flex space-x-8">
          <button className="hover:opacity-50">
            <Link to="/login">Login</Link>
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 hover:opacity-50"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div
          className={`fixed inset-0 bg-white/95 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="h-full flex flex-col justify-center items-center space-y-8 text-2xl">
            <Link
              to="/"
              className="hover:opacity-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/work"
              className="hover:opacity-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              to="/about"
              className="hover:opacity-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:opacity-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="px-6 py-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-row md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <span className="text-sm text-gray-400">
            © 2024 All rights reserved
          </span>
          <div className="flex space-x-12">
            <a
              href="mailto:hello@example.com"
              className="text-sm hover:opacity-50"
            >
              Email
            </a>
            <a href="#" className="text-sm hover:opacity-50">
              LinkedIn
            </a>
            <a href="#" className="text-sm hover:opacity-50">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
