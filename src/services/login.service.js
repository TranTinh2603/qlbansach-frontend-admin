import createApiClient from "./api.service";

class LoginService{
    constructor(baseUrl = "/api/login") {
        this.api = createApiClient(baseUrl);
    }

    async findOne(data) {
        return (await this.api.post("/admin", data)).data;
    }
}

export default new LoginService();