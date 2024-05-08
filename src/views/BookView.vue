<template>
    <div class="container">
        <div class="row">
            <InputSearch v-model="searchText" />
        </div>
        <div>
            <BookList :products="products" @delete="handleDelete" :categorys="categorys" />
        </div>
    </div>
</template>

<script>
import BookList from '../components/BookList.vue';
import BookService from '../services/book.service'
import CategoryService from '../services/category.service';
import InputSearch from '../components/InputSearch.vue';
export default {
    components: {
        BookList,
        InputSearch,
    },
    data() {
        return {
            products: [],
            categorys: [],
            searchText: "",
        };
    },
    computed: {
        // productStrings() {
        //     return this.products.map((product) => {
        //         const { MSHH, TenHH, MaTheLoai, Gia } = product;
        //         return [MSHH, TenHH, MaTheLoai, Gia].join("");
        //     });
        // },

        // filteredProducts() {
        //     if (!this.searchText) return this.products;
        //     const searchTextLower = this.searchText.toLowerCase();
        //     return this.products.filter((_product, index) =>
        //         this.productStrings[index].toLowerCase().includes(searchTextLower)
        //     );
        // },

    },
    methods: {
        async getProducts() {
            try {
                this.products = await BookService.getALl();
            } catch (error) {
                console.log(error);
            }
        },
        async getCategorys() {
            try {
                this.categorys = await CategoryService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        async handleDelete(data) {
            if (confirm("Bạn muốn xóa Sản phẩm này?")) {
                try {
                    await ProductService.delete(data);
                    this.$router.go();
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getProducts();
        this.getCategorys();
    },
};
</script>
