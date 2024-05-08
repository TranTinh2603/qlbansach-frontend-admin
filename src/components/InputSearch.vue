<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
                if (this.modelValue.trim() !== "") {
                    this.$emit("submit");
                }
            },
        },
};
</script>
<template>
    <div class="d-flex justify-content-center">
        <div class="d-flex w-50">
            <input type="text" class="form-control form-control-sm rounded-0" placeholder="Nhập thông tin cần tìm"
                :value="modelValue" @input="updateModelValue" @keyup.enter="submit" />
            <button class="btn btn-sm btn-outline-primary rounded-start-0 rounded-2" type="button" @click="submit">
                <i class="fas fa-search"></i>
            </button>
        </div>  
    </div>
</template>