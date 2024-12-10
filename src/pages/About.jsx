import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <section className=" min-h-screen px-6 pt-32 md:pt-40 max-w-6xl mx-auto">
        <div>
          <h1 className="text-6xl md:text-8xl font-light leading-none">
            About
          </h1>
          <p className="text-gray-600 max-w-md">
            I am a full-stack developer with a passion for building beautiful
            and functional web applications. I specialize in crafting meaningful
            digital experiences through thoughtful design and clean development.
          </p>
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

      <section className="min-h-screen px-6 pt-32 md:pt-40 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl md:text-6xl font-light">Skills</h2>
          <ul className="text-gray-600 max-w-md">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};
export default AboutPage;
