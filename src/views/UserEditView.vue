<template>
    <div class="container">
        <h4 class="mb-3">Chỉnh sửa người dùng</h4>
        <div class="row">
            <div class="col-xl-4">
                <!-- Profile picture card-->
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Profile Picture</div>
                    <div class="card-body text-center">
                        <img class="img-account-profile rounded-circle mb-2" style="height: 100px; width: 100px;" :src="user.image" alt="">
                        <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                        <input class="form-control form-control-sm" type="file" @change="handleFileUpload">
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <!-- Account details card-->
                <div class="card mb-4">
                    <div class="card-header">Account Details</div>
                    <div class="card-body">
                        <form @submit.prevent="updateUser()">
                            <!-- Form Row-->
                            <div class="row gx-3 mb-3">
                                <!-- Form Group (first name)-->
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputFirstName">First name</label>
                                    <input class="form-control form-control-sm" id="inputFirstName" type="text" placeholder="Enter your first name" v-model="user.firstName">
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLastName">Last name</label>
                                    <input class="form-control form-control-sm" id="inputLastName" type="text" placeholder="Enter your last name" v-model="user.lastName">
                                </div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="password">Password</label>
                                    <input class="form-control form-control-sm" id="password" type="text"  v-model="user.password">
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="createdAt">CreatedAt</label>
                                    <input class="form-control form-control-sm" id="createdAt" type="text" placeholder="Enter your last name" v-model="user.createdAt">
                                </div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputGender">Giới tính</label>
                                    <select id="inputGender" class="form-select form-select-sm" v-model="user.gender">
                                        <option value="Male">Nam</option>
                                        <option value="Female">Nữ</option>
                                        <option value="Other">Khác</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                    <input class="form-control form-control-sm" id="inputEmailAddress" type="email" placeholder="Enter your email address" v-model="user.email">
                                    
                                </div>
                            </div>
                            <!-- Form Group (email address)-->
                            <div class="mb-3">
                                <label class="small mb-1" for="inputLocation">Địa chỉ</label>
                                        <input class="form-control form-control-sm" id="inputLocation" type="text" placeholder="Enter your location" v-model="user.address">
                            </div>
                            <!-- Form Row-->
                            <div class="row gx-3 mb-3">
                                <!-- Form Group (phone number)-->
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputPhone">Số điện thoại</label>
                                    <input class="form-control form-control-sm" id="inputPhone" type="tel" placeholder="Enter your phone number" v-model="user.phone">
                                </div>
                                <!-- Form Group (birthday)-->
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputBirthday">Birthday</label>
                                    <input class="form-control form-control-sm" id="inputBirthday" type="date" name="birthday" placeholder="Enter your birthday" v-model="user.birthday">
                                </div>
                            </div>
                            <!-- Save changes button-->
                            <button class="btn btn-sm btn-primary" type="submit">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import UserService from '../services/user.service';
export default {
    props: {
        userId: {type: String, default: ""}
    },
    data(){
        return {
            user: {},
            image: null,
            imageUrl: ''
        }
    },
    methods: {
        async getUser(){
            this.user = await UserService.get(this.userId)

        }, 
        handleFileUpload(event) {
            this.image = event.target.files[0];
            const formData = new FormData();
            formData.append('image', this.image);

            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            axios.post('http://localhost:3000/api/users/upload', formData, config)
                .then(response => {
                    this.user.image = response.data.imageUrl;
                })
                .catch(error => {
                    console.error('Error uploading image: ', error);
                });
        },
        async updateUser() {
            const data = {
                userId: this.user.userId,
                password: this.user.password,
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                createdAt: this.user.createdAt,
                gender: this.user.gender,
                image: this.user.image,
                address: this.user.address,
                birthday: this.user.birthday,
                email: this.user.email,
                friends: this.user.friends,
                phone: this.user.phone
            };
            const updateUser = await UserService.updateUser(this.userId, data)
        }
    },
    mounted(){
        this.getUser();
    }
}
</script>
<style scoped>
.img-account-profile {
    height: 10rem;
}
.rounded-circle {
    border-radius: 50% !important;
}
.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
    font-weight: 500;
}
.card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
</style>