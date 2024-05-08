<template>
    <div class="container">
        <h4 class="mb-3">Thông tin người dùng</h4>
        <div class="row justify-content-center">
            <div style="height: 200px;" class="shadow mb-5 bg-body-tertiary rounded col-3 me-3 text-center">
                <div class="text-start pb-2 border-bottom mb-2 fw-medium">User Avatar</div>
                <img src="https://s.gr-assets.com/assets/nophoto/user/u_225x300-c928cbb998d4ac6dd1f0f66f31f74b81.png" class="rounded-circle mb-2" style="height: 100px; width: 100px;" alt="">
                <h5>Trần Trung Tính</h5>
            </div>
            <div class="col-8 shadow mb-5 bg-body-tertiary px-3 pb-3 rounded">
                <div class="text-start pb-2 border-bottom mb-2 fw-medium">User Detail</div>
                <div class="row">
                    <strong class="col-2">Địa chỉ:</strong>
                    <p class="col-7">Tân Hưng Đông, Cái Nước, Cà Mau</p>
                </div>
                <div class="row">
                    <strong class="col-2">Địa chỉ:</strong>
                    <p class="col-7">Tân Hưng Đông, Cái Nước, Cà Mau</p>
                </div>
                <div class="row">
                    <strong class="col-2">Địa chỉ:</strong>
                    <p class="col-7">Tân Hưng Đông, Cái Nước, Cà Mau</p>
                </div>
                <div class="row">
                    <strong class="col-2">Địa chỉ:</strong>
                    <p class="col-7">Tân Hưng Đông, Cái Nước, Cà Mau</p>
                </div>
                <div class="row justify-content-end me-5">
                    <button @click="goToEdit(userId)" style="width: 80px; font-size: 12px;" class="btn btn-sm btn-outline-primary"><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        userId: {type: String, default: ""}
    },
    methods: {
        goToEdit(userId){
            this.$router.push({name: "users.edit", params: {userId: userId}})
        }
    }
}
</script>