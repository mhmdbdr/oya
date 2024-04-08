<template>
<div>
  <div class="home">
    <div class="white-space"></div>
    <div id='Home' class="sec1">
      <div class="container">
        <div class="sec1-content row">
          <div class="text-container col-lg-6 col-12 text-lg-start text-center">
            <div class="tx1 gsaap justify-content-lg-start justify-content-center">
              <span></span>
              <span>welcome to oya</span>
            </div>
            <div class="tx2 gsaap">
              <span>a digital <br> agency</span>
            </div>
            <div class="btns gsaap">
              <base-button btnstyle='main'>get started</base-button>
            </div>
          </div>
          <div class="img-container d-lg-block d-none col-md-6 col-12">
            <img src="../../imgs/intro.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div id='About' class="aboutus">
      <div class="container">
        <div id="split" class="main-header">
          <span>about us</span>
        </div>
        <div id="main-pp" class="main-p">
          <span>Our goal</span> is to <br> make your life <span id="split">easier</span>
        </div>
        <div class="row gx-0 d-flex justify-content-center">
          <div ref="aboutcard1" class="col-12 col-md-4 mb-4 mb-md-0 aboutus-card">
            <base-card class="basecard">
              <template #icon>
                <font-awesome-icon icon="fa-solid fa-lightbulb" />
              </template>
              <template #head>
                Create Idea
              </template>
            </base-card>
          </div>
          <div ref="aboutcard2" class="col-12 col-md-4 mb-4 mb-md-0 aboutus-card">
            <base-card class="basecard">
              <template #icon>
                <font-awesome-icon icon="fa-solid fa-sun" />
              </template>
              <template #head>
                Smart Solutions
              </template>
            </base-card>
          </div>
          <div ref="aboutcard3" class="col-12 col-md-4 mb-4 mb-md-0 aboutus-card">
            <base-card class="basecard">
              <template #icon>
                <font-awesome-icon icon="fa-solid fa-comment-dots" />
              </template>
              <template #head>
                Free Support
              </template>
            </base-card>
          </div>
        </div>
        <svg class="aboutsvg" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(100.285, 81.275, 167.273, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(169.451, 152.19, 230.276, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M15.3,-25.1C20.9,-23.2,27.3,-21.3,32.3,-17.2C37.3,-13,40.8,-6.5,41.6,0.4C42.4,7.4,40.4,14.8,35,18.1C29.5,21.5,20.5,20.7,14.1,23C7.7,25.2,3.9,30.3,-0.6,31.3C-5,32.3,-10,29.2,-14.3,25.8C-18.7,22.4,-22.3,18.7,-26.1,14.3C-29.8,10,-33.7,5,-35.8,-1.2C-37.9,-7.4,-38.1,-14.7,-35.7,-21.4C-33.2,-28.1,-28.1,-34,-21.8,-35.5C-15.4,-37,-7.7,-34.1,-1.4,-31.6C4.8,-29.1,9.6,-27,15.3,-25.1Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: all 0.3s ease 0s;"></path>              </svg>
      </div>
    </div>
    <div id='Portfolio' class="portfolio">
      <div class="container">
        <div id="portheader" class="main-header">
          <span>portfolio</span>
        </div>
        <div id="portp" class="main-p">
          see our <span>amazing</span> <br> <span>portfolio</span> collection
        </div>
        <div class="filters">
          <span data-sort='*' @click="filterimgs('*')" class="active mb-md-0 mb-2">show all</span>
          <span data-sort='.graphic' @click="filterimgs('.graphic')" class="mb-2 mb-md-0">graphic</span>
          <span data-sort='.landing' @click="filterimgs('.landing')" class="mb-2 mb-md-0">landing</span>
          <span data-sort='.art-design' @click="filterimgs('.art-design')" class="mb-2 mb-md-0">art design</span>
        </div>
        <div ref="isotopeContainer" class="content grid row">
          <div class="img-container isotope-item graphic col-md-4 col-12">
            <img src="../../imgs/portfolio1.jpg" alt="">
          </div>
          <div class="img-container isotope-item art-design col-md-4 col-12">
            <img src="../../imgs/portfolio2.jpg" alt="">
          </div>
          <div class="img-container isotope-item landing col-md-4 col-12">
            <img src="../../imgs/portfolio3.jpg" alt="">
          </div>
          <div class="img-container isotope-item graphic col-md-4 col-12">
            <img src="../../imgs/portfolio4.jpg" alt="">
          </div>
          <div class="img-container isotope-item landing col-md-4 col-12">
            <img src="../../imgs/portfolio5.jpg" alt="">
          </div>
          <div class="img-container isotope-item art-design col-md-4 col-12">
            <img  src="../../imgs/portfolio6.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div id='Services' class="services">
      <div class="container">
        <div id="servheader" class="main-header">
          <span>services</span>
        </div>
        <div id="servp" class="main-p">
          <span>Choose</span> what you <br> like our <span>services</span>
        </div>
        <div class="shap"></div>
        <div class="row gx-0 d-flex justify-content-center">
          <div class="col-12 col-md-4 mb-4 aboutus-card">
            <base-card class="basecard">
              <template #icon>
                <font-awesome-icon icon="fa-brands fa-wordpress-simple" />
              </template>
              <template #head>
                WordPress
              </template>
            </base-card>
          </div>
          <div class="col-12 col-md-4 mb-4 aboutus-card">
            <base-card class="basecard">
              <template #icon>
                <font-awesome-icon icon="fa-solid fa-pen-nib" />
              </template>
              <template #head>
                Logo Design
              </template>
            </base-card>
          </div>
          <div class="col-12 col-md-4 mb-4 aboutus-card">
            <base-card class="basecard">
              <template #icon>
                <font-awesome-icon icon="fa-solid fa-server" />
              </template>
              <template #head>
                Online Seo
              </template>
            </base-card>
          </div>
          <div class="col-12 col-md-4 mb-4 aboutus-card">
            <base-card class="basecard">
              <template #icon>
                <font-awesome-icon icon="fa-solid fa-mobile-screen-button" />
              </template>
              <template #head>
                Mobile Apps
              </template>
            </base-card>
          </div>
          <div class="col-12 col-md-4 mb-4 aboutus-card">
            <base-card class="basecard">
              <template #icon>
                <font-awesome-icon icon="fa-solid fa-copyright" />
              </template>
              <template #head>
                Copywriting
              </template>
            </base-card>
          </div>
          <div class="col-12 col-md-4 mb-4 aboutus-card">
            <base-card class="basecard">
              <template #icon>
                <font-awesome-icon icon="fa-solid fa-lightbulb" />
              </template>
              <template #head>
                Brand Strategy
              </template>
            </base-card>
          </div>
        </div>
        <div class="status">
          <div class="state mb-3 mb-md-0">
            <div data-numm='540' class="num odometer">0</div>
            <div class="title">Clients</div>
          </div>
          <div class="state mb-3 mb-md-0">
            <div data-numm="831" class="num odometer">0</div>
            <div class="title">Project</div>
          </div>
          <div class="state mb-3 mb-md-0">
            <div data-numm="65" class="num odometer">0</div>
            <div class="title">Branch</div>
          </div>
        </div>
      </div>
    </div>
    <div id='Pricing' class="pricing">
      <div class="container">
        <div id="pricheader" class="main-header">
          <span>pricing table</span>
        </div>
        <div id="pricp" class="main-p">
          Your <span>Plans</span>, your <span>choise</span>
        </div>
        <div class="content row g-3">
          <div class="col-lg-4 col-12 mb-lg-0 mb-5">
            <div class="plane">
              <div class="title">basic</div>
              <div class="price">$15</div>
              <div class="props">
                <span class="avail">Responsive</span>
                <span class="avail">Documentation</span>
                <span>Support</span>
                <span>Multimedia</span>
                <span>Creative</span>
                <span>Modern</span>
                <span>Free Update</span>
              </div>
              <div class="btn">
                <base-button btnstyle='main'>get started</base-button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-lg-0 mb-5">
            <div class="plane esp">
              <div class="title">Standart</div>
              <div class="price">$30</div>
              <div class="props">
                <span class="avail">Responsive</span>
                <span class="avail">Documentation</span>
                <span class="avail">Support</span>
                <span class="avail">Multimedia</span>
                <span>Creative</span>
                <span>Modern</span>
                <span>Free Update</span>
              </div>
              <div class="btn">
                <base-button btnstyle='main'>get started</base-button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-lg-0 mb-5">
            <div class="plane">
              <div class="title">Premium</div>
              <div class="price">$50</div>
              <div class="props">
                <span class="avail">Responsive</span>
                <span class="avail">Documentation</span>
                <span class="avail">Support</span>
                <span class="avail">Multimedia</span>
                <span class="avail">Creative</span>
                <span class="avail">Modern</span>
                <span class="avail">Free Update</span>
              </div>
              <div class="btn">
                <base-button btnstyle='main'>get started</base-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comments">
      <div class="container">
        <carousel v-bind="settings" :breakpoints="breakpoints">
          <slide v-for="slide in slides" :key="slide.id">
            <base-slide :name='slide.name' :text='slide.text' :com='slide.com'></base-slide>
          </slide>
          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>
    <div id='Contact_us' class="contact">
      <div class="container">
        <div class="row">
          <div class="info col-12 col-md-5 mb-5 mb-md-0">
            <div class="head">
              <div class="titlef">Address</div>
              <div class="text">121 King Street, Melbourne Victoria 3000 Australia</div>
            </div>
            <div class="head">
              <div class="title">Phone</div>
              <div class="text">+61 3 8376 6284</div>
            </div>
            <div class="head">
              <div class="title">Email</div>
              <div class="text">support@example.com</div>
            </div>
          </div>
          <div class="inputs col-12 col-md-7">
            <div class="personal">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInputtext" placeholder="Your Name">
                <label for="floatingInputtext">Your Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInputemail" placeholder="Email Address">
                <label for="floatingInputemail">Email Address</label>
              </div>
            </div>
            <div class="subject">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInputsubject" placeholder="Subject">
                <label for="floatingInputsubject">Subject</label>
              </div>
            </div>
            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a message here" id="Messages"></textarea>
              <label for="Messages">Leave a message here</label>
            </div>
            <base-button btnstyle='main'>send message</base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'
import odometer from "odometer"
import 'odometer/themes/odometer-theme-default.css';


export default {
  components: {
    Carousel,
    Slide,
    Pagination
    },
  data () {
    return{
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        wrapAround: true,
        autoplay: 5000,
        transition: 600,
        pauseAutoplayOnHover: true
      },
      breakpoints: {
        768: {
          itemsToShow: 1,
          snapAlign: 'start'
        },
        1024: {
          itemsToShow: 1,
          itemsToScroll: 1,
          snapAlign: 'start'
        }
      },
      slides:{
        s1:{
          id: 1,
          name: 'Jamal Ali',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae totam corporis asperiores, id rerum quod officia, dolor ducimus earum doloremque ipsa vel, debitis dolorem, laudantium! In veritatis a, atque!',
          com: 'themeforest.net'
        },
        s2:{
          id: 2,
          name: 'Nabil Dirar',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae totam corporis asperiores, id rerum quod officia, dolor ducimus earum doloremque ipsa vel, debitis dolorem, laudantium! In veritatis a, atque!',
          com: 'envato.com'
        },
        s3:{
          id: 3,
          name: 'Moussa Silla',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae totam corporis asperiores, id rerum quod officia, dolor ducimus earum doloremque ipsa vel, debitis dolorem, laudantium! In veritatis a, atque!',
          com: 'codecanyon.com'
        }
      },
      isotope: null,
    }
  },
  methods:{
    filterimgs (sort) {
      const filterbtns = document.querySelectorAll('.filters span')
      filterbtns.forEach((btn) =>{
        btn.classList.remove('active')
      })

      const activeButton = Array.from(filterbtns).find((btn) => btn.dataset.sort === sort);
      if (activeButton) {
        activeButton.classList.add('active');
      }

      if (this.isotope) {
        this.isotope.arrange({filter: sort});
      }
      this.isotope.layout();
      this.$ScrollTrigger.refresh()
    },
    initIsotope () {
      const container = this.$refs.isotopeContainer

      this.isotope = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
      });
    },
    gaspAnimation () {
      // sec1-animation-start
        new this.$SplitType('#split')
        new this.$SplitType('#main-pp')

      // sec1-animation-end

      // aboutus-animation-start
        const tl2 = this.$gsap.timeline({
          scrollTrigger: {
            trigger: '.aboutus',
            start: 'top center',
            end: 'center center',
            scrub: false,
            markers: false,
            toggleActions: 'play none none complete',
          }
        })
        
        tl2.from('.main-header .char', {
          y: 20,
          stagger: 0.05,
          duration: .5,
          opacity: 0,
          ease: 'back.out(1.7)',
        })
        .from('.aboutus .main-p .char', {
          y: 20,
          stagger: 0.03,
          duration: .3,
          opacity: 0,
          ease: 'back.out(1.7)',
        })
        .from('.aboutsvg', {
          opacity: 0,
          x: -100,
          ease: 'back.out(1.7)',
          duration: 0.8
        }, 0)
      

        this.$ScrollTrigger.batch('.aboutus .aboutus-card', {
          markers: false,
          start: '-150 center',
          onEnter: batch => this.$gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: 'back.out(1.7)'
          }),
          onLeaveBack: batch => this.$gsap.to(batch, {
            y: 100,
            stagger: 0.2,
            duration: 0.5,
            autoAlpha: 0,
            ease: 'back.in(1.7)'
          })
        })
      // aboutus-animation-end
      // portfolio-animation-start

      new this.$SplitType('#portheader')
      new this.$SplitType('#portp')

      const tl3 = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.portfolio',
          start: 'top center',
          end: 'center center',
          scrub: false,
          markers: false,
          toggleActions: 'play none none complete',
        }
      })
        
        tl3.from('.portfolio .main-header .char', {
          y: 20,
          stagger: 0.05,
          duration: .5,
          opacity: 0,
          ease: 'back.out(1.7)',
        })
        .from('.portfolio .main-p .char', {
          y: 20,
          stagger: 0.03,
          duration: .3,
          opacity: 0,
          ease: 'back.out(1.7)',
        }, 0)

      // portfolio-animation-end
      // services-animation-start

        new this.$SplitType('#servheader')
        new this.$SplitType('#servp')

        const tl4 = this.$gsap.timeline({
          scrollTrigger: {
            trigger: '.services',
            start: 'top center',
            end: 'center center',
            scrub: false,
            markers: false,
            toggleActions: 'play none none complete',
          }
        })
          
        tl4.from('.services .main-header .char', {
          y: 20,
          stagger: 0.05,
          duration: .5,
          opacity: 0,
          ease: 'back.out(1.7)',
        })
        .from('.services .main-p .char', {
          y: 20,
          stagger: 0.03,
          duration: .3,
          opacity: 0,
          ease: 'back.out(1.7)',
        }, 0)

        this.$ScrollTrigger.batch('.services .aboutus-card', {
          markers: false,
          start: '-150 center',
          onEnter: batch => this.$gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: 'back.out(1.7)'
          }),
          onLeaveBack: batch => this.$gsap.to(batch, {
            y: 100,
            stagger: 0.2,
            duration: 0.5,
            autoAlpha: 0,
            ease: 'back.in(1.7)'
          })
        })

        const rowHeight = document.querySelector('.services .row').offsetHeight 
        this.$gsap.to('.shap', {
          y: rowHeight * .8,
          scrollTrigger: {
            trigger: '.services .row',
            scrub: 5,
            start: 'top center',
            end: '80% center',
          }
        })

        this.$ScrollTrigger.create({
          trigger: '.services .status',
          start: 'bottom bottom',
          end: 'bottom center',
          onToggle: () => {
            const nums = document.querySelectorAll('.status .state .num')
            nums.forEach((num) => {
              num.innerHTML = num.dataset.numm
            })
          }
        })
      // services-animation-end
      // pricing-animation-start

        new this.$SplitType('#pricheader')
        new this.$SplitType('#pricp')

        const tl5 = this.$gsap.timeline({
          scrollTrigger: {
            trigger: '.pricing',
            start: 'top center',
            end: 'center center',
            scrub: false,
            markers: false,
            toggleActions: 'play none none complete',
          }
        })
          
        tl5.from('.pricing .main-header .char', {
          y: 20,
          stagger: 0.05,
          duration: .5,
          opacity: 0,
          ease: 'back.out(1.7)',
        })
        .from('.pricing .main-p .char', {
          y: 20,
          stagger: 0.03,
          duration: .3,
          opacity: 0,
          ease: 'back.out(1.7)',
        }, 0)

      // pricing-animation-end
    }
  }, 
  mounted () {
    const content = document.querySelector('.portfolio')

    const imgload = imagesLoaded(content)

    imgload.on('done', () => {
      this.initIsotope()
      this.filterimgs('*')
    })

    const els = document.querySelectorAll('.odometer')
    
    els.forEach((ele) => {

      new odometer({
        el: ele,
        value: 0
      })

      this.$ScrollTrigger.create({
        trigger: '.odometer',
        start: 'bottom center',
        onToggle: () => {
          ele.innerHTML = ele.dataset.numm
        }
      })

    })


    this.gaspAnimation()
  }
}
</script>

