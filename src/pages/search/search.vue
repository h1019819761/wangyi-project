<template>
  <div id='search'>
     <div class="g-fl-header">
        <div class="g-fl-header1">
          <div class="g-fl-header1-1">
            <!--<img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png" alt="">-->
            <a class="logo" href="##"></a>
            <div class="g-fl-header1-2">
              <p>前往APP领1000元新用户现金礼包</p>
              <p>网易自营 品质生活</p>
            </div>
            <button class="openbtn">打开APP</button>
          </div>
        </div>
        <div class="g-fl-header2">
          <div class="g-fl-header2-1">
            
            <i class="iconfont icon-search "></i>
            <!-- <span class="placeholder">搜索商品, 共21572款好物</span> -->
            <input type="text" placeholder="搜索商品, 共21572款好物" class="placeholder">
          </div>
          <div class="g-fl-header2-2" @click="$router.back()">取消</div>
        </div>
      </div>
      <div class="hotSearch">
        <div class="hotSearch-top">
          <div class="wenzi">热门搜索</div>
          <ul class="hotSearch-buttom">
            <li class="hotSearch-buttom-item"><p href="##">爆款 行李箱</p></li>
            <li class="hotSearch-buttom-item"><p href="##">香氛牙膏 谈吐芳香</p></li>
            <li class="hotSearch-buttom-item"><p href="##">轻弹云朵拖鞋9.9元</p></li>
            <li class="hotSearch-buttom-item active"><p href="##">中秋月饼 上新热卖</p></li>
            <li class="hotSearch-buttom-item active"><p href="##">韩国造 睡眠喷雾</p></li>
            <li class="hotSearch-buttom-item"><p href="##">百搭帆布鞋89元起</p></li>
            <li class="hotSearch-buttom-item"><p href="##">杯子</p></li>
            <li class="hotSearch-buttom-item"><p href="##">爆款 行李箱</p></li>
            <li class="hotSearch-buttom-item"><p href="##">香氛牙膏 谈吐芳香</p></li>
            <li class="hotSearch-buttom-item"><p href="##">轻弹云朵拖鞋9.9元</p></li>
            <li class="hotSearch-buttom-item"><p href="##">中秋月饼 上新热卖</p></li>
            <li class="hotSearch-buttom-item"><p href="##">韩国造 睡眠喷雾</p></li>
            <li class="hotSearch-buttom-item"><p href="##">百搭帆布鞋89元起</p></li>
            <li class="hotSearch-buttom-item"><p href="##">杯子</p></li>
            
          </ul>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
#search
  position relative
  width 100%
  height 100%
  background #ccc
  padding rem(192) 0 rem(100)
  box-sizing border-box
  overflow hidden

  // .kong
  //   width 100%
  //   height rem(192)
  .g-fl-header
    position fixed
    left 0
    top 0
    width: rem(750)
    height rem(192)
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    color #cccccc
    z-index 90
    .g-fl-header1
      width: 100%
      height: rem(104)
      .g-fl-header1-1
        width: rem(750)
        height rem(104)
        background: #000;
        box-sizing border-box
        padding 0 rem(20)
        display flex
        justify-content space-around
        align-items center
        .logo
          width rem(72)
          height rem(72)
          color #cccccc
          background:  url(../../common/images/111.png) 0 0 no-repeat;
          background-position: 0 -3.65333rem;
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
      display flex
      justify-content space-around
      align-items center
      background #ededed
      padding rem(15) rem(20)
      .g-fl-header2-1
        position relative
        width: 100%
        height: 100%
        display flex
        justify-content center
        align-items center
        background: #ededed;
        border-radius rem(5)
      .g-fl-header2-2
        font-size rem(30)
        color #333
        white-space nowrap
        margin-left rem(70)
      .icon-search
        font-size rem(35)
        padding-right rem(20)
      .placeholder
        font-size rem(35)
        color #333333
        padding-left rem(50)
        height rem(60)
      .icon-search
        position absolute
        left rem(50)
        top rem(10)
        
  .hotSearch
    width 100%
    display flex
    flex-direction column
    justify-content left 
    align-items center
    box-sizing border-box
    padding 0  rem(30) rem(30)
    .hotSearch-top
      width 100%
      
      background #bfa
      .wenzi
        width 100%
        height rem(90) 
        color #333
        font-size rem(41)
        line-height rem(90)
    .hotSearch-buttom
      width 100%
      display flex
      flex-wrap wrap
      .hotSearch-buttom-item
        height rem(45)
        padding 0 rem(15)
        border rem(1) solid #cccccc
        margin 0 rem(32) rem(32) 0  
        font-size rem(30)
        text-align center
        line-height rem(45)
        color #333
        &.active
          
          border rem(1) solid #b4282d
          color #b4282d
</style>
