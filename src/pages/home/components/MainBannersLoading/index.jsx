import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import "./style.scss";

const MainBannersLoading = () => {
  return (
    <div className="main-banners-loading-container">
      <Spin indicator={<LoadingOutlined className="main-banners-icon" />} />
    </div>
  );
};
export default MainBannersLoading;
