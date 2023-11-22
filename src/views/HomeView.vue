<template>
    <h1>Home</h1>
    <div>
        <DetailStaff :staff='staff' />
    </div>
</template>
<script>
import StaffService from "../services/staff.service";
import DetailStaff from "../components/DetailStaff.vue"
export default {
    components:{
        DetailStaff,
    },
    data(){
        return {
            staff: {},
        };
    },
    methods:{
        async getUser() {
            const getMSNV = localStorage.getItem('authState');
            if (getMSNV) {
                const result = getMSNV ? JSON.parse(getMSNV) : {};
                console.log(result);
                this.staff = await StaffService.getByMSNV(result.user.MSNV);
                console.log(this.staff);
            }
        },
    }, 
    mounted(){
        this.getUser();
    }
}
</script>