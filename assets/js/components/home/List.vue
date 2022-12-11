<template>
    <div v-if="ratings">
        <ul class="list-group">
            <li v-for="rating in ratings" class="list-group-item">{{ rating.drink.name }} is with rating {{ rating.rating }}</li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "List",
    methods: {
        ...mapActions('ratings', ['getRatings'])
    },
    computed: {
        ...mapGetters('ratings', ['ratings'])
    },
    created() {
        this.getRatings();
    }
}
</script>

<style scoped>

</style>