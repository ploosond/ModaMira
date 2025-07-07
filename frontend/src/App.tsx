import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Collection from "./pages/Collection";
import ProductDetails from "./components/product/ProductDetails";
import Checkout from "./components/cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetail from "./pages/OrderDetail";
import AdminLayout from "./components/admin/AdminLayout";
import AdminHome from "./pages/AdminHome";
import UserManage from "./components/admin/UserManage";
import ProductManage from "./components/admin/ProductManage";
import EditProduct from "./components/admin/EditProduct";
import OrderManage from "./components/admin/OrderManage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" duration={1000} />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="collections/:collection" element={<Collection />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmation" element={<OrderConfirmation />} />
            <Route path="order/:id" element={<OrderDetail />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="users" element={<UserManage />} />
            <Route path="products" element={<ProductManage />} />
            <Route path="products/:id/edit" element={<EditProduct />} />
            <Route path="orders" element={<OrderManage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
