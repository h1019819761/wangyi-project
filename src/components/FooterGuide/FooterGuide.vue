<template>
  <div>
   <footer class="footer_guide border-1px" v-show="$route.meta.footerShow">
      <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/home'}" v-show="$route.meta.footerShow" @click="goto('/home')" >
        <span class="item_icon">
          <i class="iconfont icon-icon_home"></i>
        </span>
        <span>首页</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/fenlei'}" v-show="$route.meta.footerShow"  @click="goto('/fenlei')">
        <span class="item_icon">
          <i class="iconfont icon-fenlei"></i>
        </span>
        <span>分类</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shiwu'}" v-show="$route.meta.footerShow" @click="goto('/shiwu')">
        <span class="item_icon">
          <i class="iconfont icon-tupian"></i>
        </span>
        <span>识物</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shop'}" v-show="$route.meta.footerShow"  @click="goto('/shop')">
        <span class="item_icon">
          <i class="iconfont icon-gouwuche"></i>
        </span>
        <span>购物车</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/geren'}" v-show="$route.meta.footerShow" @click="goto('/geren')">
        <span class="item_icon">
          <i class="iconfont icon-geren icon-gerensvg"></i>
        </span>
        <span>个人</span>
      </a>
    </footer>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goto(path){
        
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width rem(750)
    height rem(100)
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin rem(5)
      color #02a774
      &.on
        color #b4282d
      span
        font-size rem(24)
        margin-top rem(2)
        margin-bottom rem(2)
        
        .iconfont
          font-size rem(40)
</style>

   

