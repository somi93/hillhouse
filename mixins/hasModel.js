export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
        model: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value)
            },
            deep: true
        }
    }
}
