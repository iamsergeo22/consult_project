<template>
     <div class="header">
          <h1 class="titre">
               Our Clients
          </h1>
     </div>

     <div class="body">
          <div class="row">
               <div class="col-lg-6">
                    <div style="margin-top: 20px">
                         <h2>INTUIT QUICKBOOKS</h2>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit inventore at porro fugiat,
                              molestias esse repudiandae. Error voluptas ad quaerat repellat iusto. Iure reprehenderit
                              quo
                              rem? Ratione optio explicabo facilis!</p>
                         <span><strong>Key Services: Web Development & Marketing Strategy</strong></span>
                         <br>
                         <button type="button" class="btn btn-primary">Visit the Site</button>
                    </div>
               </div>

               <div class="col-lg-6">
                    <img class="image img-fluid" src="../assets/job.jpg" alt="">
               </div>
          </div>

          <br>
          <div class="row">
               <div class="col-lg-6">
                    <img class="image img-fluid" src="../assets/pexels-asad-photo-maldives-9482122.jpg" alt="">
               </div>
               <div class="col-lg-6">
                    <div style="margin-top: 20px">
                         <h2>INTUIT QUICKBOOKS</h2>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit inventore at porro fugiat,
                              molestias esse repudiandae. Error voluptas ad quaerat repellat iusto. Iure reprehenderit
                              quo
                              rem? Ratione optio explicabo facilis!</p>
                         <span><strong>Key Services: Web Development & Marketing Strategy</strong></span>
                         <br>
                         <button type="button" class="btn btn-primary">Visit the Site</button>
                    </div>
               </div>


          </div>


          <div class="row">

               <div class="col-lg-6">
                    <div style="margin-top: 20px">
                         <h2>INTUIT QUICKBOOKS</h2>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit inventore at porro fugiat,
                              molestias esse repudiandae. Error voluptas ad quaerat repellat iusto. Iure reprehenderit
                              quo
                              rem? Ratione optio explicabo facilis!</p>
                         <span><strong>Key Services: Web Development & Marketing Strategy</strong></span>
                         <br>
                         <button type="button" class="btn btn-primary">Visit the Site</button>
                    </div>
               </div>

               <div class="col-lg-6">
                    <img class="image img-fluid" src="../assets/coding-g2c250060c_1920.jpg" alt="">
               </div>


          </div>
     </div>


</template>

<script>
     export default {


     }
</script>

<style scoped>

     p {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 20px;

     }

     span {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 20px;
          color: blue;

     }

     .btn {
          margin-top: 10px;
     }

     .image {
          border-radius: 15px;
          box-shadow: 0 5px 10px #0005;
     }

     h2 {
          font-size: 25px;
          font-weight: bold;
          font-family: 'Josefin Sans', sans-serif;


     }

     h1 {
          font-size: 25px;
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          text-align: center;
     }

     .body {
          margin: 10px;
          padding: 50px;
     }

     .row {
          padding: 100px;
          justify-content: space-between;
     }


     .header {
          height: 45vh;
          background-image: url("../assets/pexels-asad-photo-maldives-9482122.jpg");
          background-image: rgba(0, 0, 0, 0.555);
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
          /*  animation: moveInRight 10s ease-out;
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