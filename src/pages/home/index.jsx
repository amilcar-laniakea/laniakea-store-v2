import { InfoCircleOutlined } from "@ant-design/icons";
import MetaDescription from "../../components/MetaDescription";
import MainSlider from "./components/MainSlider";
import MainBanners from "./components/MainBanners";
import MainBannersLoading from "./components/MainBannersLoading";
import AboutSection from "./components/AboutSection";
import useServiceAction from "@hooks/useServiceAction";
import "./style.scss";

const Home = () => {
  const {
    data: slides,
    error: errorSlides,
    loading: loadingSlides,
  } = useServiceAction({
    collectionName: "laniakea-slider",
  });

  const {
    data: featured,
    error: errorFeatured,
    loading: loadingFeatured,
  } = useServiceAction({
    collectionName: "laniakea-store-db",
    queryParams: { featured: true },
  });

  if (errorSlides || errorFeatured)
    return (
      <div className="home-error-service-container">
        <InfoCircleOutlined className="home-error-service-icon" />
        <h1 className="home-error-service-title">
          Hubo un error en la consulta.
        </h1>
      </div>
    );

  return (
    <>
      <MetaDescription
        title="Laniakea - Inicio"
        description="Laniakea tienda de imágenes."
      />
      {loadingSlides && !slides ? (
        <MainBannersLoading />
      ) : (
        <MainSlider slides={slides} />
      )}
      <div className="global-container">
        <div className="main-container">
          <h3 className="laniakea-home-main-title">Imágenes destacadas:</h3>
          {loadingFeatured && !featured ? (
            <MainBannersLoading />
          ) : (
            <MainBanners carouselItems={[4, 3, 2, 1]} banners={featured} />
          )}
          <h3 className="laniakea-home-main-title">Acerca de:</h3>
          <AboutSection />
        </div>
      </div>
      {/*  {isValidFeaturedService ? (
        <>
          {isSliders && isFeaturedBanner ? (
            <>
              <MainSlider sliders={isSliders} />
              <div className="global-container">
                <div className="main-container">
                  <h3 className="laniakea-home-main-title">
                    Imágenes destacadas:
                  </h3>
                  <MainBanners
                    carouselItems={[4, 3, 2, 1]}
                    banners={isFeaturedBanner}
                  />
                  <h3 className="laniakea-home-main-title">Acerca de:</h3>
                  <AboutSection />
                </div>
              </div>
            </>
          ) : (
            <MainBannersLoading />
          )}
        </>
      ) : (
        <div className="home-error-service-container">
          <InfoCircleOutlined className="home-error-service-icon" />
          <h1 className="home-error-service-title">
            Hubo un error en la consulta.
          </h1>
        </div>
      )} */}
    </>
  );
};
export default Home;
