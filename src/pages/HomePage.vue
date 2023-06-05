<template>
    <q-layout view="hHh lpR fFf">
        <MainLayout></MainLayout>

        POSICION DEL MOUSE ES: {{ x }}x / {{ y }}y

    </q-layout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue'
import { useMouse } from '../composables/useMouse'

const {x,y} = useMouse();

</script>

<style scoped></style>