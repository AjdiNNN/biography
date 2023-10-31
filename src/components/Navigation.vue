<template>
	<nav class="navbar" :class="{ 'active': isMenuOpen }">
	  <div class="left">
		<div class="logo"></div>
		<div class="name">
		  <div class="first-name" >Ajdin</div>
		  <div class="last-name"  >Hukić</div>
		</div>
	  </div>
	  <div class="right">
		<div class="links" :class="{ 'active': isMenuOpen }">
			<a href="#">HOME</a>
			<div class="dropdown">
				<a class="dropbtn" href="#about">ABOUT&nbsp;<i class="fa fa-caret-down"></i>
				</a>
				<div class="dropdown-content">
					<a class="dropdown-link" href="#experience">Experience</a>
					<a class="dropdown-link" href="#languages">Languages</a>
		  			<a class="dropdown-link" href="#education">Education</a>
				</div>
			</div> 
			<a class="dropdown-link-mobile" href="#about">ABOUT</a>
			<a class="dropdown-link-mobile" href="#experience">Experience</a>
			<a class="dropdown-link-mobile" href="#languages">Languages</a>
			<a class="dropdown-link-mobile" href="#education">Education</a>
			<a href="#program">Programming</a>
			<a href="#unity"><i class="fa-brands fa-unity"></i>&nbsp;Unity</a>
		  	<a href="#portofolio">Portofolio</a>
			  <a href="#contact">Contact</a>
		  	<a href="../assets/ajdin_hukic_cv.pdf" class="resume" locale={false}>Resume<i class="fas fa-download"></i></a>
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
	position: fixed; /* Make the navbar fixed at the top */
	top: 50px; /* Stick it to the top of the viewport */
	left: 0;
	right: 0;
	z-index: 1000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #178387;
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
    min-width: 40px;
	height: 40px;
    background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
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
    transition: transform 0.3s ease-in-out;

    align-items: center; /* Vertically center the links */
}

.links a {
	line-height: 16px;
	font-size: 12px;
	font-weight: 800;
	text-transform: uppercase;
    display: flex; /* Allow vertical centering */
    align-items: center; /* Vertically center the text */
}
.links a:hover{
	color: #68e0cf;
}
.links a:hover{
	border-color: #68e0cf;
}

.links.active {
	display: flex;
}

.links a {
	color: white;
	text-decoration: none;
	margin: auto 20px;
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
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
}
.dropdown-content a:hover {
  background-color: #6a6b6d;
}
.dropdown-content a {
  float: none;
  color: black;
  margin: 0 auto;
  padding: 12px 16px;
  text-decoration: none;
  background-color: #585d65;
  color: #fff;
  display: block;
  text-align: left;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown{
	display: block;
}
.dropdown-link-mobile{
	display: none !important;
}
@media (max-width: 860px) {
	.navbar{
		width: 80%;
	}
	
}
@media (max-width: 680px) {
	.navbar{
		width: 80%;
		position: absolute;
	}
	
}
@media (max-width: 1250px) {
	.resume{
		border: none;
	}
	.name {
		font-size: 14px;
	}

	.links {
		flex-direction: column;
		background-color: #585d65;
		position: absolute;
		top: 60px;
		z-index: 1;
		display: none;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.hamburger-menu {
		display: flex;
	}

	.links.active {
		right: 0;
	}
	.navbar.active {
		border-bottom-right-radius: 0px;
	}
	.links a {
		padding: 10px 0;
	}
	.dropdown{
		display: none;
	}
	.dropdown-link-mobile{
		display: block !important;
	}
}
</style>
