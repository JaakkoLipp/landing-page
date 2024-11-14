import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const MinimalPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 p-6 flex justify-between items-center z-50 bg-white">
        <div className="text-2xl font-light">G.D</div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Fullscreen Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white">
            <div className="h-full flex flex-col justify-center items-center space-y-8 text-2xl">
              <a href="#home" className="hover:opacity-50">
                Home
              </a>
              <a href="#works" className="hover:opacity-50">
                Works
              </a>
              <a href="#about" className="hover:opacity-50">
                About
              </a>
              <a href="#contact" className="hover:opacity-50">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen px-6 pt-32 md:pt-40 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-light leading-none">
              Visual
              <br />
              Designer
            </h1>
            <p className="text-gray-600 max-w-md">
              Hi, I'm John Doe. A passionate UI/UX Designer and Front-End
              Developer based in New York.
            </p>
            <button className="border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors">
              See my works
            </button>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
              <div className="text-[20rem] font-bold opacity-5">X</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="min-h-screen px-6 py-32 max-w-6xl mx-auto">
        <div className="space-y-24">
          <h2 className="text-4xl md:text-6xl font-light">Recent Work . . .</h2>

          <div className="grid gap-12">
            {["Project One", "Project Two", "Project Three"].map((project) => (
              <div key={project} className="group cursor-pointer">
                <div className="flex justify-between items-baseline border-b border-gray-200 py-8">
                  <h3 className="text-2xl md:text-4xl font-light group-hover:opacity-50 transition-opacity">
                    {project}
                  </h3>
                  <span className="text-sm text-gray-400 group-hover:opacity-50 transition-opacity">
                    View Project →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="min-h-screen px-6 py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-light">
              Freedom
              <br />
              to Create
            </h2>
            <p className="text-gray-600 max-w-md">
              I specialize in crafting meaningful digital experiences through
              thoughtful design and clean development.
            </p>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-light">Design Approach</h3>
              <p className="text-gray-600">
                Minimalist aesthetics combined with functional design principles
                to create impactful user experiences.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-light">Technologies</h3>
              <p className="text-gray-600">
                React · TypeScript · Figma · Tailwind CSS · Node.js
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
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

export default MinimalPortfolio;
