import "./style.scss";

import { ContextGlobalConsumer } from "@context/Global";

const FooterBottom = () => {
  const { isDate, HandleModalGeneralInfo } = ContextGlobalConsumer();
  return (
    <div className="footer-global-container">
      <div className="footer-main-container">
        <h3 className="footer-title">
          @{isDate}{" "}
          <span onClick={HandleModalGeneralInfo} className="footer-subtitle">
            Amilcar Barahona
          </span>
        </h3>
      </div>
    </div>
  );
};

export default FooterBottom;
