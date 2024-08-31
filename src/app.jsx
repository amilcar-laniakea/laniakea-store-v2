import { HelmetProvider } from "react-helmet-async";
import Router from "./router";

const App = () => {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
};
export default App;
