<template>
  
        <HeaderComponent>
            <!-- * el "#" y "v-slot" son lo mismo; ambos son para que vue sepa donde colocar las infomacion -->

            <template #nombre>
                ARIEL RAMIREZ LOPEZ
            </template>1

            <template v-slot:aux1>SEHALINE MENDOZA VILLATORO</template>

        </HeaderComponent>
        <NavbarComponent></NavbarComponent>
        <FooterComponent></FooterComponent>

</template>

<script setup lang="ts">

import FooterComponent from "../components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";

</script>

<style scoped></style>