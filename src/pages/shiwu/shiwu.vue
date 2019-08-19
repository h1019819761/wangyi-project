<template>
  <div id="shiwu">
    <!--头部-->
    <div class="g-fl-header">
      <div class="g-fl-header1">
        <div class="g-fl-header1-1">
        
          <a class="logo" href="##">
            <img src="../../common/images/333.png" alt="">
          </a>
          <div class="g-fl-header1-2">
            <p>前往APP领1000元新用户现金礼包</p>
            <p>网易自营 品质生活</p>
          </div>
          <button class="openbtn">打开APP</button>
        </div>
      </div>
      <div class="g-fl-header2">
        <div class="g-fl-header2-1">
          <i class="iconfont icon-icon_home" @click="$router.push('/home')"></i>
          <a href="##">
            <span class="faxian">发现</span>
            <span class="faxian2">甄选家</span>
          </a>
          <p>
            <i class="iconfont icon-search" @click="$router.push('/search')"></i>
            <i class="iconfont icon-gouwuche" @click="$router.push('/shop')"></i>
          </p>

        </div>
      </div>
    </div>
    <!--导航nav-->
    <div class="shopNav">
      <div class="shopNav-wrap">
        <ul class="shopNav-list">
          <li class="shopNav-item active" >盛夏特别版</li>
          <li class="shopNav-item">盛别版</li>
          <li class="shopNav-item">盛夏特别版</li>
          <li class="shopNav-item">夏特别版</li>
          <li class="shopNav-item">盛别版</li>
          <li class="shopNav-item">盛夏特别版</li>
          <li class="shopNav-item">夏特别版</li>
          <li class="shopNav-item">盛别版</li>
          <li class="shopNav-item">盛夏特别版</li>
          <li class="shopNav-item">夏特别版</li>
        </ul>
      </div>
    </div>
    <!--实物-->
    <div class="shop-Nav">
      <div class="shop-Nav-wrap">
        <ul class="shop-Nav-list">
          <li class="shop-Nav-item active" >
            <div class="shop-Nav-item-1">
              <p class="shop-Nav-item-1-1">
                <img src="https://yanxuan.nosdn.127.net/15639572098632760.jpeg" alt="">
              </p>
              <p class="shop-Nav-item-1-2">
                <img src="https://yanxuan.nosdn.127.net/15656868015315337.jpg?_width=750&_height=344" alt="">
              </p>
            </div>
          </li>
          <li class="shop-Nav-item">
            <div>
              <p>
                <img src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt="">
              </p>
            </div>
          </li>
          <li class="shop-Nav-item">
            <div class="shop-Nav-item-3">
              <div class="shop-Nav-item-3-1">
                <div class="shop-Nav-item-3-list">
                  <ul class="list">
                    <li>
                      <img src="https://mimg.127.net/hz/uploader/20190802/15647346338570519.jpg" alt="">
                    </li>
                  </ul>
                </div>
              </div>
              <div class="shop-Nav-item-3-2">
                <div class="shop-Nav-item-3-wrap">
                  <ul class="shop-Nav-item-3-list">
                    <li class="shop-Nav-item-3-item">
                      <img src="https://yanxuan.nosdn.127.net/15640230745743338.png?quality=95&thumbnail=130x130&imageView" alt="">
                    </li>
                    <li class="shop-Nav-item-3-item">
                      <img src="https://yanxuan-item.nosdn.127.net/bd2842f9eda908dae2d71f980eeb282e.png?quality=95&thumbnail=130x130&imageView" alt="">
                    </li>
                    <li class="shop-Nav-item-3-item">
                      <img src="https://yanxuan.nosdn.127.net/5132df203926107422afc38bafe497fc.png?quality=95&thumbnail=130x130&imageView" alt="">
                    </li>
                    <li class="shop-Nav-item-3-item">
                      <img src="https://yanxuan-item.nosdn.127.net/6e05a3a46a46a34e7fa5b86c122a0787.png?quality=95&thumbnail=130x130&imageView" alt="">
                    </li>
                    <li class="shop-Nav-item-3-item">
                      <img src="https://yanxuan.nosdn.127.net/dd9f32a52bd9c4a8b21861406bb8545a.png?quality=95&thumbnail=130x130&imageView" alt="">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="shop-Nav-item">夏特别版</li>
          <li class="shop-Nav-item">盛别版</li>
          <li class="shop-Nav-item">盛夏特别版</li>
          <li class="shop-Nav-item">夏特别版</li>
          <li class="shop-Nav-item">盛别版</li>
          <li class="shop-Nav-item">盛夏特别版</li>
          <li class="shop-Nav-item">夏特别版</li>
        </ul>
      </div>
    </div>
    
    <!--登录方式-->
    
    </div>
  
  
  
