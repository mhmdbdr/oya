<template>
    <div class="slide-container">
        <div class="icon">
            <font-awesome-icon icon="fa-solid fa-quote-right" />
        </div>
        <div class="text">{{ text }}</div>
        <div class="name">{{ name }}</div>
        <div class="comp">{{ com }}</div>
    </div>
</template>

<script>
export default {
    props: ['text', 'name', 'com'],
    data () {
        return{}
    }
}
</script>

<style lang="scss" scoped>
.slide-container{
    .icon{
        font-size: 40px;
    }
    .text{
        line-height: 26px;
        margin-bottom: 16px;
        color: #8a8a8a;
    }
    .name{
        margin-bottom: 5px;
        color: black;
        font-size: 22px;
        font-weight: 500;
    }
    .comp{
        color: #8a8a8a;
        font-size: 14px;
    }
}
</style>