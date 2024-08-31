import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import {
  MenuUnfoldOutlined,
  CopyFilled,
  PlayCircleFilled,
} from "@ant-design/icons";
import Image from "@components/Image";
import "./style.scss";

const MenuDrawer = ({ categories }) => {
  const [isVisibleSidebar, setVisibleSidebar] = useState(false);

  return (
    <>
      <Button
        className="mobile-drawer-button"
        icon={<MenuUnfoldOutlined className="mobile-drawer-button-icon" />}
        onClick={() => setVisibleSidebar(true)}
      />
      <Drawer
        title="Laniakea Store"
        width={300}
        zIndex={100}
        className="drawer-global-container"
        placement="left"
        closable={false}
        onClose={() => setVisibleSidebar(false)}
        open={isVisibleSidebar}
        key="left"
      >
        <div
          className="drawer-main-menu-item-container"
          onClick={() => setVisibleSidebar(false)}
        >
          <Link to={`/order-historial`} className="drawer-main-menu-item">
            <CopyFilled className="drawer-main-menu-item-icon" />
            Órdenes
          </Link>
        </div>
        <div className="drawer-main-menu-item-container">
          <Link to={`/order-historial`} className="drawer-main-menu-item">
            <PlayCircleFilled className="drawer-main-menu-item-icon" />
            Categorías
          </Link>
        </div>
        <div className="drawer-menu-main-container">
          {categories.map((item, i) => (
            <div
              className="drawer-menu-container"
              key={i}
              onClick={() => setVisibleSidebar(false)}
            >
              <Link
                className="navbar-menu-categories-title"
                to={`/categories/${item.name}`}
              >
                <Image
                  container={"categories-icon-container"}
                  classImg={"categories-icon"}
                  image={item.image}
                  alt={item.name}
                  title={item.name}
                />
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default MenuDrawer;

MenuDrawer.propTypes = {
  categories: PropTypes.array.isRequired,
};
