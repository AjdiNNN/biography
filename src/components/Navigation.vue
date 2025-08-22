<template>
	<nav class="navbar" :class="{ 'active': isMenuOpen }">
	  <div class="left">
		<div class="logo"></div>

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
		  	<a href="/Ajdin_Hukic_resume.pdf" class="resume" locale={false}>Resume<i class="fas fa-download"></i></a>
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
/* Updated to use Solar Ember theme variables from :root in App.vue */
.resume{
    border: 1px solid rgba(255,107,53,0.10);
    border-radius: 50px;
    padding: 10px 25px; /* Adjust the padding as needed */
    box-sizing: border-box;
    margin: 0 auto !important;
    background: linear-gradient(90deg, rgba(255,107,53,0.04), transparent);
}
.resume i {
  margin-left: 10px;
  color: var(--text);
}
.navbar {
    position: absolute; /* Make the navbar fixed at the top */
    top: 50px; /* Stick it to the top of the viewport */
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text);
    width: 90%;
    padding: 10px 20px;
    border: 1px solid rgb(243, 167, 18, 0.7);
    background: rgba(13,18,30,0.5);
    backdrop-filter: blur(10px) saturate(1.1);
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
    filter: brightness(1.05) saturate(0.9);
}

.name {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 900;
    text-align: left;
    margin-left: 15%;
    color: var(--text);
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
    color: var(--text);
    text-decoration: none;
}
.links a:hover{
    color: var(--accent);
}
.links a:hover{
    border-color: var(--accent);
}

.links.active {
    display: flex;
}

.links a {
    margin: auto 20px;
    font-size: 16px;
}

.hamburger-menu {
display: none;
flex-direction: column;
cursor: pointer;
}

.bar {
background-color: var(--text);
height: 3px;
width: 25px;
margin: 2px 0;
}
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  background-color: rgba(15,20,27,0.95);
  border-radius: 6px;
  border: 1px solid rgba(107,114,128,0.08);
}
.dropdown-content a:hover {
  background-color: rgba(255,107,53,0.06);
}
.dropdown-content a {
  float: none;
  color: var(--text);
  margin: 0 auto;
  padding: 12px 16px;
  text-decoration: none;
  background-color: transparent;
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
        padding: 5px;
    }
    .name {
        font-size: 14px;
    }

    .links {
        flex-direction: column;
        background: linear-gradient(180deg, rgba(107, 114, 128, 0.5), transparent);
        border: 1px solid rgba(255,107,53,0.10);
        border-radius: 0px 0px 15px 15px;
        border-top: 0px;
        position: absolute;
        top: 60px;
        z-index: 1;
        padding: 5px;
        display: none;
    }

    .hamburger-menu {
        display: flex;
    }

    .links.active {
        right: 0;
        display: flex;
    }
    .navbar.active {
        border-bottom-right-radius: 0px;
    }
    .links a {
        padding: 10px 10px;
    }
    .dropdown{
        display: none;
    }
    .dropdown-link-mobile{
        display: block !important;
        color: var(--text);
    }
}
</style>
