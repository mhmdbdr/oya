<template>
    <div class="cardd">
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="head">
            <slot name="head"></slot>
        </div>
        <p>
            <slot name="pslot">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, provident!</slot>
        </p>
    </div>
</template>

<script>
export default {
    data () {
        return{}
    },
    emits: ['cardmounted'],
    mounted () {
        this.$emit('cardmounted')
    }
}
</script>

<style lang="scss" scoped>
.cardd{
    margin-bottom: 30px;
    padding: 30px;
    border-radius: 10px;
    background-color: white;
    text-align: center;
    transition-duration: 0.5s;
    .icon{
        color: #614cab;
        font-size: 45px;
    }
    .head{
        margin: 25px 0 15px;
        font-size: 20px;
        font-weight: 600;
        color: black;
        text-transform: capitalize;
    }
    p{
        color: #8A8A8A;
        font-weight: 600;
    }
    &:hover{
        background-color: #614cab;
        cursor: pointer;
        .icon,
        .head,
        p{
            color: white !important;
        }
    }
}
</style>