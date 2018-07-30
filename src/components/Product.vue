<template>
  <div class="product">
    <div class="card" style="padding: 12px;">
        <div class="card-body">
          <h5 class="card-title">{{product.title}}</h5>
          <p class="card-text">{{product.price}}</p>
          <div class="list-inline" style="height: 100px; align-items:top">
                <img v-for="preview in product.previews" :src="preview" class="img-fluid list-inline-item preview" style="max-width:96px; max-height:96px" @mouseenter="onMouseEnter(preview)"/>
          </div>
          
          <div class="col-xs-4" style="margin: 4px 0;">
            <img :src="currentPreview" class="img-fluid img-thumbnail" fluid style="max-width: 256px; max-height: 256px;"/>
          </div>
          <button class="btn btn-warning" @click="onAddToBag">Add To Bag</button>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props : {
    product : {}
  },
  
  data () {
    return {
      currentPreview : '',
    }
  },
  
  methods: {
    onMouseEnter : function(preview) {
      this.$data.currentPreview = preview;
    },
    
    onAddToBag : function() {
      this.$emit('onAddToBag');
    }
  }
}
</script>

<style scoped="true">
  .card-body {
    padding: 12px;
  }
  
  .preview:hover {
    border-bottom: 2px solid #333;
    border-radius: 4px;
  }
</style>
