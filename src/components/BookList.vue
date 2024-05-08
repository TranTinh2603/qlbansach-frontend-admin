<template>
    <div>
        <div>
            <label for="categoryFilter">Category: </label>
            <select class="ms-2" v-model="selectedCategory" @change="filterProductsByCategory" id="categoryFilter">
                <option value="">All</option>
                <option v-for="category in categorys" :key="category.categoryId" :value="category.categoryId">
                    {{ category.name }}
                </option>
            </select>
        </div>
       <router-link :to="{ name: 'products.add' }" class="float-end m-2 btn btn-success"><i class="fa-solid fa-plus"></i></router-link>
        <table style="font-size: 14px;" class="table table-sm">
            <thead>
                <tr class="table-info">
                    <th class="col-1">STT</th>
                    <th class="col-1"></th>
                    <th class="col-1">BookId</th>
                    <th>Name</th>
                    <th class="col-2">Author</th>
                    <th class="col-1">Price</th>
                    <th class="col-1">Category</th>
                    <th class="col-1"></th>
                </tr>
            </thead>
            <tbody v-if="filteredProducts.length > 0">
                <tr v-for="(product, index) in filteredProducts" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td><img :src="product.image" style="height: 70px; width: 50px;" alt=""></td>
                    <td>{{ product.bookId }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.author }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ getCategoryName(product.category) }}</td>
                    <td>
                        <div class="d-flex justify-content-evenly">
                            <router-link :to="'/books/detail/' + product.bookId" class="btn btn-sm btn-outline-success"><i class="fa-solid fa-circle-info"></i></router-link>
                            <button v-if="product._id" @click="handDelete(product._id)" class="btn btn-sm btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="5">Không có sản phẩm phù hợp.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        products: { type: Array, default: [] },
        categorys: { type: Array, default: [] },
    },
    data() {
        return {
            selectedCategory: '',
            searchTerm: '',
        };
    },
    computed: {
        filteredProducts() {
            let filtered = this.products;

            if (this.selectedCategory !== '') {
                filtered = filtered.filter(product => product.category === this.selectedCategory);
            }
            return filtered;
        },
    },
    methods: {
        getCategoryName(categoryId) {
            const category = this.categorys.find(category => category.categoryId === categoryId);
            return category ? category.name : 'Chưa xác định';
        },
        filterProductsByCategory() {
            this.searchTerm = '';
        },
        filterProducts() {
            this.selectedCategory = '';
        },
        handDelete(id) {
            this.$emit('delete', id);
        }
    },
   

}
</script>

<style scoped>
img {
    height: 75px;
    width: 75px;
}
</style>
