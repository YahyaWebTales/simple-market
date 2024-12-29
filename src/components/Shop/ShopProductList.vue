<script setup lang="ts">
    import ShopProduct from './ShopProduct.vue';
    import type { ProductInterface } from '@/interfaces';
    defineProps<{
        products: ProductInterface[];
    }>();

    const emit = defineEmits<{
        (e: 'add-product-to-cart', productId: number): void;
    }>();


</script>

<template>
    <div class="grid p-20">
       <ShopProduct @add-product-to-cart="emit('add-product-to-cart',$event)" v-for="product of products" :product="product" />
    </div>
</template>

<style lang="scss" scoped>


    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: 300px;
        gap: 30px;
    }
</style>