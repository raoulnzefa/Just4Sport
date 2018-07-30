<template>
  <div class="row container">
    <b-form v-on:submit="signup" v-if="show" id="signup" class="col-xs-9 col-sm-4">

      <b-form-group class="group col-12"
                    label="User Name:"
                    label-for="user-name-value"
                    description="this will appear to the others">
        <b-form-input id="user-name-value"
                      type="text"
                      v-model="account.username"
                      required
                      placeholder="cristiano">
        </b-form-input>
      </b-form-group>

      <b-form-group class="group col-12"
                    label="Email:"
                    label-for="email-value"
                    description="<p>">
        <b-form-input id="email-value"
                      type="email"
                      v-model="account.email"
                      required
                      placeholder="someone@example.com">
        </b-form-input>
      </b-form-group>

      <b-form-group class="group col-12"
                    label="Password"
                    label-for="password-value">
        <b-form-input id="password-value"
                      type="password"
                      v-model="account.password"
                      required
                      min="8"
                      placeholder="*********">
        </b-form-input>
      </b-form-group>

      <b-form-group class="group col-12"
                    label="Gender"
                    label-for="gender-value">
        <b-form-select v-model="account.gender"
                       :options="[{ value: null, text: 'None' },
                                  { value: 'male', text: 'Male' },
                                  { value: 'female', text: 'Female' } ]"
                      class="mb-1"
                      required />
      </b-form-group>

      <b-form-group class="group col-12"
                    label="Pay Methods"
                    label-for="pay-methods"
                    description="this options can be change later">
          <b-form-checkbox-group v-model="account.payMethods" id="pay-methods">
            <b-form-checkbox value="visacard">visacard</b-form-checkbox>
            <b-form-checkbox value="mastercard">Mastercard</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-input>
      </b-form-group>

      <b-form-group class="group col-12">
                    <b-button type="submit" variant="primary">Signup</b-button>
      </b-form-group>

    </b-form>

    <b-alert variant="success" show v-else>
      <h4 class="alert-heading">Signup done!</h4>
      <p>
        Aww yeah, you successfully registered a new account in our site.
        Now you can interest with a lot of sport fashions, <router-link to="/signin">start</router-link>.
      </p>
    </b-alert>

    <img class="col-xs-3 col-sm-8" src="../assets/signin_bg.png" v-if="show">

  </div>
</template>

<script>
export default {
  data () {
    return {
      account : {
        username : '',
        email : '',
        password : '',
        gender : '',
        payMethods : [],
      },
      show: true
    }
  },
  methods: {
    signup (event) {
      event.preventDefault();
      this.$http.post('https://just4sport-4b014.firebaseio.com/users.json', this.account).then(function(data){
        this.show = false;
      });
    }
  }
}
</script>

<style scoped>

#signup {
  margin: 36px auto;
}

.container {
  margin: auto auto;
  padding: 54px;
}

b-alert {
  margin: 52px auto;
}
</style>
