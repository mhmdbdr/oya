<template>
    <footer>
        <div class="container">
            <div class="content">
                <div class="row">
                    <div class="col-lg-3 col-12 mb-lg-0 mb-2">
                        <div class="icon">
                            <img src="../../../imgs/logo2.png" alt="">
                        </div>
                        <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam nam</div>
                    </div>
                    <div class="col-lg-3 col-12 mb-lg-0 mb-2">
                        <div class="title">About</div>
                        <ul>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                about us
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                contact
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                portfolio
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-12 mb-lg-0 mb-2">
                        <div class="title">Support</div>
                        <ul>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                support@example.com
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                +61 3 8376 6284
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                Services
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-12 mb-lg-0 mb-2">
                        <div class="title">Follow us</div>
                        <ul>
                            <li>
                                <font-awesome-icon icon="fa-brands fa-facebook" />
                                Facebook
                                </li>
                            <li>
                                <font-awesome-icon icon="fa-brands fa-twitter" />
                                Twitter
                                </li>
                            <li>
                                <font-awesome-icon icon="fa-brands fa-instagram" />
                                Instagram
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            Copyright © All Right Reserved
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        background-color: #302c42;
        color: white;
        .content{
            padding: 90px 0 80px;
            .icon{
                margin-bottom: 15px;
            }
            .text{
                margin-bottom: 15px;
                color: #8a8a8a;
                font-size: 16px;
            }
            .title{
                font-size: 20px;
                margin: 8px 0 15px;
                font-weight: 600;
            }
            ul{
                li{
                    margin-bottom: 8px;
                    color: #CCCCCC;
                    cursor: pointer;
                    text-transform: capitalize;
                    font-weight: 600;
                    transition-duration: 0.3s;
                    width: fit-content;
                    &:hover{
                        color: #614cab;
                    }
                    svg{
                        margin-right: 10px;
                    }
                }
            }
        }
        .copyright{
            padding: 35px 0;
            border-top: 1px solid #888;
            text-align: center;
        }
    }
</style>