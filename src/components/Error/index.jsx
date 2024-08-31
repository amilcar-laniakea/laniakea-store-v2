import PropTypes from "prop-types";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./style.scss";

const Error = ({ error }) => {
  return (
    <>
      <div className="global-container">
        <div className="main-container">
          <div className="error-service-container">
            <div className="error-service-inner-container">
              <InfoCircleOutlined className="error-service-icon" />
              <h3 className="error-service-title">{error}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired,
};
