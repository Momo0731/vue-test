<template>
<header>
  <div class="fixed-header">
    <div class="fast-container">
      <div class="fast">
        <ul class="fast-nav">
          <li>
            <a href="#">钢源城</a>
          </li>
          <li>
            <a href="#">招投标</a>
          </li>
          <li>
            <a href="#">供应链金融</a>
          </li>
        </ul>
        <ul class="fast-login">
          <li>
            <a id="goIndex" href="http://10.66.1.167:8081/shipping-web/system/index"><i class="iconfont icon-home icon-left"></i>大智运首页</a>
          </li>
          <li class="tsplit">
            <span></span>
          </li>
          <li id="memberInfo" v-if='isLogoIn'>
            <div class="member">
              <ul class="items">
                <li class="group">
                  <a href="#">
                    名字
                    <i class="iconfont icon-arrowdown icon-right"></i></a>
                  <ul class="menu">
                    <li><a href="sellorderlist.html">订单中心</a></li>
                    <li><a id="logOut" href="#"><i class="iconfont icon-logout icon-left ico-logout"></i>登出</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li id="memberInfo" v-else >
            <a href="#" id="goLogin" @click="goLogin()">登录</a>&nbsp;&nbsp;<span style="color:#fff">-</span>&nbsp;&nbsp;
            <a href="#" id="goSignup">注册</a>
          </li>
          <li class="tsplit">
            <span></span>
          </li>
          <li>
            <a id="goQr" href="javascript:;">移动版下载</a>
          </li>
          <li class="tsplit">
            <span></span>
          </li>
          <li>
            <span class="hotline">客服热线：400-920-9156</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-container">
      <div class="nav">
        <div id="logo">
          <h1>
            <a href="index.html">
            <img alt="" src="../../app/img/logo-zh-cn.png">
            <div><p class="zh-name">水泥专区</p></div>
          </a>
          </h1>
        </div>
        <div id="navLinks">
          <div class="nav-links">
            <!-- <a href="index.html">首页</a>
            <a id="goTyre" href="tyrelist.html">汽车用品商城</a>
            <a id="goInsurance" href="insurance.html">保险超市</a>
            <a id="goCenter" href="mycenter.html">用户中心</a> -->
          </div>
        </div>
        <!-- <div id="search">
          <input id="searchTxt" type="text" name="" value="" placeholder="查询保单">
          <a id="searchBtn" href="#"><i class="iconfont icon-search"></i></a>
        </div> -->

      </div>
    </div>
    </div>
  </header>
</template>

<script>
  import {configDev} from '../../../config/dev.env'
  export default {
    created () {

    },
    data () {
      return {
        isLogoIn: false
      }
    },
    methods: {
      /* === sso登录弹窗 === */
      goLogin () {
        this.showLogin()
      },

      showLogin () {
        var backUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (false) {
          return;
        }
        var url = backUrl == null ? window.location.href : backUrl;
        url =this.delQueStr(url, 'token').replace(/(^\?)|(\?$)/g, '');
        url = this.delQueStr(url, 'credit-token').replace(/(^\?)|(\?$)/g, '');
        window.location.href = configDev.ssoAPI + '/login?app_id=HYZ&fallbackUrl=' + url;
      },

      /* === 删除url参数值 === */
      delQueStr(url, ref){
        var str = "";
        if (url.indexOf('?') != -1) str = url.substr(url.indexOf('?') + 1);else return url;
        var arr = "";
        var returnurl = "";
        var setparam = "";
        if (str.indexOf('&') != -1) {
          arr = str.split('&');
          for (var i in arr) {
            if (arr[i].split('=')[0] != ref) {
              returnurl = returnurl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
            }
          }
          return url.substr(0, url.indexOf('?')) + "?" + returnurl.substr(0, returnurl.length - 1);
        } else {
          arr = str.split('=');
          if (arr[0] == ref) return url.substr(0, url.indexOf('?'));else return url;
        }
      }
    }
  }
</script>

<style>

</style>
