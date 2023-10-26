<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

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
            <div class="content" id="about">
                <h1>
                  About me
                </h1>
                <h3 style="color: #68e0cf;">My story</h3>
                <div style="display: flex;">
                  <p>
                    Gamer from young age. Started tinkering with programming and game modifications
                    for various multiplayer games.
                  </p>
                  <p style="margin-left: 50px;">
                    Learned how to make multiplayer servers and scripts for them. Make 3d models, maps, animations for game mods.
                  </p>
                </div>
                <p>
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
                  Experience
                </h1>
                <div class="slider">
                  <div class="item"> 
                    <div class="date">2015-2021</div>
                    <div class="item-name">Master Games Studio <a href="https://themastergames.com/"><i class="fa-solid fa-link"></i></a><p><i class="fa-solid fa-code"></i> Unity Game developer </p></div>
                    <p>Freelance</p>
                  </div>
                  <div class="item"> 
                    <div class="date">2021-</div>
                    <div class="item-name">Black Top Games  <p><i class="fa-solid fa-code"></i> Unity Game developer </p></div>
                    <p>Part-time <br>Remote</p>
                  </div>
                </div>
            </div>
            <div class="content">
                <h1>
                  Education
                </h1>
                <div class="slider">
                  <div class="item"> 
                    <div class="date">2020-2023</div>
                    <div class="item-name">INTERNATIONAL BURCH UNIVERSITY <p> <i class="fa-solid fa-location-dot"></i> Sarajevo, BA</p></div>
                    <p>Bachelor of Information Technologies</p>
                  </div>
                  <div class="item"> 
                    <div class="date">2016-2020</div>
                    <div class="item-name">Prva Gimnazija <p> <i class="fa-solid fa-location-dot"></i> Zenica, BA</p></div>
                    <p>Deparment of ICT</p>
                  </div>
                </div>
            </div>
            <div class="content">
                <h1>
                  Languages
                </h1>
                <ul class="grid language">
                      <li>
                        <h2>English</h2>
                        <p>Fluent in english. I started learning at age of 9. I learned english in school, by using web and by playing games. I went on international university, where lessons are on english.</p>
                        <div class="label">100%</div>
                        <div class="percentage-bar">
                        <div class="filler" style="width: 100%;"></div>
                        </div>
                      </li>
                      <li>
                        <h2>Bosnian</h2>
                        <p>My mother language is integral to my identity, and I can speak and understand other Yugoslavian languages, due to cultural diversity in Bosnia and Herzegovina.</p>
                        <div class="label">100%</div>
                        <div class="percentage-bar">
                        <div class="filler" style="width: 100%;"></div>
                      </div>
                      </li>
                      <li>
                        <h2>German</h2>
                        <p>Intermediate level. I started learning at age of 11. I learned it in primary and high school. I should have knowledge of B1-B2 level.</p>
                        <div class="label" style="width: 60%;">60%</div>
                        <div class="percentage-bar">
                        <div class="filler" style="width: 60%;"></div>
                        </div>
                      </li>
                      <li>
                        <h2>Latin</h2>
                        <p>I had latin as subject for 2 years in school. I am able to make sentences and undestand what is written.</p>
                        <div class="label" style="width: 40%;">40%</div>
                        <div class="percentage-bar">
                        <div class="filler" style="width: 40%;"></div>
                      </div>
                      </li>
                  </ul>
            </div>
            <div class="content">
                <h1>
                  Programming
                </h1>
                <ul class="gridthree language">
                      <li>
                        <span class="programming c-sharp" ></span>
                        <ve-progress :progress="90" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">90%</span></ve-progress>
                        <h3>C#</h3>
                        <p>I learned using Unity. Experience with it for several years.</p>
                      </li>
                      <li>
                        <span class="programming"></span>
                        <ve-progress :progress="63" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">63%</span></ve-progress>
                        <h3>Pyhton</h3>
                        <p>I learned it and used it all over the place from hobby,high school to university. My senior design project was keylogger. It was mainly client sided pyhton app to capture user data.</p>
                      </li>
                      <li>
                        <span class="programming php"  ></span>
                        <ve-progress :progress="65" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">65%</span></ve-progress>
                        <h3>PHP</h3>
                        <p>I started thinkering with while making web sites and game panels for game servers of various games. Expanded knowledge in university to build back-end with FlightPHP</p>
                      </li>
                      <li>
                        <span class="programming cpp"  ></span>
                        <ve-progress :progress="40" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">40%</span></ve-progress>
                        <h3>C++</h3>
                        <p>I went on some courses. Later I learned it for a year in high school, making from simple programs to animated graphics.</p>
                      </li>
                      <li>
                        <span class="programming javascript"  ></span>
                        <ve-progress :progress="80" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">80%</span></ve-progress>
                        <h3>JavaScript</h3>
                        <p>Long joureny of learning. Started learning it in my early days for web development, used it through whole my "short" career with various frameworks, etc..</p>
                      </li>
                      <li>
                        <span class="programming java"  ></span>
                        <ve-progress :progress="55" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">55%</span></ve-progress>
                        <h3>Java</h3>
                        <p>Used in university a lot. For object-oriented programming course, writing JUNIT tests(selenium), algoritms and structures, mobile apps in android studio and more...</p>
                      </li>
                      <li>
                        <span class="programming clang"  ></span>
                        <ve-progress :progress="40" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">40%</span></ve-progress>
                        <h3>C</h3>
                        <p>I learned it in university. I know basic concepts, pointers reading from files writing to files etc...</p>
                      </li>
                      <li>
                        <span class="programming octave"  ></span>
                        <ve-progress :progress="35" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">35%</span></ve-progress>
                        <h3>Octave</h3>
                        <p>I used it for machine learning course in university. I know to process data and use it for mostly basic machine learning.</p>
                      </li>
                      <li>
                        <span class="programming sql"  ></span>
                        <ve-progress :progress="80" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">80%</span></ve-progress>
                        <h3>SQL</h3>
                        <p>I learned basics in high school and by myself. Later on used extenstivly through university. I know to write complex queryes, functions, triggers, routines etc..</p>
                      </li>
                      <li>
                        <span class="programming go"  ></span>
                        <ve-progress :progress="30" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">30%</span></ve-progress>
                        <h3>Go</h3>
                        <p>I got assigned to make a game in Go in course programming languages at university. I know basic things about it.</p>
                      </li>
                      <li>
                        <span class="programming node"  ></span>
                        <ve-progress :progress="50" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">50%</span></ve-progress>
                        <h3>Node.js</h3>
                        <p>I learned how to use it developing a RAGE:MP(GTA V MP modification) game server.Node.js is used as server side scripting.</p>
                      </li>
                      <li>
                        <span class="programming vue"  ></span>
                        <ve-progress :progress="65" color="#68e0cf" :size="100" emptyColor="#003f86" fontColor="#68e0cf"><span class="value">65%</span></ve-progress>
                        <h3>Vue.js</h3>
                        <p>Also I learned vue.js developing RAGE:MP game server. Vue.js is used in custom browser as overlay for player interaction with server</p>
                      </li>
                  </ul>
            </div>
            <div class="content">
                <h1>
                  <i class="fa-brands fa-unity"></i> Unity
                </h1>
                <p>Hi! You are probably mostly interested in my Unity engine experience as it is the job I did mostly and it is thing I love to do.</p>
               
                <ul>
                      <li>
                        <h3><i class="fa-solid fa-pen-nib"></i> UNITY UI</h3>
                          <p>My journey through Unity's UI system began with a mix of excitement and uncertainty. 
                            At first, the multitude of components and options felt overwhelming, but I was determined to conquer it. 
                            Starting with basic buttons and text elements, I gradually developed a profound understanding of Unity's UI capabilities.
                            With time, I ventured into more complex territory, from making health bars to inventories, animations and more.
                            I learned so UI dynamically responded to gameplay, and designing intricate in-game HUDs and world space canvases
                            that enhanced the player experience. The flexibility and power of Unity's UI system gradually 
                            transformed it from a formidable challenge into an indispensable asset in my game development toolkit..</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-burst"></i> VFX</h3>
                          <p>The vast array of tools and options within Unity's VFX Graph filled me with both curiosity and caution. 
                            Beginning with simple particle systems, I gradually unlocked the core concepts and techniques needed to create captivating visual effects.
                            As I ventured deeper into VFX, I learned to manipulate VFX graphs and particle systems to control particle behaviors. 
                            This dynamic process allowed me to craft complex, dynamic effects that added depth and immersion to my game worlds. 
                            The ability to create realistic fire, smoke, water, and other intricate phenomena elevated my games to new heights of visual appeal.
                          </p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-person"></i> 2D</h3>
                          <p>My journey into Unity 2D game development has been an enlightening experience. 
                            The tools at my disposal, such as 2D tiles, sprites, and animations, opened up a world of creative possibilities. 
                            The Tilemap system allowed me to craft intricate game levels and terrains with ease.
                            I found myself deeply engrossed in animating characters and objects, breathing life into my projects. 
                            Generating tile terrains dynamically added an element of excitement to the gameplay. 
                            The physics system ensured that interactions between 2D objects were lifelike and immersive..</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-gamepad"></i> INPUT</h3>
                          <p>Learned using Unity. Experience with it for several years.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-dice-d6"></i> GRAPHICS</h3>
                          <p>Learned using Unity. Experience with it for several years.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-mountain-city"></i> LEVEL DESIGN</h3>
                          <p>Learned using Unity. Experience with it for several years.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-person-running"></i> Physics</h3>
                          <p>Learned using Unity. Experience with it for several years.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-terminal"></i> Scripting</h3>
                          <p>Learned using Unity. Experience with it for several years.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-globe"></i> Networking</h3>
                          <p>Learned using Unity. Experience with it for several years.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-headphones"></i> Audio</h3>
                          <p>Learned using Unity. Experience with it for several years.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-puzzle-piece"></i> Assets</h3>
                          <p>Learned using Unity. Experience with it for several years.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-circle-nodes"></i> AI</h3>
                          <p>Learned using Unity. Experience with it for several years.</p>
                      </li>
                  </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;900&display=swap');
