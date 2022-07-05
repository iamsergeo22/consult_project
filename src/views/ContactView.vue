<template>

     <div class="login">
          <div class="container">
               <div class="form-signin">

                    <form>
                         <div class="mb-3">
                              <label for="email" class="form-label">Full Name *</label>
                              <input type="text" class="form-control" id="name">
                         </div>
                         <div class="mb-3">
                              <label for="password" class="form-label">Email *</label>
                              <input type="email" class="form-control" id="email">
                         </div>

                         <div class="mb-3">
                              <label for="password" class="form-label">Phone Number *</label>
                              <input type="number" class="form-control" id="number">
                         </div>
                         <div class="mb-3">
                              <label for="email" class="form-label">Company Name *</label>
                              <input type="text" class="form-control" id="name">
                         </div>

                         <div class="mb-3">
                              <label for="" class="form-label">Message</label>
                              <textarea name="message" id="message" class="form-control" placeholder="Le message"
                                   rows="5" required=""></textarea>
                         </div>



                         <button type="submit" class="btn btn-primary w-100">Submit</button>


                    </form>
               </div>
          </div>
     </div>

</template>

<script>


export default {
     name: "ContactView",
     
  
 /*     methods: {
          login() {
               axios.post('api/login', this.form).then((response) => {
                    localStorage.setItem('token', response.data.access_token)
                    this.$router.push('/user-profile')
               }).catch(error => {
                    console.log(error)
               })
          },

          initForm() {
               return {
                    email: null,
                    password: null
               }
          }
     } */
}
</script>

<style scoped>



.form-signin {
     width: 100%;
     max-width: 900px;
     height: 100%;
     padding: 15px;
     margin: 5rem auto 0;
     font-family: 'Josefin Sans', sans-serif;
}

label {
     font-family: 'Josefin Sans', sans-serif;
     font-weight: bold;
}



form {
     max-width: 100%;
     border-radius: 12px;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
     padding: 2rem;
     background-color: #ffffff;
     font-family: 'Jost';

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