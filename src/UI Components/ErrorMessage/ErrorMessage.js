import './ErrorMessage.css'
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import { BsExclamationSquareFill, BsXLg } from "react-icons/bs";


const ErrorMessage = ()=>{
    // Data Context Hooks
    const newData = useContext(DataContext);

    const closeMessageHandeler = ()=>{
        newData.setErrorMessage(null)
    }

    return(
        <div className='ErrorMessage'>
            <span><BsExclamationSquareFill/> {newData.errorMessage} !</span>
            <BsXLg onClick={closeMessageHandeler}/>

        </div>
    )
}

export default ErrorMessage;
