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
                        <p>My experience with C# revolves around Unity, where I've developed proficiency over several years. It has been integral in creating gameplay mechanics and immersive 3D and 2D environments.</p>
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
                          <p>My journey through the Unity Input System has been marked by evolution and innovation. 
                            Initially, I worked with the old input system, which was rigid and required extensive coding to handle different input devices.                     
                            The introduction of Unity's new Input System was a game-changer. It offered a more intuitive, flexible, and cohesive approach to input handling. 
                            This transition allowed me to focus on the creative aspects of game development, making my projects better.
                            I was an early adopter of the new Input System during its beta stages due to its efficiency and user-friendliness. 
                            It continued to improve, offering versatile control schemes and support for various input devices. 
                            The streamlined API and developer tools accelerated my development cycles, and new input system is my way to go today, altough I can use old one too.
                          </p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-dice-d6"></i> GRAPHICS</h3>
                          <p>
                            One of the key elements that significantly enhanced my graphics capabilities was adopting Unity's Universal Render Pipeline (URP or LWRP). 
                            URP brought a modern and efficient rendering solution, allowing me to achieve stunning visuals while maintaining optimal performance across 
                            various platforms. In addition to URP, I've gained a deep understanding of post-processing effects, which has allowed me to control lighting, 
                            color grading, and various visual enhancements in my projects. This knowledge has been instrumental in creating visually captivating and immersive
                            game environments. Furthermore, I'm proficient in 3D modeling, texture creation, and UV mapping, which enables me to craft custom assets and 
                            textures that fit seamlessly into my game worlds. This ability has been crucial in achieving a unique visual style in my projects. One of my standout 
                            skills in the realm of graphics is shader development. I'm well-versed in writing custom shaders to achieve specific visual effects and optimizations. 
                            Moreover, I'm proficient in creating shaders using Shader Graph, providing a more visual and intuitive approach to shader development. With my previous
                            experience in Visual Effects (VFX), as mentioned earlier, I can seamlessly integrate particle systems and dynamic effects into my game worlds, 
                            further enhancing the overall visual experience.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-mountain-city"></i> LEVEL DESIGN</h3>
                          <p>My experience in level design within Unity has been a dynamic and creative journey, marked by the use of various powerful tools and techniques. 
                            I've harnessed the potential of assets like Gaia and the Glyph Terrain Shader to craft diverse and visually stunning landscapes. 
                            These tools have allowed me to generate terrains with rich textures and realistic features, adding depth and immersion to my game environments. 
                            In conjunction with Gaia, Gena has been a valuable addition, enabling me to populate these terrains with a wide range of assets, fostering an 
                            ecosystem that feels both natural and vibrant. Moreover, I've worked extensively with Unity's built-in terrain system, harnessing its capabilities 
                            to create captivating 2D level designs and exploring its potential for procedurally generated content. The ability to integrate captivating skyboxes,
                            whether custom-made or from the Asset Store, has further enriched the ambiance of my levels.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-person-running"></i> Physics</h3>
                          <p>My journey with physics in Unity has been an immersive experience, taking me through the intricacies of creating dynamic and realistic 
                            simulations within my game worlds. Unity's robust physics engine has been my go-to tool for building interactive environments. By employing 
                            rigidbodies and colliders, I've established the fundamental rules governing object interactions, from character movements to complex relationships 
                            between in-game elements. I've also delved into Unity's 2D physics capabilities, using them to craft captivating 2D games with responsive, 
                            physics-driven gameplay. In this exploration, understanding the collision matrix and its control has been crucial. It allowed me to fine-tune 
                            how objects interact and collide, granting me precise control over which objects affect one another, thus optimizing both realism and playability.
                            Additionally, Unity's physics system provides comprehensive control and customization options, allowing me to create engaging gameplay mechanics like 
                            realistic vehicle physics, character animations, and physics-based puzzles. Overall, my experience with Unity's physics has been a cornerstone in 
                            bringing my game ideas to life with dynamic, immersive, and enjoyable interactions.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-terminal"></i> Scripting</h3>
                          <p>
                            Scripting in Unity has been the backbone of my game development journey, providing the essential tools to breathe life into my creative concepts. 
                            Unity's scripting capabilities, predominantly through the use of C# and its extensive API, have enabled me to craft intricate and immersive gameplay 
                            experiences. Using unity script lifecyle I managed to breath life in games, implementing intricate game logic, or creating interactive 
                            systems that respond to user input, scripting has been the linchpin in turning my visions into interactive realities.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-puzzle-piece"></i> Assets</h3>
                          <p>My experience with the Unity Asset Store has been a game-changer in my game development journey. 
                            The Asset Store has proven to be a treasure trove of resources, offering a wide array of assets, plugins, 
                            and tools that have significantly enriched my projects. Whether it's finding high-quality 3D models, textures, 
                            or audio assets to enhance the visual and auditory aspects of my games, or discovering powerful plugins that streamline 
                            complex development tasks, the Unity Asset Store has been my go-to source. I've also explored the world of pre-made scripts, shaders, 
                            and visual effects packages, which not only saved me valuable time but also provided valuable insights into best practices and innovative 
                            techniques. It's incredible how the Asset Store fosters collaboration and innovation within the Unity community, making it easier 
                            to access solutions that may have otherwise taken a significant amount of time to develop from scratch.</p>
                      </li>
                      <li>
                        <h3><i class="fa-solid fa-circle-nodes"></i> AI</h3>
                          <p>My experience with Unity's AI for pathfinding, spanning both 3D and 2D environments, has been a transformative journey
                             in game development. Unity's built-in navigation system, including NavMesh and Pathfinding, has been instrumental in creating dynamic, lifelike worlds.
                             In 3D environments, NavMesh has proven invaluable for efficiently generating navigation meshes that allow characters and entities to navigate complex, 
                             real-world terrain realistically. This technology simplifies the creation of AI-driven characters that can intelligently traverse the game world, 
                             avoiding obstacles and following player-defined paths, enhancing the overall gameplay experience.</p>
                      </li>
                  </ul>
            </div>
            <div class="content">
              <h1>Portofolio</h1>
              <div class="portofolio-navigation">
                  <a
                    @click="toggleSteam"
                    :class="{ active: steam }"
                  >
                    <h4><i class="fa-brands fa-steam"></i> STEAM</h4>
                  </a>
                  <a
                    @click="toggleSketchFab"
                    :class="{ active: sketchfab }"
                  >
                    <h4><i class="fa-solid fa-cube"></i> SketchFab</h4>
                  </a>
              </div>
              <div v-if="steam">
                <steam-app appid="1555470"></steam-app>
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
            <div class="content">
              <h1>Contact</h1>
              <ul class="contact">
                <li>  
                  <form action="">
                    <div class="group-val">
                      <label for="fname">Full Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="eg. Ajdin Hukić">
                    </div>
                    <div class="group-val">
                      <label for="email">Email</label>
                      <input type="text" id="email" name="firstname" placeholder="ajdinhukic007@gmail.com">
                    </div>
                    <div class="group-val">
                      <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="eg. Hello, I am contacting you regarding open position at...." style="height:100px"></textarea>
                    </div>
                    <button>Send Message&nbsp;&nbsp;<i class="fa-solid fa-chevron-right" style="color:#68e0cf"></i></button>
                  </form>
                </li>
                <li class="contact-bottom">
                  <h2>Ajdin Hukić</h2>
                  <h3>IT Specialist</h3>
                  <ul style="margin: 35px 0 50px 0;">
                      <li><strong>AGE</strong> <div>22</div></li>
                      <li><strong>PHONE</strong> <div>+386 64 45 50 536</div></li>
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
import Navigation from './components/Navigation.vue'
import 'steamwidgets';
import 'steamwidgets/steam_app';
export default {
  name: 'App',
  components: {
    Navigation,
  },
  data: function () {
    return {
      steam: true,
      sketchfab: false,
    };
  },
  methods: {
    toggleSketchFab() {
      this.steam = false;
      this.sketchfab = true;
    },
    toggleSteam() {
      this.sketchfab = false;
      this.steam = true;
	  },
},
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
  background-image: url('./assets/img.webp');
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
  background-image: url('./assets/pyhton.webp');
  background-repeat: no-repeat;
  margin: 0 20px 0 0;
  background-size: contain;
  background-position: center;
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
.portofolio-navigation{
  background-color: #16202d;
  display: flex;
  width: 100%;
  border-radius: 50px;
}
.portofolio-navigation a {
  margin-left: 35px;
  cursor: pointer; /* Change cursor style to pointer */
  color: #fff;
  text-decoration: none;
  position: relative;
}
.portofolio-navigation h4 {
  padding: 5px 15px 5px 15px; /* Increase padding for visual feedback */
  margin: 10px auto;
}

.portofolio-navigation a.active h4{
  background-color: #178387; /* Background color for the active link */
  border-radius: 15px; /* Add rounded corners to the active link */
}

.portofolio-navigation a.active:hover h4{
  background-color: #178387; /* Maintain background color on hover */
}

.portofolio-navigation a:hover h4{
  cursor: pointer; /* Change cursor style to pointer on hover */
  color: #68e0cf;
}
.sketchfab-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 25px;
  gap: 20px;
}

