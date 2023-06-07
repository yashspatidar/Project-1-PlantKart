import "../Footer.css";
export const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <div className="first">
            <h2>PlantKart</h2>
            <p>Fill Your Home with amazing plants from PlantKart</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>2023 PlantKart</p>
        </div>
        <div className="second">
            <h2>Connect</h2>
            <a href="https://github.com/yashpatidar17" target="_blank" rel="noreferrer" className="navLinkTag">Github</a>
            <a href="https://www.linkedin.com/in/yashpatidar1704/" rel="noreferrer" target="_blank" className="navLinkTag">LinkedIn</a>
            <a href="https://twitter.com/yashonweb" target="_blank" rel="noreferrer" className="navLinkTag">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

// TODO: to create folder for each component and add css in that folder
