import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Let's Advance
                  <br />
                  Science Together
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">EMAIL</h3>
                    <a href="mailto:info@biomedia.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      info@biomedia.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">PHONE</h3>
                    <a href="tel:+1234567890" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      +1 (234) 567-8900
                    </a>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">LABORATORY</h3>
                    <address className="text-xl not-italic">
                      456 Research Drive
                      <br />
                      Cambridge, MA 02139
                    </address>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">FOLLOW US</h3>
                  <div className="space-y-4">
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      ResearchGate
                    </a>
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      LinkedIn
                    </a>
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      PubMed
                    </a>
                  </div>
                </div>

                <div className="pt-12 border-t border-border">
                  <p className="text-muted-foreground">
                    We welcome collaborations, grant partnerships, and inquiries from fellow
                    researchers. Whether you're seeking microbial analysis services or exploring
                    joint research opportunities, we'd love to hear from you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
