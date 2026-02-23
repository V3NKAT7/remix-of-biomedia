import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
    const { items, removeFromCart, updateQuantity, clearCart, cartCount } = useCart();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            {/* Hero banner */}
            <section className="pt-28 pb-10 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-light text-foreground mb-2">
                                Your Cart
                            </h1>
                            <p className="text-muted-foreground text-sm">
                                {cartCount === 0
                                    ? "Your cart is empty"
                                    : `${cartCount} item${cartCount > 1 ? "s" : ""} in your cart`}
                            </p>
                        </div>
                        {items.length > 0 && (
                            <button
                                onClick={clearCart}
                                className="flex items-center gap-2 text-sm text-destructive hover:text-destructive/80 transition-colors px-4 py-2 rounded-lg border border-destructive/20 hover:bg-destructive/5"
                            >
                                <Trash2 size={14} />
                                Clear All
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Cart content */}
            <section className="flex-1 py-10 bg-muted/20">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        {items.length === 0 ? (
                            /* ---- Empty state ---- */
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center justify-center py-24 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                                    <ShoppingCart size={32} className="text-muted-foreground" />
                                </div>
                                <h2 className="text-xl font-semibold text-foreground mb-2">
                                    Your cart is empty
                                </h2>
                                <p className="text-muted-foreground text-sm mb-6 max-w-sm">
                                    Browse our products and add items to your cart to get started.
                                </p>
                                <button
                                    onClick={() => { navigate("/services"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    Browse Products
                                    <ArrowRight size={16} />
                                </button>
                            </motion.div>
                        ) : (
                            /* ---- Cart items ---- */
                            <div className="space-y-4">
                                <AnimatePresence mode="popLayout">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -40 }}
                                            transition={{ duration: 0.25 }}
                                            className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                {/* Product info */}
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="text-base font-semibold text-foreground mb-1 truncate">
                                                        {item.name}
                                                    </h3>
                                                    <div className="flex items-center gap-3 flex-wrap">
                                                        <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                                                            {item.category}
                                                        </span>
                                                        {item.size && (
                                                            <span className="inline-block rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-foreground">
                                                                {item.size}
                                                            </span>
                                                        )}
                                                        {item.code && (
                                                            <span className="text-xs text-muted-foreground font-mono">
                                                                Code: {item.code}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Quantity controls + remove */}
                                                <div className="flex items-center gap-3 shrink-0">
                                                    {/* Quantity */}
                                                    <div className="flex items-center border border-border rounded-full overflow-hidden">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="w-10 text-center text-sm font-semibold text-foreground tabular-nums">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                                            aria-label="Increase quantity"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>

                                                    {/* Remove */}
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                                                        aria-label="Remove from cart"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {/* Summary */}
                                <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Total items</p>
                                            <p className="text-2xl font-bold text-foreground">{cartCount}</p>
                                        </div>
                                        <button
                                            onClick={() => { navigate("/services"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                                        >
                                            Continue Shopping
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Cart;
