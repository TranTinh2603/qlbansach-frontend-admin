<template>
    <h1>thông tin</h1>
    <p>{{ this.staff }}</p>
</template>
<script>
export default {
    props: {
        staff: {type: Object, default: {}}
    }
}
</script>