

import { writable } from 'svelte/store';

export const cart = writable([]);

// Functions to manage cart state
export const addToCart = (product, quantity = 1) => {
    cart.update((items) => {
        const existingItem = items.find((item) => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            items.push({ ...product, quantity });
        }
        return items;
    });
};

export const removeFromCart = (productId) => {
    cart.update((items) => items.filter((item) => item.id !== productId));
};

export const updateQuantity = (productId, quantity) => {
    cart.update((items) => {
        const item = items.find((item) => item.id === productId);
        if (item) {
            item.quantity = quantity;
        }
        return items;
    });
};