.sketchfab-embed-wrapper {
  position: relative;
  padding-bottom: 75%; /* Maintain the aspect ratio (4:3) for Sketchfab iframes */
  overflow: hidden;
}

.sketchfab-embed-wrapper iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
input[type=text], select, textarea {
  padding-left:30px;
  display: block;
  font-family: "Poppins";
  font-size: 14px;
  height: 64px;
  width: 100%;
  color: #FFF;
  background: none !important;
  border: 1px solid #585d65;
  resize: none;
  outline: 0;
  border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  -khtml-border-radius: 30px;
  transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
}
input[type=text]:focus, select:focus, textarea:focus{
  border: 1px solid #178387;

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
  color: #FFF;
  font-weight: 800;
  background: #002642;
  text-transform: uppercase;
  z-index: 2;
}
.group-val{
  position: relative;
    margin-bottom: 40px;
}
input[type=submit] {
  background-color: #04AA6D;
  color: white;
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
  color: #FFF;
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid #585d65;
  cursor: pointer;
  border-radius: 64px;
  transition: 1s all cubic-bezier(0.165, 0.85, 0.45, 1) 0s;

}
button:hover{
  color: #68e0cf;
  border: 1px solid #68e0cf;
}
input[type=submit]:hover {
  background-color: #45a049;
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
  border: 1px solid #585d65;
  border-radius: 50px;
}
.contact-bottom h2{
  margin: 0 0 5px 0;
  font-size: 30px;
  color: #FFF;
  font-weight: 800;
}
.contact-bottom h3{
  font-size: 11px;
  color: #68e0cf;
  font-weight: 600;
  text-transform: uppercase;
}
.signature{
  background-image: url('./assets/signature.webp');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 70px;
}
@media (max-width: 800px) {
  .sketchfab-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns when zoomed out */
  }
}

@media (max-width: 400px) {
  .sketchfab-grid {
    grid-template-columns: repeat(1, 1fr); /* 1 column when zoomed in */
  }
}
</style>