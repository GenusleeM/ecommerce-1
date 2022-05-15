import './AdminItemList.css'
import { BsCamera } from "react-icons/bs";


const AdminItemList = (props) => {
    return (
        <div className="AdminItemList">
            <div style={{
                backgroundImage: `url(${props.image})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }} className="AdminItemList-img">{!props.image && <BsCamera />}</div>
            <div className="AdminItemList-info">
                <div className="AdminItemList-info-detail">
                    <div className="AdminItemList-detail">
                        <h1>{props.prodTitle}</h1>
                        <h2>{props.gender} Originals</h2>
                        <p>Size: 40, Color: White Black</p>
                    </div>
                    <div className="AdminItemList-totalItem">
                        <h3>1000 Pcs</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminItemList;