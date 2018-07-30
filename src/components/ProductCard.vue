<template>
  <div class="product-card" v-on:mouseenter="onFocusGain" v-on:mouseleave="onFocusLost">
      <img :src="product.previews[0]" class="product-view img-fluid rounded" />
      <span class="badge badge-info product-last-update">updated {{product.lastUpdate}} minute(s) ago.</span>

      <hr>
      <div class="product-body">
        <p class="product-title">{{product.title}}</p>
        <p class="product-category">{{product.category}}</p>
        <p class="product-price">{{product.price}}</p>

        <button class="btn btn-primary btn-sm rounded" v-on:click="addToCart" v-if="expand">
          <span class="fa fa-shopping-cart"></span> Add To Bag
        </button>
      </div>
  </div>
</template>

<script>

export default {
  props : {
    product : {},
    bag : {},
  },
  data () {
    return {
      expand : false,
    }
  },
  methods : {
    onFocusGain : function() {
      this.expand = true;
      
      this.$emit('onHover', this.product);
    },
    onFocusLost : function() {
      this.expand = false;
    },
    addToCart : function() {
      window.alert("added");
      this.bag[this.product.title] = this.product;
      this.$session.set('bag', this.bag);
    }
  },
}
</script>

<style >
  .product-card {
    width: 256px;
    height: auto;
    margin: 12px;
  }

  .product-card:hover {
    /*border: 2px solid black;*/
    border-radius: 5px;
    overflow: hidden;
    padding: 4px;
    background: linear-gradient(#555, #aaa);
  }
  
  .product-title {
/*    color: whitesmoke;*/
    font-weight: bold;
    font-size: 1vw;
    font-family: Broadway, 'High Tower Text', monospace;
  }

  .product-category {
/*    color: #999;*/
    font-weight: 100;
    font-size: 1vw;
    font-family: 'Consolas';
  }
  
  .product-price {
/*    color: whitesmoke;*/
    font-weight: bold;
    font-size: 1vw;
    font-family: 'Eras ITC';
  }

  .product-body > p {
    margin: 0;
    padding: 0;
  }


</style>
