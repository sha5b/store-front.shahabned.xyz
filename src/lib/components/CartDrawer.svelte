<!-- src/components/CartDrawer.svelte -->
<script>
    import { cart, removeFromCart, updateQuantity } from '$lib/stores/cartStore.js';
    import { cartVisible } from '$lib/stores/cartVisibilityStore.js';

    let cartItems = [];
    $: cartItems = $cart;

    function closeCart() {
        cartVisible.set(false);
    }
</script>

<div class="cart-drawer { $cartVisible ? 'open' : '' }">
    <button on:click={closeCart}>Close</button>
    {#if cartItems.length > 0}
        {#each cartItems as item}
            <div class="cart-item">
                <h3>{item.title}</h3>
                <p>Quantity: 
                    <input type="number" bind:value={item.quantity} on:change={() => updateQuantity(item.id, +item.quantity)} />
                </p>
                <p>Price: {item.price * item.quantity}</p>
                <button on:click={() => removeFromCart(item.id)}>Remove</button>
            </div>
        {/each}
        <p>Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        <button>Proceed to Checkout</button>
    {:else}
        <p>Your cart is empty.</p>
    {/if}
</div>

<style>
    .cart-drawer {
        position: fixed;
        right: 0;
        top: 0;
        height: 100%;
        width: 300px;
        background-color: white;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    }
    .cart-drawer.open {
        transform: translateX(0);
    }
</style>
