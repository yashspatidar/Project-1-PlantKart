import { useContext, useState } from "react";
import "./address.css";
import { useNavigate } from "react-router";
import { ProductContext } from "../../Context/ProductContextProvider";

export const Address = () => {
  const { dataState, dispatch, setAddresses } = useContext(ProductContext);
  const [isUpdate, setUpdate] = useState(false);
 
  const navigate = useNavigate();
  // const addEditHandler = (item) => {
  //   navigate("/addAddress");
  // };
  const editAddress = (item) => {
    setAddresses(item);
    navigate("/addAddress");
  };
  const removeHandler = (id) => {
    dispatch({
      type: "removeAddress",
      payload: id,
    });
  };
  return (
    <div className="address-container-a">
      <h2>My Addresses</h2>
      {dataState?.address.length === 0 ? (
        <p>Please Add a new address</p>
      ) : (
        dataState?.address.map((item) => (
          <div item={item.id} className="address-container-m">
            
            <div className="main-address">
            <p>{item?.name}</p>
              <p>{item?.street},{item?.city},{item?.state},{item?.zipCode},</p>
              <p>{item?.country},</p>
              
              <p>{item?.mobile},</p>
            </div>
            <div className="address-button-container">
            <button onClick={() => editAddress(item)} className="cart-buttons">Edit</button>
            <button onClick={() => removeHandler(item?.id) } className="cart-buttons">Remove</button>
            </div>
            
          </div>
        ))
      )}
      <button onClick={() => navigate("/addAddress")} className="productButtons">Add New Address</button>
      {/* <button onClick={() => navigate(-1)} className="productButtons">Go back</button> */}
    </div>
  );
};
