import PropTypes from "prop-types";
const Image = ({ title, image, classImg, container }) => {
  return (
    <div className={container}>
      <img className={classImg} src={image} alt={title} title={title} />
    </div>
  );
};
export default Image;

Image.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  classImg: PropTypes.string,
  container: PropTypes.string,
};
