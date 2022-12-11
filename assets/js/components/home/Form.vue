<template>
    <section class="h-100 gradient-form" style="background-color: #eee;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-6">
                    <div class="card rounded-3 text-black">
                        <div class="row g-0">
                            <div class="col-lg-12">
                                <div class="card-body p-md-5 mx-md-4">

                                    <div class="text-center">
                                        <h4 class="mt-1 mb-5 pb-1">Rate your favorite drink</h4>
                                    </div>

                                    <form @submit.prevent="submit()">
                                        <div class="form-outline mb-4">
                                            <input v-model="form.drink" type="text" id="drink" class="form-control"
                                                   placeholder="Drink Name" required />
                                        </div>

                                        <div class="form-outline mb-4">
                                           <select class="form-control" v-model="form.rating" required>
                                               <option value="" disabled selected="selected">Select rating</option>
                                               <option v-for="i in maxRating" :value="i" :index="i">{{ i }}</option>
                                           </select>
                                        </div>

                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <input class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" value="Rate!" />
                                        </div>

                                        <div class="text-center alert" :class="error ? 'alert-danger' : 'alert-success'" v-if="message">
                                            {{ message }}
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    data() {
        return {
            form: {
                drink: null,
                rating: ''
            },
            maxRating: 10
        }
    },
    methods: {
        ...mapActions('ratings', ['add']),
        submit() {
            this.add(this.form);
        }
    },
    computed: {
        ...mapState('user', ['message', 'error'])
    }
}
</script>

<style scoped>

</style>