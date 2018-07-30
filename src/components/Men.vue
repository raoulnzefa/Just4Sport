<template>
  <div id="men" class="container">
    
    <div class="col-xs-3" style="height: 80vh; overflow-y: scroll; direction:rtl; margin:12px auto; float: left; background-color: whitesmoke; border-radius: 10px;">
        <product v-for="product in products" v-bind:product="product" v-bind:bag="bag" v-on:onHover="onHover"></product>
    </div>
    
    <div class="col-xs-9">
      <preview v-bind:product="current" @onAddToBag="onAddToBag"></preview>
    </div>
  </div>
</template>

<script>
import product from './ProductCard.vue';
import productPreview from './Product.vue';

export default {
  props :{
    bag : {}
  },
  components : {
    product : product,
    preview : productPreview,
  },
  data () {
    return {
      products : [],
      current : {},
    }
  },

  methods : {
    onHover : function(product) {
      console.log(product);
      this.$data.current = product;
    },
    
    onAddToBag : function() {
      window.alert("added");
      this.bag[this.current.title] = this.current;
      this.$session.set('bag', this.bag);
    }
  },
  
  created : function() {
    this.$data.products = data.men;
    console.log(this.products);
  }
}
</script>

<style scoped=true>
/* width */
::-webkit-scrollbar {
    width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
</style>
