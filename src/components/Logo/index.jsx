import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Image from "@components/Image";
import "./style.scss";

const Logo = ({ img }) => {
  return (
    <Link to="/">
      <Image
        container={"main-logo-white-container"}
        classImg={"main-logo-white"}
        image={img}
        alt={"Ark Store"}
        title={"ArkStore"}
      />
    </Link>
  );
};

export default Logo;

Logo.propTypes = {
  img: PropTypes.string.isRequired,
};
