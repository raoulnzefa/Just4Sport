<template>
<div id="account">

    <div  v-for="(value, key, index) in account" class="detail" v-on:mouseenter="onMouseEnter(index)" v-on:mouseleave="onMouseLeave(index)">
      <p class="lead">
        {{key}}
        <input type="button" v-on:click="toggleHidden(index)" value="edit" ref="toggler" class="btn btn-sm btn-primary" style="float: right" />
      </p>
      <input ref="edit" type="text" v-model="account[key]" hidden/>
      <label ref="value"><em>{{value}}</em></label>
    </div>
  
  <div class="card-footer"> 
    <button class="btn btn-success btn-sm" v-on:click="onSaveChangesClick">Save Changes</button>
    <button class="btn btn-danger btn-sm" @click="onCancelClick">Cancel</button>
  </div>

</div>
</template>

<script>

export default {
  props : {
    account : {},
    isss : Boolean,
  },
  data () {
    return {
      active : [],
      edit : [],
    }
  },
  
  methods : {
    onMouseEnter : function(index) {
      this.$data.active[index] = true;
      
      this.activate(index);
    },
    
    onMouseLeave : function(index) {
      this.$data.active[index] = false;
      
      if(!this.$data.edit[index]) {
        this.deactivate(index);
      }
    },
    
    activate : function(index) {
        document.getElementsByClassName('detail')[index].classList.add('active');
    },
    
    deactivate : function(index) {
        document.getElementsByClassName('detail')[index].classList.remove('active');
    },
    
    toggleHidden : function(index) {

      if(!this.$refs.edit[index].hidden)
      {
        this.$refs.edit[index].hidden = true;
        this.$refs.value[index].hidden = false;
        this.$refs.toggler[index].value = 'edit';
        
        this.$data.edit[index] = false;
      }
      else
      {
        this.$refs.edit[index].hidden = false;
        this.$refs.value[index].hidden = true;
        this.$refs.toggler[index].value = 'save';
        this.$data.edit[index] = true;
      }
      
      //sender.innerText = (sender.innerText === 'save' ? 'edit' : 'save');
    },

    onSaveChangesClick : function() {
      this.$http.post('https://just4sport-4b014.firebaseio.com/users.json', this.account).then(function(data){
        this.show = false;
      });
    },
    
    onCancelClick : function() {
      window.location.href = "/";
    }
  },
  
  
  computed:{
      
  },
}
</script>

<style>
  #account {
    max-width: 512px;
    margin: 16px auto;
  }
  .card {

  }
  
  .detail {
    padding: 12px 24px;
    background: whitesmoke;
    //border-left: 2px solid #333;
    margin: 12px auto;
  }
  
  .active {
    border-radius: 4px;
    box-shadow: 5px 5px 15px 5px #888888;
  }
  
  .detail > label {
    
  }
  
  .detail > .lead {
    margin: 0;
    padding-bottom: 0;
    
  }
  
  .detail > input {
    border-radius: 8px;
    padding-left: 12px;
    border: 1px solid #999;
  }
  
  .detail > .lead > button {
    margin: 0;
    padding: 2px 4px;
    font-size: 12px;
  }
</style>
