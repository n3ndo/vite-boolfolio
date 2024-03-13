<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'singleProject',
    data() {
        return {
            store,
            project: {}
        }
    },
    mounted() {
        this.getSingleProject();
    },
    methods: {
        getSingleProject() {
            axios.get(`${this.store.baseUrl}projects/${this.$route.params.slug}`).then((response) => {
                this.project = response.data.results;
            })
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card my-3">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.content }}</p>
                        <p class="card-text">{{ project.data }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
</style>