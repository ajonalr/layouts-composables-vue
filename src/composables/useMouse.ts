import { ref, onMounted, onUnmounted } from "vue"


export function useMouse() {

    const y = ref(0)
    const x = ref(0)

    function update(event: any) {
        y.value = event.pageY
        x.value = event.pageX
    }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    return {
        x, y
    }
}