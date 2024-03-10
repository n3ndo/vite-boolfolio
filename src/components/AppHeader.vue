<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            
        }
    }
}
</script>
<template lang="">
    <header class="header">
        <div class="title">Boolfolio</div>
        <ul class="list">
            <li>Projects</li>
            <li>Technology</li>
            <li>Type</li>
        </ul>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss' as *;
.header {
    height: 100px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    .title {
      text-align: center;
      color: #fff;
      font-size: 35px;
    }
    .list {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        padding: 0 15px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
    }
}
</style>