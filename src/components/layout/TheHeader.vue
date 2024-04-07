<template>
    <header>
        <div class="wrapper">
            <div class="container">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="#">
                        <div class="logo">
                            <img src="../../../imgs/logo.png" alt="Logo">
                        </div>  
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#Home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#About">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Services">services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Portfolio">portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Pricing">pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Contact_us">contact us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="nav-bg"></div>
        </div>
    </header>
</template>

<script>
export default {
    data () {
        return{}
    },
    methods:{
        gsapAnimation () {
            this.$gsap.set('.nav-bg', {
                backgroundColor: '#fff',
                opacity: 0,
                boxShadow: '-13px -8px 10px 0px black'
            })

            const tl = this.$gsap.timeline({
                scrollTrigger: {
                    start: 'top+=50',
                    end: '+=1',
                    toggleActions: 'play none none reverse',
                    scrub: 0.5
                }
            })

            tl.to('.nav-bg',{
                opacity: 1
            })
            tl.to('.nav-link',{
                color:'black'
            })
        }
    },
    mounted () {
        this.gsapAnimation()
    }
}
</script>

<style lang="scss" scoped>
@media (max-width: 992px) {
    .navbar-collapse{
        background-color: #f8f5ff;
        border-radius: 10px;
        padding: 15px;
        &.show{
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            height: fit-content;
        }
        &.collapsing{
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
        }
        .nav-link{
            color: black !important;
        }
    }
}

header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    .wrapper{
        position: relative;
        .navbar{
        align-items: center;
        padding: 15px 0;
        background-color: transparent;
        position: relative;
        .navbar-toggler{
            border-width: 0;
            &:focus{
                box-shadow: none;
            }
        }
        .navbar-collapse{
            &.collapse{
                justify-content: flex-end;
            }
            .navbar-nav{
                .nav-item {
                    padding: 10px;
                    font-size: 17px;
                    font-weight: 500;
                    text-transform: capitalize;
                    cursor: pointer;
                    .nav-link{
                        padding: 0;
                        color: white;
                    }
                }
            }
        }
        }
        .nav-bg{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }
    }

</style>