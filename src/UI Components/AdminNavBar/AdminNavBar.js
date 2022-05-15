import './AdminNavBar.css'
import { useContext } from "react";
import { DataContext } from "../../UI Components/DataProvider/DataProvider";
import { useNavigate } from "react-router-dom";
import { BsGem } from "react-icons/bs";

const AdminNavBar = () => {
    // Data Context Hooks
    const newData = useContext(DataContext);


    const navigate = useNavigate();
    const subPageHendeler = (info) => {
        navigate(`./${info}`)
        newData.setAdminSubPage(info)
    }
    return (
        <div className="AdminNavBar-navInfo">
            <div className="AdminNavBar-logo">
                <BsGem />
                <h1>{newData.adminSubPage}</h1>
            </div>
            <div className="AdminNavBar-navInfo-container">
                <div className="AdminNavBar-navInfo-list">
                    <h2 onClick={() => subPageHendeler('dasboard')}>Dasboard</h2>
                    <h2 onClick={() => subPageHendeler('sale')}>Sale</h2>
                    <h2 onClick={() => subPageHendeler('product')}>Product</h2>
                    <h2 onClick={() => subPageHendeler('user')}>User Panel</h2>
                    <h2>|</h2>
                </div>
                <div className="AdminNavBar-navInfo-user">
                    <h2>Hi Andrew</h2>
                    <h2>Logout</h2>
                </div>
            </div>
        </div>
    )
}

export default AdminNavBar;