</template>

<script type="text/ecmascript-6">

  import BScroll from "better-scroll"
  export default {
    mounted(){
      this.$nextTick(()=>{
         this.aBScroll2 = new BScroll('.shopNav-wrap',{
            scrollX: true,
            scrollY: true
          }),
          this.aBScroll3 = new BScroll('.shop-Nav-wrap',{
            scrollX: true,
            scrollY: true
          })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import "../../common/stylus/mixins.styl"
  #shiwu
    position fixed
    left 0
    top 0
    display flex
    flex-direction column
    justify-content left 
    align-items center
    width: 100%
    height 100%
    // background: #bfa;
    .g-fl-header
      width rem(750)
      height rem(192)
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      color #cccccc
      .g-fl-header1
        width: 100%
        height: rem(104)
        .g-fl-header1-1
          width: rem(750)
          height rem(104)
          // background: #000;
          box-sizing border-box
          padding 0 rem(20)
          display flex
          justify-content space-around
          align-items center
          .logo
            width rem(72)
            height rem(72)
            color #cccccc
            img
              width rem(72)
              height rem(72)
            
          .g-fl-header1-2
            height: 100%
            margin-left rem(-20)
            font-size rem(26)
            display flex
            flex-direction column
            justify-content center
            p
              padding rem(4)
          .openbtn
            width: rem(138);
            height rem(52)
            background: #B4282D;
            color #fff
            border none
            font-size rem(26)
      .g-fl-header2
        width: rem(750)
        height rem(87.98)
        box-sizing border-box
        background #ededed
        padding rem(15) rem(20)
        .g-fl-header2-1
          width: 100%
          height: 100%
          display flex
          justify-content space-between
          align-items center
          background: #ededed;
          border-radius rem(5)
          .iconfont
            font-size rem(58)
            color #333333
          a
            width: rem(95*2);
            height: rem(27*2)
            margin-left  rem(100)
            display flex
            justify-content center
            align-items center
            .faxian
              color #b4282d
              font-size rem(40)
              margin-right rem(20)
              font-weight bold
            .faxian2
              color #333
              font-size rem(28)
    .shopNav
      width 100%
      height rem(36*2)
      background #bfa
      .shopNav-wrap
        position relative
        width 100%
        height 100%
        overflow hidden
        .shopNav-list
          height 100%
          position absolute
          left 0
          top 0
          display flex
          flex-wrap nowrap
          justify-content left 
          align-items center
          .shopNav-item
            height 100%
            padding 0 rem(20)
            line-height rem(36*2)
            font-size rem(30)
            white-space nowrap
            &.active
              border-bottom rem(2) solid #b4282d
              color #b4282d
              font-weight bold
    .shop-Nav
      width 100%
      height 100%
      background #4f4f4f
      .shop-Nav-wrap
        position relative
        width 100%
        height 100% 
        background green  
        overflow hidden
        .shop-Nav-list
          position absolute
          left 0
          top 0
          width 100%
          .shop-Nav-item
            width 100%
            height rem(297.5*2)
            border rem(1) solid red
    .shop-Nav-item
      width 100%
      height rem(302*2)
      .shop-Nav-item-3
        width 100%
        height 100%
        .shop-Nav-item-3-1
          width 100%
          height rem(225*2)
          .shop-Nav-item-3-list
            position relative
            width 100%
            height 100%
            .list
              position absolute
              left 0
              top 0
              height 100%
              li
                height 100%
                width rem(375*2)
                img
                  height 100%
                  width rem(375*2) 
        .shop-Nav-item-3-2
          width 100%
          height 100%
          .shop-Nav-item-3-wrap
            position relative
            width 100%
            height 100%
            overflow hidden
            .shop-Nav-item-3-list
              position absolute
              left 0
              top 0
              height 100%
              display flex
              flex-wrap nowrap

              .shop-Nav-item-3-item
                width rem(63*2)
                height rem(63*2)
                margin rem(8) rem(4)
                background #fff
                img
                  width 100%
                  height 100%
</style>
