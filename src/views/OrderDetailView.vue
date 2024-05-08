<template>
  <div class="container-fluid">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center py-3">
        <h2 class="h5 mb-0">Đơn hàng #{{ orderId }}</h2>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <!-- Details -->
          <div class="card mb-4">
            <div class="card-body">
              <div class="mb-3 d-flex justify-content-between">
                <div>
                  <span class="me-3">{{ convertTimestampToDateTime(order.orderDate) }}</span>
                  <span class="me-3">#{{ orderId }}</span>
                  <span class="badge rounded-pill bg-danger">Chưa xác nhận</span>
                </div>
              </div>
              <table class="table table-borderless">
                <thead>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th class="text-end">Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in order.products" :key="index" >
                    <td>
                      <div class="d-flex mb-2">
                        <div class="flex-shrink-0">
                          <img
                            :src="product.product.image"
                            alt=""
                            width="35"
                            class="img-fluid"
                          />
                        </div>
                        <div class="flex-lg-grow-1 ms-3">
                          <h6 class="small mb-0">
                            <router-link to="/" class="text-reset "
                              >{{ product.product.name}}</router-link
                            >
                          </h6>
                          <span class="small">{{ product.product.author }}</span>
                        </div>
                      </div>
                    </td>
                    <td>{{ product.quantity }}</td>
                    <td>{{ product.product.price }}đ</td>
                    <td class="text-end">{{ totalUnitPrice(product.product.price, product.quantity) }}đ</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3">Thành tiền</td>
                    <td class="text-end">{{ order.totalPrice}}đ</td>
                  </tr>
                  <tr>
                    <td colspan="3">Phí vận chuyển</td>
                    <td class="text-end">{{ order.transportFee }}đ</td>
                  </tr>
                  <tr>
                    <td colspan="3">Giảm giá</td>
                    <td class="text-danger text-end">0đ</td>
                  </tr>
                  <tr class="fw-bold">
                    <td colspan="3">Tổng tiền</td>
                    <td class="text-end">{{ order.totalAmount }}đ</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <!-- Payment -->
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <h3 class="h6">Phương thức thanh toán</h3>
                  <p>
                    {{ order.methodPayment === 'cod' ? 'Thanh toán khi nhận hàng' : 'Thanh toán online' }} <span class="badge bg-success rounded-pill text-uppercase">{{ order.methodPayment }}</span> <br />
                    Tổng: {{ order.totalAmount }}đ
                  </p>
                  <button class="btn btn-sm btn-success mt-3">Xác nhận</button>
                </div>
                <div class="col-lg-6">
                  <h3 class="h6">Thông tin người đặt hàng</h3>
                  <address>
                    <strong>{{ order.infoDelivery.name }}</strong>
                    <p class="m-0">{{ order.infoDelivery.address }}</p>
                    <p>{{ order.infoDelivery.phone }}</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <!-- Customer Notes -->
          <div class="card mb-4">
            <div class="card-body">
              <h3 class="h6">Ghi chú</h3>
              <p>
                {{ order.note }}
              </p>
            </div>
          </div>
          <div class="card mb-4">
            <!-- Shipping information -->
            <div class="card-body">
              <strong>Phương thức vận chuyển</strong>
              <br>
              <span>
                {{ order.methodDelivery === 'fast' ? 'Gia hàng nhanh': 'Giao hàng tiêu chuẩn' }}
              </span>
              <hr />
              <h3 class="h6">Thông tin người nhận hàng</h3>
              <address>
                    <strong>{{ order.infoDelivery.name }}</strong>
                    <p class="m-0">{{ order.infoDelivery.address }}</p>
                    <p class="m-0">{{ order.infoDelivery.phone }}</p>
                    <p class="m-0">{{ order.infoDelivery.email }}</p>
                </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "../services/user.service"
import OrderService from "../services/order.service"
export default {
    props: {
        orderId: {type: String, default: ""}
    },
    data(){
        return {
            user: {},
            order: {}
        }
    },

    methods: {
        async getOrder(){
            this.order = await OrderService.getByOrderId(this.orderId)
            this.getUser(this.order.userId)
        },
        async getUser(userId){
            this.user = await UserService.get(userId)
        },
        convertTimestampToDateTime(timestamp) {
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Thêm số 0 phía trước nếu cần
            const day = date.getDate().toString().padStart(2, '0');
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');

            return `${day}/${month}/${year} ${hours}:${minutes}`;
        },
        totalUnitPrice(price, quantity) {
            return (quantity * price).toFixed(3);
        }
    },
    mounted(){
        this.getOrder()
    }
}
</script>
