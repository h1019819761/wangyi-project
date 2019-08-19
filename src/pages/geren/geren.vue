<template>
  <div>
   <div id="login">
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
          </a>
          <p>
            <i class="iconfont icon-search"></i>
            <i class="iconfont icon-gouwuche"></i>
          </p>

        </div>
      </div>
    </div>
    <!-- 登录 -->
    <div class="center" v-show="isShow">
      <!--文字-->
      <div class="wenzi">
        <img src="../../common/images/222.png" alt="hhh">
      </div> 
      <!--登录-->
      <div class="login-user" >
        <button class="login-user-1 login-user-10 on" @click="goTo(1)">
          <i class="iconfont icon-shouji"></i>
          <span>手机号快捷登录</span>
        </button>
        <button class="login-user-2 login-user-10" @click="goTo(0)">
          <i class="iconfont icon-dingdan"></i>
          <span>邮箱帐号登录</span>
        </button>
      </div>
      <!--登录方式-->
      <div class="dengli-fangshi">
        <div class="weixin1 weixin">
          <i class="iconfont icon-icon_home"></i>
          <span>微信</span>
        </div>
        <div class="weixin2 weixin">
          <i class="iconfont icon-icon_home"></i>
          <span>QQ</span>
        </div>
        <div class="weixin3 weixin">
          <i class="iconfont icon-icon_home"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <!-- 手机输入登录 -->
    <div class="center1" v-show="toggle==1&&!isShow">
      <div class="center1-iphone">
        <div class="center1-iphone-tu">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="center1-iphone-input">
          <input type="text" class="center1-iphone-input1" placeholder="请输入手机号">
          <div class="center1-iphone-yanzheng">
            <input type="password" class="center1-iphone-input1" placeholder="请输入短信验证码">
            <button class="yanzhengma">获取验证码</button>
          </div>
          <div class="center1-iphone-login">
            <div class="center1-iphone-login-1">
              <span>遇到问题？</span>
              <span>使用密码登录</span>
            </div>
            <button class="login-user-1 login-user-10 on">
              <i class="iconfont icon-shouji"></i>
              <span>手机号快捷登录</span>
            </button>
            <div class="center1-iphone-login-2">
              <input type="checkbox" class="checkbox">
              <p class="center1-iphone-login-ok">
                我同意<span>《服务条款》</span>和<span>《网易隐私政策》</span>
              </p>
            </div>
            <div class="qita-login" @click="isShow=!isShow">
              <span>其他登录方式</span><span> ></span>
            </div>
          </div> 
        </div>
      </div>
    </div>
    <!-- 密码登录 -->
    <div class="center1" v-show="toggle==0&&!isShow">
       <div class="center1-iphone">
        <div class="center1-iphone-tu">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="center1-iphone-input">
          <input type="text" class="center1-iphone-input1" placeholder="请输入邮箱">
          <div class="center1-iphone-yanzheng">
            <input type="password" class="center1-iphone-input1" placeholder="请输入密码">
            <!-- <button class="yanzhengma">获取验证码</button> -->
          </div>
          <div class="center1-iphone-login">
            <div class="center1-iphone-login-1">
              <span>注册账号</span>
              <span>忘记密码</span>
            </div>
            <button class="login-user-1 login-user-10 on">
              <i class="iconfont icon-shouji"></i>
              <span>快捷登录</span>
            </button>
            <div class="center1-iphone-login-2">
              <input type="checkbox" class="checkbox">
              <p class="center1-iphone-login-ok">
                我同意<span>《服务条款》</span>和<span>《网易隐私政策》</span>
              </p>
            </div>
            <div class="qita-login"  @click="isShow=!isShow">
              <span>其他登录方式</span><span> ></span>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
  
  
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isShow:true,
        toggle:0
      }
     
    },
    methods:{
      goTo(e){
        this.isShow=false
        this.toggle=e
      }
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #login
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
            width: rem(86*2);
            height: rem(27*2)
            margin-left  rem(100)
            background:  url(../../common/images/111.png) rem(0) rem(-240) no-repeat;
            background-size rem(200) rem(500)


    .wenzi
      width: 100%;
      height rem(480)
      //background: orange;
      text-align center
      line-height rem(480)
      img
        width rem(268)
        height rem(90)
    .login-user
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
          background: red;
          color aliceblue
          border-radius rem(6)
        .iconfont
          font-size rem(32)
    .dengli-fangshi
      position fixed
      left: 0
      bottom rem(100)
      width: 100%
      height rem(40)
      display flex
      justify-content center
      align-items center
      font-size rem(38)
      color #333
      .weixin2
        border-left rem(2) solid #333
        border-right  rem(2) solid #333
      .weixin
        width:rem(170) ;
        height rem(40)
        text-align center
        line-height rem(40)
        padding 0 rem(10)
        .iconfont
          font-size rem(40)
          padding-right rem(10)
    .center1
      width 100%
      box-sizing border-box
      padding rem(28*2) rem(20*2) 0
      .center1-iphone
        width 100%
        background #bfa
        .center1-iphone-tu
          width 100%
          height rem(32*2)
          text-align center
          img
            width rem(91*2)
            height rem(32*2)
        .center1-iphone-input
          width 100%
          display flex
          flex-direction column
          justify-content center
          align-items left 
          padding-top rem(80)
          .center1-iphone-input1
            width rem(670)
            height rem(45.69*2)
            background #ccc
            box-sizing border-box
            padding-left  rem(40)
            font-size rem(35)
            margin-bottom rem(20)
          .center1-iphone-input1::-webkit-input-placeholder {
            color: #999;
            font-size rem(35)
            }  
          .center1-iphone-yanzheng
            position relative
            width 100%
            height rem(45.69*2)
          .center1-iphone-yanzheng::-webkit-input-placeholder {
            color: #999;
            font-size rem(35)
            }  
            .yanzhengma
              position absolute
              right rem(20)
              top rem(32)
              width rem(82.19*2)
              height rem(26.77*2)
              border none
              font-size rem(25)
          .center1-iphone-login
            width 100%
            height rem(45.69*2)
            font-size rem(24)
            padding-top rem(40)
            .center1-iphone-login-1
              width 100%
              display flex
              justify-content space-between 
            .login-user-10
              width: 100%
              height rem(94)
              font-size rem(32)
              color red
              border none
              border-radius rem(6)
              border rem(1) solid red
              margin-top rem(100)
              &.on
                background: red;
                color aliceblue
                border-radius rem(6)
              .iconfont
                font-size rem(32)
          .center1-iphone-login-2
            width 100%  
            display flex
            justify-content center
            align-items center
            padding rem(20) 0
            .checkbox
              width rem(30)
              height rem(30)
              margin-right rem(20)
            .center1-iphone-login-ok
              color #333
              span
                color #007aff
          .qita-login
            width 100%
            margin-top rem(80)
            text-align center
            font-size rem(30)
              
</style>
