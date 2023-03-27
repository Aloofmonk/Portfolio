<template>
<div id="projects" class="card-container flex flex-col h-screen">
    <div class="text">
        <h1 class="h1"> <span>02.</span> Project</h1>
    </div>
    <div class="container-card flex  justify-center items-center">
        <div class="cards">
            <div class="card card1">
                <div class="container">
                    <img src="../images/first.png" alt="las vegas">
                </div>
                <div class="details">
                    <div class="project-link flex justify-evenly">
                        <a href="https://github.com/Aloofmonk/Altschool-FE-exam">
                            <font-awesome-icon icon="fa-solid fa-code-compare" class="font"/>
                        </a>
                        <h3>FilmReel</h3>
                        <a href="https://altschool-fe-exam.vercel.app/">
                            <font-awesome-icon icon="arrow-up-right-from-square" class="font"/>
                        </a>
                    </div>
                    <p>A movie web application that makes use of user Authentication after which, It gives the user
        access to a variety of movies and enables them to save their favorite movies to watch later.</p>
                </div>
            </div>
            <div class="card card1">
                <div class="container">
                    <img src="../images/calc.png" alt="las vegas">
                </div>
                <div class="details">
                    <div class="project-link flex justify-evenly">
                        <a href="https://github.com/Aloofmonk/counter-counter">
                            <font-awesome-icon icon="fa-solid fa-code-compare" class="font"/>
                        </a>
                        <h3>Counter-Counter</h3>
                        <a href="https://altschcountapp.vercel.app/">
                            <font-awesome-icon icon="arrow-up-right-from-square" class="font"/>
                        </a>
                    </div>
                    <p>A web application that counts in increment and decrement of 1's. It also features a
        Reset and Set value button which allows the user set the counter back to zero and manually input digits
        respectively.</p>
                </div>
            </div>
            <div class="card card1">
                <div class="container">
                    <img src="../images/buyy.png" alt="las vegas">
                </div>
                <div class="details">
                    <div class="project-link flex justify-evenly">
                        <a href="https://github.com/Aloofmonk/shopping-app">
                            <font-awesome-icon icon="fa-solid fa-code-compare" class="font"/>
                        </a>
                        <h3>Buyyapp</h3>
                        <a href="https://buyyapp.vercel.app/">
                            <font-awesome-icon icon="arrow-up-right-from-square" class="font" />
                        </a>
                    </div>
                    
                    <p>An ecommerce website which features a variety of products and a checkout shopping cart to
        keep track of selected items and total amount.</p>
                </div>
            </div>
            <div class="card card1">
                <div class="container">
                    <img src="../images/grid.png" alt="las vegas">
                </div>
                <div class="details">
                    <div class="project-link flex justify-evenly">
                        <a href="https://github.com/Aloofmonk/HTML">
                            <font-awesome-icon icon="fa-solid fa-code-compare" class="font" />
                        </a>
                        <h3>Grid</h3>
                        <a href="https://gridgrider.vercel.app/">
                            <font-awesome-icon icon="arrow-up-right-from-square" class="font" />
                        </a>
                    </div>
                    
                    <p>A website made to showcase pictures in a grid. It also displays quotes when the pictures are
                    hovered over.</p>
                </div>
            </div>
            
        </div>
    </div>
</div>

</template>

<script>
export default {
name: 'MyProjects',

};
</script>

<style scoped>
.cards{
width: 70%;
display: grid;
grid-template-columns: repeat(2,minmax(250px,1fr));
padding: 20px;
grid-gap: 40px;
}
.card{
background-color: #1c1b29;
border-radius: 20px;
box-shadow: 0 0 30px rgba(0,0,0,0.18);
}
.container{
position: relative;
clip-path: polygon(0 0,100% 0, 100% 85%, 0 100%);
}
img{
width: 100%;
display: block;
border-radius: 20px 20px 0 0;
}
.container:after{
content: "";
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
border-radius: 20px 20px 0 0;
opacity: 0.7;
}
.card1>.container:after{
background-image: linear-gradient(
135deg,
#0100ec,
#fb36f4
);
transition: all 3s ease-out;
}
.card1:hover>.container:after{
background-image: none;
/* transition: all 3s ease-out; */
}
.card2>.container:after{
background-image: linear-gradient(
135deg,
#2bdce3,
#42ffdb
);
}
.card3>.container:after{
background-image: linear-gradient(
135deg,
#ffab1d,
#f8501c
);
}
.details{
padding: 20px 10px;

}
h3{
color: #66fcf1;
font-weight: 600;
font-size: 18px;
margin: 10px 0 15px 0;
font-family: 'Ubuntu', sans-serif;
}
h1{
    color: #66fcf1;
	font-family: 'Ubuntu', sans-serif;
    font-size: 35px;
    display: inline;
    
}

span{
	font-family: 'Roboto Mono', monospace;
}

.details>p{
color: #a0a0a0;
font-size: 15px;
line-height: 30px;
font-weight: 400;
font-family: 'Roboto Mono', monospace;
}
.card-container{
    padding-top: 60px;
}
.font{
	padding: 2px;
    transform: translateY(0);
    transition: all 0.6s ease-out;
}
.font:hover{
	color: #66fcf1;
	cursor: pointer;
    transform: translateY(-4px);
}
</style>
