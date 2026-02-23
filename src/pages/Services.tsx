import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { FlaskConical, Disc3, Flame, Microscope, Package, ChevronDown, Plus, Minus, Check, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  liquidMedia, liquidMediaSizes,
  agarMedia, agarMediaSizes,
  moltenAgarMedia, moltenAgarMediaSizes,
  laboratoryInstruments, laboratoryConsumables,
  type MediaProduct, type InstrumentProduct, type SizeOption,
} from "@/data/productCatalog";

/* ------------------------------------------------------------------ */
/*  Category definitions  (Consumables = 04, Instruments = 05)         */
/* ------------------------------------------------------------------ */
interface CategoryDef {
  number: string;
  title: string;
  categoryLabel: string;
  description: string;
  icon: React.ElementType;
  type: "media" | "instrument";
  products: MediaProduct[] | InstrumentProduct[];
  sizes?: SizeOption[];
}

const categories: CategoryDef[] = [
  {
    number: "01",
    title: "LIQUID MEDIA",
    categoryLabel: "Liquid Media",
    description: "Ready-to-use liquid culture media for microbial growth, enrichment, and biochemical testing across clinical and research applications.",
    icon: FlaskConical,
    type: "media",
    products: liquidMedia,
    sizes: liquidMediaSizes,
  },
  {
    number: "02",
    title: "AGAR MEDIA",
    categoryLabel: "Agar Media",
    description: "Pre-poured and dehydrated agar plates for isolation, identification, and enumeration of microorganisms.",
    icon: Disc3,
    type: "media",
    products: agarMedia,
    sizes: agarMediaSizes,
  },
  {
    number: "03",
    title: "MOLTEN AGAR MEDIA",
    categoryLabel: "Molten Agar Media",
    description: "Temperature-controlled molten agar preparations for pour plate techniques and specialized microbiological assays.",
    icon: Flame,
    type: "media",
    products: moltenAgarMedia,
    sizes: moltenAgarMediaSizes,
  },
  {
    number: "04",
    title: "LABORATORY CONSUMABLES",
    categoryLabel: "Laboratory Consumables",
    description: "Essential lab supplies including petri dishes, swabs, loops, pipettes, and sterile containers for daily workflows.",
    icon: Package,
    type: "instrument",
    products: laboratoryConsumables,
  },
  {
    number: "05",
    title: "LABORATORY INSTRUMENTS",
    categoryLabel: "Laboratory Instruments",
    description: "Precision instruments for microbiology labs including incubators, autoclaves, microscopes, and colony counters.",
    icon: Microscope,
    type: "instrument",
    products: laboratoryInstruments,
  },
];

/* ------------------------------------------------------------------ */
/*  Add-to-cart modal (size selection + quantity)                       */
/* ------------------------------------------------------------------ */
interface ModalState {
  open: boolean;
  productName: string;
  productCode?: string;
  category: string;
  sizes?: SizeOption[];
}

