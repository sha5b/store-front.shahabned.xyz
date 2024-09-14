<!-- routes/products/+page.svelte -->


<script>
    
    export let data
    const products = data.products  
 </script>
 
 <ul>
 {#each products as product}
    <li>
       Product id: {product.id}<br>
       Product handle: {product.handle}<br>
       {product.title}
    </li>
 {:else}
    <p>No products returned</p>
 {/each}
</ul>