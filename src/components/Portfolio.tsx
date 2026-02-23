import project1 from "@/assets/project-micro-1.jpg";
import project2 from "@/assets/project-micro-2.jpg";
import project3 from "@/assets/project-micro-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "PHAGE THERAPY STUDY",
      location: "PUBLISHED 2024",
      description: "Investigating bacteriophage efficacy against multidrug-resistant Pseudomonas aeruginosa clinical isolates"
    },
    {
      image: project2,
      title: "BIOFILM FORMATION",
      location: "PUBLISHED 2023",
      description: "Fluorescence microscopy analysis of Staphylococcus aureus biofilm development on medical device surfaces"
    },
    {
      image: project3,
      title: "AMR SURVEILLANCE",
      location: "ONGOING 2024",
      description: "Nationwide surveillance of antimicrobial resistance patterns in clinical Enterobacteriaceae isolates"
    }
  ];

  return (
    <section id="work" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-primary mb-4">SELECTED RESEARCH</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural text-foreground">
              Our Studies
            </h3>
          </div>
          
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-2xl font-light text-architectural text-foreground mb-2">
                      {project.title}
                    </h4>
                    <p className="text-minimal text-primary">
                      {project.location}
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
