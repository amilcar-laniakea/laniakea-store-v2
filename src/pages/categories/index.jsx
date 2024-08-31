import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import MetaDescription from "@components/MetaDescription";
import CardItems from "@components/CardItems";
import Loading from "@components/Loading";
import Error from "@components/Error";
import Image from "@components/Image";
import useServiceAction from "@hooks/useServiceAction";
import "./style.scss";

const Categories = () => {
  let { id } = useParams();
  const { data, error, loading } = useServiceAction({
    collectionName: "laniakea-store-db",
    queryParams: { "category.name_category": id },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={"No hay datos para mostrar."} />;

  return (
    <>
      <MetaDescription
        title={`Laniakea - ${id}`}
        description="Laniakea tienda de imágenes."
      />
      <div className="categories-main-container">
        <h1 className="categories-main-title">Categoría: {id}</h1>
        <Image
          container={"categories-image-container"}
          classImg={"categories-image"}
          image={data[0].category.image}
          alt={id}
          title={id}
        />
      </div>
      <div className="global-container">
        <div className="main-container">
          <Row>
            {data.map((item, index) => (
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={8}
                key={index}
                className="categories-card-container"
              >
                <CardItems item={item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Categories;
