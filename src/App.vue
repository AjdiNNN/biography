<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <Navigation />
  <div class="container">
        <div class="left-div">
          <div class="group">
            <a href="https://www.instagram.com/hukicajdin/" class="element">
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/ajdin-huki%C4%87-720243203/" class="element">
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a href="https://github.com/AjdiNNN" class="element">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div class="right-div">
            <div class="content empty">
            </div>
            <div class="content balloncontainer">
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
                <h3 style="color: #ff6b35;">My story</h3>
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
                      <li><strong>AGE</strong> {{ age }}</li>
                      <li><strong>PHONE</strong> +387 64 45 50 536</li>
                      <li><strong>STATUS</strong> Open to work</li>
                      <li><strong>EMAIL</strong> ajdinhukic007@gmail.com</li>
                      <li><strong>RESIDENCE</strong> Zenica, BA</li>
                  </ul>
            </div>
          
            <div class="content" id="experience">
                <h1>
                  Experience
                </h1>
                <div class="slider">

                  <div class="item"> 
                    <div class="date">Jun 2024 - Jun 2025</div>
                    <div class="item-name">Rolla <a href="https://www.rolla.app/">  <i class="fa-solid fa-link"></i></a><p><i class="fa-solid fa-code"></i> Unity Engineer </p><p>Full-time </p>  </div>
                  </div>
                  <div class="item"> 
                    <div class="date">Feb 2021 - May 2024</div>
                    <div class="item-name">Black Top Games<p><i class="fa-solid fa-code"></i> Unity developer </p><p>Part-time <br> Full-time since October 2023 <br>Remote</p>  </div>
                  </div>
                  <div class="item"> 
                    <div class="date">Dec 2017 - Sep 2020</div>
                    <div class="item-name">Master Games Studio <a href="https://themastergames.com/">  <i class="fa-solid fa-link"></i></a><p><i class="fa-solid fa-code"></i> Unity developer </p> <p>Freelance</p> </div>
                  </div>
                </div>
            </div>
            <div class="content" id="education">
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
            <div class="content" id="languages">
                <h1>
                  Languages
                </h1>
                <ul class="grid language">
                      <li>
                        <h2>English</h2>
                        <p>Fluent in english. I started learning at age of 9. I learned english in school, by using web and by playing games. I went on international university, where lessons are on english.</p>
                        <div class="label" style="width: 90%">90%</div>
                        <div class="percentage-bar">
                        <div class="filler" style="width: 90%;"></div>
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
                        <div class="label" style="width: 40%;">40%</div>
                        <div class="percentage-bar">
                        <div class="filler" style="width: 40%;"></div>
                        </div>
                      </li>
                  </ul>
            </div>
            <div class="content" id="program">
                <h1>
                  Programming
                </h1>
                <ul class="gridthree language">
                    <li>
                      <span class="programming c-sharp"></span>
                      <ve-progress :progress="90" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">90%</span>
                      </ve-progress>
                      <h3>C#</h3>
                      <p>My experience with C# revolves around Unity, where I've developed proficiency over several years. It has been integral in creating gameplay mechanics and immersive 3D and 2D environments.</p>
                    </li>
                    <li>
                      <span class="programming"></span>
                      <ve-progress :progress="63" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">63%</span>
                      </ve-progress>
                      <h3>Python</h3>
                      <p>I learned it and used it all over the place from hobby, high school to university. My senior design project was keylogger. It was mainly client sided python app to capture user data.</p>
                    </li>
                    <li>
                      <span class="programming php"></span>
                      <ve-progress :progress="65" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">65%</span>
                      </ve-progress>
                      <h3>PHP</h3>
                      <p>I started tinkering with it while making web sites and game panels for game servers of various games. Expanded knowledge in university to build back-end with FlightPHP</p>
                    </li>
                    <li>
                      <span class="programming cpp"></span>
                      <ve-progress :progress="40" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">40%</span>
                      </ve-progress>
                      <h3>C++</h3>
                      <p>I went on some courses. Later I learned it for a year in high school, making from simple programs to animated graphics.</p>
                    </li>
                    <li>
                      <span class="programming javascript"></span>
                      <ve-progress :progress="80" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">80%</span>
                      </ve-progress>
                      <h3>JavaScript</h3>
                      <p>Long journey of learning. Started learning it in my early days for web development, used it through whole my "short" career with various frameworks, etc..</p>
                    </li>
                    <li>
                      <span class="programming java"></span>
                      <ve-progress :progress="55" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">55%</span>
                      </ve-progress>
                      <h3>Java</h3>
                      <p>Used in university a lot. For object-oriented programming course, writing JUNIT tests (selenium), algorithms and structures, mobile apps in android studio and more...</p>
                    </li>
                    <li>
                      <span class="programming clang"></span>
                      <ve-progress :progress="40" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">40%</span>
                      </ve-progress>
                      <h3>C</h3>
                      <p>I learned it in university. I know basic concepts, pointers, reading from files, writing to files etc...</p>
                    </li>
                    <li>
                      <span class="programming octave"></span>
                      <ve-progress :progress="35" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">35%</span>
                      </ve-progress>
                      <h3>Octave</h3>
                      <p>I used it for machine learning course in university. I know to process data and use it for mostly basic machine learning.</p>
                    </li>
                    <li>
                      <span class="programming sql"></span>
                      <ve-progress :progress="80" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">80%</span>
                      </ve-progress>
                      <h3>SQL</h3>
                      <p>I learned basics in high school and by myself. Later on used extensively through university. I know to write complex queries, functions, triggers, routines etc..</p>
                    </li>
                    <li>
                      <span class="programming go"></span>
                      <ve-progress :progress="30" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">30%</span>
                      </ve-progress>
                      <h3>Go</h3>
                      <p>I got assigned to make a game in Go in course programming languages at university. I know basic things about it.</p>
                    </li>
                    <li>
                      <span class="programming node"></span>
                      <ve-progress :progress="50" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">50%</span>
                      </ve-progress>
                      <h3>Node.js</h3>
                      <p>I learned how to use it developing a RAGE:MP (GTA V MP modification) game server. Node.js is used as server side scripting.</p>
                    </li>
                    <li>
                      <span class="programming vue"></span>
                      <ve-progress :progress="65" color="var(--filler)" :size="100" emptyColor="var(--panel)" fontColor="var(--filler)">
                        <span class="value">65%</span>
                      </ve-progress>
                      <h3>Vue.js</h3>
                      <p>Also I learned vue.js developing RAGE:MP game server. Vue.js is used in custom browser as overlay for player interaction with server</p>
                    </li>
                  </ul>

            </div>
            <div class="content" id="unity">
                <h1>
                <i class="fa-brands fa-unity"></i> Unity Expertise
                </h1>
                <p>With over 6 years of professional Unity development experience across multiple studios and projects, I've developed deep expertise in various aspects of game development. Here's a detailed breakdown of my Unity skills:</p>
              
                <ul>
                      <li>
                        <h3><i class="fa-solid fa-globe"></i> OPEN WORLD DEVELOPMENT</h3>
                          <p>At Rolla, I worked extensively on an open world running/cycling game using Unity DOTS for performance optimization. I developed custom rendering pipelines for vegetation and environment rendering, significantly improving visual quality while maintaining performance. My work included implementing shaders using both Shader Graph and HLSL, and optimizing the game using Unity Profiler and Windows Performance Analyzer to enhance frame rates and memory management.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-network-wired"></i> MULTIPLAYER SYSTEMS</h3>
                          <p>I have substantial experience with multiplayer implementations, including managing socket connections to backend services and handling client-server communication. At Rolla, I worked on the multiplayer server connection and display systems. Additionally, at Black Top Games, I implemented real-time multiplayer functionality using Unity's new multiplayer systems for a motion-controlled ball racing game.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-pen-nib"></i> UI & TOOL DEVELOPMENT</h3>
                          <p>I've created complex UI systems with animations and developed internal tools to streamline workflows for artists, animators, and other team members. My work on a tycoon game at Black Top Games focused heavily on UI animations and creating a robust platform for game mechanics calculations.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-burst"></i> VFX & SHADERS</h3>
                          <p>I'm proficient with both Unity's VFX Graph and traditional particle systems. My experience includes creating various visual effects for games, from environmental effects to gameplay VFX. I've implemented custom shaders using both visual tools like Shader Graph and code-based approaches with HLSL.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-gamepad"></i> GAME MECHANICS</h3>
                          <p>I've implemented diverse game systems including:
                            <ul>
                              <li>Random 2D world generation with day/night cycles for a top-down shooter</li>
                              <li>Hex-based turn-based strategy systems with procedural map generation</li>
                              <li>Inventory management systems</li>
                              <li>Motion controls using device accelerometers</li>
                              <li>Turn-based game mechanics</li>
                            </ul>
                          </p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-dice-d6"></i> 3D & 2D DEVELOPMENT</h3>
                          <p>My experience spans both 3D and 2D development:
                            <ul>
                              <li>Integrated 3D assets from artists into games with proper optimization</li>
                              <li>Developed animation systems working closely with animators</li>
                              <li>Created 2D sprite-based games with animation systems</li>
                              <li>Experience with 3D modeling and UV mapping from my freelance work</li>
                            </ul>
                          </p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-gears"></i> PIPELINE & AUTOMATION</h3>
                          <p>At Rolla, I collaborated with DevOps to automate build pipelines, significantly improving development efficiency. I'm experienced with Unity's scripting API and have created numerous editor tools to streamline development workflows across all my projects.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-mobile-screen"></i> MOBILE DEVELOPMENT</h3>
                          <p>During my time at Master Games Studio, I worked on mobile casual games, gaining experience with platform-specific optimizations, touch controls, and the unique challenges of mobile game development.</p>
                      </li>
                </ul>
            </div>
            <div class="content" id="portofolio">
              <h1>Portofolio</h1>
              <div class="portofolio-navigation">
                <a
                  href="https://www.rolla.app/world"
                  target="_blank"
                  rel="noopener"
                >
                  <h4>
                    <i class="logo-icon"><img src="/rollaapp_logo.jpg" alt="Rolla" /></i> Rolla
                  </h4>
                </a>

                <a @click="toggleSteam" :class="{ active: steam }">
                  <h4><i class="fa-brands fa-steam"></i> STEAM</h4>
                </a>

                <a @click="toggleSketchFab" :class="{ active: sketchfab }">
                  <h4><i class="fa-solid fa-cube"></i> SketchFab</h4>
                </a>
              </div>
              <div v-if="steam" class="steam">
                <iframe src="https://store.steampowered.com/widget/1555470/" scrolling="no" class="steam-item" frameborder="0"></iframe>
              </div>
              <div class="sketchfab-grid" v-else-if="sketchfab">
                <div class="sketchfab-embed-wrapper"> <iframe title="Sink" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" src="https://sketchfab.com/models/71ff5a9dc9b74f43923a88e1c5c03b8a/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/sink-71ff5a9dc9b74f43923a88e1c5c03b8a?utm_medium=embed&utm_campaign=share-popup&utm_content=71ff5a9dc9b74f43923a88e1c5c03b8a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Sink </a> by <a href="https://sketchfab.com/ajdinnnn?utm_medium=embed&utm_campaign=share-popup&utm_content=71ff5a9dc9b74f43923a88e1c5c03b8a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ajdinnnn </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=71ff5a9dc9b74f43923a88e1c5c03b8a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
                <div class="sketchfab-embed-wrapper"> <iframe title="Kitchen element" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/227f3481304148458212ce0f5fc579c5/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/kitchen-element-227f3481304148458212ce0f5fc579c5?utm_medium=embed&utm_campaign=share-popup&utm_content=227f3481304148458212ce0f5fc579c5" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Kitchen element </a> by <a href="https://sketchfab.com/ajdinnnn?utm_medium=embed&utm_campaign=share-popup&utm_content=227f3481304148458212ce0f5fc579c5" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ajdinnnn </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=227f3481304148458212ce0f5fc579c5" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
                <div class="sketchfab-embed-wrapper"> <iframe title="Axe" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/92b5ddbaf4164b7ea7529f3a318a9bea/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/axe-92b5ddbaf4164b7ea7529f3a318a9bea?utm_medium=embed&utm_campaign=share-popup&utm_content=92b5ddbaf4164b7ea7529f3a318a9bea" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Axe </a> by <a href="https://sketchfab.com/ajdinnnn?utm_medium=embed&utm_campaign=share-popup&utm_content=92b5ddbaf4164b7ea7529f3a318a9bea" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ajdinnnn </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=92b5ddbaf4164b7ea7529f3a318a9bea" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
                <div class="sketchfab-embed-wrapper"> <iframe title="Stove" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d03c345ea1384673a2db555264b6dcb9/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/stove-d03c345ea1384673a2db555264b6dcb9?utm_medium=embed&utm_campaign=share-popup&utm_content=d03c345ea1384673a2db555264b6dcb9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Stove </a> by <a href="https://sketchfab.com/ajdinnnn?utm_medium=embed&utm_campaign=share-popup&utm_content=d03c345ea1384673a2db555264b6dcb9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ajdinnnn </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d03c345ea1384673a2db555264b6dcb9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
                <div class="sketchfab-embed-wrapper"> <iframe title="Chair" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/40645c2236a244b0aa473254c45931c0/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/chair-40645c2236a244b0aa473254c45931c0?utm_medium=embed&utm_campaign=share-popup&utm_content=40645c2236a244b0aa473254c45931c0" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Chair </a> by <a href="https://sketchfab.com/ajdinnnn?utm_medium=embed&utm_campaign=share-popup&utm_content=40645c2236a244b0aa473254c45931c0" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ajdinnnn </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=40645c2236a244b0aa473254c45931c0" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
                <div class="sketchfab-embed-wrapper"> <iframe title="Table" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8e5bb57bbea846088b29641a2ce6c870/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/table-8e5bb57bbea846088b29641a2ce6c870?utm_medium=embed&utm_campaign=share-popup&utm_content=8e5bb57bbea846088b29641a2ce6c870" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Table </a> by <a href="https://sketchfab.com/ajdinnnn?utm_medium=embed&utm_campaign=share-popup&utm_content=8e5bb57bbea846088b29641a2ce6c870" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ajdinnnn </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8e5bb57bbea846088b29641a2ce6c870" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
                <div class="sketchfab-embed-wrapper"> <iframe title="Diningtable" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ec1471e427564e1ab676b34ebe5019ab/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/diningtable-ec1471e427564e1ab676b34ebe5019ab?utm_medium=embed&utm_campaign=share-popup&utm_content=ec1471e427564e1ab676b34ebe5019ab" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Diningtable </a> by <a href="https://sketchfab.com/ajdinnnn?utm_medium=embed&utm_campaign=share-popup&utm_content=ec1471e427564e1ab676b34ebe5019ab" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ajdinnnn </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ec1471e427564e1ab676b34ebe5019ab" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
                <div class="sketchfab-embed-wrapper"> <iframe title="Table" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/73dc4f87b9e24f1d9782606e75351749/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/table-73dc4f87b9e24f1d9782606e75351749?utm_medium=embed&utm_campaign=share-popup&utm_content=73dc4f87b9e24f1d9782606e75351749" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Table </a> by <a href="https://sketchfab.com/ajdinnnn?utm_medium=embed&utm_campaign=share-popup&utm_content=73dc4f87b9e24f1d9782606e75351749" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ajdinnnn </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=73dc4f87b9e24f1d9782606e75351749" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
                <div class="sketchfab-embed-wrapper"> <iframe title="Shoutgun Android Futuristic" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/67a4cb120eaa497a866fe074e78335c7/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/shoutgun-android-futuristic-67a4cb120eaa497a866fe074e78335c7?utm_medium=embed&utm_campaign=share-popup&utm_content=67a4cb120eaa497a866fe074e78335c7" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Shoutgun Android Futuristic </a> by <a href="https://sketchfab.com/ajdinnnn?utm_medium=embed&utm_campaign=share-popup&utm_content=67a4cb120eaa497a866fe074e78335c7" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ajdinnnn </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=67a4cb120eaa497a866fe074e78335c7" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
              </div>
            </div>
            <div class="content" id="contact">
              <h1>Contact</h1>
              <ul class="contact">
                <li>  
                  <form ref="form" @submit.prevent="sendEmail">
                    <div class="group-val">
                      <label for="user_name">Full Name</label>
                      <input type="text" name="user_name" placeholder="eg. Ajdin Hukić">
                    </div>
                    <div class="group-val">
                      <label for="email">Email *</label>
                      <input name='email' type='email' placeholder="ajdinhukic007@gmail.com">
                    </div>
                    <div class="group-val">
                      <label for="subject">Subject *</label>
                      <textarea name='query' placeholder="eg. Hello, I am contacting you regarding open position at...." style="height:100px"></textarea>
                    </div>
                    <button>Send Message&nbsp;&nbsp;<i class="fa-solid fa-chevron-right" style="color:#68e0cf"></i></button>
                  </form>
                </li>
                <li class="contact-bottom">
                  <h2>Ajdin Hukić</h2>
                  <h3>IT Specialist</h3>
                  <ul style="margin: 35px 0 50px 0;">
                      <li><strong>AGE</strong> <div>{{ age }}</div></li>
                      <li><strong>PHONE</strong> <div>+387 64 45 50 536</div></li>
                      <li><strong>STATUS</strong> <div>Open to work</div></li>
                      <li><strong>EMAIL</strong> <div>ajdinhukic007@gmail.com</div> </li>
                      <li><strong>RESIDENCE</strong> <div>Zenica, BA</div></li>
                  </ul>
                  <div class="signature"></div>
                </li>
              </ul>
            </div>
        </div>

    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import 'steamwidgets';
