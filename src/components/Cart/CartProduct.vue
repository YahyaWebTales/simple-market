<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces';

    defineProps<{
            product: ProductCartInterface
        }>();

    const emit = defineEmits<{
        (e: 'removeProductFromCart', productId: number): void
    }>();

</script>

<template>
    <div class="mb-10 p-10 d-flex flex-row align-items-center product">
        <strong class=" mr-10">{{ product.title }}</strong>
        <span class="flex-fill">x {{ product.quantity }}</span>
        <span class="mr-10">{{ product.price }}</span>
        <button @click="emit('removeProductFromCart',product.id)" class="btn btn-danger">Remove</button>
    </div>
</template>

<style lang="scss" scoped>
    
    .product {
        border: var(--border);
        border-radius: var(--border-radius);
        background-color: var(--gray-1);
        
    }
</style>