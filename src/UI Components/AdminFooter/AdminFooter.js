import './AdminFooter.css'
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';

const AdminFooter = () => {
    // Data Context Hooks
    const newData = useContext(DataContext);
    return (
        <div className='AdminFooter'>
            <h1>ADIDAS - {newData.country}</h1>
            <h1>All Reserve © ADIDAS {newData.year}</h1>
        </div>
    )
}

export default AdminFooter;