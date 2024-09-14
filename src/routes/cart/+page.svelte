<script>
    import { cart } from '$lib/stores/cartStore.js';

    // Reactively listen to the cart store changes
    let cartItems = [];
    $: cartItems = $cart; // Automatically updates when cart store changes
</script>

<div>
    {#if cartItems.length > 0}
        {#each cartItems as item}
            <div>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price * item.quantity}</p>
            </div>
        {/each}
        <p>Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
    {:else}
        <p>Your cart is empty.</p>
    {/if}
</div>
