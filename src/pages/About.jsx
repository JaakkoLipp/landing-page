import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <section className="min-h-screen px-6 pt-32 md:pt-40 max-w-6xl mx-auto">
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
