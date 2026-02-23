import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import project1 from "@/assets/project-micro-1.jpg";
import project2 from "@/assets/project-micro-2.jpg";
import project3 from "@/assets/project-micro-3.jpg";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const projects = [
    {
      image: project1,
      title: "PHAGE THERAPY STUDY",
      location: "NATURE MICROBIOLOGY, 2024",
      category: "THERAPEUTICS",
      description: "Investigating bacteriophage efficacy against multidrug-resistant Pseudomonas aeruginosa clinical isolates in vitro and in vivo.",
      scope: "IN VIVO / IN VITRO",
      year: "2024"
    },
    {
      image: project2,
      title: "BIOFILM CHARACTERIZATION",
      location: "LANCET MICROBE, 2023",
      category: "PATHOGENESIS",
      description: "Fluorescence microscopy analysis of Staphylococcus aureus biofilm development on medical device surfaces.",
      scope: "CLINICAL ISOLATES",
      year: "2023"
    },
    {
      image: project3,
      title: "AMR SURVEILLANCE",
      location: "EMERG. INFECT. DIS., 2024",
      category: "EPIDEMIOLOGY",
      description: "Nationwide surveillance of antimicrobial resistance patterns in clinical Enterobacteriaceae isolates.",
      scope: "MULTI-CENTER",
      year: "2024"
    },
    {
      image: project1,
      title: "GUT MICROBIOME ATLAS",
      location: "CELL HOST & MICROBE, 2024",
      category: "MICROBIOME",
      description: "Comprehensive metagenomic profiling of human gut microbiota across diverse populations and dietary patterns.",
      scope: "COHORT STUDY",
      year: "2024"
    },
    {
      image: project2,
      title: "CRISPR DIAGNOSTICS",
      location: "NAT. BIOTECHNOLOGY, 2022",
      category: "DIAGNOSTICS",
      description: "Development of CRISPR-based rapid diagnostic platform for point-of-care bacterial identification.",
      scope: "PLATFORM DEV.",
      year: "2022"
    },
    {
      image: project3,
      title: "SOIL MICROBIOME",
      location: "ISME JOURNAL, 2023",
      category: "ENVIRONMENTAL",
      description: "Characterizing soil microbial communities and their role in carbon cycling under climate change scenarios.",
      scope: "FIELD STUDY",
      year: "2023"
    }
  ];

  const categories = ["ALL", "THERAPEUTICS", "PATHOGENESIS", "EPIDEMIOLOGY", "MICROBIOME", "DIAGNOSTICS", "ENVIRONMENTAL"];

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                OUR RESEARCH
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A curated selection of our published studies and ongoing research projects,
                each advancing our understanding of microbial life and human health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${activeCategory === category
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {category}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${activeCategory === category
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                    }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-minimal text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">
                        {project.location}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">SCOPE</p>
                        <p className="text-foreground">{project.scope}</p>
                      </div>
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">YEAR</p>
                        <p className="text-foreground">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Interested in
              <br />
              Collaboration?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss how we can advance microbiology research together
            </p>
            <a
              href="/contact"
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              GET IN TOUCH
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Work;
