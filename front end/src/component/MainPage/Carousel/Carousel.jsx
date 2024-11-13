export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide d-flex justify-content-center position-relative" data-bs-ride="carousel" style={{width:"65vw", left:'100px'}}>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="src\assets\Pizza 1.png" class="d-block w-100 " style={{height:"70vh",width:"10px"}} alt="Slide 1"/>
                    </div>
                    <div class="carousel-item">
                        <img src="src\assets\Seafood.png" class="d-block w-100" style={{height:"90vh",width:"10px"}} alt="Slide 2"/>
                    </div>
                    <div class="carousel-item">
                        <img src="src\assets\Coffee.png" class="d-block w-100" style={{height:"90vh",width:"10px"}} alt="Slide 3"/>
                    </div>
                    <div class="carousel-item">
                        <img src="src\assets\cocktail.png" class="d-block w-100" style={{height:"90vh",width:"10px"}} alt="Slide 4"/>
                    </div>
                    <div class="carousel-item">
                        <img src="src\assets\Fried Chicken.png" class="d-block w-100" style={{height:"90vh",width:"10px"}} alt="Slide 5"/>
                    </div>
                    <div class="carousel-item">
                        <img src="src\assets\bread.png" class="d-block w-100" style={{height:"90vh",width:"10px"}} alt="Slide 6"/>
                    </div>
                </div>
            </div>
        </div>
    )
}