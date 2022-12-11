<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button @click="logout()" class="btn btn-danger my-2 my-lg-0">Logout</button>
    </nav>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "Navigation",
    methods: {
        ...mapActions('user', ['logout'])
    }
}
</script>

<style scoped>

</style>