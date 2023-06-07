<template>
  <q-page padding>
    Hola desde Post

    <q-img
      v-lazy="{ src: lazyOptions.src, lifecycle: lazyOptions.lifecycle}"
    />

  </q-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';


const lazyOptions = reactive({
      src: 'https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs',
      lifecycle: {
        loading: (el: any) => {
          console.log('image loading', el)
        },
        error: (el: any) => {
          console.log('image error', el)
        },
        loaded: (el: any) => {
          console.log('image loaded', el)
        }
      }
    })

</script>
