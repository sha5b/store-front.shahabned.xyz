<script>
    export let data;
    const products = data.products;

    import { addToCart, cart } from '$lib/stores/cartStore.js';
    import { cartVisible } from '$lib/stores/cartVisibilityStore.js';
    import CartDrawer from '$lib/components/CartDrawer.svelte';

    let cartItems = [];
    $: cartItems = $cart; // Reactively listen for cart changes

    function handleAddToCart(product) {
        addToCart(product); // This will update the cart store
        cartVisible.set(true); // Open the cart drawer
    }
</script>

<ul>
    {#each products as product}
        <li>
            <h3>{product.title}</h3>
            <button on:click={() => handleAddToCart(product)}>Add to Cart</button>
        </li>
    {:else}
        <p>No products returned</p>
    {/each}
</ul>

<CartDrawer />
