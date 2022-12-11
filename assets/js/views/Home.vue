<template>
    <section class="h-100 gradient-form" style="background-color: #eee;">
        <navigation-component></navigation-component>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-6">
                    <div class="card rounded-3 text-black">
                        <div class="row g-0">
                            <div class="col-lg-12">
                                <h2 class="text-center">List of rated drinks</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-5 h-100">
            <button @click="showForm = !showForm" class="btn btn-primary float-right">+Add</button>
        </div>
        <div class="container py-5 h-100">
            <form-component v-if="showForm"></form-component>
        </div>
        <div class="container py-5 h-100">
            <list-component></list-component>
        </div>
    </section>
</template>

<script>
import Form from '../components/home/Form';
import List from '../components/home/List';
import Navigation from '../components/partials/Navigation';
export default {
    name: "Home",
    components: {
        FormComponent: Form,
        ListComponent: List,
        NavigationComponent: Navigation
    },
    data() {
        return {
            showForm: false
        }
    }
}
</script>

<style scoped>

</style>