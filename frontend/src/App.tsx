import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Collection from "./pages/Collection";
import ProductDetails from "./components/product/ProductDetails";

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
          </Route>
          <Route>{/* Admin Layout */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
