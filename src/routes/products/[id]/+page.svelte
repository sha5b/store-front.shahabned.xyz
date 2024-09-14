<script>
    import { medusa } from '$lib/medusaClient';
    export let params;
    let product = {};
  
    // Fetch product details
    const fetchProduct = async () => {
      const response = await medusa.products.retrieve(params.id);
      product = response.product;
    };
  
    fetchProduct();
  </script>
  
  <h1>{product.title}</h1>
  <p>{product.description}</p>
  <p>Price: {product.variants?.[0]?.prices?.[0]?.amount / 100} {product.variants?.[0]?.prices?.[0]?.currency_code.toUpperCase()}</p>
  