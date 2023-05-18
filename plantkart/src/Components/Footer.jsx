import "../Footer.css";
export const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <div className="first">
            <h2>PlantKart</h2>
            <p>Feel Your Home with amazing plants from PlantKart</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>2023 PlantKart</p>
        </div>
        <div className="second">
            <h2>Connect</h2>
            <a>Github</a>
            <a>LinkedIn</a>
            <a>Twitter</a>
        </div>
      </footer>
    </div>
  );
};

// TODO: to create folder for each component and add css in that folder
