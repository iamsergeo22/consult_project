<template>
     <div class="header">
          <div class="cover">
               <h1 class="titre">
                    Our Services
               </h1>
          </div>
     </div>

     <div class="service">
          <div class="row">
               <div class="col-lg-4">
                    <div class="card" style="width: 28rem;">
                         <img src="../assets/pexels-asad-photo-maldives-9482122.jpg" class="card-img-top" alt="...">
                         <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the
                                   bulk of the card's content.</p>
                         </div>
                    </div>
               </div>
               <div class="col-lg-4">
                    <div class="card" style="width: 28rem;">
                         <img src="../assets/pexels-asad-photo-maldives-9482122.jpg" class="card-img-top" alt="...">
                         <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the
                                   bulk of the card's content.</p>
                         </div>
                    </div>
               </div>
               <div class="col-lg-4">
                    <div class="card" style="width: 28rem;">
                         <img src="../assets/pexels-asad-photo-maldives-9482122.jpg" class="card-img-top" alt="...">
                         <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the
                                   bulk of the card's content.</p>
                         </div>
                    </div>
               </div>
               <div class="col-lg-4">
                    <div class="card" style="width: 28rem;">
                         <img src="../assets/pexels-asad-photo-maldives-9482122.jpg" class="card-img-top" alt="...">
                         <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the
                                   bulk of the card's content.</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     <section class="testimony">

          <h3>What our Clients Say</h3>
          <testimony-view></testimony-view>

     </section>

     <section class="contact">
          <h3>Contact Us</h3>
          <contact-view></contact-view>
     </section>


</template>

<script>
     import TestimonyView from './TestimonyView.vue'
     import ContactView from './ContactView.vue'
     export default {
          components: {
               TestimonyView,
               ContactView
          }


     }
</script>


<style lang="scss" scoped>
     .contact {
          padding: 20px;

          h3 {
               text-align: center;
          }
     }

     h3 {
          font-size: 45px;
          font-weight: bold;
          color: #5fc2e8;
     }

     h3,
     p {
          font-family: 'Josefin Sans', sans-serif;
          text-align: justify;
     }



     .testimony {
          margin: 20px;
          padding: 50px;
          background-color: white;

          h3 {
               text-align: center;
          }
     }


     .service {
          padding: 20px;
     }

     .row {
          padding: 10px;
     }

     .col-lg-4 {
          padding: 15px;
     }

     .card {
          border-radius: 15px;
          box-shadow: 0 5px 10px #0005;
     }

     .card-text {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 15px;

     }

     .card-title {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 25px;
          font-weight: bold;
          color: #5fc2e8;
     }


     h1 {
          font-size: 25px;
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          text-align: center;
     }


     .header {
          height: 45vh;
          background-image: url("../assets/pexels-asad-photo-maldives-9482122.jpg");
          background-color: rgb(0, 0, 0);
          background-size: cover;
          background-position: top;
          position: relative;


     }



     .titre {
          position: absolute;
          top: 50%;
          left: 40%;
          text-align: center;
          color: #fff;
          /* animation: moveInRight 10s ease-out;
          animation-name: moveInLeft;
          animation-duration: 10s;
          animation-timing-function: ease-in; */
          text-transform: uppercase;
          font-size: 50px;
          font-weight: bold;
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
</style>