<script setup lang="ts">
import type { FilterInterface, FilterUpdate } from '@/interfaces';

    defineProps<{filters: FilterInterface}>()
    const emit = defineEmits<{
        (e: 'updateFilter', filterUpdate: FilterUpdate): void;
    }>()
</script>

<template>
    <h3>Search</h3>
    <div><input :value="filters.search" @input="emit('updateFilter', { search: ($event.target as HTMLInputElement).value})" type="text" placeholder="Search"></div>
    
</template>

<style lang="scss" scoped>
   
</style>