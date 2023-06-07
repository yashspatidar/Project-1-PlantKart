import { useContext } from "react";
import "./AddAddress.css";
import { v4 as uuid } from "uuid";
import { ProductContext } from "../../Context/ProductContextProvider";
import { useNavigate } from "react-router";

export const AddAddress = () => {
  const { addresses, setAddresses, dispatch, dataState } =
    useContext(ProductContext);

  
  const navigate = useNavigate();

  const formHandler = (event) => {
    const { name, value } = event.target;
    setAddresses({ ...addresses, [name]: value });
  };
  const dummyAddressHandler = () => {
    const newAdd = {
      id: uuid(),
      name: "Dummy Man",
      street: "Dummy road",
      city: "Dummy",
      state: "Dummy Pradesh",
      country: "Dummy",
      zipCode: 123456,
      mobile: 123456789,
    };
    dispatch({
      type: "addAddress",
      payload: newAdd,
    });
    navigate("/address");
  };


const handleSaveAddress = () => {
  const newAddress = {
    id: uuid(),
    name: addresses.name,
    street: addresses.street,
    city: addresses.city,
    state: addresses.state,
    country: addresses.country,
    zipCode: addresses.zipCode,
    mobile: addresses.mobile,
  };

  if (addresses.id) {
    // Editing an existing address
    const updatedAddress = {
      ...newAddress,
      id: addresses.id,
    };
    dispatch({
      type: "updateAddress",
      payload: updatedAddress,
    });
  } else {
    // Adding a new address
    dispatch({
      type: "addAddress",
      payload: newAddress,
    });
  }

  setAddresses({
    id: "",
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  });
  navigate("/address");
};


  return (
    <div className="AddAddress-Container">
      <h3>Add New Address</h3>
      <div className="AddAddress-Container-first">
        <input
          type="text"
          name="name"
          value={addresses.name}
          placeholder="Name"
          onChange={(e) => formHandler(e)}
        />
        <input
          type="text"
          name="street"
          value={addresses.street}
          placeholder="Street"
          onChange={(e) => formHandler(e)}
        />
        <input
          type="text"
          name="city"
          value={addresses.city}
          placeholder="City"
          onChange={(e) => formHandler(e)}
        />
        <input
          type="text"
          name="state"
          value={addresses.state}
          placeholder="State"
          onChange={(e) => formHandler(e)}
        />
        <input
          type="text"
          name="country"
          value={addresses.country}
          placeholder="Country"
          onChange={(e) => formHandler(e)}
        />
        <input
          type="integer"
          name="zipCode"
          value={addresses.zipCode}
          placeholder="ZipCode"
          onChange={(e) => formHandler(e)}
        />
        <input
          type="integer"
          name="mobile"
          value={addresses.mobile}
          placeholder="Mobile"
          onChange={(e) => formHandler(e)}
        />
      </div>
      <div className="AddAddress-Container-second">
        <button onClick={handleSaveAddress}>Save</button>
        <button onClick={() => navigate("/address")}>Cancel</button>
        <button onClick={dummyAddressHandler}>Enter Dummy Address</button>
      </div>
      <button onClick={() => navigate(-1)} className="goBackButton">
        {" "}
        Go Back
      </button>
    </div>
  );
};
