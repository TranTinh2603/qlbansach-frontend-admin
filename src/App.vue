<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AuthService from '../src/services/AuthService';
export default {
  components: {
    AppHeader,
    AppFooter
  },
   data() {
      return {
        isAuthenticated: AuthService.isAuthenticated,
      };
    },
    // watch: {
    //   '$route': 'checkAuthentication',
    // },
    methods: {
      checkAuthentication() {
        AuthService.checkAuthentication();
        this.isAuthenticated = AuthService.isAuthenticated;

        if (this.$route.path !== '/') {
        AuthService.checkAuthentication();
        this.isAuthenticated = AuthService.isAuthenticated;

        if (!this.isAuthenticated) {
          alert("Bạn không có quyền truy cập!");
          this.$router.push({ path: '/' });
        }
      }
      },
    },
    create() {
      // this.checkAuthentication();
    }
};
</script>
<template>
  <div id="app">
    <AppHeader />
    <main style="margin-top: 58px;">
      <div class="container pt-4">
        <router-view />
      </div>
    </main>
    <!-- <AppFooter /> -->
  </div>
</template>
<style>
@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}
</style>