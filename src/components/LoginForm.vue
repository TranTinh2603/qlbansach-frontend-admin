<template>
    <div class="row bg-white d-flex justify-content-center">
        <form class="col-4 shadow p-3 mb-5 bg-body-tertiary rounded" @submit.prevent="handleSubmit">
            <h4 class="text-center">Đăng nhập</h4>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="text" class="form-control rounded-0" v-model="data.MSNV" placeholder="Enter email" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control rounded-0" v-model="data.Password" placeholder="Enter password"
                    required>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <button class="btn btn-primary" type="submit">Đăng nhập</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: {
                MSNV: '',
                Password: '',
            },
        };
    },
    methods: {
        handleSubmit() {
            this.$emit('login', this.data);
        }
    },
};
</script>