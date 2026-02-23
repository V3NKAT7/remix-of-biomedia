import { createContext, useContext, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
export interface CartItem {
    id: string;        // unique key: code+size (media) or name (instruments)
    name: string;
    category: string;
    code?: string;     // media product code
    size?: string;     // selected size label, e.g. "10 mL × 100 qty"
    quantity: number;  // number of packs
}

interface CartContextValue {
    items: CartItem[];
    addToCart: (product: Omit<CartItem, "quantity">, qty?: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    cartCount: number;
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */
const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within a CartProvider");
    return ctx;
};

/* ------------------------------------------------------------------ */
/*  Provider                                                           */
/* ------------------------------------------------------------------ */
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (product: Omit<CartItem, "quantity">, qty = 1) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === product.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === product.id ? { ...i, quantity: i.quantity + qty } : i
                );
            }
            return [...prev, { ...product, quantity: qty }];
        });
    };

    const removeFromCart = (id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setItems((prev) =>
            prev.map((i) => (i.id === id ? { ...i, quantity } : i))
        );
    };

    const clearCart = () => setItems([]);

    const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <CartContext.Provider
            value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, cartCount }}
        >
            {children}
        </CartContext.Provider>
    );
};
