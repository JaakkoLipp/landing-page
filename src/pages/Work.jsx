import Layout from "../components/Layout";

import ProjectCard from "../components/ProjectCard";

const Work = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Work;
