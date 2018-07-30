<template>
  <div class="row container">
    <b-form v-on:submit="signin" v-if="show" id="signin" class="col-xs-9 col-sm-4">
      <b-form-group class="group col-12"
                    label="Email:"
                    label-for="email-value"
                    description="<p>">
        <b-form-input id="email-value"
                      type="email"
                      v-model="email"
                      required
                      placeholder="someone@example.com">
        </b-form-input>
      </b-form-group>

      <b-form-group class="group col-12"
                    label="Password"
                    label-for="password-value">
        <b-form-input id="password-value"
                      type="password"
                      v-model="password"
                      required
                      min="8"
                      placeholder="*********">
        </b-form-input>
      </b-form-group>

      <b-form-group class="group col-12">
                    <b-button type="submit" variant="primary">Signin</b-button>
      </b-form-group>

      <b-form-group class="group col-12">
                    <b-alert show variant="danger" v-if="failed" style="font-family:'Eras ITC Bold'">Incorrect username or password</b-alert>
      </b-form-group>

    </b-form>

    <b-alert variant="success" show v-else style="margin-top: 81px; margin-left: 21px" class="col-12">
      <h4 class="alert-heading">Singin done!</h4>
      <p>
        Aww yeah, you  are connected to our system now.<br>
        We wish nice shopping time for you, <router-link to="/home">go</router-link>.
      </p>
    </b-alert>

    <img class="col-xs-3 col-sm-8" src="../assets/signin_bg.png" v-if="show">

  </div>
</template>

<script>
export default {
  data () {
    return {
      //account: {},
      email: '',
      password: '',
      show: true,
      failed: false
    }
  },
  methods: {
    signin (event) {
      event.preventDefault();
      this.failed = false;
      this.$http.get('https://just4sport-4b014.firebaseio.com/users.json').then(function(data){
            return data.json()
        }).then(function(data){
            var accounts = [];
            for (let key in data){
                data[key].id = key;
                accounts.push(data[key]);
            }

            let flag=false;
            for(let i=0 ; i<accounts.length ; i++) {
              //console.log(accounts[i]);
              if (accounts[i].email === this.email && accounts[i].password === this.password) {
                this.account = accounts[i];
                flag = true;
                break;
              }
            }

            if (!flag) {
              this.failed = true;
            }
            else {
              //console.log(this.account);
              this.$emit('whenSignedIn', this.account);
              this.show = false;
            }

        });
    }
  }
}
</script>

<style scoped>

#signin {
  margin: auto auto
}

.row {
  margin: auto auto;
}

</style>
