import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@components/Layout";

import Home from "@pages/home";
import DetailProduct from "@pages/detail-product";
import Categories from "@pages/categories";
import OrderHistorial from "@pages/order-historial";
import OrderSuccess from "@pages/order-success";
import Cart from "@pages/cart";
import NotFound from "@pages/not-found";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories/:id" element={<Categories />} />
        <Route path="/product-detail/:id" element={<DetailProduct />} />
        <Route path="/order-historial" element={<OrderHistorial />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
export default Router;
