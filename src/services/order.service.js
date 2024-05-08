import createApiClient from "./api.service";

class OrderService {
    constructor(baseUrl = "/api/orders") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async getByMSKH(data) {
        return (await this.api.post(`/mskh`, data)).data;
    }
    // async deleteAll() {
    //     return (await this.api.delete("/")).data;
    // }
    async getByOrderId(orderId) {
        return (await this.api.get(`/${orderId}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/id/${id}`)).data;
    }
}
export default new OrderService();