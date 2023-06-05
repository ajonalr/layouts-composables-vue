<template>
    <div class="q-pa-md q-gutter-sm">
        <q-bar dark class="bg-primary text-white">
            <q-btn dense flat round icon="lens" size="8.5px" color="red" />
            <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
            <q-btn dense flat round icon="lens" size="8.5px" color="green" />
            <div class="col text-center text-weight-bold">
                <slot name="nombre" /> Y 

                <slot name="aux1" />


            </div>
        </q-bar>
    </div>
</template>
  
<script lang="ts" setup>

</script>
  