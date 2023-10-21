<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <Navigation />
  <div class="container">
        <div class="left-div">
        </div>
        <div class="right-div">
            <div class="content" style="height: 150px; border-bottom: none;">
            </div>
            <div class="content" style="border-bottom: none;">
                <div class="ballon">
                  <div class="name">AJDIN</div>
                    <div class="name">HUKIĆ</div>
                </div>
            </div>
            <div class="content">
                <h2>
                  About me
                </h2>
                <p>
                  Highly motivated and skilled IT
                  specialist with a passion for
                  programming and game development.
                  I am looking for a challenging position
                  to use my strong technical skills and
                  experience in web development,
                  programming, and game design.
                </p>
            </div>
            <div class="content">
                <h2>
                  About me
                </h2>
                <p>
                  Highly motivated and skilled IT
                  specialist with a passion for
                  programming and game development.
                  I am looking for a challenging position
                  to use my strong technical skills and
                  experience in web development,
                  programming, and game design.
                </p>
            </div>
            <div class="content">
                <h2>
                  About me
                </h2>
                <p>
                  Highly motivated and skilled IT
                  specialist with a passion for
                  programming and game development.
                  I am looking for a challenging position
                  to use my strong technical skills and
                  experience in web development,
                  programming, and game design.
                </p>
            </div>
            <!-- Add more right content here -->
        </div>
    </div>


</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;900&display=swap');
.name {
  color: #ffffff;
  font-size: 4.5em;
  line-height: 1.2;
  font-weight: 800;
}
.ballon{
  z-index: 99;
  width: 400px;
  height: 349px;
  margin-left: -15em;
  background-color: #002642;
  border-radius: 322px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container{
  background-color: #002642;
}
.left-div {
  background-image: url('./assets/leftphoto.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  left: 0;
  top: 0;
  width: 50%; /* Adjust the width as needed */
  height: 100%;
}

.right-div {
    margin-left: 50%; /* Adjust margin to accommodate the left div */
    background-color: #002642;
    width: 48%;
    border-right: 1px solid #585d65;
}

/* Add your other CSS styles here */

/* Example content styles */
.content {
  background-color: #002642;
  padding-left: 8%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 0 auto;
  border-bottom: 1px solid #585d65;
}

body {
  display: block;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  display: contents;
}
p{
  max-width: 350px;
  letter-spacing: 0;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 30px 0;
  font-size: 14px;
  color: #fff;
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-align: justify;
}
h2{
  line-height: 1.2;
  color: #68e0cf;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
</style>
