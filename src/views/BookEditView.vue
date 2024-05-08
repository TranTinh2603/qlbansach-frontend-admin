<template>
    <div class="container">
        <h4 class="mb-3">Chỉnh sửa sách</h4>
        <div class="row">
            <div class="col-xl-4">
                <!-- Profile picture card-->
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Ảnh sách</div>
                    <div class="card-body text-center">
                        <!-- Profile picture image-->
                        <img class="mb-2" style="height: 150px; width: 100px;"
                            src="https://s.gr-assets.com/assets/nophoto/user/u_225x300-c928cbb998d4ac6dd1f0f66f31f74b81.png"
                            alt="">
                        <!-- Profile picture help block-->
                        <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                        <!-- Profile picture upload button-->
                        <input class="form-control form-control-sm" type="file">
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <!-- Account details card-->
                <div class="card mb-4">
                    <div class="card-header">Chi tiết sách</div>
                    <div class="card-body">
                        <form>
                            <!-- Form Row-->
                            <div class="row gx-3 mb-3">
                                <!-- Form Group (first name)-->
                                <div class="col-md-6">
                                    <label class="small mb-1" for="bookName">Tên sách</label>
                                    <input class="form-control form-control-sm" id="bookName" type="text"
                                        placeholder="Enter your first name" value="Valerie">
                                </div>
                                <!-- Form Group (last name)-->
                                <div class="col-md-6">
                                    <label class="small mb-1" for="author">Tác giả</label>
                                    <input class="form-control form-control-sm" id="author" type="text"
                                        placeholder="Enter your last name" value="Luna">
                                </div>
                            </div>
                            <!-- Form Row        -->
                            <div class="row gx-3 mb-3">
                                <!-- Form Group (organization name)-->
                                <div class="col-md-6">
                                    <label class="small mb-1" for="category">Thể loại</label>
                                    <select id="category" class="form-select form-select-sm">
                                        <option value="Male">Nam</option>
                                        <option value="Female">Nữ</option>
                                        <option value="orther">Khác</option>
                                    </select>
                                </div>
                                <!-- Form Group (location)-->
                                <div class="col-md-6">
                                    <label class="small mb-1" for="page">Trang</label>
                                    <input class="form-control form-control-sm" id="page" type="email"
                                        placeholder="Enter your email address" value="name@example.com">

                                </div>
                            </div>
                            <!-- Form Group (email address)-->
                            <div class="mb-3">
                                <label class="small mb-1" for="description">Mô tả</label>
                                <textarea class="form-control form-control-sm" id="description" type="text"
                                    placeholder="Enter your location" >
                                </textarea>
                            </div>
                            <!-- Form Row-->
                            <div class="row gx-3 mb-3">
                                <!-- Form Group (phone number)-->
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputPhone">Số điện thoại</label>
                                    <input class="form-control form-control-sm" id="inputPhone" type="tel"
                                        placeholder="Enter your phone number" value="555-123-4567">
                                </div>
                                <!-- Form Group (birthday)-->
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputBirthday">Birthday</label>
                                    <input class="form-control form-control-sm" id="inputBirthday" type="date"
                                        name="birthday" placeholder="Enter your birthday" value="06/10/1988">
                                </div>
                            </div>
                            <!-- Save changes button-->
                            <button class="btn btn-sm btn-primary" type="button">Cập nhật</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-account-profile {
    height: 10rem;
}

.rounded-circle {
    border-radius: 50% !important;
}

.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}

.card .card-header {
    font-weight: 500;
}

.card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
}

.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}</style>