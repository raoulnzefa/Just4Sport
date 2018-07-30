<template>
  <div id="home" class="container">

    <b-carousel id="carousel"
                style="text-shadow: 1px 1px 2px #333;max-height:364px;min-height:364px;overflow:hidden"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

      <b-carousel-slide>
          <img slot="img" class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/just4sport-4b014.appspot.com/o/home-carousel%2Frmd-vs-fcb.jpg?alt=media&token=3ff5c8ea-7761-4129-9886-e652e20a541d" alt="Cristinao Ronaldo">
          <!-- <img slot="img" class="img-fluid" src="../carousel-slides/rmd-vs-fcb.jpg" alt="Cristinao Ronaldo"> -->
          <h3>Real Madrid vs Bracelona</h3>
          <h5 style="font-size: 14px">The first match from 17-18 king cup finals which finished 3-1.</h5>
      </b-carousel-slide>

      <b-carousel-slide>
          <img slot="img" class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/just4sport-4b014.appspot.com/o/home-carousel%2Fshoes.jpg?alt=media&token=61f991a4-53a0-488b-96d5-6ca63f1e27c7" alt="Shoes Time">
          <!-- <img slot="img" class="img-fluid" src="../carousel-slides/shoes.jpg" alt="Shoes Time"> -->
          <h3>Shoes Time!!</h3>
          <h5>Sale up to <span class='badge badge-success'>30%</span> now.</h5>
      </b-carousel-slide>

      <b-carousel-slide>
          <img slot="img" class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/just4sport-4b014.appspot.com/o/home-carousel%2Fshopping.jpg?alt=media&token=999dc7f2-0d0c-4dec-bdf4-2a56817ef5bf" alt="Shopping Time">
          <!-- <img slot="img" class="img-fluid" src="../carousel-slides/shopping.jpg" alt="Shopping Time"> -->
          <h3>Shopping Time</h3>
          <h5>Be clever and buy during 'summer sale time'.</h5>
      </b-carousel-slide>

      <b-carousel-slide>
         <img slot="img" class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/just4sport-4b014.appspot.com/o/home-carousel%2Fsports-brands.jpg?alt=media&token=7502c1fe-b079-42f4-a23d-4395e7b111ea" alt="Sport Brands">
         <!-- <img slot="img" class="img-fluid" src="../carousel-slides/sports-brands.jpg" alt="Sport Brands"> -->
      </b-carousel-slide>

    </b-carousel>


    <ul class="row justify-content-md-center">
      <li class="list-group-item col-xs-2 col-sm-auto">
        <a href="/home" class="nav-link">
          <span class="fa fa-home" width="32px" height="32px"></span> Home
        </a>
      </li>
      <li class="list-group-item col-xs-2 col-sm-auto">
        <a href="/men" class="nav-link">
          <span class="fa fa-male" width="1vw" height="1vw"></span> Men
        </a>
      </li>
      <li class="list-group-item col-xs-2 col-sm-auto">
        <a href="/women" class="nav-link">
          <span class="fa fa-female" width="1vw" height="1vw"></span> Women
        </a>
      </li>
      <li class="list-group-item col-xs-2 col-sm-auto">
        <a href="/account" class="nav-link">
          <span class="fa fa-user" width="1vw" height="1vw"></span> Account
        </a>
      </li>
      <li class="list-group-item col-xs-2 col-sm-auto">
        <a href="/mycart" class="nav-link">
          <span class="fa fa-shopping-cart" width="1vw" height="1vw"></span> My Cart
        </a>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods : {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>

#carousel {
  margin: auto auto;
  padding: auto auto;
  align-items: center;
  align-self: center;
  align-content: space-around;
  max-width: 768px;
  max-height: 364px;
}

#carousel > div > div > img {
  height: 364px;
  width: 768px;
}

ul {
  margin: 64px auto;
  max-width: 768px;
  list-style: none;
}

ul > li
{
  border-left: 2px solid #222;
}

ul > li:first-of-type
{
  border-left: 0px;
}

ul > li:hover {
  background-color: #989;
  border-radius: 8px;
  border: 0px;
  border-bottom: 2px solid #222;
}

ul > li > a {
  text-align: center;
  text-decoration: none;
  color: inherit;
}

</style>
