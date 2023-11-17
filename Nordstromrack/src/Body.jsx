import "./styles.css";
import SlideShow from "./Slider"
import Popular from "./popular/Popular"
import Brands from "./popular/Brands";
import Newsletter from "./Newsletter/Newsletter";
function Body() {
    
  return (
    <div>
      <div className="brands">
        <img src="https://n.nordstrommedia.com/it/cac5c300-b38f-44e7-8532-04f772304c40.png?h=200&w=1608" />
      </div>
      <Popular/>
      <div className="brands">
        <img src="https://n.nordstrommedia.com/it/b9ea0109-0dbd-429b-9d68-1684cbe7ad7b.jpeg?h=720&w=1608" />
      </div>
      <div className="brands">
        <img src="https://n.nordstrommedia.com/id/711783c2-afb6-48cb-aaa5-a3f272c55065.png?h=200&w=1608" />
      </div>
      <Brands/>
      <Newsletter/>
      
    </div>
  )
}
export default Body