<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <Navigation />
  <div class="container">
        <div class="left-div">
        </div>
        <div class="right-div">
          <div class="content" style="height: 150px;">
            </div>
            <div class="content">
                <div class="ballon">
                  <div class="name">AJDIN</div>
                    <div class="name">HUKIĆ</div>
                </div>
            </div>
            <div class="content">
                <h1>Section 2</h1>
                <p>This is some content for section 2.</p>
            </div>
            <div class="content">
                <h1>Section 3</h1>
                <p>This is some content for section 3.</p>
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
  position: absolute;
  width: 400px;
  height: 349px;
  margin-left: -175px;
  background-color: #565656;
  border-radius: 322px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    widows: 100%;
    background-color: #565656;
}

/* Add your other CSS styles here */

/* Example content styles */
.content {
    background-color: #565656;
    height: 500px;
    width: 100%;
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
</style>
