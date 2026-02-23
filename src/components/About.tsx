import { Building2, Users, Award, Eye, Target, Heart, ShieldCheck } from "lucide-react";

const customers = [
  "Analys Lab", "Aizant", "Aspiro", "Bharat Biotech", "CiRO Pharma",
  "Caponex", "Extrovis Labs", "NATCO", "Neuland", "Optimus",
  "PopVax", "Revin Labs", "Sundhet", "Tentamus", "TherDose Pharma",
  "Total Solutions"
];

const About = () => {
  return (
    <section id="about" className="bg-background scroll-mt-20">
      {/* Section 1: Who Are We */}
      <div className="py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-primary mb-4">01</h2>
            <h3 className="text-4xl md:text-5xl font-light text-architectural text-foreground mb-16">
              Who Are We?
            </h3>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-foreground">About Us</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Biomedia Lifesciences, a leading manufacturer of high-quality microbiological
                  media solutions with a strong commitment to integrity, innovation, quality, and customer
                  satisfaction. We provide a comprehensive range of media products that cater to the diverse
                  needs of pharmaceutical industries, food industries, microbiology laboratories, research
                  institutions and other industries.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our state-of-the-art manufacturing facilities, stringent quality control measures and
                  expert technical support team ensure that our media products meet the highest standards
                  of performance, purity, and reliability.
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-primary mb-6">OUR APPROACH</h4>
                  <div className="space-y-5">
                    <div className="border-l-2 border-primary pl-6">
                      <h5 className="text-lg font-medium mb-1 text-foreground">Integrity & Innovation</h5>
                      <p className="text-sm text-muted-foreground">Committed to honest practices and continuous innovation in microbiological solutions</p>
                    </div>
                    <div className="border-l-2 border-primary pl-6">
                      <h5 className="text-lg font-medium mb-1 text-foreground">Quality & Reliability</h5>
                      <p className="text-sm text-muted-foreground">Stringent quality control with state-of-the-art manufacturing facilities</p>
                    </div>
                    <div className="border-l-2 border-primary pl-6">
                      <h5 className="text-lg font-medium mb-1 text-foreground">Customer Satisfaction</h5>
                      <p className="text-sm text-muted-foreground">Expert technical support and comprehensive product range for diverse industry needs</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Our Experience */}
      <div className="py-24 border-b border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-primary mb-4">02</h2>
            <h3 className="text-4xl md:text-5xl font-light text-architectural text-foreground mb-16">
              Our Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">100+ Professionals</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of over 100 skilled professionals brings decades of combined experience in
                  microbiology, quality assurance, manufacturing, and technical support — ensuring every
                  product meets the highest industry standards.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Quality Commitment</h4>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Customer satisfaction — understanding needs and meeting expectations
                  </p>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Compliance with regulatory requirements and industry standards
                  </p>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Continuous improvement of processes, products, and services
                  </p>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Employee empowerment with training and resources for quality ownership
                  </p>
                </div>
              </div>
            </div>

            {/* People Who Trust Us */}
            <div>
              <h4 className="text-minimal text-primary mb-8">PEOPLE WHO TRUST US</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {customers.map((customer) => (
                  <div
                    key={customer}
                    className="bg-background border border-border rounded-lg px-3 py-3 flex items-center justify-center text-center hover:border-primary/50 transition-colors"
                  >
                    <span className="text-xs font-medium text-muted-foreground">{customer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Our Motto */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-primary mb-4">03</h2>
            <h3 className="text-4xl md:text-5xl font-light text-architectural text-foreground mb-16">
              Our Motto
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Eye className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Vision</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To be a leading player in Cleanroom Accessories for Pharma, Bio-Pharma & Clinical Sector.
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Target className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Mission</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To provide high quality & affordable Consumables, Wearables & Accessories for Pharma & Healthcare globally.
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Heart className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Values</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our core values include Quality, Safety, Efficiency & Innovations.
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <ShieldCheck className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Quality</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The continual process of detecting and eliminating manufacturing errors, streamlining supply chains, improving customer experience, and ensuring employees are fully trained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
