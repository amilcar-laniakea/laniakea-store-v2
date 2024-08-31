import { ContextDetailProductProvider } from "@context/ProductDetail";
import Detail from "./components/Detail";

const PageDetail = () => {
  return (
    <ContextDetailProductProvider>
      <Detail />
    </ContextDetailProductProvider>
  );
};

export default PageDetail;
