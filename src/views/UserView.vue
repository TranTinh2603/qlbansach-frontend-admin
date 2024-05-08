<template>
    <div class="row">
        <InputSearch v-model="searchText" />
    </div>
    <div class="row">
        <UserList :customers="customers" @delete="handleDelete"  />
    </div>
</template>

<script>
import UserService from '../services/user.service';
import InputSearch from '../components/InputSearch.vue';
import UserList from '../components/UserList.vue';
export default {
    components: {
        UserList,
        InputSearch,
    },
    data() {
        return {
            customers: [],
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
        async getUser() {
            try {
                this.customers = await UserService.getAll();
                console.log(this.customers);
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
        this.getUser();
    },
};
</script>
