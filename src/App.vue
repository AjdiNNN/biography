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
                <p style="margin-top: 30px;">
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
                <h1>
                  About me
                </h1>
                <h3 style="color: #68e0cf;">My story</h3>
                <div style="display: flex; width: 90%;">
                  <p>
                    Gamer from young age. Started thinkering with programming and game modifications
                    for various multiplayer games.
                  </p>
                  <p style="margin-left: 50px;">
                    Learned how to make multiplayer servers and scripts for them. Make 3d models, maps, animations for game mods.
                  </p>
                </div>
                <p style="max-width: 90%;">
                    In primary school went to competitive programming competitions, got golden gear as the one of the best technology related student in country. 
                    Continued with programming in high school and was the best in class of programming. Started learning unity in high school and also 3d modelling and 3d animation.
                    Worked on various things, programming languages. Passionate for technology and engineering.
                </p>
                  <ul class="grid">
                      <li><strong>AGE</strong> 22</li>
                      <li><strong>PHONE</strong> +386 64 45 50 536</li>
                      <li><strong>STATUS</strong> Open to work</li>
                      <li><strong>EMAIL</strong> ajdinhukic007@gmail.com</li>
                      <li><strong>RESIDENCE</strong> Zenica, BA</li>
                  </ul>
            </div>
            <div class="content">
                <h1>
                  Education
                </h1>
                <div class="slider">
                  <div class="item"> 
                    <div class="date">2020-2023</div>
                    <div class="item-name">INTERNATIONAL BURCH UNIVERSITY <p>Sarajevo, BA</p></div>
                    <p>Bachelor of Information Technologies</p>
                  </div>
                  <div class="item"> 
                    <div class="date">2016-2020</div>
                    <div class="item-name">Prva Gimnazija <p>Zenica, BA</p></div>
                    <p>Deparment of ICT</p>
                  </div>
                </div>
            </div>
            <div class="content">
                <h1>
                  Experience
                </h1>
                <div class="slider">
                  <div class="item"> 
                    <div class="date">2015-2021</div>
                    <div class="item-name">Master Games Studio <p> Unity Game developer </p></div>
                    <p>Freelance</p>
                  </div>
                  <div class="item"> 
                    <div class="date">2021-</div>
                    <div class="item-name">Black Top Games  <p> Unity Game developer </p></div>
                    <p>Part-time <br>Remote</p>
                  </div>
                </div>
            </div>
            <div class="content">
                <p style="margin-top: 30px;">
                  Highly motivated and skilled IT
                  specialist with a passion for
                  programming and game development.
                  I am looking for a challenging position
                  to use my strong technical skills and
                  experience in web development,
                  programming, and game design.
                </p>
            </div>
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
h1{
  font-size: 55px;
  line-height: 1.2;
  color: #FFF;
  font-weight: 800;
}
h3{
  line-height: 1.2;
  color: #68e0cf;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two columns */
    justify-items: start;
}

ul {
    list-style: none; /* Remove default list styling */
    padding: 0; /* Remove default padding */
    grid-gap: 10px;
}
li{
    font-size: 14px;
    font-weight: 600;
    text-align: left;
}
strong {
  display: inline-block;
  vertical-align: top;
  width: 90px;
  font-weight: 600;
  text-transform: uppercase;
  color: #68e0cf;
}
span
{
  color: #fff;
}
.date{
  display: flex;
  font-size: 11px;
  color: #68e0cf;
  font-weight: 600;
  transform-origin: bottom left;
  transform: rotate(90deg);
}
.item-name{
  margin: 0 0 30px 30px;
  font-size: 18px;
  color: #FFF;
  font-weight: 800;
}
.item {
  display: inline-block;
  margin-right:25px;
}
.slider{
  width: 95%;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  margin-bottom: 2%;
}
.slider::-webkit-scrollbar {
  height: 7px;
}

.slider::-webkit-scrollbar-thumb {
  background: #003961; 
  border-radius: 25px; 
}

.slider {
  scrollbar-width: thin;
  scrollbar-color: #0011ff transparent;
}
</style>