<style lang="scss" scoped>
.home{
  @media (max-width: 769px) {
    .sec1{
      padding: 0px 0 80px !important;
    }
  }
  .white-space{
    position: relative;
    height: 80px;
  }
  .sec1{
    padding: 0px 0 150px;
    overflow: hidden;
    &::before{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100% ;
      background-image: url('../../imgs/bg-intro.png');
      background-repeat: no-repeat;
      background-position: top right;
      background-size: 58%;
      z-index: -1;
    }
    .sec1-content{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 40px;
      .img-container{
        opacity: 0;
        transform: translateX(95px);
        img{
          max-width: 100%;
          width: 490px;
          height: 460px;
          border-radius: 30px;
        }
      }
      .text-container{
        .gsaap{
          opacity: 0;
          transform: translateX(-95px);
        }
        .tx1{
          display: flex;
          align-items: center;
          margin: 40px 0 10px;
          span:first-of-type{
            display: block;
            width: 60px;
            height: 2px;
            background-color: #614cab;
            margin-right: 15px;
          }
          span:last-of-type{
            color: black;
            font-size: 20px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 2px;
          }
        }
        .tx2{
          @media (max-width: 1200px) {
            span{
              font-size: 80px !important;
              line-height: 100px !important;
            }
          }
          @media (max-width: 769px) {
            span{
              font-size: 60px !important;
              line-height: 70px !important;
            }
          }
          span{
            font-size: 102px;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 120px;
            -webkit-text-fill-color:  transparent;
            -webkit-text-stroke-color: #614cab ;
            -webkit-text-stroke-width: 2px ;
            letter-spacing: 0.9px;
          }
        }
        .btns{
          margin-top: 25px;
        }
      }
    }
  }
  .aboutus{
    background-color: #f4f4f6;
    padding: 90px 0 100px;
    position: relative;
    .main-header,
    .main-p{
      position: relative;
      z-index: 1;
    }
    .aboutus-card{
      z-index: 1;
      opacity: 0;
      transform: translateY(100px);
    }
    .aboutsvg{
      position: absolute;
      top: 0;
      left: -80px;
      width: 400px;
      height: 400px;
      z-index: 0;
    }
  }
  .basecard{
    margin: 0 10px;
  }
  .portfolio{
    padding: 90px 0 100px;
  .filters{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;

    margin-bottom: 30px;
    span{
      display: block;
      text-transform: uppercase;
      padding: 10px 20px;
      margin: 0 10px;
      color: #444444;
      border: 1px solid #614cab;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 600;
      transition-duration: 0.3s;
      &:hover{
        cursor: pointer;
        background-color: #d6c6ff;
        // color: white;
      }
      &.active{
        color: white;
        background-color: #614cab;
      }
    }
  }
  .content{
    .img-container{
      margin-bottom: 25px;
      img{
        max-width: 100%;
        border-radius: 10px;
      }
    }
  }
  }
  .services{
    padding: 90px 0 100px;
    background-color: #f4f4f6;
    position: relative;
    @media (max-width: 767px){
      .status{
        flex-direction: column;
      }
    }
    .shap{
      position: absolute;
      top: 100px;
      left: -170px;
      width: 300px;
      height: 300px;
      background-color: #b9a5c1;
      border-radius: 30px;
      transform: rotate(45deg);
    }
    .main-p,
    .main-header{
      position: relative;
      z-index: 1;
    }
    .aboutus-card{
      z-index: 1;
      opacity: 0;
      transform: translateY(100px);
    }
    .status{
      margin: 60px 0 10px;
      padding: 60px 0;
      background-color: white;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;
      .state{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        z-index: 1;
        .num{
          color: #614cab;
          font-size: 58px;
          font-weight: 700;
        }
        .title{
          color: #8A8A8A;
          font-size: 24px;
          font-weight: 600;
        }
        &:first-of-type{
        @media (max-width: 767px) {
          &::before{
            background-size: 25% !important;
          }
        }
          &::before{
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-image: url('../../imgs/bg-service3.png');
            background-position: bottom right;
            background-size: 10%;
            background-repeat: no-repeat;
            z-index: 0;
          }
        }
      }
      @media (max-width: 767px) {
        &::before{
          background-size: 50% !important;
        }
      }
      &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('../../imgs/bg-service1.png');
        background-position: bottom left;
        background-size: 25%;
        background-repeat: no-repeat;
        z-index: 0;
      }
      @media (max-width: 767px) {
        &::after{
          background-size: 50% !important;
          right: 5% !important;
        }
      }
      &::after{
        content: '';
        position: absolute;
        top: 0;
        right: 20%;
        width: 100%;
        height: 100%;
        background-image: url('../../imgs/bg-service2.png');
        background-position: top right;
        background-size: 25%;
        background-repeat: no-repeat;
        z-index: 0;
      }
    }
  }
  .pricing{
    padding: 90px 0 100px;
    .row{
      .plane{
        padding: 35px 0 45px;
        background-color: #F9F8FC;
        border-radius: 10px;
        text-align: center;
        color: white;
        position: relative;
        &.esp{
          background-color: #614cab;
          color: white;
          .title{
            color: white;
          }
          .price{
            color: white;
          }
          .props{
            span{
              color: #AAAAAA;
              &.avail{
                color: white;
              }
            }
          }
        }
        .title{
          color: black;
          font-size: 24px;
          font-weight: 600;
          text-transform: capitalize;
          margin-bottom: 8px;
        }
        .price{
          color: #614cab;
          font-size: 38px;
          margin: 0 14px;
          font-weight: 700;
        }
        .props{
          span{
            display: block;
            margin-bottom: 15px;
            color: #DDDDDD;
            font-size: 19px;
            font-weight: 600;
            text-transform: capitalize;
            &.avail{
              color: #8A8A8A;
            }
          }
        }
        .btn{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 25px);
        }
      }
    }
  }
  .comments{
    padding: 90px 0 100px;
    background-color: #f4f4f6;
      .carousel__pagination-button::after{
        width: 15px !important;
        height: 15px !important;
        border-radius: 50% !important;
      }
  }
  .contact{
    padding: 90px 0 100px;
      .info{
        .head{
          .titlef{
            margin-bottom: 15px;
            font-size: 20px;
            font-weight: 500;
          }
          .title{
            margin: 35px 0 15px;
            font-size: 20px;
            font-weight: 500;
          }
          .text{
            color: #8A8A8A;
            font-size: 16px;
            margin-bottom: 16px;
            font-weight: 500;
          }
        }
      }
      .inputs{
        display: flex;
        flex-direction: column;
        .personal{
          display: flex;
          .form-floating{
            width: 100%;
            &:first-of-type{
              margin-right: 10px;
            }
          }
        }
        input,
        textarea{
          &:focus{
            box-shadow: none;
            border-color: black;
          }
        }
        textarea{
          height: 200px;
          margin-bottom: 30px;
        }
        button{
          width: fit-content;
          margin: auto;
        }
      }
  }
  }
</style>