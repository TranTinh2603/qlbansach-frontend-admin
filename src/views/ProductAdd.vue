<template>
    <div>
        <h3 class="text-center">Thêm sản phẩm</h3>
        <ProductForm :product="product" @submit:product="handleAdd"/>
    </div>
</template>
<script>
import ProductForm from '../components/ProductForm.vue';
import ProductService from '../services/product.service';
export default {
    components: {
        ProductForm,
    },
    data(){
        return {product: {}}
    },
    methods: {
        async handleAdd(data) {
            try {
                console.log(data);
                const product = await ProductService.create(data);
                alert("Thêm sản phẩm thành công");
                this.$router.push({name: "products"});
                console.log(product);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>