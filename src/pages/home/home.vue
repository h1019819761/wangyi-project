<template>
  <div>
    <div id="g-bd"  >
    <!--头部-->
    <div class="header">
      <div class="header-input">
        <h1>网易严选</h1>
        <div class="header-input1" @click="$router.push('./search')">
          <i class="iconfont icon-search"></i>
          <span class="placeholder" >搜索商品, 共21615款好物</span>
        </div>
        <button class="btn" @click="$router.push('/geren')">登录</button>
      </div>
      <div class="header-nav bscroll">
        <div class="header-nav2 bscroll-container"  ref="bscroll">
          <ul class="header-nav-list">
            <li class="header-nav-item">
              <span>推荐</span>
            </li>
            <li class="header-nav-item on" >
              <span>居家生活</span>
            </li>
            <li class="header-nav-item">
              <span>服饰鞋帽</span>
            </li>
            <li class="header-nav-item">
              <span>美食酒水</span>
            </li>
            <li class="header-nav-item ">
              <span>美食酒水</span>
            </li>
            <li class="header-nav-item">
              <span>美食酒水</span>
            </li>
            <li class="header-nav-item">
              <span>美食酒水</span>
            </li>
             <li class="header-nav-item">
              <span>服饰鞋帽</span>
            </li>
            <li class="header-nav-item">
              <span>美食酒水</span>
            </li>
            <li class="header-nav-item ">
              <span>美食酒水</span>
            </li>
          </ul>
        </div>

        <div class="header-nav-list2">
          <span><i class="iconfont icon-search"></i></span>
        </div>

      </div>
    </div>
    <!--轮播-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--导航-->
    <div class="nav">
      <ul class="g-grow" data-reactid=".0.2.0">
        <li class="item" data-reactid=".0.2.0.$0">
          <a data-reactid=".0.2.0.$0.0">
            <i class="u-icon u-icon-servicePolicy-index" style="background-image:url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);" data-reactid=".0.2.0.$0.0.0"></i>
            <span class="text" data-reactid=".0.2.0.$0.0.1">
              网易自营品牌
            </span>
          </a>
        </li>
        <li class="item" data-reactid=".0.2.0.$1">
          <a data-reactid=".0.2.0.$1.0">
            <i class="u-icon u-icon-servicePolicy-index" style="background-image:url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);" data-reactid=".0.2.0.$1.0.0"></i>
            <span class="text" data-reactid=".0.2.0.$1.0.1">
              30天无忧退货
            </span>
          </a>
        </li>
        <li class="item" data-reactid=".0.2.0.$2">
          <a data-reactid=".0.2.0.$2.0">
            <i class="u-icon u-icon-servicePolicy-index" style="background-image:url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);" data-reactid=".0.2.0.$2.0.0"></i>
            <span class="text" data-reactid=".0.2.0.$2.0.1">
              48小时快速退款
            </span>
          </a>
        </li>
      </ul>
    </div>
    <!--商品列表-->
    <ul class="shopList">
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>
      <li class="shopItem">
        <a href="##">
          <img class="shopItem-img" src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
          <span class="shopItem-name">新品首发</span>
        </a>
      </li>

    </ul>
    <!--抢购-->
    <div class="qianggou">
      <a href="##">
        <img src="https://yanxuan.nosdn.127.net/a55393ea2c010bd73f0666e2ffca8d55.gif" alt="">
      </a>
    </div>
    <!--福利-->
    <ul class="fuli">
      <li class="fuli-item">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="tupian">
          <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
      </li>
      <li class="fuli-item">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="tupian">
          <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
      </li>
      <li class="fuli-item">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="tupian">
          <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
      </li>
      <li class="fuli-item">
        <p>9.9超值专区首发</p>
        <p>180款爆品新定价</p>
        <div class="tupian">
          <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
      </li>
    </ul>
    <!--私人定制-->
    <div class="sirendingzhi">
      <div class="sirendingzhi1">私人订制</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--限时购-->
    <div class="xianshigou">
      <div class="xianshigou1">

        <div>
          <span>限时购</span>
          <span>02</span>:
          <span>02</span>:
          <span>02</span>
        </div>
        <div class="genduo">
          <span>更多</span>
          <i class="iconfont icon-jiantou4"></i>
        </div>
      </div>
      <ul class="jiage">
        <li class="jiageItem">
          <img src="https://yanxuan-item.nosdn.127.net/ff2bef1d8b56a0c231e2f33e622c8abf.png?imageView&thumbnail=216x216&quality=75" alt="">
          <p>
            <span>￥130</span>
            <del>￥220</del>
          </p>
        </li>
        <li class="jiageItem">
          <img src="https://yanxuan-item.nosdn.127.net/ff2bef1d8b56a0c231e2f33e622c8abf.png?imageView&thumbnail=216x216&quality=75" alt="">
          <p>
            <span>￥130</span>
            <del>￥220</del>
          </p>
        </li>
        <li class="jiageItem">
          <img src="https://yanxuan-item.nosdn.127.net/ff2bef1d8b56a0c231e2f33e622c8abf.png?imageView&thumbnail=216x216&quality=75" alt="">
          <p>
            <span>￥130</span>
            <del>￥220</del>
          </p>
        </li>
        <li class="jiageItem">
          <img src="https://yanxuan-item.nosdn.127.net/ff2bef1d8b56a0c231e2f33e622c8abf.png?imageView&thumbnail=216x216&quality=75" alt="">
          <p>
            <span>￥130</span>
            <del>￥220</del>
          </p>
        </li>
        <li class="jiageItem">
          <img src="https://yanxuan-item.nosdn.127.net/ff2bef1d8b56a0c231e2f33e622c8abf.png?imageView&thumbnail=216x216&quality=75" alt="">
          <p>
            <span>￥130</span>
            <del>￥220</del>
          </p>
        </li>
        <li class="jiageItem">
          <img src="https://yanxuan-item.nosdn.127.net/ff2bef1d8b56a0c231e2f33e622c8abf.png?imageView&thumbnail=216x216&quality=75" alt="">
          <p>
            <span>￥130</span>
            <del>￥220</del>
          </p>
        </li>
      </ul>
    </div>
    <!--生活-->
    <div class="shenghuo">
      <a class="bannder" href="##" >
        <img src="https://yanxuan.nosdn.127.net/f377290320aac364e5984ce70f6baaea.jpg?imageView&thumbnail=750x0&quality=75" alt="">
      </a>
      <div class="shenghuo-list">
        <ul class="shenghuo-list1">
          <li class="shenghuo-item">
            <img src="https://yanxuan-item.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="jia-ge">
              <p>109升大容量 满足全家出行</p>
              <span>￥444</span>
            </div>
          </li>
          <li class="shenghuo-item">
            <img src="https://yanxuan-item.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="jia-ge">
              <p>109升大容量 满足全家出行</p>
              <span>￥444</span>
            </div>
          </li>
          <li class="shenghuo-item">
            <img src="https://yanxuan-item.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="jia-ge">
              <p>109升大容量 满足全家出行</p>
              <span>￥444</span>
            </div>
          </li>
          <li class="shenghuo-item">
            <img src="https://yanxuan-item.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="jia-ge">
              <p>109升大容量 满足全家出行</p>
              <span>￥444</span>
            </div>
          </li>
        </ul>
      </div>


    </div>
    <!--公告-->
    <div class="gongao">
      <div class="xiazai">
        <a href="##" class="xiazai1">下载APP</a>
        <a href="##" class=" xiazai2">电脑版</a>
      </div>
      <div class="shengming">
        <p>
          <span>网易公司版权所有 © 1997-</span>
          <span>2019</span>
        </p>
        <p>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>
    <!--固定定位-->
    <a href="#g-bd" class="gotop"  >
      <i class="iconfont icon-jiantou3"></i>
    </a>
  </div>
  
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import BScroll from "better-scroll"
  export default {
    mounted(){
      
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })

          // let bscrollDom = this.$refs.bscroll;
          this.aBScroll = new BScroll('.header-nav2',{
            scrollX: true,
            scrollY: true
          })
           this.aBScroll = new BScroll('.shenghuo-list',{
            scrollX: true,
            scrollY: true
          })

        })


          
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
#g-bd
  width: 100%
  padding-top rem(156)
  padding-bottom  rem(100)
  background: #bfa;
  font-size rem(24)
  .header
    display flex
    flex-direction column
    width: 100%
    position fixed
    left: 0
    top: 0
    z-index 99
    background: #ccc;

    .header-input
      display flex
      justify-content center
      align-items center
      padding rem(20) rem(30)
      h1
        height rem(56)
        font-size rem(30)
        line-height rem(56)
        margin-right rem(16)
      .header-input1
        width rem(442.02)
        height rem(56)
        background #ededed
        text-align center
        line-height rem(56)
        font-size rem(27.98)
        .icon-search
          width rem(27.98)
          height rem(27.98)
          font-size rem(27.98)
        .placeholder
          color #666666
          font-size rem(27.9998)
      .btn
        width rem(74)
        height rem(39.98)
        color red
        border ren(1) solid red
        font-size rem(24)
        margin-left rem(16)


    .header-nav
      width 100%
      height rem(60)
      display flex
      overflow hidden
      z-index 200
      .header-nav2
        position relative
        width: 80%
        height: rem(60)
        white-space nowrap;
        overflow hidden
        .header-nav-list
          position absolute
          left 0
          top 0
          height: rem(60)
          background: #bfa;
          
          display flex
          flex-wrap nowrap
          
          .header-nav-item
            text-align center
            height rem(60)
            line-height rem(60)
            margin 0 rem(15)
            float left
            &.on
              color red
              background: orange
              border-bottom rem(20) solid black
      .header-nav-list2
        width 20%
        height: 100%
        text-align center
        span
          text-align center
          line-height rem(60)
          .icon-search
            font-size rem(24)
  .swiper-container
    width: 100%
    height rem(370)
    .swiper-wrapper
      height rem(370)
      position relative
      .swiper-slide
        width rem(750)
        height rem(370)
        a
          width: 100%
          height: 100%
          img
            width 100%
            height: 100%

  .nav
    width: 100%
    height rem(72)
    box-sizing border-box
    background: yellowgreen
    padding  0 rem(30)
    .g-grow
      width: 100%
      height 100%

      display flex
      justify-content space-around
      align-items center
      .item
        height 100%
        line-height rem(72)
        a
          display flex
          justify-content center
          align-items center
          .u-icon
            width rem(32)
            height rem(32)
            font-size rem(32)
            background-size rem(32) rem(32)
  .shopList
    width: 100%
    height rem(340.97)
    background: orange;
    display flex
    overflow hidden
    flex-wrap wrap
    .shopItem
      width 25%
      height rem(156)
      margin rem(10) rem(0)
      a
        width: 100%
        height: 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        .shopItem-img
          width rem(110)
          height rem(110)
        .shopItem-name
          font-size rem(24)
  .qianggou
    width: 100%
    height rem(126.66)
    a
      width: 100%
      height 100%
      img
        width 100%
        height: 100%
  .fuli
    width: 100%
    height rem(575.95)
    margin-bottom rem(20)
    display flex
    flex-wrap wrap
    background: #ccc;
    .fuli-item
      width 50%
      height 50%
      display flex
      flex-direction column
      justify-content center
      align-items center
  .sirendingzhi
    width: 100%
    height rem(469.97)
    background: #ccc
    .sirendingzhi1
      box-sizing border-box
      width: 100%
      height rem(100)
      padding 0 rem(20)
      line-height rem(100)

  .xianshigou
    width: 100%
    .xianshigou1
      box-sizing border-box
      padding 0 rem(20)
      width: 100%
      height rem(100)
      display flex
      justify-content space-between
      align-items center
    .jiage
      width: 100%
      height rem(598)
      background: #ccc;
      display flex
      flex-wrap wrap
      justify-content space-around

      .jiageItem
        width 30%
        height rem(269)
        background: #bfa;
        img
        p
          span
            color red
          del
            color #7f7f7f
            font-size rem(24)


  .shenghuo
    width rem(750)
    background: #fff;
    .bannder
      width 100%
      height rem(370)
      background-size 100% rem(370)
    .shenghuo-list
      position relative
      width 100%
      height rem(391)
      overflow hidden

      .shenghuo-list1
        position  absolute
        left 0
        top 0
        height 100%
        display flex
        .shenghuo-item
          width rem(200)
          height rem(361)
          display flex
          flex-direction column
          justify-content center
          align-items center
          padding-left rem(10)
          img
            width rem(200)
            height rem(200)
            padding-bottom rem(11)
  .gongao
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    width: 100%
    height rem(243.98)
    box-sizing border-box
    padding rem(54) rem(20) rem(20) rem(25)
    background black
    .xiazai
      width 100%
      display flex
      justify-content center
      align-items center
      .xiazai1
        width rem(172)
        height rem(62)
        text-align center
        line-height rem(62)
        color aliceblue
        border rem(1) solid #333
        margin-right rem(50)
      .xiazai2
        width rem(172)
        height rem(62)
        text-align center
        line-height rem(62)
        color aliceblue
        border rem(1) solid #333
    .shengming
      width 100%
      height rem(64)
      display flex
      flex-direction column
      justify-content space-between
      align-items center
      color #ccc
  .gotop
    position fixed
    right rem(25)
    bottom rem(150)
    width rem(82)
    height rem(82)
    border-radius 50%
    background: rgba(100,100,100,.5);
    text-align center
    line-height rem(82)
    .icon-jiantou3
      font-size rem(30)
      color #cccccc

   
</style>
