<template>
    <div>
        <!-- <div class="mb-3">
            <label for="categoryFilter">Thể loại:</label>
            <select v-model="selectedCategory" @change="filterProductsByCategory" id="categoryFilter">
                <option value="">Tất cả</option>
                <option v-for="category in categorys" :key="category.MaTheLoai" :value="category.MaTheLoai">
                    {{ category.TenTheLoai }}
                </option>
            </select>
        </div> -->
        <table style="font-size: 14px;" class="table table-sm mt-5">
            <thead>
                <tr class="table-info">
                    <th class="col-1">STT</th>
                    <th class="col-2">userId</th>
                    <th class="col-2">Name</th>
                    <th class="col-2">Birthdate</th>
                    <th class="col-4">Address</th>
                    <th class="col-2">Email</th>
                    <th class="col-1"></th>
                </tr>
            </thead>
            <tbody v-if="search.length > 0">
                <tr v-for="(customer, index) in this.customers" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ customer.userId }}</td>
                    <td>{{ customer.firstName && customer.lastName ? customer.firstName + ' ' + customer.lastName : 'Chưa xác đinh' }}</td>
                    <td>{{ customer.birthday ? customer.birthday : 'Chưa xác định' }}</td>
                     <td>{{ customer.address ? customer.address : 'Chưa xác định' }}</td>
                    <td>{{ customer.email }}</td>
                    <td>
                        <div class="d-flex justify-content-evenly">
                            <router-link :to="'/users/detail/' + customer.userId" class="btn btn-sm btn-outline-success"><i class="fa-solid fa-circle-info"></i></router-link>
                            <button v-if="customer._id" @click="handDelete(customer._id)" class="ms-2 btn btn-sm btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="5">Không có Khách hàng phù hợp.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        customers: { type: Array, default: [] },
    },
    computed: {
        search(){
            let result = this.customers;
            return result;
        }
    },
    methods: {
        handDelete(id) {
            this.$emit('delete', id);
        }
    }
    
}
</script>

<style scoped>
img {
    height: 75px;
    width: 75px;
}
</style>
