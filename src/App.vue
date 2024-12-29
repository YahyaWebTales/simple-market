<script setup lang="ts">
  import TheHeader from "./components/Header.vue";
  import TheFooter from "./components/Footer.vue";
  import TheShop from "./components/Shop/Shop.vue";
  import TheCart from "./components/Cart/Cart.vue";
  import data from './data/product';
  import { reactive } from 'vue';
  
  import type { ProductInterface } from "./interfaces/product.interface";
  
  

  const state = reactive<{
    products: ProductInterface[],
    cart: ProductInterface[],
  }>({
    products: data,
    cart: [],
  })

  function addProdToCart(productId: number): void {
    console.log("wtf");
    const product = state.products.find((product) => product.id === productId);
    if(product && !state.cart.find((product) => product.id === productId)) 
    {
      state.cart.push({ ...product });
      console.log("wtf");
    }
  };

  function removeProdFromCart(productId: number): void {
    state.cart = state.cart.filter((product) => product.id !== productId);
  }

</script>

<template>
  <div class="app-container">
    <TheHeader class="header" />
    <TheCart :cart="state.cart" class="cart" @remove-product-from-cart="removeProdFromCart"/>
    <TheShop :products="state.products" @add-product-to-cart="addProdToCart" class="shop"/>
    <TheFooter class="footer"/>
  </div>
 
</template>

<style lang="scss">
@use "./assets/base.scss";
@use "./assets/debug.scss";


.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header header' 'shop cart' 'footer footer';
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}

.header {
  grid-area: header;
}
.shop {
  grid-area: shop;
}
.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: azure;
}
.footer {
  grid-area: footer;
}

</style>
