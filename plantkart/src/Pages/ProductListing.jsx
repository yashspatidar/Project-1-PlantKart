import { productDemo } from "./productDemo";
import "../Product.css"
export const ProductListing = () => {

    
  return (
    
    <div className="product-listing">
      <div className="productCard">
        {productDemo.map((plant) => (
          <div key={plant._id } className="card">
            <img src={plant.image_link} alt="plant" />
            <p>{plant.name}</p>
            <p>{plant.rating}</p>
            <p><strike className="regularPrice">{plant.price + 150}</strike> From {plant.price}</p>
            <p>{plant.categoryName}</p>
            <button className="addtocart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    
  );
};
