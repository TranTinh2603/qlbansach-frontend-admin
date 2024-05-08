<template>
    <div class="col-md-6 offset-md-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h3>Thông tin nhân viên</h3>
        <hr>
        <p>Họ tên: <strong>{{ this.staff.HoTenNV }}</strong></p>
        <p>Địa chỉ: <strong>{{ this.staff.DiaChi }}</strong></p>
        <p>Số điện thoại: <strong>{{ this.staff.SoDienThoai }}</strong></p>
        <p>Chức vụ: <strong>{{ this.staff.ChucVu }}</strong></p>
        <hr>
    </div>
</template>
<script>
export default {
    props: {
        staff: {type: Object, default: {}}
    }
}
</script>