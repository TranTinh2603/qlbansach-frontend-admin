<template>
    <div class="container">
        <div class="row">
            <InputSearch v-model="searchText" />
        </div>
        <div class="row">
            <table style="font-size: 14px;" class="table table-sm mt-5">
                <thead>
                    <tr class="table-info">
                        <th class="col-1">STT</th>
                        <th class="col-2">image</th>
                        <th class="col-2">authorId</th>
                        <th class="col-2">name</th>
                        <th class="col-2">birthDate</th>
                        <th class="col-4">address</th>
                        <th class="col-1"></th>
                    </tr>
                </thead>
                <tbody v-if="1 > 0">
                    <tr v-for="(author, index) in this.authors" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td><img style="height: 70px; width: 50px;" :src="author.image"></td>
                        <td>{{ author.authorId }}</td>
                        <td>{{ author.name ? author.name : 'Chưa xác đinh' }}</td>
                        <td>{{ author.birthDate ? author.birthDate : 'Chưa xác định' }}</td>
                        <td>{{ author.country ? author.country : 'Chưa xác định' }}</td>
                        <td>
                            <div class="d-flex justify-content-evenly">
                                <router-link :to="'/users/detail/' + author.userId" class="btn btn-sm btn-outline-success"><i class="fa-solid fa-circle-info"></i></router-link>
                                <button v-if="author._id" @click="handDelete(author._id)" class="ms-2 btn btn-sm btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
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
    </div>
</template>

<script>
import AuthorService from '../services/author.service'
import InputSearch from '../components/InputSearch.vue';
export default {
    components: {
        InputSearch,
    },
    data() {
        return {
            authors: [],
            searchText: "",
        };
    },
    computed: {
        customerStrings() {
            return this.customers.map((customer) => {
                const { MSKH, HoTenKH, SoDienThoai, DiaChi, Email } = customer;
                return [MSKH, HoTenKH, SoDienThoai, DiaChi, Email].join("");
            });
        },

        filteredCustomers() {
            if (!this.searchText) return this.customers;
            const searchTextLower = this.searchText.toLowerCase();
            return this.customers.filter((_customer, index) =>
                this.customerStrings[index].toLowerCase().includes(searchTextLower)
            );
        },

    },
    methods: {
        async getAuthor() {
            try {
                this.authors = await AuthorService.getAll()
                console.log(this.authors);
            } catch (error) {
                console.log(error);
            }
        },
        async handleDelete(data) {
            if (confirm("Bạn muốn xóa Sản phẩm này?")) {
                try {
                    console.log(data);
                    await CustomerService.delete(data);
                    this.$router.go();
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    mounted() {
        this.getAuthor();
    },
};
</script>
