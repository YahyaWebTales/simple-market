<script setup lang="ts">
  import TheHeader from "./components/Header.vue";
  import TheFooter from "./components/Footer.vue";
  import TheShop from "./components/Shop/Shop.vue";
  import TheCart from "./components/Cart/Cart.vue";
  import data from './data/product';
  import { computed, reactive } from 'vue';
  
  import type { ProductInterface , ProductCartInterface, FilterInterface, FilterUpdate } from "./interfaces";
import { DEFAULT_FILTERS } from "./data/filters";
  
  

  const state = reactive<{
    products: ProductInterface[],
    cart: ProductCartInterface[],
    filters: FilterInterface
  }>({
    products: data,
    cart: [],
    filters: { ...DEFAULT_FILTERS }
  })

  function addProdToCart(productId: number): void {
    const product = state.products.find((product) => product.id === productId);
    if(product) 
    {
      const productInCart = state.cart.find(product => product.id === productId)
      if(productInCart) {
          productInCart.quantity++;
      }else {
        state.cart.push({ ...product, quantity: 1 });
      }
    }
  };

  function removeProdFromCart(productId: number): void {
  const productFromCart = state.cart.find(product => product.id === productId);
  if(productFromCart){
    if(productFromCart.quantity === 1){
       state.cart = state.cart.filter(product => product.id !== productId)
      }
      else {
        productFromCart.quantity--;
    }
  }
};

function updateFilter(filterUpdate: FilterUpdate) {
  if(filterUpdate.search !== undefined){
    state.filters.search = filterUpdate.search;
  }else if(filterUpdate.priceRange){
    state.filters.priceRange = filterUpdate.priceRange;
  }else if(filterUpdate.category){
    state.filters.category = filterUpdate.category;
  }else{
    state.filters = DEFAULT_FILTERS;
  }
}

const cartEmpty = computed(() => state.cart.length === 0)

const filteredProducts = computed(() => {
  return state.products.filter((product) => {
    if(
      product.title.toLowerCase().startsWith(state.filters.search.toLowerCase()) &&
      product.price <= state.filters.priceRange[1] && product.price >= state.filters.priceRange[0] &&
      (product.category === state.filters.category  || state.filters.category === 'all')
    ) {
      return true;
    }
    else {
      return false;
    }
  })
})

</script>

<template >
  <div class="app-container" :class="{gridEmpty: cartEmpty}">
    <TheHeader class="header" />
    <TheCart v-if="!cartEmpty" :cart="state.cart" class="cart" @remove-product-from-cart="removeProdFromCart"/>
    <TheShop @update-filter="updateFilter" :products="filteredProducts" @add-product-to-cart="addProdToCart" class="shop" :filters="state.filters"/>
    <TheFooter class="footer"/>
  </div>
 
</template>

<style lang="scss">
@use "./assets/base.scss";
@use "./assets/debug.scss";


.app-container {
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas: 'header header' 'shop cart' 'footer footer';
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}

.gridEmpty{
  grid-template-areas: 'header' 'shop' 'footer';
  grid-template-columns: 100%;
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
