<template>
  <div id="bag" class="container">
    <b-alert show dismissible id="message" class="lead bg-danger">
      You must to know that, here you will find just your stopped shopping process or what you previously add it to your bag. 
    </b-alert>
    
    <div v-show="realBag.length > 0" class="top">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, index) in realBag">
              <th scope="row">{{index + 1}}</th>
              <td>{{value.title}}</td>
              <td>{{value.price}}</td>
            </tr>
          </tbody>
        </table>
        
        <button class="btn btn-info btn-sm" @click="onBuy" ref="buy">Buy</button>
        
        <b-modal ref="dialog" hide-footer centered  title="New Process:">
          <div class="d-block text-center">
            <h3>Your item's saled and <span class="badge badge-danger">{{total}} $</span> taked from your account!!</h3>
            <h5>JUST4SPORT thanks using it for shopping and wish your items to stay fine.</h5>
          </div>
          <b-btn class="mt-3" variant="outline-danger" block @click="hideDialog">Dismiss</b-btn>
        </b-modal> 
    </div>
    
    <div>
        <div class="item row" v-for="(value, key, index) in bag">
          <div class="previews col-xs-12 col-sm-12 col-md-7 list-inline">
            <img class="list-inline-item img-fluid rounded preview col-3" v-for="preview in value.previews" :src="preview" :alt="preview.substr(preview.lastIndexOf('/') + 1)" />
          </div>
          
          <div class="info col-xs-12 col-sm-12 col-md-5 list-inline">
            <p class="h3 lead">{{value.title}}</p>
            <p class="h5 text-muted lead">{{value.price}}</p>
            
            <button class="btn btn-warning btn-sm" @click="onAddRemove(value, index)" ref="addremove">Add</button>
          </div>
          
        </div>
    </div>
    
  </div>
</template>


<style scoped="true">
  #message {
    margin: 12px auto;
    max-width: 768px;
    color: whitesmoke;
  }
  
  .top {
    max-width: 768px;
    margin: 12px auto;
  }
  
  .table {
    max-width: 768px;
/*    margin: 12px auto;*/
    border-radius: 8px;
    overflow: hidden;
  }
  
  .item {
    margin: auto auto;
    max-width: 768px;
    border: 1px solid #333;
  }
  
  .item > .previews {
    margin: 0;
    padding: 0;
  }
    
  .item > .previews > .preview {
    height: 96px;
    width: 96px;
    margin: 4px;
    padding: 0;
  }
</style>

<script>

  
  
export default {
  
  props : {
    bag : {}
  },
  
  data () {
    return {
      realBag : [],
      total : 0,
    }
  },
  
  methods: {
    onAddRemove: function(item, index) {
//      if(!(index in this.realBag)) {
//        this.realBag[index] = item;
//        this.$refs.addremove[index].innerText = 'Remove';
//        console.log('if');
//      }else {
//        delete this.realBag[index];
//        this.$refs.addremove[index].innerText = 'Add';
//        console.log('else');
//      }
      if(!this.find(item)) {
        this.realBag.splice(index + 1, 0, item);
        this.$refs.addremove[index].innerText = 'Remove';
        console.log('if');
      }else {
        this.realBag.splice(index, 1);
        this.$refs.addremove[index].innerText = 'Add';
        console.log('else');
      }
      
      console.log(this.realBag);
      
    },
    
    find : function(item) {
      for(let i=0 ; i<this.realBag.length ; i++) 
      {
        if(this.realBag[i]['title'].localeCompare(item['title']) == 0 && this.realBag[i]['price'] == (item['price']))
          return true;
      }
      return false;
    },
    
    onBuy : function() {
      this.$data.total = 0;
      for(let i=0 ; i<this.realBag.length ; i++) {
        this.$data.total += this.realBag[i]['price'];
        delete bag['price'];
      }
      
      this.$refs.buy.disabled = true;
      
      this.showDialog();
    },
    
    showDialog : function() {
      this.$refs.dialog.show();
    },
    
    hideDialog() {
        this.$refs.dialog.hide();
        this.$session.set('bag', bag);
        window.location.href="/home"
    }
  }
}
</script>

