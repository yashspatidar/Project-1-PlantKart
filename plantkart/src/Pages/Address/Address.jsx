import { useContext, useState } from "react";
import "./address.css";
import { useNavigate } from "react-router";
import { ProductContext } from "../../Context/ProductContextProvider";

export const Address = () => {
  const { dataState, dispatch, setAddresses } = useContext(ProductContext);
  const [isUpdate, setUpdate] = useState(false);
  console.log(isUpdate);
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
    <div className="address-container">
      <h2>My Addresses</h2>
      {dataState?.address.length === 0 ? (
        <p>Please Add a new address</p>
      ) : (
        dataState?.address.map((item) => (
          <div>
            <p>{item?.name}</p>
            <div>
              <p>{item?.street},</p>
              <p>{item?.city},</p>
              <p>{item?.state},</p>
              <p>{item?.country},</p>
              <p>{item?.zipCode},</p>
              <p>{item?.mobile},</p>
            </div>
            {/* <button
              onClick={() => {
                setUpdate(true);
                setAddresses({ ...item });
                navigate("/addAddress")
                dispatch({
                    type:"UPDATE_ADDRESS",
                    payload:item
                })
              }}
            >
              Edit
            </button> */}
            <button onClick={() => editAddress(item)}>Edit</button>
            <button onClick={() => removeHandler(item?.id)}>Remove</button>
          </div>
        ))
      )}
      <button onClick={() => navigate("/addAddress")}>Add New Address</button>
    </div>
  );
};