const AddToCartModal = ({
  state,
  onClose,
}: {
  state: ModalState;
  onClose: () => void;
}) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
  const [qty, setQty] = useState(1);

  // Reset when modal opens with a new product
  useEffect(() => {
    if (state.open) {
      setSelectedSize(state.sizes?.[0] ?? null);
      setQty(1);
    }
  }, [state.open, state.productName]);

  const handleAdd = () => {
    const sizeLabel = selectedSize?.label;
    const cartId = state.productCode
      ? `${state.productCode}::${sizeLabel ?? "default"}`
      : state.productName;

    addToCart(
      {
        id: cartId,
        name: state.productName,
        category: state.category,
        code: state.productCode,
        size: sizeLabel,
      },
      qty
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {state.open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          {/* Centering wrapper — uses flexbox instead of translate so Framer Motion doesn't override centering */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="pointer-events-auto w-[90vw] max-w-md max-h-[85vh] overflow-y-auto bg-card rounded-2xl shadow-2xl border border-border"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 px-6 pt-6 pb-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-foreground leading-tight truncate">
                    {state.productName}
                  </h3>
                  {state.productCode && (
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      Code: {state.productCode}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors shrink-0"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="px-6 pb-6 space-y-5">
                {/* Size options (media products) */}
                {state.sizes && state.sizes.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Select Size
                    </p>
                    <div className="grid gap-2">
                      {state.sizes.map((s) => {
                        const active = selectedSize?.label === s.label;
                        return (
                          <button
                            key={s.label}
                            onClick={() => setSelectedSize(s)}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all duration-200 ${active
                              ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                              : "border-border hover:border-primary/30 hover:bg-muted/50"
                              }`}
                          >
                            <div>
                              <p className={`text-sm font-medium ${active ? "text-primary" : "text-foreground"}`}>
                                {s.label}
                              </p>
                              {s.note && (
                                <p className="text-xs text-muted-foreground mt-0.5">{s.note}</p>
                              )}
                            </div>
                            {active && <Check size={16} className="text-primary shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Quantity
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={qty}
                      onChange={(e) => {
                        const v = parseInt(e.target.value, 10);
                        if (!isNaN(v) && v > 0) setQty(v);
                      }}
                      className="w-20 h-10 text-center text-sm font-semibold rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 tabular-nums"
                    />
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Add button */}
                <button
                  onClick={handleAdd}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

/* ------------------------------------------------------------------ */
/*  Media product card                                                 */
/* ------------------------------------------------------------------ */
const MediaProductCard = ({
  product,
  sizes,
  categoryLabel,
  onAddClick,
}: {
  product: MediaProduct;
  sizes: SizeOption[];
  categoryLabel: string;
  onAddClick: (name: string, code: string, category: string, sizes: SizeOption[]) => void;
}) => {
  const { addToCart, items } = useCart();
  const [expanded, setExpanded] = useState(false);
  const inCart = items.some((i) => i.code === product.code);

  return (
    <div className={`rounded-xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-md ${inCart ? "border-primary/40 ring-1 ring-primary/20" : "border-border hover:border-primary/30"}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <FlaskConical size={16} className="text-primary shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
            <p className="text-xs text-muted-foreground font-mono">Code: {product.code}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 ml-2">
          {inCart && <Check size={14} className="text-primary" />}
          <button
            onClick={(e) => { e.stopPropagation(); onAddClick(product.name, product.code, categoryLabel, sizes); }}
            className="w-7 h-7 flex items-center justify-center rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Add to cart"
          >
            <Plus size={14} />
          </button>
          <ChevronDown
            size={16}
            className={`text-muted-foreground transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {expanded && (
        <div className="px-5 pb-4 pt-2 border-t border-border/50">
          <p className="text-xs text-muted-foreground mb-2">Click a size to add to cart</p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => {
              const cartId = `${product.code}::${s.label}`;
              return (
                <button
                  key={s.label}
                  onClick={() => addToCart({ id: cartId, name: product.name, category: categoryLabel, code: product.code, size: s.label }, 1)}
                  className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {s.label}
                  {s.note && <span className="ml-1 font-normal opacity-70">({s.note})</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Instrument product card                                            */
/* ------------------------------------------------------------------ */
const InstrumentProductCard = ({
  product,
  categoryLabel,
  onAddClick,
}: {
  product: InstrumentProduct;
  categoryLabel: string;
  onAddClick: (name: string, category: string) => void;
}) => {
  const { items } = useCart();
  const inCart = items.some((i) => i.id === product.name);

  return (
    <div className={`flex items-center gap-3 rounded-xl border bg-card px-5 py-4 transition-all duration-300 hover:shadow-md ${inCart ? "border-primary/40 ring-1 ring-primary/20" : "border-border hover:border-primary/30"}`}>
      <Package size={16} className="text-primary shrink-0" />
      <p className="text-sm font-medium text-foreground flex-1">{product.name}</p>
      <div className="flex items-center gap-2 shrink-0">
        {inCart && <Check size={14} className="text-primary" />}
        <button
          onClick={() => onAddClick(product.name, categoryLabel)}
          className="w-7 h-7 flex items-center justify-center rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label="Add to cart"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
const Services = () => {
  const [modal, setModal] = useState<ModalState>({
    open: false,
    productName: "",
    category: "",
  });

  const openMediaModal = (name: string, code: string, category: string, sizes: SizeOption[]) => {
    setModal({ open: true, productName: name, productCode: code, category, sizes });
  };

  const openInstrumentModal = (name: string, category: string) => {
    setModal({ open: true, productName: name, category });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero banner */}
      <section className="pt-28 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light text-architectural text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of microbiological media, laboratory instruments, and consumables
              for pharmaceutical, clinical, and research applications.
            </p>
          </div>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((cat, idx) => (
        <section
          key={cat.number}
          id={`category-${cat.number}`}
          className={`py-16 ${idx % 2 === 0 ? "bg-background" : "bg-muted/30"} border-b border-border scroll-mt-20`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Category header */}
              <div className="flex items-start gap-5 mb-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <cat.icon size={28} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-primary tracking-widest">{cat.number}</span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{cat.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xl">{cat.description}</p>
                </div>
              </div>

              {/* Product list */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cat.type === "media"
                  ? (cat.products as MediaProduct[]).map((product) => (
                    <MediaProductCard
                      key={product.code}
                      product={product}
                      sizes={cat.sizes!}
                      categoryLabel={cat.categoryLabel}
                      onAddClick={openMediaModal}
                    />
                  ))
                  : (cat.products as InstrumentProduct[]).map((product) => (
                    <InstrumentProductCard
                      key={product.name}
                      product={product}
                      categoryLabel={cat.categoryLabel}
                      onAddClick={openInstrumentModal}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Add-to-cart modal */}
      <AddToCartModal state={modal} onClose={() => setModal((s) => ({ ...s, open: false }))} />

      <Footer />
    </div>
  );
};

export default Services;
