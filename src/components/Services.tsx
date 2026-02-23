import { useState } from "react";
import { FlaskConical, Disc3, Flame, Microscope, Package } from "lucide-react";
import ProductDialog from "./ProductDialog";

const Services = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const products = [
    { number: "01", title: "LIQUID MEDIA", description: "Ready-to-use liquid culture media for microbial growth, enrichment, and biochemical testing across clinical and research applications.", icon: FlaskConical },
    { number: "02", title: "AGAR MEDIA", description: "Pre-poured and dehydrated agar plates for isolation, identification, and enumeration of microorganisms.", icon: Disc3 },
    { number: "03", title: "MOLTEN AGAR MEDIA", description: "Temperature-controlled molten agar preparations for pour plate techniques and specialized microbiological assays.", icon: Flame },
    { number: "04", title: "LABORATORY INSTRUMENTS", description: "Precision instruments for microbiology labs including incubators, autoclaves, microscopes, and colony counters.", icon: Microscope },
    { number: "05", title: "LABORATORY CONSUMABLES", description: "Essential lab supplies including petri dishes, swabs, loops, pipettes, and sterile containers for daily workflows.", icon: Package },
  ];

  return (
    <section id="services" className="py-32 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural text-foreground">
              Our Products
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {products.slice(0, 3).map((product, index) => (
              <div
                key={index}
                onClick={() => setOpenCategory(index)}
                className="group rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-500 text-center cursor-pointer"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <product.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-minimal text-primary font-semibold">{product.number}</span>
                <h4 className="mt-3 text-xl font-medium text-architectural text-foreground group-hover:text-primary transition-colors duration-500">
                  {product.title}
                </h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl lg:max-w-[calc(66.666%+1rem)] mx-auto">
            {products.slice(3).map((product, index) => (
              <div
                key={index + 3}
                onClick={() => setOpenCategory(index + 3)}
                className="group rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-500 text-center cursor-pointer"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <product.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-minimal text-primary font-semibold">{product.number}</span>
                <h4 className="mt-3 text-xl font-medium text-architectural text-foreground group-hover:text-primary transition-colors duration-500">
                  {product.title}
                </h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {openCategory !== null && (
        <ProductDialog
          open={true}
          onOpenChange={(val) => { if (!val) setOpenCategory(null); }}
          categoryIndex={openCategory}
          categoryTitle={products[openCategory].title}
        />
      )}
    </section>
  );
};

export default Services;
