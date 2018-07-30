<template>
  <div id="header">
    <nav class="navbar navbar-light" style="background:#000">

<!--        <b-btn v-b-toggle.navigation-view variant="light"><span class="navbar-toggler-icon"></span></b-btn>-->
        <b-btn id="navigation-view-toggler" variant="light">
          <span class="navbar-toggler-icon"></span>
        </b-btn>
        <b-popover target="navigation-view-toggler" triggers="hover focus" placement="bottomleft">
           <template slot="title">Main Menu</template>
           <b-list-group>
            <b-list-group-item>
              <a href="/home" class="nav-link">
                <span class="fa fa-home" width="32px" height="32px"></span> Home
              </a>
            </b-list-group-item>
            <b-list-group-item >
              <a href="/men" class="nav-link">
                <span class="fa fa-male" width="32px" height="32px"></span> Men
              </a>
            </b-list-group-item>
            <b-list-group-item >
              <a href="/women" class="nav-link">
                <span class="fa fa-female" width="32px" height="32px"></span> Women
              </a>
            </b-list-group-item>
            <b-list-group-item >
              <a href="/account" class="nav-link">
                <span class="fa fa-user" width="32px" height="32px"></span> Account
              </a>
            </b-list-group-item>
            <b-list-group-item >
              <a href="/mycart" class="nav-link">
                <span class="fa fa-shopping-cart" width="32px" height="32px"></span> My Cart
              </a>
            </b-list-group-item>
            <b-list-group-item>
              <form class="form-inline" style="margin: 8px auto">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </b-list-group-item>
          </b-list-group>
        </b-popover>

        <router-link class="navbar-brand d-inline"
           style="color:#e4e8e4; font-size:14px; font-family: sans-serif;padding: 12px 20px 8px 20px"
           to="/home">
            <div align="center" alignment="center">
              <img src="../assets/brand.jpg" width="96px" height="48px" style="margin: auto auto">
              <p>J U S T 4 S P O R T</p>
            </div>
        </router-link>
        <div class="personal" v-if="isConnected" dir="rtl">
          <router-link class="d-inline"
             to="/account" exact>
              <img src="../assets/male-user.jpg" class="rounded-circle" width="36" v-if="accountInstance.gender === 'male'"/>
              <img src="../assets/female-user.png" class="rounded-circle" width="36" v-else/>
              {{ accountInstance.username }}
          </router-link>
          <router-link class="nav-link d-inline btn btn-outline-info btn-sm"
                  style="padding: 8px" to="/mycart">
              <span class="fa fa-shopping-cart"></span>
          </router-link>
          <b-btn class="d-inline btn btn-outline-danger btn-sm"
                  v-on:click="signout">
              <span class="fa fa-sign-out"></span>
          </b-btn>
        </div>
        <div class="personal" v-else>
          <b-btn class="d-inline btn btn-outline-light btn-sm" @click="signin">
            <!-- <router-link to="/signin" exact > -->
               <span class="fa fa-sign-in"></span> Signin
            <!-- </router-link> -->
          </b-btn>
          <!-- <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
              <h3>Hello From My Modal!</h3>
            </div>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
          </b-modal> -->
          <!-- <div>
            <b-btn v-b-modal.modal-center>Launch centered modal</b-btn>

            <b-modal id="modal-center" centered title="Bootstrap-Vue">
              <p class="my-4">Vertically centered modal!</p>
            </b-modal>
          </div> -->
        </div>
    </nav>

<!--
    <b-collapse id="navigation-view">
      <b-list-group>
        <b-list-group-item>
          <a href="/home" class="nav-link">
            <span class="fa fa-home" width="32px" height="32px"></span> Home
          </a>
        </b-list-group-item>
        <b-list-group-item >
          <a href="/men" class="nav-link">
            <span class="fa fa-male" width="32px" height="32px"></span> Men
          </a>
        </b-list-group-item>
        <b-list-group-item >
          <a href="/women" class="nav-link">
            <span class="fa fa-female" width="32px" height="32px"></span> Women
          </a>
        </b-list-group-item>
        <b-list-group-item >
          <a href="/account" class="nav-link">
            <span class="fa fa-user" width="32px" height="32px"></span> Account
          </a>
        </b-list-group-item>
        <b-list-group-item >
          <a href="/mycart" class="nav-link">
            <span class="fa fa-shopping-cart" width="32px" height="32px"></span> My Cart
          </a>
        </b-list-group-item>
        <b-list-group-item>
          <form class="form-inline" style="margin: 8px auto">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </b-list-group-item>
      </b-list-group>
    </b-collapse>
-->
  </div>
</template>

<script>
export default {
  props : [
    'isConnected',
    'accountInstance'
  ],
  data () {
    return {
      // accountInstance : {},
      // isConnected : false,
      path: '/men',
      navs : [
        { title:'Home',    path:'/home',    icon: 'fa fa-home'},
        { title:'Men',     path:'/men',     icon: 'fa fa-male' },
        { title:'Women',   path:'/women',   icon: 'fa fa-female'},
        { title:'Account', path:'/account', icon: 'fa fa-user'},
      ]
    }
  },
  methods : {
    signin : function() {
      window.location.href = "http://localhost:8080/signin";
    },
    signout : function() {
      this.$emit('signOut');
    },
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  },

  // beforeCreate : function () {
  //     if(this.$session.exists())
  //     {
  //       this.accountInstance = this.$session.get('account');
  //       this.isConnected = true;
  //       console.log(this.account);
  //     }
  // }
}
</script>

<style scoped>
#navigation-view
{
  width: auto;
  height: 81vh;
  left: 0;
  top: 64;
  position: fixed;
  border: 2px solid #333;
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  margin-bottom: 4px;
  z-index: 1222;
}

#navigation-view b-list-group
{
  width: auto;
  height: 100%;
  background: whitesmoke;
}

.nav-link
{
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
  text-align: left;
  text-emphasis: 5;
  color: #333;
}

.nav-link:hover
{
  background: #999;
}

.personal > a
{
  text-decoration: none;
  text-transform: full-width;
  caret-color: auto;
  color: whitesmoke;
  margin-left: 6px;
}

.personal > a,button > span
{
  padding: 8px;
  align-items: center;
  text-align: center;
}

</style>
