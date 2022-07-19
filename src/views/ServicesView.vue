<template>
     <div class="pub">
          <div class="container">
               <div class="row">
                    <div class="col-lg-3">
                         <img class="image img-fluid" src="../assets/pos1.jpg" alt="">
                         <p>
                              Commercialization of PSO and other banking hardwares
                         </p>

                    </div>
                    <div class="col-lg-3">
                         <img class="image img-fluid" src="../assets/engineer-icon-735790.png" alt="">
                         <p>
                              Engineering Projects, research & Implementation

                         </p>

                    </div>
                    <div class="col-lg-3">
                         <img class="image img-fluid" src="../assets/agriculture.jpg" alt="">
                         <p>
                              Digital Agriculture Consulting & Organic Farm solutions

                         </p>

                    </div>
                    <div class="col-lg-3">
                         <img class="image img-fluid" src="../assets/air-condition.jpg" alt="">
                         <p>
                              Commercialization of hot & cooling systems, and spare parts

                         </p>

                    </div>

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

     .image {
          border-radius: 50%;
          width: 400px;
          border: 3px solid #fff;

     }



     .row {
          padding: 10px;
     }

     .col-lg-3 {
          padding: 15px;
     }

     .banner-container .banner {
          border-radius: 5px;
          margin: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          box-shadow: 0 5px 10px #0005;
          overflow: hidden;
     }

     .banner-container .banner .shoe {
          flex: 1 1 250px;
          padding: 15px;
          text-align: center;
     }

     .banner-container .banner .shoe img {
          width: 40%;
          border-radius: 10px;
     }

     .banner-container .banner .content {
          flex: 1 1 250px;
          text-align: center;
          padding: 10px;
          text-transform: uppercase;
     }

     .banner-container .banner .content span {
          color: #eee;
          font-size: 25px;
     }

     .banner-container .banner .content h3 {
          color: #fff;
          font-size: 40px;
     }

     .banner-container .banner .content p {
          color: #eee;
          font-size: 20px;
          padding: 10px 0;
     }

     .banner-container .banner .content .btn {
          display: block;
          height: 40px;
          width: 150px;
          line-height: 40px;
          background: #fff;
          color: #d63031;
          margin: 5px auto;
          text-decoration: none;
     }

     .banner-container .banner .women {
          position: relative;
          bottom: -33px;
          padding: 10px;
          flex: 1 1 250px;
     }

     .banner-container .banner .women img {
          width: 100%;
          border-radius: 10px;
     }
</style>