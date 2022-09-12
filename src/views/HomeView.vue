<template>
  <div class="slide">
    <div id="carouselExampleDark" class="carousel carousel-white slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="../assets/business.jpg" class="img-fluid d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <div class="cover container">
              <h4>Take your business to the next level </h4>
              <br>
              <h2>
                DIGITAL SOLUTIONS TO ENHANCE
                <br />
                YOUR JOURNEY
                <br>
                <router-link to="/contact" class="btn btn-primary btn-aminated">Contact Us</router-link>
              </h2>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="../assets/laptop-g30479cdb3_1920.jpg" class="img-fluid d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <div class="cover container">
              <h4>Take your business to the next level </h4>
              <br>
              <h2>
                DIGITAL SOLUTIONS TO ENHANCE
                <br />
                YOUR JOURNEY
                <br>
                <router-link to="/contact" class="btn btn-primary btn-aminated">Contact Us</router-link>
              </h2>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="../assets/work.jpg" class="img-fluid d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <div class="cover container">
              <h4>Take your business to the next level </h4>
              <br>
              <h2>
                DIGITAL SOLUTIONS TO ENHANCE
                <br />
                YOUR JOURNEY
                <br>
                <router-link to="/contact" class="btn btn-primary btn-aminated">Contact Us</router-link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="home">
    <!--  <section class="hero">
      <div class="hero-text container">
        <div class="cover container">
          <h4>Take your business to the next level </h4>
          <br>
          <h2>
            DIGITAL SOLUTIONS TO ENHANCE
            <br />
            YOUR JOURNEY
            <br>
            <router-link to="/contact" class="btn btn-primary btn-aminated">Contact Us</router-link>
          </h2>
        </div>
      </div>

    </section>
 -->


    <section class="container body">

      <div>
        <div class="row">
          <div class="col-lg-6">
            <img src="../assets/business.jpg" class="image img-fluid" alt="">
          </div>
          <div class="col-lg-6">
            <h3>Who are we</h3>
            <hr style="width: 35%; border: 5px solid #5fc2e8; border-radius: 5px; background-color: #5fc2e8;">
            <p>
              Amilton & BrewS is an innovative line of business & service provision focused on the development of
              engineering projects, business consultancy, and commerce
            </p>

            <p>
              Founded in 2021, Amilton & BrewS focuses in helping businesses achieving their corporate goals
              successfully
              by providing services, and products while assisting ambitious business leaders innovate.

            </p>

          </div>


        </div>
      </div>


    </section>


    <section class="service">

      <h3>Services We Offer</h3>
      <hr style="width: 15%; border: 5px solid #5fc2e8; border-radius: 5px; background-color: #5fc2e8;">
      <p>Our commitment is to deliver results in your business through quality products and services.</p>
      <services-view></services-view>

    </section>


    <section class="testimony">

      <h3>What our Clients Say</h3>
      <testimony-view></testimony-view>

    </section>

    <section class="paternship">
      <h3>Customers Served</h3>

      <div class="container">
        <div class="logo">
          <img src="../assets/suninvest.png" class="image" width="20%" alt="">
          <img src="../assets/fesa.jpg" class="image" width="20%" alt="">
        </div>
      </div>

    </section>

    <section class="contact">
      <h3>Contact Us</h3>
      <contact-view></contact-view>
    </section>
  </div>






</template>

<script>
  // @ is an alias to /src
  import ServicesView from './ServicesView.vue';
  import TestimonyView from './TestimonyView.vue'
  import ContactView from './ContactView.vue'
  //import CarouselPage from '@/components/partials/CarouselPage.vue';


  export default {
    name: "HomeView",
    components: {
      ServicesView,
      TestimonyView,
      ContactView,
      // CarouselPage
    },
  };
</script>

<style lang="scss" scoped>
  @media (min-width: 550px) {
    .img-fluid {
      width: 100%;
      height: 85vh;
      background-size: cover;
      text-align: center;
      opacity: 0.9;
      z-index: 1;
    }
  }



  h4 {
    font-size: 30px;
    animation-name: moveInLeft;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    color: #ffff;
    font-weight: bold;
    font-family: 'Jost', sans-serif;
    text-transform: uppercase;
    text-align: center;

  }


  .cover {
    background-color: rgba(0, 0, 0, 0.478);
    padding: 30px;
    text-align: center;
    border-radius: 8px;
    animation: moveInRight 3s ease-out;
    margin-bottom: 100px;

  }


  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }


    80% {
      transform: translateX(10px);
    }


    100% {
      opacity: 1;
      transform: translate(0) rotate(180deg);
    }
  }



  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(100px) rotate(0deg);
    }

    80% {
      transform: translateX(-20px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }




  h2 {
    animation: moveInRight 3s ease-out;
    font-weight: 400;
    text-align: center;
    font-family: 'Jost', sans-serif;

  }

  .body {
    margin: 10px;
    padding: 20px;

    @media (max-width: 550px) {
      width: 100%;

    }

    .image {
    border-radius: 8px;
    box-shadow: 0 5px 10px #0005;
    height: 50vh;

    @media (max-width: 550px) {
               width: 100%;

          }
  }
  }

  .logo {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;

  }

  .service {
    margin: 20px;
    padding: 50px;
    background-color: white;

  }

  .paternship {
    margin: 20px;
    padding: 50px;
    background-color: #CFD2CF;

    h3 {
      text-align: center;
    }
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
    border-radius: 8px;
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
    color: #5fc2e8;
  }

  p {
    font-size: 20px;
  }


  .hero {
    background-image: url("../assets/maldives.jpg");
    background-size: cover;
    //background-attachment: fixed;
    position: relative;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.886);
    height: 100vh;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    .cover {
      background-color: rgba(0, 0, 0, 0.61);
      padding: 20px;
      text-align: center;
      border-radius: 8px;



    }

    .hero-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #5fc2e8;
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
        font-size: 20px;
        font-family: 'Josefin Sans', sans-serif;

        @media (min-width: 550px) {
          font-size: 30px;
          font-weight: bold;
        }
      }




    }


  }
</style>