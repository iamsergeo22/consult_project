<template>
     <div class="pub">
          <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="true">
               <!--  <div class="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
          </div> -->
               <div class="carousel-inner">
                    <div class="carousel-item active">
                         <div class="banner-container">

                              <div class="banner">
                                   <img src="../assets/laptop-g30479cdb3_1920.jpg" class="img-fluid image" alt="">
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae illo fugit
                                        cumque maiores sit porro ut obcaecati? Non incidunt, corporis facere dignissimos
                                        cumque dolor deleniti animi error saepe sit repellendus!</p>
                                   <hr>
                                   <p style="font-weight: bold">Serge Guru, Senior Web developper</p>
                              </div>

                         </div>

                    </div>
                    <div class="carousel-item">
                         <div class="banner-container">

                              <div class="banner">
                                   <img src="../assets/coding-g2c250060c_1920.jpg" class="img-fluid image" alt="">
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae illo fugit
                                        cumque maiores sit porro ut obcaecati? Non incidunt, corporis facere dignissimos
                                        cumque dolor deleniti animi error saepe sit repellendus!</p>
                                   <hr>
                                   <p style="font-weight: bold">Serge Guru, Senior Web developper</p>
                              </div>

                         </div>

                    </div>


                    <div class="carousel-item">
                         <div class="banner-container">

                              <div class="banner">
                                   <img src="../assets/blogging-gc89c94d93_1920.jpg" class="img-fluid image" alt="">
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae illo fugit
                                        cumque maiores sit porro ut obcaecati? Non incidunt, corporis facere dignissimos
                                        cumque dolor deleniti animi error saepe sit repellendus!</p>
                                   <hr>
                                   <p style="font-weight: bold">Serge Guru, Senior Web developper</p>
                              </div>

                         </div>

                    </div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
               </button>
          </div>

     </div>
</template>

<script>
     export default {

     }
</script>

<style scoped>
     .image {
          border-radius: 50%;
          width: 100px;
     }

   

     p {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 17px;
          padding: 20px;

     }

     .banner-container .banner {
          border-radius: 10px;
          margin: 20px;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px #0005;
         
         
     }



   
    
    

   
</style>