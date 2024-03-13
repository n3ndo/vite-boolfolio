<script>
import { store } from '../store.js';
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
<div class="card p-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"><router-link :to="{ name: 'singleProject', params: { slug: project.slug } }">{{ project.title }}</router-link></h5>
        <p class="card-text">{{ project.slug }}</p>
        <p class="card-text">{{ project.data }}</p>
        <p class="card-text">{{ project.content }}</p>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>