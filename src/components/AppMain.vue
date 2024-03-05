<script>
import Projects from './Projects.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        Projects
    },
    data() {
        return {
            store,
            projects: []
        }
    },
    async mounted() {
        await this.getProjects();
    },
    methods: {
        async getProjects() {
            const response = await axios.get(this.store.baseUrl + 'projects');
            console.log(response);
        }
    }
}

</script>

<template lang="">
    <div>
        
    </div>
</template>

<style lang="">

</style>