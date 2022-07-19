<template>
     <div class="footer">

          <div class="row">

               <div class="col-lg-4">


                    <br>
                    <div>
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusamus inventore
                              rem earum adipisci sint, itaque id quia quisquam soluta sit. Dolore, laborum tempore
                              voluptate recusandae natus omnis nisi minima.

                         </p>
                         <a href="https://www.youtube.com/channel/UCClmJlh7QlZJXojYM_OqA3w" target="blank"><i
                                   class="fab fa-youtube"></i></a>
                         <a href="https://twitter.com/Karaeventstogo" target="blank"><i class="fab fa-twitter"></i></a>
                         <a href="https://www.facebook.com/karaeventstogo" target="blank"><i
                                   class="fab fa-facebook"></i></a>
                         <a href="https://www.instagram.com/eventskaratogo/"><i class="fab fa-instagram"
                                   target="blank"></i></a>
                         <a href="https://www.linkedin.com/company/kara-events/about/?viewAsMember=true"
                              target="blank"><i class="fab fa-linkedin"></i></a>
                         <p>Copyright © Serge 2022 | All Rights Reserved</p>
                    </div>
               </div>


               <div class="col-lg-4">
                    <h2><b>Directs Links</b></h2>
                    <ul>
                         <li>
                              <router-link to="/">Home</router-link>
                         </li>
                         <li>
                              <router-link to="/service">Services</router-link>
                         </li>
                         <li>
                              <router-link to="/blog">Blog</router-link>
                         </li>
                         <li>
                              <router-link to="/contact">Contact us</router-link>
                         </li>
                    </ul>
               </div>

               <div class="col-lg-4">
                    <h2><b>Services</b></h2>
                    <ul>
                         <li>
                              <router-link to="/service">POS</router-link>
                         </li>
                         <li>
                              <router-link to="/service">Web & Mobile Application</router-link>
                         </li>
                         <li>
                              <router-link to="/blog">Consulting</router-link>
                         </li>
                         <li>
                              <router-link to="/contact">Digital Marketing</router-link>
                         </li>
                    </ul>
               </div>








          </div>

     </div>
</template>

<script>
     export default {

     }
</script>

<style scoped>



     


     .image {
          border-radius: 5px;
     }

     .footer {
          background-color: #92A9BD;
          padding: 30px;
     }



     a {
          justify-content: space-between;
          font-family: 'Josefin Sans', sans-serif;
          padding: 10px;
          color: #fff;
          text-decoration: none;
          font-size: 20px;

     }
     

     a:hover,
     a:active {
          color: blue;

     }

     p {
          text-align: justify;
          text-justify: inter-word;
          font-size: 18px;
          margin: 10px;
          font-family: 'Josefin Sans', sans-serif;
     }
</style>