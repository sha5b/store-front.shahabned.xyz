<script>
    import { cart, removeFromCart, updateQuantity } from '$lib/stores/cartStore.js';


    // Subscribe to the cart store
    let cartItems = [];
    $: cartItems = $cart;
</script>

<div class="cart">
    {#if cartItems.length > 0}
        {#each cartItems as item}
            <div class="cart-item">
                <h3>{item.title}</h3>
                <p>Quantity: <input type="number" bind:value={item.quantity} on:change={() => updateQuantity(item.id, +item.quantity)} /></p>
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
