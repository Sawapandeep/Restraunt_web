"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    updateQuantity: (name: string, newQty: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: Omit<CartItem, "quantity">) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.name === item.name);
            if (existing) {
                return prev.map((i) =>
                    i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (name: string, newQty: number) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.name === name ? { ...item, quantity: Math.max(1, newQty) } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
};

// "use client";

// import { createContext, ReactNode, useContext, useState } from "react";

// export interface CartItem {
//     name: string;
//     price: number;
//     image: string;
//     quantity: number;
// }

// interface CartContextType {
//     cart: CartItem[];
//     addToCart: (item: Omit<CartItem, "quantity">) => void;
//     clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//     const [cart, setCart] = useState<CartItem[]>([]);

//     const addToCart = (item: Omit<CartItem, "quantity">) => {
//         setCart((prev) => {
//             const existing = prev.find((i) => i.name === item.name);
//             if (existing) {
//                 return prev.map((i) =>
//                     i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
//                 );
//             }
//             return [...prev, { ...item, quantity: 1 }];
//         });
//     };

//     const clearCart = () => setCart([]);

//     return (
//         <CartContext.Provider value={{ cart, addToCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const ctx = useContext(CartContext);
//     if (!ctx) throw new Error("useCart must be used within CartProvider");
//     return ctx;
// };
