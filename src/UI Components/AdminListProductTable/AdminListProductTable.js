import './AdminListProductTable.css'
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import useFetch from '../../CostomHook/useFetch';
import { BsGear, BsListUl, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const AdminListProductTable = () => {
    const navigate = useNavigate();

    // Data Context Hooks
    const newData = useContext(DataContext);

    // FETCH DATA PRODUCT
    const { data, dataError, isPending } = useFetch('http://localhost:8000/item')


    const productEditHandeler = (id) => {
        newData.setEditById(id)
        navigate('./editProduct')
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>* Image</th>
                        <th>* Detail</th>
                        <th>* Product Price</th>
                        <th>* Action / Option</th>
                    </tr>
                </thead>

                {isPending === true &&
                    <tbody>
                        <tr>
                            <td><span>Loading...</span></td>
                            <td><span>Loading...</span></td>
                            <td><span>Loading...</span></td>
                            <td><span>Loading...</span></td>
                        </tr>
                    </tbody>
                }
                {data &&
                    <tbody>
                        {data.slice(0).reverse().map((data, i) => (
                            <tr key={i}>
                                <td>
                                    <img src={data.image} alt="Product" />
                                </td>
                                <td>
                                    <div className='AdminListProduct-tableList-detail'>
                                        <h1>{data.name}</h1>
                                        <h2>
                                            {data.motive}, {data.gender}
                                        </h2>
                                        <h2> Size :
                                            {data.size.map((list, i) => (
                                                <span key={i}>{list}</span>
                                            ))}
                                        </h2>
                                        <p>
                                            Detail :
                                            {data.detail.map((list, i) => (
                                                <span key={i}>* {list}, </span>
                                            ))}
                                        </p>
                                    </div>
                                </td>
                                <td>$ {data.price}</td>
                                <td>
                                    <div className='AdminListProduct-tableList-action'>
                                        <span onClick={() => productEditHandeler(data.id)}><BsListUl /> View</span>
                                        <span onClick={() => productEditHandeler(data.id)}><BsGear /> Edit</span>
                                        <span onClick={() => productEditHandeler(data.id)}><BsTrash /> Delete</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                }
            </table>
            {dataError && <div className='AdminListProductTable'><span>*** Sorry got an Error, browser is {dataError} Data ***</span></div>}
        </>
    )
}

export default AdminListProductTable;