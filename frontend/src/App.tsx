import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./components/layout/UserLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}></Route>
          <Route>{/* Admin Layout */}</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
