const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-primary mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural text-foreground mb-12">
                Let's Advance
                <br />
                Science Together
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-primary mb-2">EMAIL</h4>
                  <a href="mailto:biomedia.suraj@gmail.com" className="text-xl text-foreground hover:text-primary transition-colors duration-300">
                    biomedia.suraj@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-primary mb-2">EMAIL</h4>
                  <a href="mailto:biomedia.sales02@gmail.com" className="text-xl text-foreground hover:text-primary transition-colors duration-300">
                    biomedia.sales02@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-primary mb-2">PHONE</h4>
                  <a href="tel:+910402999202" className="text-xl text-foreground hover:text-primary transition-colors duration-300">
                    +91 040 - 2999 2022
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-primary mb-2">ADDRESS</h4>
                  <address className="text-xl not-italic text-foreground leading-relaxed">
                    Plot No.125, Kakateeya Nagar,
                    <br />
                    Opp. Tech Mahindra University,
                    <br />
                    Bahadurpally, Near Gandimaisamma,
                    <br />
                    Hyderabad - 500043
                  </address>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-primary mb-6">FOLLOW US</h4>
                <div className="space-y-4">
                  <a href="#" className="block text-xl text-foreground hover:text-primary transition-colors duration-300">
                    ResearchGate
                  </a>
                  <a href="#" className="block text-xl text-foreground hover:text-primary transition-colors duration-300">
                    LinkedIn
                  </a>
                  <a href="#" className="block text-xl text-foreground hover:text-primary transition-colors duration-300">
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

                {/* Google Map — Tech Mahindra → BioMedia office */}
                <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-sm">
                  <iframe
                    title="BioMedia Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d3803.649572125954!2d78.42872827516914!3d17.571863083347086!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bcb8f03dccad103%3A0x8636aeb26b622a5a!2sTech%20Mahindra%20Limited%2C%20Survey%20No.%2062%2C%20TMTC%20SEZ%2C%201%20A%2C%20Qutubullapur%20Mandal%2C%20Bahadurpally%2C%20Hyderabad%2C%20Telangana%20500043!3m2!1d17.5720021!2d78.43227949999999!4m5!1s0x8ee01d988061275d%3A0xa9bf46b7a867a97c!2sGlobal%20Services%2C%20Street%20No.%202%2C%20PLOT%20NO.125%2C%20H.NO.%204-60%2F3%2F6%2C%20Opp%3A%20Tech%20Mahindra%20University%2C%20Bahadurpally%2C%20Hyderabad%2C%20Telangana%20500043!3m2!1d17.5718958!2d78.4303308!5e0!3m2!1sen!2sin!4v1771679441769!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
