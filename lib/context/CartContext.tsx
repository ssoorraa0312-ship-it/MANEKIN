"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/lib/data';

export interface CartItem extends Product {
    quantity: number;
    size?: string;
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: Product, size?: string) => void;
    removeItem: (id: string, size?: string) => void;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addItem = (product: Product, size: string = 'M') => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === product.id && i.size === size);
            if (existing) {
                return prev.map((i) =>
                    i.id === product.id && i.size === size
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { ...product, quantity: 1, size }];
        });
        setIsCartOpen(true);
    };

    const removeItem = (id: string, size?: string) => {
        setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, isCartOpen, openCart, closeCart, total }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
