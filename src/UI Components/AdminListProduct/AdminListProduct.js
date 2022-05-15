import './AdminListProduct.css'
import useFetch from '../../CostomHook/useFetch';
import { useContext, useState } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import AdminListProductTable from '../AdminListProductTable/AdminListProductTable';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const AdminListProduct = () => {
    console.clear();
    // Data Context Hooks
    const newData = useContext(DataContext);

    const [totalProduct, setTotalProduct] = useState(0)

    // FETCH DATA PRODUCT
    const { data, isPending } = useFetch('http://localhost:8000/item')
    if(isPending === false ){
        setTimeout(() => {
            setTotalProduct(data.length)
        }, 2000);
    }
    return (
        <div className='AdminListProduct'>
            <div className='AdminListProduct-header'>
                <h1>Product List | {isPending === false && `" ${totalProduct} "`}</h1>
                <input
                    type="text"
                    onChange={(e) => newData.setSearchProduct(e.target.value)}
                    placeholder="* Search Product"
                    value={newData.searchProduct} />
            </div>
            {newData.errorMessage && <ErrorMessage/>}
            <div className='AdminListProduct-table'>
                <div className='AdminListProduct-tableList'>
                    <AdminListProductTable/>
                </div>
            </div>
        </div>
    )
}
export default AdminListProduct