.ve-progress .value {
  color: #68e0cf; /* Change this to the desired font color */
}
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
  padding-right: 8%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 0 auto;
  border-bottom: 1px solid #585d65;
  padding-bottom: 30px;
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
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: #0011ff transparent;
}
.percentage-bar {
  height: 5px;
  background: #003f86;
  position: relative;
  border-radius: 10px;
}

.filler {
  height: 100%;
  background-color: #68e0cf; /* Change this color as needed */
  border-radius: 10px;
}

.label {
  text-align: end;
  color: #68e0cf;
}
.language{
  grid-gap: 25px;
}
.value{
  color: #68e0cf;
}
.programming{
  display: inline-flex;
  width: 100px;
  height: 100px;
  background-image: url('./assets/pyhton.png');
  background-repeat: no-repeat;
  margin: 0 20px 0 0;
  background-size: contain;
  background-position: center;
}
.c-sharp{
  background-image: url('./assets/c-sharp.png');
}
.clang{
  background-image: url('./assets/clang.png');
}
.cpp{
  background-image: url('./assets/c++.png');
}
.go{
  background-image: url('./assets/go.png');
}
.java{
  background-image: url('./assets/java.png');
}
.javascript{
  background-image: url('./assets/javascript.png');
}
.node{
  background-image: url('./assets/node.png');
}
.octave{
  background-image: url('./assets/octave.png');
}
.php{
  background-image: url('./assets/php.png');
}
.sql{
  background-image: url('./assets/sql.png');
}
.vue{
  background-image: url('./assets/vue.png');
}
.gridthree{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: start;
}
.language p {
  min-height: 100px;
}
</style>