<template>
  <div id="app">

    <just4sport-header v-bind:is-connected="connected" v-bind:account-instance="account" v-on:signOut="signout" ></just4sport-header>
    <router-view v-on:whenSignedIn="whenSignedIn" v-bind:account="account" v-bind:bag="bag"></router-view>

  </div>
</template>

<script>
import Just4SportHeader from './components/just4SportHeader.vue';

export default {
  components: {
    just4sportHeader : Just4SportHeader
  },
  data () {
    return {
      connected : false,
      account : {},
      bag : {},
    }
  },
  methods : {
    whenSignedIn : function(account) {
      //alert('sign');
      this.connected = true;
      this.account = account;
      this.$session.start();
      this.$session.set('account', this.account);
      console.log('Connected');
    },

    signout : function() {
      this.connected = false;
      this.account = {};
      this.$session.destroy();
      console.log('Disconnected');
      window.location.href="/home";
    }
  },
  created : function () {
      if(this.$session.exists())
      {
        this.$data.connected = true;
        this.$data.account = this.$session.get('account');
        if(this.$session.has('bag'))
          this.$data.bag = this.$session.get('bag');
        console.log(this.account);
      }
  }
}
</script>
