import { Phone, MapPin } from "lucide-react";
import biomediaIcon from "@/assets/biomedia-logo-icon.png";

const Footer = () => {
    return (
        <footer className="bg-foreground text-background border-t border-border">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Brand */}
                        <div>
                            <a href="/" className="flex items-center gap-2 mb-4">
                                <img src={biomediaIcon} alt="BioMedia logo" className="w-8 h-8 object-contain" />
                                <span className="text-lg font-semibold tracking-wide">BIOMEDIA</span>
                            </a>
                            <p className="text-sm text-background/60 leading-relaxed">
                                Leading manufacturer of high-quality microbiological media solutions for pharmaceutical, clinical, and research applications.
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-background/80">Contact Us</h4>
                            <div className="space-y-3">
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-start gap-3 text-sm text-background/70 hover:text-background transition-colors"
                                >
                                    <Phone size={16} className="mt-0.5 shrink-0" />
                                    <span>+91 98765 43210</span>
                                </a>
                                <div className="flex items-start gap-3 text-sm text-background/70">
                                    <MapPin size={16} className="mt-0.5 shrink-0" />
                                    <span>
                                        Biomedia Lifesciences Pvt. Ltd.,<br />
                                        Hyderabad, Telangana, India
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-background/80">Quick Links</h4>
                            <nav className="space-y-2">
                                <a href="/" className="block text-sm text-background/70 hover:text-background transition-colors">Home</a>
                                <a href="/services" className="block text-sm text-background/70 hover:text-background transition-colors">Products</a>
                                <a href="/about" className="block text-sm text-background/70 hover:text-background transition-colors">About Us</a>
                            </nav>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-10 pt-6 border-t border-background/10 text-center">
                        <p className="text-xs text-background/50">
                            © 2026 Biomedia Lifesciences Pvt. Ltd. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
