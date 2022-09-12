<template>
    
    <div class="header">
          <h1 class="titre">
               Our Team
          </h1>
     </div>


     <div class="team">
          <div class="container">
               <div class="row">
                    <div class="col-lg-6" style="text-align: center">
                         <img src="../assets/laptop-gc9ce0bcef_640.jpg" class="image img-fluid" alt="">

                         <h1 class="name">SHARVA HASSAMAL</h1>

                         <h2 class="job-title">CEO & Co-Founder</h2>
                         <p class="Description">Sharva is the co-founder of Portage Labs Inc. and is a passionate
                              technology enthusiast having spent most of his career with startups and technology
                              companies. His focus is to build beautiful experiences for the organizations he works
                              with. His knowledge is focused on marketing strategy and utilizing technologies to improve
                              the overall customer lifecycle and the associated business results. He created Portage
                              Labs to offer best-in-class services to help organization grow without breaking the bank.
                         </p>
                    </div>
                    <div class="col-lg-6" style="text-align: center">
                         <img src="../assets/macbook-g5a4eeafc4_1920.jpg" class="image img-fluid" alt="">

                         <h1 class="name">SERGE ANAN</h1>

                         <h2 class="job-title">Web & Mobile Application</h2>
                         <p class="Description">
                              Sharva is the co-founder of Portage Labs Inc. and is a passionate
                              technology enthusiast having spent most of his career with startups and technology
                              companies. His focus is to build beautiful experiences for the organizations he works
                              with. His knowledge is focused on marketing strategy and utilizing technologies to improve
                              the overall customer lifecycle and the associated business results. He created Portage
                              Labs to offer best-in-class services to help organization grow without breaking the bank.
                         </p>
                    </div>
                    <div class="col-lg-6" style="text-align: center">
                         <img src="../assets/macbook-g5a4eeafc4_1920.jpg" class="image img-fluid" alt="">

                         <h1 class="name">SERGE ANAN</h1>

                         <h2 class="job-title">Web & Mobile Application</h2>
                         <p class="Description">
                              Sharva is the co-founder of Portage Labs Inc. and is a passionate
                              technology enthusiast having spent most of his career with startups and technology
                              companies. His focus is to build beautiful experiences for the organizations he works
                              with. His knowledge is focused on marketing strategy and utilizing technologies to improve
                              the overall customer lifecycle and the associated business results. He created Portage
                              Labs to offer best-in-class services to help organization grow without breaking the bank.
                         </p>
                    </div>

                    <div class="col-lg-6" style="text-align: center">
                         <img src="../assets/coding-g2c250060c_1920.jpg" class="image img-fluid" alt="">

                         <h1 class="name">SERGE ANAN</h1>

                         <h2 class="job-title">Web & Mobile Application</h2>
                         <p class="Description">
                              Sharva is the co-founder of Portage Labs Inc. and is a passionate
                              technology enthusiast having spent most of his career with startups and technology
                              companies. His focus is to build beautiful experiences for the organizations he works
                              with. His knowledge is focused on marketing strategy and utilizing technologies to improve
                              the overall customer lifecycle and the associated business results. He created Portage
                              Labs to offer best-in-class services to help organization grow without breaking the bank.
                         </p>
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

     .name {
          color: #000;
          font-weight: bold;
          padding: 10px;
     }

     .description {
          text-align: justify;
          font-family: 'Josefin Sans', sans-serif;
     }

     .row,
     .col-lg-6 {
          padding: 10px;
     }

     h1 {
          font-size: 25px;
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          text-align: center;
     }

     img {

          transition: transform .5s;

     }

     img:hover {
          -ms-transform: scale(1.2);
          /* IE 9 */
          -webkit-transform: scale(1.2);
          /* Safari 3-8 */
          transform: scale(1.2);
     }

     .team {
          padding: 50px;
          margin: 10px;
     }

     .image {
          border-radius: 50%;
          box-shadow: 0 5px 10px #0005;
          width: 400px;
          border: 3px solid #fff;

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