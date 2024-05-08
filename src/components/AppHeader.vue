<template>
    <!-- <nav style="background-color: #f4f1ea;" class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div>
            <h3 style="font-size: 16px;" class="m-0">Book</h3>
            <p style="font-size: 14px;" class="m-0">Social Network</p>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="ms-5 collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'products' }" class="nav-link" exact>Book</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'customers' }" class="nav-link" exact>User</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'orders' }" class="nav-link" exact>Order</router-link>
            </li>
          </ul>
        </div>
        <div><button @click="handleLogout()" class="btn btn-outline-primary"><i class="fa-solid fa-right-from-bracket"></i></button></div>
      </div>
    </nav> -->
    <header>
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
          <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
              <router-link to="/home"
                :class="'list-group-item list-group-item-action py-2 ripple' + (active === 'home' ? ' active': '')"
              >
                <span><i class="fa-solid fa-chart-simple me-2"></i> Thống kê</span>
              </router-link>
              <router-link to="/users" :class="'list-group-item list-group-item-action py-2 ripple' + (active === 'users' ? ' active' : '')">
                <span><i class="fa-solid fa-user me-2"></i> Người dùng</span>
              </router-link>
              <router-link to="/books" :class="'list-group-item list-group-item-action py-2 ripple' + (active === 'books' ? ' active' : '')"
                ><span> <i class="fa-solid fa-book-open me-2"></i>Sách</span></router-link
              >
              <router-link to="/authors" :class="'list-group-item list-group-item-action py-2 ripple' + (active === 'authors' ? ' active' : '')"
                ><span><i class="fa-solid fa-user-pen me-2"></i>Tác giả</span></router-link
              >
              <router-link to="/orders" :class="'list-group-item list-group-item-action py-2 ripple' + (active === 'orders' ? ' active' : '')">
              <span><i class="fa-solid fa-cart-shopping me-2"></i>Đơn hàng</span>
              </router-link>
              <router-link to="/" class="list-group-item list-group-item-action py-2 ripple"
                ><span><i class="fa-solid fa-address-card me-2"></i> Bài viết</span></router-link
              >
              <router-link to="/" class="list-group-item list-group-item-action py-2 ripple"
                ><span><i class="fa-solid fa-pen me-2"></i> Đánh giá</span></router-link
              >
              <router-link to="/" class="list-group-item list-group-item-action py-2 ripple"
                ><span><i class="fa-solid fa-user-group me-2"></i> Nhóm</span></router-link
              >
              <router-link to="/" class="list-group-item list-group-item-action py-2 ripple"
                ><span><i class="fa-solid fa-quote-right me-2"></i>Trích dẫn</span></router-link
              >
            </div>
          </div>
        </nav>
        <nav  id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div style="background-color: #f4f1ea;" class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-collapse-init
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <a class="navbar-brand" href="#">
              <div>
                  <h3 style="font-size: 16px;" class="m-0">Book</h3>
                  <p style="font-size: 14px;" class="m-0">Social Network</p>
              </div>
            </a>
            <ul class="navbar-nav ms-auto d-flex flex-row">
              <li class="nav-item dropdown">
                <a
                  data-mdb-dropdown-init class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://s.gr-assets.com/assets/nophoto/user/u_225x300-c928cbb998d4ac6dd1f0f66f31f74b81.png"
                    class="rounded-circle"
                    height="22"
                    alt="Avatar"
                    loading="lazy"
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Settings</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
</template>
<script>
import AuthService from '../services/AuthService';
export default {
  data(){
    return {
      active: '',
    }
  },
  watch:{
    '$route': 'checkRoute'
  },
  methods:{
    handleLogout(){
      AuthService.clearAuthentication();
      alert("Đăng xuất thành công");
      this.$router.push("/");
    },
    checkRoute(){
      if(this.$route.path.includes('home')){
        this.active = 'home';
      } else if(this.$route.path.includes('users')){
        this.active = 'users';
      } else if(this.$route.path.includes('books')){
        this.active = 'books';
      } else if(this.$route.path.includes('authors')){
        this.active = 'authors';
      } else if(this.$route.path.includes('orders')){
        this.active = 'orders'
      }
    }
  },
  mounted(){
    this.checkRoute()
  }
}
</script>
<style scoped>
/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}
.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
</style>