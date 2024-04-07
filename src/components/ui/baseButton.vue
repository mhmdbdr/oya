<template>
    <button :class='btnstyle'>
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['btnstyle'],
    data(){
        return{}
    },
}
</script>

<style lang="scss" scoped>
button{
    padding: 12px 30px;
    text-transform: capitalize;
    font-size: 17px;
    font-weight: 600;
    border-radius: 6px;
    transition-duration: 0.5s;
    white-space: nowrap;
    &.main{
        color: white;
        border: 1px solid #ffb005;
        background-color: #ffb005;
            &:hover{
                background-color: white;
                color: black;
            }
    }
    &.sec{
        color: black;
        border: 1px solid #ffb005;
        background-color: white;
            &:hover{
                background-color: #ffb005;
                color: white;
            }
    }

}
</style>