<template>
  <section class="services">
     <h3>Services We Offer</h3>
      <hr style="width: 15%; border: 5px solid #5fc2e8; border-radius: 5px; background-color: #5fc2e8;">
      <p>Our commitment is to deliver results in your business through quality products and services.</p>
    <div class="">
      <div class="row">
        <div class="col-lg-3">
          <img class="image img-fluid" src="../assets/bank.jpg" alt="">
          <router-link to="" class="link">
            <h2> Banking hardwares </h2>
          </router-link>
        </div>
        <div class="col-lg-3">
          <img class="image img-fluid" src="../assets/implementation.jpg" alt="">
          <router-link to="" class="link">
            <h2> Implementation </h2>
          </router-link>
        </div>
        <div class="col-lg-3">
          <img class="image img-fluid" src="../assets/digital-agri.jpg" alt="">
          <router-link to="" class="link">
            <h2> Digital Agriculture </h2>
          </router-link>
        </div>
        <div class="col-lg-3">
          <img class="image img-fluid" src="../assets/laptop-gc9ce0bcef_640.jpg" alt="">
          <router-link to="" class="link">
            <h2> Hot & cooling systems </h2>
          </router-link>
        </div>
      </div>
    </div>

  </section>
  <!--  <div class="pub">
          <div class="container">
               <div class="row">
                    <div class="col-lg-3">
                         
                         <p>
                              Commercialization of PSO and other 
                         </p>

                    </div>
                    <div class="col-lg-3">
                         
                         <p>
                              Engineering Projects, research & 

                         </p>

                    </div>
                    <div class="col-lg-3">
                         
                         <p>
                               Consulting & Organic Farm solutions

                         </p>

                    </div>
                    <div class="col-lg-3">
                         
                         <p>
                              Commercialization of , and spare parts

                         </p>

                    </div>

               </div>
          </div>

     </div> -->
</template>

<style lang="scss" scoped>
    h3,
  p {
    font-family: 'Josefin Sans', sans-serif;
    text-align: justify;
  }

  p {
    font-size: 20px;
  }

  h3 {
    font-size: 45px;
    font-weight: bold;
    color: #5fc2e8;
  }
  .services {
    padding: 5px;
    text-align: center;

    @media (min-width: 550px) {
      margin-top: 75px;
      padding: 20px;
    }

    h1 {
      text-align: center;
      text-transform: uppercase;
      font-size: 30px;
      padding: 5px;
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;
    }

    img {
      align-items: center;
      


    }

    .image {
      border-radius: 5px;
      box-shadow: 0 5px 10px #0005;
    }
    .row {
      text-align: center;
      padding: 10px;
    }

    .col-lg-3 {
      padding: 17px;
    }

    .link {
      text-decoration: none;
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;


    }



    h2 {
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;
      box-shadow: 0 10px 10px #0005;
      border: 1px solid #fff;
      text-align: center;
      padding: 5px;
      text-transform: uppercase;
      font-size: 20px;
    }
  }
</style>