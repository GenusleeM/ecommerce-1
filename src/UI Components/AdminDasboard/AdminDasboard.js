import './AdminDasboard.css'
import { BsArrowRightShort, BsCashStack } from "react-icons/bs";
import AdminItemList from '../AdminItemList/AdminItemList';
import imgs from '../../Asset/product/Shoes/Superstar-shoes-side.jpeg'
const AdminDasboard= ()=>{
    return(
        <div className='AdminDasboard'>
            <div className='AdminDasboard-earning'>
                <div className='AdminDasboard-earning-container'>
                    <div className='AdminDasboard-earning-iconTotal'>
                        <div className='AdminDasboard-earning-iconTotal-List'>
                            <div className='AdminDasboard-earning-icon'><BsCashStack/></div>
                            <span>$ 25000</span>
                            <h1>Cash-in This Month</h1>
                        </div>
                        <div className='AdminDasboard-earning-iconTotal-List'>
                            <div className='AdminDasboard-earning-icon'><BsCashStack/></div>
                            <span>$ 25000</span>
                            <h1>Cash-in This Month</h1>
                        </div>
                        <div className='AdminDasboard-earning-iconTotal-List'>
                            <div className='AdminDasboard-earning-icon'><BsCashStack/></div>
                            <span>$ 25000</span>
                            <h1>Cash-in This Month</h1>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='AdminDasboard-topSelling'>
                    <div className='AdminDasboard-topSelling-header'>
                        <h1>Top Selling</h1>
                        <h2><span>All Result</span> <BsArrowRightShort/></h2>
                    </div>
                    <div>
                        <div>
                            <AdminItemList image={imgs} prodTitle="Niteball shoes" gender="Men"/>
                            <AdminItemList image={imgs} prodTitle="Niteball shoes" gender="Men"/>
                            <AdminItemList image={imgs} prodTitle="Niteball shoes" gender="Men"/>
                            <AdminItemList image={imgs} prodTitle="Niteball shoes" gender="Men"/>
                            <AdminItemList image={imgs} prodTitle="Niteball shoes" gender="Men"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDasboard;