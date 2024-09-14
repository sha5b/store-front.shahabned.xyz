import { writable } from 'svelte/store';

// Create the cart store
export const cart = writable([]);

// Function to add a product to the cart
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

// Function to remove a product from the cart
export const removeFromCart = (productId) => {
    cart.update((items) => items.filter((item) => item.id !== productId));
};

// Function to update the quantity of a product in the cart
export const updateQuantity = (productId, quantity) => {
    cart.update((items) => {
        const item = items.find((item) => item.id === productId);
        if (item) {
            item.quantity = quantity;
        }
        return items;
    });
};
