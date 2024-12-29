<script setup lang="ts">
</script>

<template>
    <header class="px-20 d-flex flex-row align-items-center">
        <a href="#" class="d-flex flex-row align-items-center mr-20">
            <img src="../assets/logo-webtales.png">
            <span class="logo">WebTales</span>
        </a>
        <ul class="d-flex flex-row flex-fill">
            <li class="mr-10">
                <a href="#">Market</a>
            </li>
            <li>
                <a href="#">Admin</a>
            </li>
        </ul>
        <ul class="d-flex flex-row">
            <li class="mr-10">
                <a href="#">Subscription</a>
            </li>
            <li>
                <a href="#">Connection</a>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
    header {
            
            background-color: var(--primary-1);
        a{
            color: var(--text-primary-color);
            img{
                width:40px;
                margin-right:10px;
            }
            .logo {
                font-weight: 700;
                font-size: 20px;
            }

        }
        
    }

</style>