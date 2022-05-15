import { Routes, Route, useNavigate } from "react-router-dom";

const AdminSideNavBar = () => {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path="/dasboard/*" element={
                <div className="LayoutAdmin-sideBar">
                    <button onClick={() => navigate('./dasboard')}>Dasboard</button>
                </div>
            } />
            <Route path="/sale/*" element={
                <div className="LayoutAdmin-sideBar">
                    <button onClick={() => navigate('./dasboard')}>Order List</button>
                    <button onClick={() => navigate('./dasboard')}>Top Selling</button>
                    <button onClick={() => navigate('./item')}>Management</button>
                </div>
            } />
            <Route path="/product/*" element={
                <div className="LayoutAdmin-sideBar">
                    <button onClick={() => navigate('./product')}>Product List</button>
                    <button onClick={() => navigate('./product/addProduct')}>Add New Product</button>
                    <button onClick={() => navigate('./product/addProduct')}>Gender</button>
                    <button onClick={() => navigate('./product/addProduct')}>Currency</button>
                </div>
            } />
            <Route path="/user/*" element={
                <div className="LayoutAdmin-sideBar">
                    <button onClick={() => navigate('./item')}>User List</button>
                    <button onClick={() => navigate('./item')}>Add New User</button>
                </div>
            } />
        </Routes>
    )
}

export default AdminSideNavBar;