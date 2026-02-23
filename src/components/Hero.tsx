import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import biomediaIcon from "@/assets/biomedia-logo-icon.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#ede0d4" }}
    >
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Icon + BioMedia text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <img
            src={biomediaIcon}
            alt="BioMedia icon"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
          />
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
            style={{ color: "#f99f17" }}
          >
            BioMedia
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl font-light tracking-wide"
          style={{ color: "#415d43" }}
        >
          Leading towards future Microbiology
        </motion.p>

        {/* Products link */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => {
            navigate("/services");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mt-2 text-sm md:text-base font-medium tracking-widest uppercase transition-colors duration-300 hover:opacity-80 cursor-pointer bg-transparent border-none"
          style={{ color: "#f99f17" }}
        >
          Products
        </motion.button>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 origin-top"
      >
        <div className="w-px h-16" style={{ backgroundColor: "#415d43", opacity: 0.4 }} />
      </motion.div>
    </section>
  );
};

export default Hero;
