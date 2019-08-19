<template>
 
     <div id="shop">
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
          <i class="iconfont icon-gouwuche" @click="$router.push('/home')">购物车</i>
          <p>
            <i class="iconfont icon-llingquxianjinquan"> 领券</i>
          </p>
        </div>
      </div>
    </div>
    <!-- 30天退款 -->
    <div class="shouhou">
      <ul class="shouhou-list">
        <li class="shouhou-item">48小时快速退款</li>
        <li class="shouhou-item">48小时快速退款</li>
        <li class="shouhou-item">48小时快速退款</li>
      </ul>
    </div>
    <!--文字-->
    <div class="wenzi">
       <i class="iconfont icon-gouwuche" @click="$router.push('/home')"></i>
       <span>去添加点什么吧</span>
    </div> 
    <!--登录-->
    <div class="login-user">
      <button class="login-user-1 login-user-10 on">
        <span>快捷登录</span>
      </button>
    </div>
    
    </div>
  
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   @import "../../common/stylus/mixins.styl"
  #shop
    width: 100%
    // background: #bfa;
    .g-fl-header
      width rem(750)
      height rem(192)
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      color #cccccc
      background #333
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
            font-size rem(40)
            color #333
          p
            height rem(58)
            line-height rem(35)
            .icon-llingquxianjinquan
              font-size rem(35)
              color #ff0000
              padding-right rem(10)
    .shouhou
      width 100%
      height rem(70)
      background #ccc
      display flex
      justify-content space-around
      align-items center
      .shouhou-list
        width 100%
        height rem(70)
        display flex
        justify-content space-around
        align-items center  
        .shouhou-item
          font-size rem(24)
          color #333
    .wenzi
      position absolute
      left 0
      top 50%
      width: rem(750)
      height rem(480)
      margin-top  rem(-240)
      // background: orange;
      text-align center
      line-height rem(480)
      display flex
      flex-direction column
      justify-content center
      align-items center
      color #ccc
      font-size rem(24)
      .icon-gouwuche
        font-size rem(240)
        line-height rem(240)
        color #ccc
      span 
        width 100%
        height rem(26)
        font-size rem(26)
        line-height rem(26)
    .login-user
      position absolute
      left 0
      bottom 25%
      width: 100%
      height rem(220)
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      .login-user-10
        width: 80%
        height rem(94)
        font-size rem(32)
        color red
        border none
        border-radius rem(6)
        border rem(1) solid red
        &.on
          background: #b4282d;
          color aliceblue
          border-radius rem(6)
    
   
   
</style>
