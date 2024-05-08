<template>
    <div>
        <div class="mb-3">
                <label for="statusFilter">Order Status:</label>
                <select v-model="selectedStatus" @change="filterOrdersByStatus" id="statusFilter">
                    <option value="">Tất cả</option>
                    <option value="0">Chưa xác nhận</option>
                    <option value="1">Đã xác nhận</option>
                </select>
            </div>
        <table style="font-size: 14px;" class="table table-sm">
            <thead>
                <tr class="table-info">
                    <th class="col-1">STT</th>
                    <th class="col-1">orderId</th>
                    <th class="col-1">userId</th>
                    <th class="col-3">orderDate</th>
                    <th class="col-3">deliveryDate</th>
                    <th class="col-2">ststus</th>
                    <th></th>
                </tr>
            </thead>
            <tbody v-if="filteredOrders.length > 0">
                <tr v-for="(order, index) in filteredOrders" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ order.orderId }}</td>
                    <td>{{ order.userId ? order.userId : 'Chưa xác đinh' }}</td>
                    <td>{{ order.orderDate ? order.orderDate : 'Chưa xác định' }}</td>
                    <td>{{ order.deliveryDate ? order.deliveryDate : 'Chưa xác định' }}</td>
                    <td>{{ order.status == 0 ? 'Chưa xác nhận' : 'Đã xác nhận' }}</td>
                    <td>
                        <div class="d-flex justify-content-evenly">
                            <router-link :to="'/orders/detail/' + order.orderId" class="btn btn-sm btn-outline-success"><i class="fa-solid fa-circle-info"></i></router-link>
                            <button v-if="order._id" @click="handDelete(order._id)" class="btn btn-sm btn-outline-danger ms-2"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="7">Không có Đơn hàng nào phù hợp.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        orders: { type: Array, default: [] },
    },
    data() {
        return {
            selectedStatus: "",
        };
    },
    computed: {
        filteredOrders() {
            if (this.selectedStatus === "") {
                return this.orders;
            } else {
                const status = parseInt(this.selectedStatus, 10); 
                return this.orders.filter(order => order.TrangThaiDH === status);
            }
        },
    },
    methods:{
        handDelete(id) {
            this.$emit('delete', id);
        }
    }
}
</script>

<style scoped>
</style>