import 'steamwidgets/steam_app';
import emailjs from '@emailjs/browser';

export default {
  name: 'App',
  components: {
    Navigation,
  },
  data() {
    return {
      birthDate: import.meta.env.VITE_BIRTH_DATE, // Fetch birth date from .env
      age: 0, // Initialize age
      steam: true,
      sketchfab: false,
    };
  },
  
  methods: {
    calculateAge() {
      const birthDate = new Date(this.birthDate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age;
    },
    toggleSketchFab() {
      this.steam = false;
      this.sketchfab = true;
    },
    toggleSteam() {
      this.sketchfab = false;
      this.steam = true;
    },
    sendEmail() {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE,
          import.meta.env.VITE_TEMPLATE,
          this.$refs.form,
          import.meta.env.VITE_PUBLIC_API
        )
        .then(
          (result) => {
            this.$toast.success(`Message sent`);
          },
          (error) => {
            this.$toast.error(error.text);
          }
        );
    },
  },
  mounted() {
    this.calculateAge(); // Calculate age on component mount
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;900&display=swap');

:root{
  /* Solar Ember theme - deep night + ember accents */
  --bg: #0b1020;          /* page background (deep navy) */
  --panel: #0f141b;       /* content panels / containers */
  --accent: #ff6b35;      /* ember orange (primary accent) */
  --gold: #f3a712;        /* secondary warm accent */
  --muted: #6b7280;       /* borders / subtle text */
  --text: #f5f2ee;        /* primary text (warm off-white) */
  --glass: rgba(255,107,53,0.06);
  --glass-2: rgba(243,167,18,0.04);
  --filler: #ff8a57;      /* progress filler */
}

.left-div .group {
  position: absolute;
  bottom: 3%;
  right: 3%;
}
.container{
  width: 100%;
}
.left-div .element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  margin: 15px;
  color: var(--text);
  border: 2px solid var(--text);
  padding: 10px;
  border-radius: 50%;
  background: transparent;
}
.left-div .element i {
  display: flex;
  justify-content: center;
}

.left-div .element:hover {
  color: var(--accent);
  border: 2px solid var(--accent);
  cursor: pointer;
}
.ve-progress .value {
  color: var(--accent); /* progress label color */
}
.empty{
  height: 150px; 
  border-bottom: none !important;
}
.balloncontainer{
  border-bottom: none !important; 
}
.name {
  color: var(--text);
  font-size: 4.5em;
  line-height: 1.2;
  font-weight: 800;
}
.ballon{
  z-index: 99;
  width: 400px;
  height: 400px;
  margin-left: -15em;
  background-color: var(--bg);
  border-radius: 322px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -1rem 0 15px rgba(7, 6, 6, 0.3);
}
.container{
  background-color: var(--bg);
}
.left-div {
  background-image: url('./assets/img.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  left: 0;
  top: 0;
  width: 30%;
  height: 100%;
  filter: saturate(0.9) brightness(0.85) contrast(1.05);
}

.right-div {
    margin-left: 28%;
    background-color: var(--bg);
    width: 69%;
    border-right: 1px solid var(--muted);
}


.content {
  background-color: transparent;
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 0 auto;
  border-bottom: 1px solid rgba(107,114,128,0.12);
  padding-bottom: 30px;
}

body {
  display: block;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  background: var(--bg);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  margin-top: 60px;
  display: contents;
}
p{
  letter-spacing: 0;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 30px 0;
  font-size: 14px;
  color: var(--text);
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-align: justify;
}
h1{
  font-size: 2.5em;
  line-height: 1.2;
  color: var(--text);
  font-weight: 800;
}
h3{
  line-height: 1.2;
  color: var(--accent);
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
  color: var(--accent);
}
span
{
  color: var(--text);
}
.date{
  display: flex;
  font-size: 11px;
  color: var(--gold);
  font-weight: 600;
  transform-origin: bottom left;
  transform: rotate(90deg);
}
.item-name{
  text-align: left;
  margin: 0 0 30px 30px;
  font-size: 18px;
  color: var(--text);
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
  background: rgba(0,0,0,0.45);
  border-radius: 25px; 
  border: 2px solid rgba(255,107,53,0.06);
}

.slider {
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.45) transparent;
}
.percentage-bar {
  height: 5px;
  background: rgba(107,114,128,0.12);
  position: relative;
  border-radius: 10px;
}

.filler {
  height: 100%;
  background-color: var(--filler); /* progress filler */
  border-radius: 10px;
}

.label {
  text-align: end;
  color: var(--accent);
}
.language{
  grid-gap: 25px;
}
.value{
  color: var(--accent);
}
.programming{
  display: inline-flex;
  width: 100px;
  height: 100px;
  background-image: url('./assets/pyhton.webp');
  background-repeat: no-repeat;
  margin: 0 20px 0 0;
  background-size: contain;
  background-position: center;
  filter: saturate(0.9) brightness(0.95);
}
.c-sharp{
  background-image: url('./assets/c-sharp.webp');
}
.clang{
  background-image: url('./assets/clang.webp');
}
.cpp{
  background-image: url('./assets/c++.webp');
}
.go{
  background-image: url('./assets/go.webp');
}
.java{
  background-image: url('./assets/java.webp');
}
.javascript{
  background-image: url('./assets/javascript.webp');
}
.node{
  background-image: url('./assets/node.webp');
}
.octave{
  background-image: url('./assets/octave.webp');
}
.php{
  background-image: url('./assets/php.webp');
}
.sql{
  background-image: url('./assets/sql.webp');
}
.vue{
  background-image: url('./assets/vue.webp');
}
.gridthree{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: start;
}
.language p {
  min-height: 100px;
}
.portofolio-navigation {
  background-color: var(--panel);
  display: flex;
  width: 100%;
  border-radius: 50px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.5);
}

