//routes/products/+page.server.js

import { MedusaClient } from 'sveltekit-medusa-client';

export const load = async function () {
    const medusa = new MedusaClient('https://backend-production-eea0.up.railway.app');
    const products = await medusa.getProducts();
    return {
        products: products,
    };
}
