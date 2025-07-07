import { Link } from "react-router";

function AdminHome() {
  const order = [
    {
      _id: 1231,
      user: {
        name: "John Doe",
      },
      totalPrice: 312,
      status: "Processing",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold ">Revenue</h2>
          <p className="text-2xl ">€10000</p>
        </div>
        <div className="p-4 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold ">Total orders</h2>
          <p className="text-2xl ">100</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">
            Manage Orders
          </Link>
        </div>
        <div className="p-4 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold ">Total Products</h2>
          <p className="text-2xl ">500</p>
          <Link to="/admin/products" className="text-blue-500 hover:underline">
            Manage Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AdminHome;
