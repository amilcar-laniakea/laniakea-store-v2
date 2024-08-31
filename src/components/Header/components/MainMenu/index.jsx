import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Image from "@components/Image";
import "./style.scss";

const MainMenu = ({ categories }) => {
  const [isVisible, setVisible] = useState(false);

  const handleCloseMenu = (item) => {
    setVisible(item);
  };

  const items = categories.map((category, index) => ({
    label: (
      <Link
        className="navbar-menu-categories-title"
        to={`/categories/${category.name}`}
      >
        <span>{category.name}</span>
      </Link>
    ),
    key: index,
    icon: (
      <Image
        container={"categories-icon-container"}
        classImg={"categories-icon"}
        image={category.image}
        alt={category.name}
        title={category.name}
      />
    ),
  }));

  const menuProps = {
    items,
    onClick: () => {},
  };

  return (
    <>
      <ul className="navbar-menu-main-container">
        <li className="navbar-menu-item">
          <Link className="navbar-menu-link" to="/order-historial">
            Órdenes
          </Link>
        </li>
      </ul>
      <Dropdown
        overlayClassName="navbar-dropdown"
        placement="top"
        onOpenChange={handleCloseMenu}
        open={isVisible}
        menu={menuProps}
        trigger={["click"]}
      >
        <div
          className="navbar-menu-categories-button"
          onClick={(e) => e.preventDefault()}
        >
          Categorías <DownOutlined />
        </div>
      </Dropdown>
    </>
  );
};

export default MainMenu;

MainMenu.propTypes = {
  categories: PropTypes.array.isRequired,
};
