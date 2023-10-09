<template>
	<nav class="navbar" :class="{ 'active': isMenuOpen }">
	  <div class="left">
		<div class="logo"></div>
		<div class="name">
		  <div class="first-name" style='color: #003f5f'>Ajdin</div>
		  <div class="last-name"  style='color: #00a8ff;'>Hukic</div>
		</div>
	  </div>
	  <div class="right">
		<div class="links" :class="{ 'active': isMenuOpen }">
		  <a href="#">HOME</a>
		  <a href="#">ABOUT</a>
		  <a href="#">SERVICES</a>
		  <a href="#">CONTACT</a>
		  <a href="#" class="resume">Resume<i class="fas fa-download"></i></a>
		</div>
		<div class="hamburger-menu" @click="toggleMenu">
		  <div class="bar"></div>
		  <div class="bar"></div>
		  <div class="bar"></div>
		</div>
	  </div>
	</nav>
</template>
  
<script>
export default {
data() {
	return {
	isMenuOpen: false,
	};
},
methods: {
	toggleMenu() {
	this.isMenuOpen = !this.isMenuOpen;
	},
},
};
</script>

<style scoped>
.resume{
	border: 1px solid #fff;
    border-radius: 50px;
    padding: 10px 25px; /* Adjust the padding as needed */
    box-sizing: border-box; /* This ensures padding doesn't affect the element's size */
	margin: 0 auto !important;
}
.resume i {
  margin-left: 10px; /* Add margin between "Resume" and the download icon */
}
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #585d65;
	color: white;
	width: 90%;
	padding: 10px 20px;
	border-radius: 50px;
	margin: 0 auto; 
}
.left {
	display: flex;
	align-items: center;
	margin-left: 2%;
}

.logo {
    background-image: url(/src/assets/logo.webp);
    min-height: 50px;
    min-width: 50px;
    background-size: contain;
}

.name {
	display: flex;
	flex-direction: column;
	font-size: 16px;
	font-weight: 900;
	text-align: left;
	margin-left: 15%;
}

.right {
display: flex;
align-items: center;
}

.links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    transition: transform 0.3s ease-in-out;
    transform: translateX(0);
    align-items: center; /* Vertically center the links */
}

.links a {
    font-weight: 600;
    display: flex; /* Allow vertical centering */
    align-items: center; /* Vertically center the text */
}
.links a:hover{
	color: #00a8ff;
}
.links a:hover{
	border-color: #00a8ff;
}

.links.active {
transform: translateX(0%);
}

.links a {
	color: white;
	text-decoration: none;
	margin-right: 40px;
	font-size: 16px;
}

.hamburger-menu {
display: none;
flex-direction: column;
cursor: pointer;
}

.bar {
background-color: white;
height: 3px;
width: 25px;
margin: 2px 0;
}

@media (max-width: 768px) {
	.name {
		font-size: 14px;
	}

	.links {
		flex-direction: column;
		background-color: #585d65;
		position: absolute;
		top: 155px;
		z-index: 1;
		transform: translateX(150%);
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.hamburger-menu {
		display: flex;
	}

	.links.active {
		transform: translateX(-45%);
	}
	.navbar.active {
		border-bottom-right-radius: 0px;
	}
	.links a {
		margin: 10px;
	}
}
</style>
