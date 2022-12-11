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
                                        <h4 class="mt-1 mb-5 pb-1">Flaviar Spirit Ratings</h4>
                                    </div>

                                    <form @submit.prevent="submit()">
                                        <p>Please login to your account</p>

                                        <div class="form-outline mb-4">
                                            <input v-model="form.username" type="email" id="form2Example11" class="form-control"
                                                   placeholder="Email" required />
                                            <label class="form-label" for="form2Example11">Email Address</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input v-model="form.password" type="password" id="form2Example22" class="form-control" placeholder="Password" required />
                                            <label class="form-label" for="form2Example22">Password</label>
                                        </div>

                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <input class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" value="Log in" />
                                        </div>

                                        <div class="text-center alert" :class="error ? 'alert-danger' : 'alert-success'" v-if="message">
                                            {{ message }}
                                        </div>

                                        <div class="d-flex align-items-center justify-content-center pb-4">
                                            <p class="mb-0 me-2">Don't have an account?</p>
                                            <router-link to="/register"><button type="button" class="btn btn-outline-danger ml-2">Create new</button></router-link>
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
                username: null,
                password: null
            }
        }
    },
    methods: {
        ...mapActions('user', ['login', 'clearError']),
        submit() {
            this.login(this.form);
        }
    },
    computed: {
        ...mapState('user', ['message', 'error'])
    },
    created() {
        this.clearError();
    }
}
</script>