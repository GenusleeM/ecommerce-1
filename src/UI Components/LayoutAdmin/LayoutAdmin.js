import "./LayoutAdmin.css";
import { Routes, Route } from "react-router-dom";
import AdminDasboard from "../AdminDasboard/AdminDasboard";
import AdminSideNavBar from "../AdminSideNavBar/AdminSideNavBar";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import AdminAddProduct from "../AdminAddProduct/AdminAddProduct";
import AdminListProduct from "../AdminListProduct/AdminListProduct";
import AdminFooter from "../AdminFooter/AdminFooter";
import AdminEditProduct from "../AdminEditProduct/AdminEditProduct";

const LayoutAdmin = (props) => {

  return (
    <div className="LayoutAdmin">
      <div className="LayoutAdmin-contaner">
        <AdminNavBar/>
        <div className="LayoutAdmin-content-container">
          <AdminSideNavBar/>
          <div className="LayoutAdmin-content">
            <Routes>
              <Route path="/dasboard" element={<AdminDasboard />} />
              <Route path="/product" element={<AdminListProduct/>} />
              <Route path="/product/addProduct" element={<AdminAddProduct />} />
              <Route path="/product/editProduct" element={<AdminEditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="LayoutAdmin-contaner">
        <AdminFooter />
      </div>
    </div>
  );
};

export default LayoutAdmin;
