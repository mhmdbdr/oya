<template>
  <div class="loading-screen">
    <div class="frames-container">
      <div class="frame"></div>
      <div class="frame"></div>
      <div class="frame"></div>
      <div class="frame"></div>
    </div>
    <div class="loading-dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
  <The-Header></The-Header>
    <router-view/>
  <The-Footer></The-Footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader'
import TheFooter from './components/layout/TheFooter'

export default {
  data () {
    return{
      donemounted: false
    }
  },
  components: {
  TheHeader,
  TheFooter
  },
  methods: {
    gsapAnimation () {
      const tl = this.$gsap.timeline()
      const mm = this.$gsap.matchMedia()

      mm.add({
        mobile: '(max-width: 990px)',
        desktop: '(min-width: 768px)'
      }, (context) =>{
        let {mobile} = context.conditions

        tl
        .to('.loading-dots', {
          opacity: 0,
          scale: 0,
          delay: 1
        })
        .to('.frame', {
          scaleY: 0,
          stagger: 0.3,
          ease: 'power3.out',
          onComplete: () => {
            document.querySelector('.loading-screen').style.display = 'none'

            const tl2 = this.$gsap.timeline()
            tl2
            .to('.sec1 .img-container', {
              x: 0,
              duration: mobile? 0 : 1,
              stagger: 0.3,
              opacity: 1,
              })
            .to('.gsaap', {
              x: 0,
              duration: 1,
              stagger: 0.3,
              opacity: 1
            }, '0.2')
          }
        })
        
      })
    }
  },
  mounted () {
    this.gsapAnimation()
  }
}
</script>

<style lang="scss">
// vue-3-carousel-root-value edited for my Pagination-start
  :root {
    --vc-pgn-width: 15px !important;
    --vc-pgn-height: 15px !important;
    --vc-pgn-border-radius: 50% !important;
    --vc-pgn-active-color: #614cab !important;
  }
  .carousel__pagination-button::after{
    transition-duration: 0.3s;
  }
// vue-3-carousel-root-value edited for my Pagination-end
  body{
    &::-webkit-scrollbar{
    width: 20px;
    }
    &::-webkit-scrollbar-thumb{
      background-color: #bbb9b9;
      border-radius: 10px;
      border-left: 4px solid #f6f6f6;
      border-right: 4px solid #f6f6f6;
      &:hover{
        background-color: #8d8b8b;
      }
    }
    &::-webkit-scrollbar-track{
      background-color: #f6f6f6;
      margin:  5px 0;
    }
    margin: 0;
    padding: 0;
    color: black;
  //   &.stop-scrolling{
  //   height: 100%;
  //   width: 100%;
  //   overflow: hidden;
  // }
    ul,
    ol{
      list-style: none;
      margin: 0;
      padding: 0;
      li{
      }
    }
    .main-header{
      text-align: center;
      span{
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 15px;
        color: #614cab;
      }
    }
    .main-p{
      font-size: 35px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 50px;
      span{
        text-transform: capitalize;
        -webkit-text-fill-color:  transparent;
        -webkit-text-stroke-color: #614cab ;
        -webkit-text-stroke-width: 2px ;
      }
    }
  }
  .loading-screen{
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1001;
  .frames-container{
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    .frame{
      height: 100vh;
      flex: 1;
      transform-origin: top;
      background-color: #7360DF;
    }
  }
  .loading-dots{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1001;
    transform: translate(-50%,-50%);
    display: flex;
    transform-origin: center;
    .dot{
      display: block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: white;
      margin: 0 10px;
      z-index: 2001;
      animation-name: dot-animation;
      animation-duration: .3s;
      animation-iteration-count: infinite;
      animation-direction: alternate-reverse;
      &:nth-of-type(2){
        animation-delay: .1s;
      }
      &:nth-of-type(3){
        animation-delay: .2s;
      }
    }
  }
}
  @keyframes dot-animation {
  0% {
  }
  100% {
    transform: translateY(-20px)
  }
}
</style>
