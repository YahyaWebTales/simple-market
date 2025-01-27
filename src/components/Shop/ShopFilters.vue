<script setup lang="ts">

import type { Category, FilterInterface, FilterUpdate } from '@/interfaces';

    defineProps<{filters: FilterInterface, nbrOfProducts: number}>()
    const emit = defineEmits<{
        (e: 'updateFilter', filterUpdate: FilterUpdate): void;
    }>()
</script>

<template>
    <div class="p-20 d-flex flex-column">
        <section class="mb-20">
             <h3 class="mb-10">Search by Price</h3>
          <div>
                <input :value="filters.search" @input="emit('updateFilter', { search: ($event.target as HTMLInputElement).value})" type="text" placeholder="Search">
          </div>
    
          <div class="mb-5" v-for="priceRange of ([[0,10000],[800,1000],[1000,1500],[1500,2000],[2000,10000]] as [number, number][])">
             <input :checked="filters.priceRange[0] === priceRange[0]" type="radio" @input="emit('updateFilter', { priceRange})" name="priceRange" :id="priceRange[0]+''"/>
               <label :for="priceRange[0]+''">{{
                 priceRange[0] === 0 ? 'All prices' : priceRange[0] === 2000 ? 'Over 2000€' : `Between ${priceRange[0]} and ${priceRange[1]}`
                    }}</label>
            </div>
         </section>
         <section class="mb-20 flex-fill">
            <h3 class="mb-10">Search by Category</h3>
            <p 
            :class="{ selected: filters.category === category}"
            class="category" v-for="category in (['all','desktop','gamer','streaming'] as Category[])"  @click="emit('updateFilter', {category})">{{ category }}</p>
         </section>
         <small>Result : <strong> {{ nbrOfProducts }} </strong></small>
         <button class="btn btn-danger" @click="emit('updateFilter', {})">Delete Filters</button>
    </div>
</template>

<style lang="scss" scoped>
   .category{
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
   }

   .selected{
        font-weight: bold;
   }
</style>