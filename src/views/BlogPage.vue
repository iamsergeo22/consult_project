<template>
     <div class="header">
          <h1 class="titre">
               Our Blog
          </h1>
     </div>

     <div class="blog">
          <div class="row">
               <div class="col-lg-6">
                    <img class="image img-fluid" src="../assets/banking.jpg" alt="">
               </div>
               <div class="col-lg-6">
                    <div class="description">
                         <h2>The What, How, and Why of B2B Martech
                         </h2>
                         <span><strong>March 06, 2022</strong></span>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit inventore at porro fugiat,
                              molestias esse repudiandae. Error voluptas ad quaerat repellat iusto. Iure reprehenderit
                              quo
                              rem? Ratione optio explicabo facilis!</p>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit inventore at porro fugiat,
                              molestias esse repudiandae. Error voluptas ad quaerat repellat iusto. Iure reprehenderit
                              quo
                              rem? Ratione optio explicabo facilis!</p>
                         <button type="button" class="btn btn-primary">Visit the Site</button>
                    </div>
               </div>


          </div>

          <div class="row">
               <div class="col-lg-6">
                    <img class="image img-fluid" src="../assets/banking.jpg" alt="">
               </div>
               <div class="col-lg-6">
                    <div class="description">
                         <h2>The What, How, and Why of B2B Martech
                         </h2>
                         <span><strong>March 06, 2022</strong></span>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit inventore at porro fugiat,
                              molestias esse repudiandae. Error voluptas ad quaerat repellat iusto. Iure reprehenderit
                              quo
                              rem? Ratione optio explicabo facilis!</p>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit inventore at porro fugiat,
                              molestias esse repudiandae. Error voluptas ad quaerat repellat iusto. Iure reprehenderit
                              quo
                              rem? Ratione optio explicabo facilis!</p>
                         <button type="button" class="btn btn-primary">Visit the Site</button>
                    </div>
               </div>


          </div>

          <div class="row">
               <div class="col-lg-6">
                    <img class="image img-fluid" src="../assets/banking.jpg" alt="">
               </div>
               <div class="col-lg-6">
                    <div class="description">
                         <h2>The What, How, and Why of B2B Martech
                         </h2>
                         <span><strong>March 06, 2022</strong></span>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit inventore at porro fugiat,
                              molestias esse repudiandae. Error voluptas ad quaerat repellat iusto. Iure reprehenderit
                              quo
                              rem? Ratione optio explicabo facilis!</p>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit inventore at porro fugiat,
                              molestias esse repudiandae. Error voluptas ad quaerat repellat iusto. Iure reprehenderit
                              quo
                              rem? Ratione optio explicabo facilis!</p>
                         <button type="button" class="btn btn-primary">Visit the Site</button>
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



     .row {
          padding: 20px;
          
     }

     .contact {
          padding: 20px;

          h3 {
               text-align: center;
          }
     }

     .blog {
          padding: 30px;
     }

     .description {
          padding: 20px;
          line-height: 30px;
     }

     .image {
          border-radius: 15px;
          box-shadow: 0 5px 10px #0005;

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

     p {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 20px;

     }

     h1 {
          font-size: 25px;
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          text-align: center;
     }

           h2 {
                font-size: 35px;
                font-weight: bold;
                font-family: 'Josefin Sans', sans-serif;
                color: #5fc2e8;
           }


   .header {
          height: 45vh;
          background-image: url("../assets/consulting.jpg");
          background-color: rgba(0, 0, 0, 0.819);
          background-size: cover;
          opacity: 0.9;
          background-position: top;
          position: relative;


     }


     .titre {
          position: absolute;
          top: 50%;
          left: 40%;
          text-align: center;
          color: #fff;
          /*  animation: moveInRight 10s ease-out;
     animation-name: moveInLeft;
     animation-duration: 10s;
     animation-timing-function: ease-in; */
          text-transform: uppercase;
          font-size: 50px;
          font-weight: bold;
     }

          img {
     
               transition: transform .5s;
     
          }
     
          img:hover {
               -ms-transform: scale(1.1);
               /* IE 9 */
               -webkit-transform: scale(1.1);
               /* Safari 3-8 */
               transform: scale(1.1);
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