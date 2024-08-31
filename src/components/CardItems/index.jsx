import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Image from "@components/Image";
import "./style.scss";

const MainBanners = ({ item }) => {
  return (
    <Link to={`/product-detail/${item.id}`}>
      <div className="home-main-banners-card-container">
        <div className="home-main-banners-card-inner-container">
          <Image
            container={"home-main-banners-card-image-container"}
            classImg={"home-main-banners-card-image"}
            image={item.image}
            alt={item.title}
            title={item.title}
          />
          <div className="home-main-banners-card-description-container">
            <h3 className="home-main-banners-card-internal-code">
              Código:{item.id}
            </h3>
            <h3 className="home-main-banners-card-category">
              Categoría: {item.category.name_category}
            </h3>
            <h3 className="home-main-banners-card-title">{item.title}</h3>
            <h3 className="home-main-banners-card-price">${item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default MainBanners;

MainBanners.propTypes = {
  item: PropTypes.object.isRequired,
};
