<template>
     <div class="header">
          <h1 class="titre">
               Our Blog
          </h1>
     </div>


</template>

<script>
export default {


}
</script>

<style scoped>
h1 {
     font-size: 25px;
     font-weight: bold;
     font-family: 'Jost', sans-serif;
     text-align: center;
}


.header {
     height: 50vh;
     background-image: url("../assets/laptop-g30479cdb3_1920.jpg");
     background-color: rgba(0, 0, 0, 0.555);
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