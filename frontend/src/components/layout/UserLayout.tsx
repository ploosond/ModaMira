import Header from "../common/Header";
import Footer from "../common/Footer";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        <Outlet />
      </main>
      <div className=" border-b border-gray-300"></div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default UserLayout;
