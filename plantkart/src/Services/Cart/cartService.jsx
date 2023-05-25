import axios from "axios";


export const addToCart = async (item, token, cart, setCart) => {
  try {
    const response = await axios.post("/api/user/cart", item, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Update the cart state with the new cart data
    setCart(response.data.cart);
    console.log("Item added to cart:", response.data.cart);
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

// export const addToCart = async(item,token,cart,setCart)=>{
    
//     try {
//         const {
//           data: { cart },
//         } = await axios.post(
//           "/api/user/cart",
//           {
//             item,
//           },
//           {
//             headers: {
//               authorization: token,
//             },
//           }
//         );
//         setCart(cart);
//         console.log(cart,"item added to cart")
       
   
//       } catch (e) {
//         console.log(e,"failed to add in cart ")
//       }
      
// }