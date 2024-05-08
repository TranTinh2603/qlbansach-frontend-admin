<template>
    <div class="col-5 offset-4">
         <Form @submit="submitProduct" :validation-schema="productFormSchema">
            <div class="form-group">
                <label for="name">Tên</label>
                <Field name="name" type="text" class="form-control" v-model="productLocal.TenHH" />
                <ErrorMessage name="name" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="description">Mô tả</label>
                <Field name="description" type="text" class="form-control" v-model="productLocal.MoTaHH" />
                <ErrorMessage name="description" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="price">Giá</label>
                <Field name="price" type="text" class="form-control" v-model="productLocal.Gia" />
                <ErrorMessage name="price" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="category">Thể Loại</label>
                <Field name="category" type="text" class="form-control" v-model="productLocal.MaTheLoai" />
                <ErrorMessage name="category" class="error-feedback " />
            </div>
            <div class="form-group">
                    <label for="ghichu">Ghi Chú</label>
                    <Field name="ghichu" type="text" class="form-control" v-model="productLocal.GhiChu" />
                    <ErrorMessage name="ghichu" class="error-feedback " />
                </div>
            <div class="form-group">
                    <label for="pictures">Hình:</label>
                    <Field name="pictures" type="text" class="form-control" v-model="productLocal.HinhHH" />
                    <ErrorMessage name="pictures" class="error-feedback" />
                </div>
            <div class="form-group mt-3">
                <button class="btn btn-primary">Lưu</button>
            </div>
        </Form>
    </div>
   
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:product"],
    props: {
        product: { type: Object, required: true }
    },
    data() {
        const productFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(100, "Tên có nhiều nhất 100 ký tự."),
            description: yup
                .string()
                .required("Mô tả phải có giá trị.")
                .min(2, "Mô tả phải ít nhất 2 ký tự.")
                .max(100, "Tên có nhiều nhất 100 ký tự."),
            // email: yup
            //     .string()
            //     .email("E-mail không đúng.")
            //     .max(50, "E-mail tối đa 50 ký tự."),
            // address: yup.string().max(150, "Địa chỉ tối đa 150 ký tự."),
            // phone: yup
            //     .string()
            //     .matches(
            //         /((09|03|07|08|05)+([0-9]{8})\b)/g,
            //         "Số điện thoại không hợp lệ."
            //     ),
        });
        return {
            productLocal: this.product,
            productFormSchema,
            };
    },
    methods: {
        submitProduct() {
            const currentPath = this.$route.path;
            const isAddOperation = currentPath.includes('add');
            if (isAddOperation) {
                const customerNumber = Date.now().toString() + Math.floor(Math.random() * 1000);
                this.productLocal.MSHH = customerNumber;
                console.log(this.productLocal.MSHH);
                console.log('trên');
                console.log("productLocal", this.productLocal);
                this.$emit("submit:product", this.productLocal);
            } else {
                console.log("productLocal", this.productLocal);
                this.$emit("submit:product", this.productLocal);
            }
        },
    },
};
</script>
<style scoped>
</style>