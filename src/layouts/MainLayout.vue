<template>
  
        <HeaderComponent>
            <!-- * el "#" y "v-slot" son lo mismo; ambos son para que vue sepa donde colocar las infomacion -->

            <template #nombre>
                ARIEL RAMIREZ LOPEZ
            </template>

            <template v-slot:aux1>SEHALINE MENDOZA VILLATORO</template>

        </HeaderComponent>
        <NavbarComponent></NavbarComponent>
        <FooterComponent></FooterComponent>

</template>

<script setup lang="ts">

import NavbarComponent from "../components/NavbarComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

</script>

<style scoped></style>