<script>
import { store } from '../store.js';
import Project from './Project.vue';
import axios from 'axios';
export default {
    name: 'AppMain',
    components: {
        Project
    },
    data() {
        return {
            store,
            projects: []
        }
    },
    mounted() {
        this.getProjects();
    },
    methods: {
        getProjects() {
                axios.get(this.store.baseUrl + 'projects').then((response) => {
                this.projects = response.data.results;
                console.log(response.data.results);
            });

        }
    }
}

</script>

<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="content d-flex flex-wrap my-3">
                        <project v-for="project, index in projects " :key="index" :project="project"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

</style>