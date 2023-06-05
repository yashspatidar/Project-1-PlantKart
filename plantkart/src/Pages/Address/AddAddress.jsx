import { useContext } from "react";
import "./AddAddress.css";
import { v4 as uuid } from "uuid";
import { ProductContext } from "../../Context/ProductContextProvider";
import { useNavigate } from "react-router";

export const AddAddress = () => {
  const { addresses, setAddresses,  dispatch } =
    useContext(ProductContext);

  console.log(addresses);
  const navigate = useNavigate();

  const formHandler = (event) => {
    const { name, value } = event.target;
    setAddresses({ ...addresses, [name]: value });
  };
  const handleSaveAddress = () => {
    dispatch({
      type: "addAddress",
      payload: addresses,
    });
    setAddresses({
      ...addresses,
      id: uuid(),
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      mobile: "",
    });
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
        <button onClick={() => handleSaveAddress()}>Save</button>
        <button onClick={() => navigate("/address")}>Cancel</button>
      </div>
      <button onClick={() => navigate(-1)} className="goBackButton">
        {" "}
        Go Back
      </button>
    </div>
  );
};
