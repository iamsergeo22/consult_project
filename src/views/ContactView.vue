<template>

     <div class="about">
          <div class="login">
               <div class="container">
                    <div class="form-signin">


                         <div class="row">
                              <div class="col-lg-6">
                                   <form @submit="register" method="post">
                                        <div class="mb-3">
                                             <label for="name" class="form-label">Nom*</label>
                                             <input type="text" class="form-control" id="name" v-model="register.nom"
                                                  required>
                                        </div>
                                        <div class="mb-3">
                                             <label for="name" class="form-label">Prenom*</label>
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
                                             <span v-if="!loadings.register">Envoyer</span>

                                        </button>
                                   </form>
                              </div>

                              <div class="col-lg-6">
                                   <img class="img-fluid" src="../assets/pexels-asad-photo-maldives-9470522.jpg" alt="">
                              </div>
                         </div>
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
          
          p {
               text-align: justify;
               font-family: 'Jost', sans-serif;
               font-size: 20px;
          }

.tit {
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
     background-color: #ffffff;
     border-radius: 12px;
}

h2 {
     font-family: 'Jost';
     text-align: center;
     padding: 10px;
     font-family: 'Josefin Sans', sans-serif;
}
/* 
.header {
     height: 30vh;
     background-image:
          url(../images/banner.jpg);
     background-size: cover;
     background-position: top;
     position: relative;


} */


.titre {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
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