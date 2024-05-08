<template>
    <div class="container">
        <div class="row">
            <InputSearch v-model="searchText" />
        </div>
        <div class="row">
            <OrderList :orders="orders" @delete="handleDelete"/>
        </div>
    </div>
</template>

<script>
import OrderList from '../components/OrderList.vue';
import OrderService from '../services/order.service';
import InputSearch from '../components/InputSearch.vue';
export default {
    components: {
        OrderList,
        InputSearch,
    },
    data() {
        return {
            orders: [],
            searchText: "",
        };
    },
    computed: {
        orderStrings() {
            return this.orders.map((order) => {
                const { SoDonDH, MSKH, NgayDH } = order;
                return [SoDonDH, MSKH, NgayDH].join("");
            });
        },

        filteredOrders() {
            if (!this.searchText) return this.orders;
            const searchTextLower = this.searchText.toLowerCase();
            return this.orders.filter((_order, index) =>
                this.orderStrings[index].toLowerCase().includes(searchTextLower)
            );
        },

    },
    methods: {
        async getOrders() {
            try {
                this.orders = await OrderService.getAll();
                console.log(this.orders);
            } catch (error) {
                console.log(error);
            }
        },
        async handleDelete(data) {
            if (confirm("Bạn muốn xóa Đơn hàng này?")) {
                try {
                    console.log(data);
                    await OrderService.delete(data);
                    this.$router.go();
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    mounted() {
        this.getOrders();
    },
};
</script>
