<template>
     <div class="header">
          <div class="cover">
               <h1 class="titre">
                    Contact Us
               </h1>
          </div>
     </div>
     <div class="about">
          <div class="login">
               <div class="container">
                    <div style="text-align: center">
                         <h3>Contact Us</h3>
                         <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="form-signin">
                         <div class="row">
                              <div class="col-lg-6">
                                   <form @submit="register" method="post">
                                        <div class="mb-3">
                                             <label for="name" class="form-label">First Name*</label>
                                             <input type="text" class="form-control" id="name" v-model="register.nom"
                                                  required>
                                        </div>
                                        <div class="mb-3">
                                             <label for="name" class="form-label">Last Name*</label>
                                             <input type="text" class="form-control" id="name" v-model="register.prenom"
                                                  required>
                                        </div>
                                        <div class="mb-3">
                                             <label for="email" class="form-label">Email*</label>
                                             <input type="email" class="form-control" id="email"
                                                  v-model="register.email" required>
                                        </div>
                                        <div class="mb-3">
                                             <label for="number" class="form-label">Telephone*</label>
                                             <input type="text" class="form-control" id="number"
                                                  v-model="register.telephone" required>
                                        </div>
                                        <div class="mb-3">
                                             <label for="" class="form-label">Message</label>
                                             <textarea name="message" id="message" class="form-control"
                                                  placeholder="Le message" rows="5" required=""></textarea>
                                        </div>


                                        <button type="submit" class="btn btn-warnings w-100">

                                             <span v-if="loadings.register">Chargement.....</span>
                                             <span v-if="!loadings.register">Send Message</span>

                                        </button>
                                   </form>
                              </div>

                              <div class="col-lg-6">
                                   <img class="img-fluid" src="../assets/pexels-asad-photo-maldives-9470522.jpg" alt="">
                              </div>
                         </div>

                    </div>


                
               </div>
               <br>
               <div class="mapouter">
                    <div class="gmap_canvas"><iframe width="100%" height="400" id="gmap_canvas"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59924.89724670122!2d57.46175688762315!3d-20.16297758713843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c504941d601ef%3A0xfdc5186c91bdbb3d!2sPort%20Louis%2C%20Maurice!5e0!3m2!1sfr!2stg!4v1660304367293!5m2!1sfr!2stg"
                              frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                    </div>

               </div>
          </div>

     </div>



</template>

<script>
     export default {
          layout: "karaevents",
          data() {
               return {
                    loadings: {
                         register: false,
                    },
                    register: {
                         nom: '',
                         prenom: '',
                         email: '',
                         telephone: '',
                         password: ''
                    }
               }
          },
          methods: {

          }

     }
</script>



<style lang="scss" scoped>



     h3 {
          text-align: center;
          padding: 20px;
          font-family: 'Jost', sans-serif;
          font-size: 35px;
          font-weight: bold;
          color: #5fc2e8;
     }

     p {
          text-align: center;
          font-family: 'Jost', sans-serif;
          font-size: 20px;
     }


     .flex {
          display: flex;
          justify-content: space-between;
     }

     img {
          width: 100%;
          height: 100%;
     }

     .login {
          padding: 15px;
     }

     .form-signin {
          width: 100%;
          height: 100%;
          padding: 25px;
          font-family: 'Jost', sans-serif;
          border-radius: 5px;
          box-shadow: 0 5px 10px #0005;
          background-color: #fff;
     }

     label {
          font-family: 'Jost', sans-serif;
          font-weight: bold;
     }

     span {
          font-family: 'Jost', sans-serif;
     }

     .btn-warnings {
          background-color: #5fc2e8;
          color: #fff;


     }

     .btn-warnings:hover {
          background-color: #5fc2e8;
          color: #fff;


     }



     form {
          max-width: 100%;
          padding: 25px;
          background-color: #fff;
          font-family: 'Jost', sans-serif;

     }


     a {
          text-decoration: none;
          font-size: 15px;
     }



     .header {
          height: 45vh;
          background-image: url("../assets/banner.png");
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

     .title {
          max-width: 90rem;
          padding: 1rem;

     }




     .image {
          border-radius: 10px;

     }
</style>