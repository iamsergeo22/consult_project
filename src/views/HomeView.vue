<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>Take your business to the next level </h4>
        <br>
        <h2>
          DIGITAL SOLUTIONS TO ENHANCE
          <br />
          YOUR JOURNEY
          <br>
          <button href="#contact" class="btn btn-primary btn-aminated">Contact Us</button>
          <!-- <button onclick="window.print()">Print this page</button> -->
        </h2>
      </div>

    </section>



    <section class="body">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img src="../assets/macbook-g5a4eeafc4_1920.jpg" class="image img-fluid" alt="">
          </div>
          <div class="col-lg-6">
            <h3 style="color:blue">Who are we</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum autem officiis hic laudantium at sint
              explicabo sunt eaque nesciunt similique nihil sit est modi dolorem aperiam neque, temporibus ipsam!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam voluptatum consequatur eum iusto
              voluptates dolor delectus est optio quis totam repellat odit architecto a animi numquam, sequi, quas,
              deserunt nobis.</p>
          </div>


        </div>
      </div>

    </section>


    <section class="service">
      <div class="container">
        <h3 style="color:blue">Services We Offer</h3>
        <p>Our commitment is to deliver results in your business through quality products and services.</p>
        <services-view></services-view>
      </div>

    </section>


    <section class="testimony">
      <div class="container">
        <h3 style="color:blue">What our Clients Say</h3>
        <testimony-view></testimony-view>
      </div>
    </section>

    <section class="contact">
      <h3 style="color:blue">Contact Us</h3>
      <contact-view></contact-view>
    </section>
  </div>






</template>

<script>
  // @ is an alias to /src
  import ServicesView from './ServicesView.vue';
  import TestimonyView from './TestimonyView.vue'
  import ContactView from './ContactView.vue'


  export default {
    name: "HomeView",
    components: {
      ServicesView,
      TestimonyView,
      ContactView
    },
  };
</script>

<style lang="scss" scoped>
  .body {
    margin: 20px;
    padding: 50px;
  }

  .service {
    margin: 20px;
    padding: 70px;
    background-color: white;

  }

  .contact {
    padding: 20px;

    h3 {
      text-align: center;
    }
  }



  .testimony {
    margin: 20px;
    padding: 50px;
    background-color: white;

    h3 {
      text-align: center;
    }
  }

  .image {
    border-radius: 15px;
    box-shadow: 0 5px 10px #0005;
  }

  h3,
  p {
    font-family: 'Josefin Sans', sans-serif;
    text-align: justify;
  }

  h3 {
    font-size: 45px;
    font-weight: bold;
  }

  p {
    font-size: 20px;
  }


  .hero {
    background-image: url("../assets/laptop-g30479cdb3_1920.jpg");
    //background-attachment: fixed;
    position: relative;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.555);
    height: 95vh;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    .hero-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: blue;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: bold;

      h4 {
        text-transform: uppercase;
        font-size: 22px;
        padding-bottom: 4px;
        color: #FFF;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
      }

      h2 {
        font-size: 35px;
        font-family: 'Josefin Sans', sans-serif;

        @media (min-width: 550px) {
          font-size: 40px;
          font-weight: bold;
        }
      }

      hr:nth-child(2) {
        max-width: 365px;
        margin-bottom: 16px;
        text-align: center;
      }

      hr:nth-child(4) {
        height: 6px;
        background-color: #fff;
        border: none;
        max-width: 85px;
        margin-top: 16px;
        text-align: center;
      }
    }
  }
</style>