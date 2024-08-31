import MetaDescription from "@components/MetaDescription";

const NotFound = () => {
  return (
    <>
      <MetaDescription
        title="¡Error en Página!"
        description="Laniakea tienda de imágenes."
      />
      <div className="global-container">
        <div className="main-container">
          <h3>Page Not Found!</h3>
        </div>
      </div>
    </>
  );
};
export default NotFound;