.portofolio-navigation a {
  margin-left: 35px;
  cursor: pointer;
  color: var(--text);
  text-decoration: none;
  position: relative;
}

.portofolio-navigation h4 {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 15px;
  margin: 10px auto;
}

.portofolio-navigation h4 i {
  display: flex;
  align-items: center;
}

.portofolio-navigation i img {
  height: 20px;
  width: auto;
  display: block;
}

.portofolio-navigation a.active h4 {
  background: linear-gradient(90deg, rgba(255,107,53,0.12), rgba(243,167,18,0.06));
  border-radius: 15px;
  border: 1px solid rgba(255,107,53,0.14);
}

.portofolio-navigation a.active:hover h4 {
  background: linear-gradient(90deg, rgba(255,107,53,0.16), rgba(243,167,18,0.08));
}

.portofolio-navigation a:hover h4 {
  color: var(--accent);
}

.sketchfab-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 25px;
  gap: 20px;
}

.sketchfab-embed-wrapper {
  position: relative;
  padding-bottom: 75%;
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255,107,53,0.02), transparent);
  border: 1px solid rgba(107,114,128,0.08);
}

.sketchfab-embed-wrapper iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
input[type=text], input[type=email], select, textarea {
  padding-left:30px;
  display: block;
  font-family: "Poppins";
  font-size: 14px;
  height: 64px;
  width: 100%;
  color: var(--text);
  background: none !important;
  border: 1px solid rgba(107,114,128,0.12);
  resize: none;
  outline: 0;
  border-radius: 30px;
  transition: all 0.3s ease 0s;
}
input[type=text]:focus, select:focus, textarea:focus, input[type=email]:focus{
  border: 1px solid var(--accent);

}
textarea{
  height: 170px;
    padding-top: 30px;
    padding-bottom: 30px;
    resize: none;
}
label{
  padding: 0 10px;
  position: absolute;
  left: 35px;
  top: -5px;
  font-size: 12px;
  line-height: 12px;
  color: var(--text);
  font-weight: 800;
  background: var(--bg);
  text-transform: uppercase;
  z-index: 2;
}
.group-val{
  position: relative;
    margin-bottom: 40px;
}
input[type=submit] {
  background-color: var(--accent);
  color: var(--text);
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button {
  padding: 0 35px;
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  height: 64px;
  line-height: 62px;
  text-align: center;
  font-size: 12px;
  color: var(--text);
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid rgba(107,114,128,0.12);
  cursor: pointer;
  border-radius: 64px;
  transition: 1s all cubic-bezier(0.165, 0.85, 0.45, 1) 0s;

}
button:hover{
  color: var(--accent);
  border: 1px solid var(--accent);
  box-shadow: 0 6px 18px rgba(255,107,53,0.08);
}
input[type=submit]:hover {
  background-color: #ff824a;
}
.contact{
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 50px;
}

.contact-bottom{
  padding: 30px;
  float: right;
  border: 1px solid rgba(107,114,128,0.12);
  border-radius: 50px;
  background: linear-gradient(180deg, rgba(255,107,53,0.02), transparent);
}
.contact-bottom h2{
  margin: 0 0 5px 0;
  font-size: 30px;
  color: var(--text);
  font-weight: 800;
}
.contact-bottom h3{
  font-size: 11px;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
}
.signature{
  background-image: url('./assets/signature.webp');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 70px;
  opacity: 0.95;
}
@media (max-width: 960px) {
   .portofolio-navigation {
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    border-radius: 0;
  }

  .portofolio-navigation a {
    margin: 5px 0;
    width: 100%;
    text-align: center;
  }

  .portofolio-navigation h4 {
    justify-content: center;
    margin: 5px auto;
    padding: 8px 15px;
  }
  .right-div {
  width: 100%;
}
  .language{
    grid-template-columns: none;
  }
  .left-div{
    position: relative;
    width: 100%;
    height: 600px;
  }
  .right-div{
    margin: 0 auto;
  }
  .empty{
    display: none;
  }
  .balloncontainer{
    align-items: center;
    padding-bottom: 0px;
  }
  .ballon{
    margin-left: 0;
    margin-top: -9em;
    height: 300px;
    width: 300px;
    box-shadow: 0 -1rem 15px rgba(7, 6, 6, 0.3);
  }
  .name{
    font-size: 3.5em;
  }
  .group{
    bottom: 20% !important;
  }
  .gridthree{
    grid-template-columns: 1fr 1fr;
  }
  .sketchfab-grid{
    grid-template-columns: 1fr;
  }
  .contact{
    grid-template-columns: 1fr;
  }
  input[type=text], input[type=email], select, textarea{
    width: 90%;
  }
}
.steam{
  width: 100%;
}
.steam-item{
  background-color: var(--bg);
  margin: 25px 0;
  width:100%;
  min-height: 190px;
}
.steam-item html{
  background-color: var(--bg);
}
</style>
