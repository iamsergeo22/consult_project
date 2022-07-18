<template>
     <div class="pub">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
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
                              <div class="row">
                                   <div class="col-lg-4">
                                        <div class="card" style="width: 25rem;">
                                             <img src="../assets/coding-g2c250060c_1920.jpg"
                                                  class="img-fluid card-img-top" alt="...">
                                             <div class="card-body">
                                                  <h5 class="card-title">Web & App Development</h5>
                                                  <p class="card-text">Some quick example text to build on the card
                                                       title and
                                                       make up the bulk of the card's content.</p>
                                                  <a href="#" class="btn btn-primary">Read More</a>
                                             </div>
                                        </div>
                                   </div>

                                   <div class="col-lg-4">
                                        <div class="card" style="width: 25rem;">
                                             <img src="../assets/laptop-gc9ce0bcef_640.jpg"
                                                  class="img-fluid card-img-top" alt="...">
                                             <div class="card-body">
                                                  <h5 class="card-title">Marketing Automation</h5>
                                                  <p class="card-text">Some quick example text to build on the card
                                                       title and
                                                       make up the bulk of the card's content.</p>
                                                  <a href="#" class="btn btn-primary">Read More</a>
                                             </div>
                                        </div>
                                   </div>

                                   <div class="col-lg-4">
                                        <div class="card" style="width: 25rem;">
                                             <img src="../assets/workspace-gc61f0955a_640.jpg"
                                                  class="img-fluid card-img-top" alt="...">
                                             <div class="card-body">
                                                  <h5 class="card-title">Product Management</h5>
                                                  <p class="card-text">Some quick example text to build on the card
                                                       title and
                                                       make up the bulk of the card's content.</p>
                                                  <a href="#" class="btn btn-primary">Read More</a>
                                             </div>
                                        </div>
                                   </div>


                              </div>
                         </div>

                    </div>
                    <div class="carousel-item">
                         <div class="banner-container">
                              <div class="row">

                                   <div class="col-lg-4">
                                        <div class="card" style="width: 25rem;">
                                             <img src="../assets/home-office-g58bdf4de7_640.jpg" 
                                                  class="img-fluid card-img-top" alt="...">
                                             <div class="card-body">
                                                  <h5 class="card-title">Data Science</h5>
                                                  <p class="card-text">Some quick example text to build on the card
                                                       title and
                                                       make up the bulk of the card's content.</p>
                                                  <a href="#" class="btn btn-primary">Read More</a>
                                             </div>
                                        </div>
                                   </div>

                                   <div class="col-lg-4">
                                        <div class="card" style="width: 25rem;">
                                             <img src="../assets/laptop-g30479cdb3_1920.jpg" class="img-fluid card-img-top"
                                                  alt="...">
                                             <div class="card-body">
                                                  <h5 class="card-title">Customer Intelligence
                                                  </h5>
                                                  <p class="card-text">Some quick example text to build on the card
                                                       title and
                                                       make up the bulk of the card's content.</p>
                                                  <a href="#" class="btn btn-primary">Read More</a>
                                             </div>
                                        </div>
                                   </div>

                                   <div class="col-lg-4">
                                        <div class="card" style="width: 25rem;">
                                             <img src="../assets/blogging-gc89c94d93_1920.jpg" class="img-fluid card-img-top"
                                                  alt="...">
                                             <div class="card-body">
                                                  <h5 class="card-title">Consulting</h5>
                                                  <p class="card-text">Some quick example text to build on the card
                                                       title and
                                                       make up the bulk of the card's content.</p>
                                                  <a href="#" class="btn btn-primary">Read More</a>
                                             </div>
                                        </div>
                                   </div>




                              </div>
                         </div>

                    </div>

               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
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




.card-body {
     text-align: left;
     font-family: 'Josefin Sans', sans-serif;
}

.card-title {
     color: #5fc2e8;
     font-weight: bold;
     font-family: 'Josefin Sans', sans-serif;
     font-size: 25px;

}

.card {
     box-shadow: 0 5px 10px #0005;
}

.row {
     padding: 10px;
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