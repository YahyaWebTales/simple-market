<script setup lang="ts">
    import type { FilterInterface, FilterUpdate, ProductInterface } from '@/interfaces';
    import ShopProductList from './ShopProductList.vue';
    import ShopFilters from './ShopFilters.vue';

    defineProps<{
        products: ProductInterface[],
        filters: FilterInterface
    }>();

    const emit = defineEmits<{
        (e: 'add-product-to-cart', productId: number): void;
        (e: 'update-filter', updateFilter: FilterUpdate): void;
    }>();

</script>

<template>
    <div class="d-flex flex-row">
        <ShopFilters :filters="filters" @update-filter="emit('update-filter',$event)" class="shop-filter"/>
        <ShopProductList @add-product-to-cart="emit('add-product-to-cart',$event)" :products="products"/>
    </div>
</template>

<style lang="scss" scoped>

    .shop-filter{
        flex: 0 0 200px;
    }
</style>