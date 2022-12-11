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

                                    <form @submit.prevent="submit" v-if="!message || error">
                                        <p>Create Account</p>

                                        <div class="form-outline mb-4">
                                            <input v-model="form.email" type="email" id="form2Example11" class="form-control"
                                                   placeholder="Email" required />
                                            <label class="form-label" for="form2Example11">Email Address</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input v-model="form.password" minlength="6" type="password" class="form-control" id="password" placeholder="Password"
                                                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                   title="ust contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                                            <label class="form-label" for="password">Password</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input v-model="form.confirmPassword" minlength="6" type="password" id="confirm-password" class="form-control" placeholder="Confirm Password" required />
                                            <label class="form-label" for="confirm-password">Confirm Password</label>
                                        </div>

                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <input :disabled="!passwordMatch" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" value="Register"  />
                                        </div>

                                    </form>

                                    <div class="text-center alert" :class="error ? 'alert-danger' : 'alert-success'" v-if="message">
                                        {{ message }}
                                    </div>

                                    <div class="text-center alert alert-danger" v-if="!passwordMatch">
                                        Password missmatch!
                                    </div>

                                    <div class="d-flex align-items-center justify-content-center pb-4">
                                        <router-link to="/login"><button type="button" class="btn btn-outline-danger">Back to login page</button></router-link>
                                    </div>
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
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            form: {
                email: null,
                password: null,
                confirmPassword: null
            }
        }
    },
    methods: {
        ...mapActions('user', ['register']),
        submit() {
           this.register(this.form);
        }
    },
    computed: {
        ...mapState('user', ['message', 'error']),
        passwordMatch() {
            return this.form.password == this.form.confirmPassword;
        }
    }
}
</script>