<template>
<div id="projects" class="card-container flex h-screen justify-center items-center">

    <div class="cards">
        <div class="card card1">
            <div class="container">
                <img src="../images/first.png" alt="las vegas">
            </div>
            <div class="details">
                <h3>FilmReel</h3>
                <p>A movie web application that makes use of user Authentication after which, It gives the user
    access to a variety of movies and enables them to save their favorite movies to watch later.</p>
            </div>
        </div>
        <div class="card card1">
            <div class="container">
                <img src="../images/calc.png" alt="las vegas">
            </div>
            <div class="details">
                <h3>Counter-Counter</h3>
                <p>A web application that counts in increment and decrement of 1's. It also features a
    Reset and Set value button which allows the user set the counter back to zero and manually input digits
    respectively.</p>
            </div>
        </div>
        <div class="card card1">
            <div class="container">
                <img src="../images/first.png" alt="las vegas">
            </div>
            <div class="details">
                <h3>Buyyapp</h3>
                <p>An ecommerce website which features a variety of products and a checkout shopping cart to
    keep track of selected items and total amount.</p>
            </div>
        </div>
        <div class="card card1">
            <div class="container">
                <img src="../images/first.png" alt="las vegas">
            </div>
            <div class="details">
                <h3>Grid</h3>
                <p>A website made to showcase pictures in a grid. It also displays quotes when the pictures are
    hovered over.</p>
            </div>
        </div>
        <div class="card card2">
            <div class="container">
                <img src="../images/first.png" alt="New York">
            </div>
            <div class="details">
                <h3>New York</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
            </div>
        </div>
        <div class="card card3">
            <div class="container">
                <img src="../images/first.png" alt="Singapore">
            </div>
            <div class="details">
                <h3>Singapore</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
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
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
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
.details>h3{
color: #ffffff;
font-weight: 600;
font-size: 18px;
margin: 10px 0 15px 0;
}
.details>p{
color: #a0a0a0;
font-size: 15px;
line-height: 30px;
font-weight: 400;
}
.card-container{
    padding-top: 350px;
}

</style>
