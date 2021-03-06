import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./BottomMenu.css";
import Phone from "../../icons/VectorPhone.svg";
import Address from "../../icons/Vector (2).svg";
import Mail from "../../icons/Vector (3).svg";
import DropDownClickList from "../DropDownClickList/DropDownClickLIst";

function BottomMenu(props) {
  const tabs = {
    usefulLinks: [
      "About Us",
      "Our Story",
      "Our Suppliers",
      "Go Halal Family",
      "Career",
      "Policy",
      "Press",
      "Social Media",
      "Sitemap",
    ],
    helpCenter: [
      "Payments",
      "Pickup or Shipping",
      "Discounts & Offers",
      "Product Returns",
      "Product Recalls",
      "FAQ",
      "Checkout",
      "Other Issues",
      "Contact Us",
    ],
    goHalalBusiness: [
      "Sell on Go Halal",
      "Affiliate Program",
      "Our Suppliers",
      "Accessibility",
      "Advertise With Us",
    ],
  };

  const [windowWidth, setWindowWidth] = React.useState(null);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="BottomMenu">
      <div
        className="BottomMenuContainer"
        style={
          windowWidth <= 1500
            ? { flexDirection: "column" }
            : { flexDirection: "row" }
        }
      >
        <div
          className="VerticalDiv LongDiv"
          style={
            windowWidth <= 1500
              ? { marginBottom: "30px" }
              : { marginBottom: "0" }
          }
        >
          <span className="BottomMenuHeader">
            {getTranslation("Go Halal -The Do Good, Good Food Grocer")}
          </span>
          <span style={{ cursor: "auto" }} className="BottomMenuText">
            {getTranslation(
              "Go Halal is an innovative supermarket offering the highest quality halal products available online and in store. Our promise of Zakat ensures helping those in need while our unique traceability approach guarantees transparency, quality, and authenticity for you and your family. Go Halal is committed to unparalleled experiences, nutritious food choices, and upholding the belief in charity for the greater good. "
            )}
          </span>
          <div className="ContactInfo">
            <div className="RowText">
              <img src={Phone} alt="" />
              <div>
                <span>{getTranslation("Hotline (Mo. -Sa. 8 -20 Hrs.) ")}</span>
                <span style={{ whiteSpace: "nowrap" }}>
                  {getTranslation("+49 - 8161 - 5193561")}
                </span>
              </div>
            </div>
            <div>
              <img src={Address} alt="" />
              <span>
                {getTranslation("Ganzenm??llerstra??e 27 85354 Freising Germany")}
              </span>
            </div>
            <div>
              <img src={Mail} alt="" />
              <span>support@gohalalshop.com</span>
            </div>
          </div>
        </div>
        <div className="ListDivsContainer">
          <div className="VerticalDiv ListDiv">
            <span className="BottomMenuHeader">
              {getTranslation("Useful Links")}
            </span>
            {tabs.usefulLinks.map((elem, index) => {
              return (
                <span
                  onClick={() => console.log(elem)}
                  className="BottomMenuText"
                  key={index}
                >
                  {getTranslation(elem)}
                </span>
              );
            })}
          </div>
          <div className="VerticalDiv ListDiv">
            <span className="BottomMenuHeader">
              {getTranslation("Help Center")}
            </span>
            {tabs.helpCenter.map((elem, index) => {
              return (
                <span
                  onClick={() => console.log(elem)}
                  className="BottomMenuText"
                  key={index}
                >
                  {getTranslation(elem)}
                </span>
              );
            })}
          </div>
          <div className="VerticalDiv ListDiv">
            <span className="BottomMenuHeader">
              {getTranslation("Go Halal Business")}
            </span>
            {tabs.goHalalBusiness.map((elem, index) => {
              return (
                <span
                  onClick={() => console.log(elem)}
                  className="BottomMenuText"
                  key={index}
                >
                  {getTranslation(elem)}
                </span>
              );
            })}
            <div style={{ height: "40px", marginTop: "40px" }}>
              <DropDownClickList
                categories={["English", "Polish", "Spanish", "German"]}
                placeholder="English"
                border={true}
                marginBottom="40px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomMenu;
