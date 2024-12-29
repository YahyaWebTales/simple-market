<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/product.interface';


    defineProps<{
        product: ProductInterface;
    }>();

    const emit = defineEmits<{
        (e: 'add-product-to-cart', productId: number): void;
    }>();


</script>

<template>
    <div class="product d-flex flex-column">
        <div class="product-image" :style="{ backgroundImage: `url(${ product.image })`}"></div>
        <div class="p-10 d-flex flex-column">
        <h4>{{ product.title }}</h4>
        <p>{{ product.description }}</p>
            <div class="d-flex flex-row align-items-center">
                <strong class="flex-fill">{{ product.price }}</strong>
                <button @click="emit('add-product-to-cart',product.id)" class="btn btn-primary">Add</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .product {
        background-color: azure;
        border:var(--border);
        border-radius: var(--border-radius);
        &-image {
            border-top-right-radius: var(--border-radius);
            border-top-left-radius: var(--border-radius);
            height: 300px;
            background-size: cover;
            background-position: center;
        }
    }
</style>