import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen px-6 pt-32 md:pt-40 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-light leading-none">
              Jaakko
              <br />
              Lipponen
            </h1>
            <p className="text-gray-600 max-w-md">
              This page is dedicated to hosting some of my personal projects and
              other related things that i have worked on.
            </p>
            <button className="border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors">
              <Link to="https://github.com/JaakkoLipp/">Github Profile</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="min-h-screen px-6 py-32 max-w-6xl mx-auto">
        <div className="space-y-24">
          <h2 className="text-4xl md:text-6xl font-light">Recent Work . . .</h2>

          <div className="grid gap-12">
            {[
              "Distributed database demo for YouTube",
              "Full-stack distributed web application",
              "Keyboard Over-The-Air",
            ].map((project) => (
              <ProjectCard key={project} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="min-h-screen flex items-center px-6 py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-light">
              Software Engineering Approach
            </h2>
            <p className="text-gray-600 max-w-md">
              I specialize in crafting meaningful digital experiences through
              thoughtful and clean development.
            </p>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-light">Design Approach</h3>
              <p className="text-gray-600">
                Minimalist aesthetics combined with quick and functional design
                principles to create impactful user experiences.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-light">Technologies used</h3>
              <ul>
                <li className="text-gray-600">React</li>
                <li className="text-gray-600">Tailwind CSS</li>
                <li className="text-gray-600">Express.js</li>
                <li className="text-gray-600">Linux on Azure</li>
                <li className="text-gray-600">Firebase Auth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
