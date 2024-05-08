<template>
    <div>
        <LoginForm @login="login" />
    </div>
</template>

<script>
import LoginService from '../services/login.service';
import AuthService from '../services/AuthService.js';
import LoginForm from '@/components/LoginForm.vue';

export default {
    components: {
        LoginForm,
    },

    methods: {

        async login(data) {
            try {
                    const token = await LoginService.findOne(data);
                    console.log(token);
                    if (token !== '') {
                        alert('Login successful');
                        AuthService.setAuthentication(true, { MSNV: data.MSNV });
                        this.$router.push({ path: '/home' });
                    }
                }
             catch (error) {
                if (error.response && error.response.status === 401 || error.response.status === 404) {
                    alert('Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.');
                } else {
                    this.handleError(error);
                }
            }
        },
        handleError(error) {
            console.error('Server error:', error);
        },
    },
};
</script>
