import React from "react";
import "./PaymentMethods.css";
import VisaLogo from "../../icons/Group 101.png";
import MasterCardLogo from "../../icons/Group 102.png";
import DiscoverLogo from "../../icons/Group 3139.png";
import AmericanExpressLogo from "../../icons/image 155.png";
import SofortLogo from "../../icons/image 156.png";
import PayPalLogo from "../../icons/image 157.png";
import { getTranslation } from "../../Utils/getLanguage";

function PaymentMethods(props) {
  const [windowWidth, setWindowWidth] = React.useState(null);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="PaymentMethods">
      <span>{getTranslation("Payment Methods")}</span>
      <div
        style={
          windowWidth <= 1630
            ? { flexDirection: "column" }
            : { flexDirection: "row" }
        }
      >
        <div
          style={
            windowWidth <= 750
              ? { flexDirection: "column" }
              : windowWidth <= 1630
              ? { flexDirection: "row", marginBottom: "40px" }
              : { flexDirection: "row", marginBottom: "0" }
          }
        >
          <img
            style={
              windowWidth <= 750
                ? { marginBottom: "70px" }
                : { marginBottom: "0" }
            }
            src={VisaLogo}
            alt=""
          />
          <img
            style={
              windowWidth <= 750
                ? { marginBottom: "70px" }
                : { marginBottom: "0" }
            }
            src={MasterCardLogo}
            alt=""
          />
          <img
            style={
              windowWidth <= 750
                ? { marginBottom: "70px" }
                : { marginBottom: "0" }
            }
            src={AmericanExpressLogo}
            alt=""
          />
        </div>
        <div
          style={
            windowWidth <= 750
              ? { flexDirection: "column" }
              : { flexDirection: "row" }
          }
        >
          <img
            style={
              windowWidth <= 750
                ? { marginBottom: "70px" }
                : { marginBottom: "0" }
            }
            src={DiscoverLogo}
            alt=""
          />

          <img
            style={
              windowWidth <= 750
                ? { marginBottom: "70px" }
                : { marginBottom: "0" }
            }
            src={SofortLogo}
            alt=""
          />
          <img src={PayPalLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;
