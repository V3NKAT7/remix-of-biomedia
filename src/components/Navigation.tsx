import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import biomediaIcon from "@/assets/biomedia-logo-icon.png";
import { useCart } from "@/contexts/CartContext";
import { Search, Menu, X, ShoppingCart } from "lucide-react";
import {
  liquidMedia,
  agarMedia,
  moltenAgarMedia,
  laboratoryInstruments,
  laboratoryConsumables,
} from "@/data/productCatalog";

/* ------------------------------------------------------------------ */
/*  Flatten every product into a single searchable list with category  */
/* ------------------------------------------------------------------ */
interface SearchableProduct {
  name: string;
  code?: string;
  category: string;
}

const allProducts: SearchableProduct[] = [
  ...liquidMedia.map((p) => ({ ...p, category: "Liquid Media" })),
  ...agarMedia.map((p) => ({ ...p, category: "Agar Media" })),
  ...moltenAgarMedia.map((p) => ({ ...p, category: "Molten Agar Media" })),
  ...laboratoryInstruments.map((p) => ({
    name: p.name,
    category: "Laboratory Instruments",
  })),
  ...laboratoryConsumables.map((p) => ({
    name: p.name,
    category: "Laboratory Consumables",
  })),
];

const categories = [
  "Liquid Media",
  "Agar Media",
  "Molten Agar Media",
  "Laboratory Instruments",
  "Laboratory Consumables",
];

/* ------------------------------------------------------------------ */
/*  Nav link type                                                      */
/* ------------------------------------------------------------------ */
interface NavLink {
  label: string;
  to?: string;
  hash?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  /* ---- nav links ---- */
  const links: NavLink[] = [
    { label: "HOME", to: "/" },
    { label: "PRODUCTS", to: "/services" },
    { label: "ABOUT US", to: "/about" },
    { label: "GET IN TOUCH", hash: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink
  ) => {
    e.preventDefault();
    setIsSidebarOpen(false);

    if (link.to) {
      navigate(link.to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (link.hash) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(link.hash!);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(link.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleGetInTouch = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector("#contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ---- search helpers ---- */
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return allProducts;
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.code && p.code.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const groupedProducts = useMemo(() => {
    const groups: Record<string, SearchableProduct[]> = {};
    for (const cat of categories) groups[cat] = [];
    for (const p of filteredProducts) {
      if (groups[p.category]) groups[p.category].push(p);
    }
    return groups;
  }, [filteredProducts]);

  /* close search on outside click / Escape */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* auto-focus input when search opens */
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  /* lock body scroll when sidebar is open */
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const handleProductClick = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---- render ---- */
  return (
    <>
      {/* ===== TOP BAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-4">

          {/* Left: Burger + Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 text-foreground font-semibold select-none"
            >
              <img
                src={biomediaIcon}
                alt="BioMedia logo"
                className="w-8 h-8 object-contain"
              />
              <span className="hidden sm:inline text-sm tracking-wide">BIOMEDIA</span>
            </a>
          </div>

          {/* Center: Search bar */}
          <div ref={searchRef} className="relative flex-1 max-w-xl mx-auto">
            <div
              className={`
                flex items-center border rounded-full transition-all duration-300
                ${isSearchOpen
                  ? "border-primary/50 bg-background shadow-lg ring-2 ring-primary/20"
                  : "border-border bg-muted/50 hover:border-primary/30"
                }
              `}
            >
              <Search className="w-4 h-4 ml-4 text-muted-foreground flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                className="w-full bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Search dropdown */}
            <div
              className={`
                absolute left-0 right-0 top-full mt-2 bg-background border border-border rounded-2xl shadow-2xl
                transition-all duration-300 origin-top overflow-hidden
                ${isSearchOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
                }
              `}
              style={{ maxHeight: isSearchOpen ? "70vh" : "0" }}
            >
              <div className="overflow-y-auto max-h-[65vh] p-4">
                {filteredProducts.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8 text-sm">
                    No products found for "{searchQuery}"
                  </p>
                ) : (
                  categories.map((cat) => {
                    const items = groupedProducts[cat];
                    if (!items || items.length === 0) return null;
                    return (
                      <div key={cat} className="mb-4 last:mb-0">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 px-1">
                          {cat}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                          {items.map((product, idx) => (
                            <button
                              key={`${cat}-${idx}`}
                              onClick={handleProductClick}
                              className="flex items-center gap-2 text-left px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-primary/10 hover:text-foreground transition-colors duration-150"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                              <span className="truncate">{product.name}</span>
                              {product.code && (
                                <span className="ml-auto text-xs text-muted-foreground font-mono flex-shrink-0">
                                  {product.code}
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Right: Cart icon + Get in Touch button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => { navigate("/cart"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="relative flex items-center justify-center w-9 h-9 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold leading-none">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>
            <button
              onClick={handleGetInTouch}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              Get in Touch
            </button>
          </div>

        </div>
      </nav>

      {/* ===== SIDEBAR OVERLAY + PANEL (AnimatePresence) ===== */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              key="sidebar-panel"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed top-0 left-0 z-[70] h-full w-72 bg-background border-r border-border shadow-2xl"
            >
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); navigate("/"); setIsSidebarOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="flex items-center gap-2 text-minimal text-foreground font-semibold"
                >
                  <img
                    src={biomediaIcon}
                    alt="BioMedia logo"
                    className="w-8 h-8 object-contain"
                  />
                  BIOMEDIA
                </a>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-md text-foreground hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="px-4 py-6 space-y-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.to || link.hash || "#"}
                    onClick={(e) => handleNavClick(e, link)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                      transition-colors duration-200
                      ${(link.to && location.pathname === link.to)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                      }
                    `}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
