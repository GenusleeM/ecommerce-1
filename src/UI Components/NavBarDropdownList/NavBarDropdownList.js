import './NavBarDropdownList.css'
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import { BsCaretDownFill } from "react-icons/bs";
import {
    Desktop,
    Mobile,
    MobileLandscape,
    Tablet,
} from "../../UI Components/MediaQuery/MediaQuery";


const NavBarDropdownList = (props) => {
    // Data Context Hooks
    const newData = useContext(DataContext);

    const dropList = props.list ? props.list : ['Loading ...']
    const listPosition = props.position

    const menuListOnHendeler = () => {
        newData.setListInfo(props.title);
    }
    const menuListOffHendeler = () => {
        newData.setListInfo(null);
    }

    return (
        <>
            <Desktop>
                <div className='NavBarDropdownList'>
                    <li><span>{props.title} <BsCaretDownFill /></span>
                        <div className='Gender-dropdown' style={listPosition === "0" ? { left: 0 } : { left: `${props.position}` }}>
                            <ul className='dropdown'>
                                {dropList.map((list, i) => (
                                    <li key={i} onClick={() => newData.productFilterHendeler(props.title, list)}><span>{list}</span></li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </div>
            </Desktop>
            <Tablet>
                <div className='NavBarDropdownList-tablet'>
                    <li><span>{props.title} <BsCaretDownFill /></span>
                        <div className='Gender-dropdown-tablet' style={listPosition === "0" ? { left: 0 } : { left: `${props.position}` }}>
                            <ul className='dropdown-tablet'>
                                {dropList.map((list, i) => (
                                    <li key={i} onClick={() => newData.productFilterHendeler(props.title, list)}><span>{list}</span></li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </div>
            </Tablet>
            <Mobile>
                <div className='NavBarDropdownList-mobile'>
                    <span onClick={menuListOnHendeler}>{props.title}</span>
                    <BsCaretDownFill />
                </div>
                <div id={props.title} className={newData.listInfo === props.title ? 'NavBarDropdownList-list-mobile display-on' : 'NavBarDropdownList-list-mobile'}>
                    <div className='NavBarDropdownList-list-container-mobile'>
                        <h1>{newData.listInfo === props.title && props.title}</h1>
                        <div className='NavBarDropdownList-list-container-navList-mobile'>
                            {newData.listInfo === props.title && dropList.map((list, i) => (
                                <span key={i} onClick={() => newData.productFilterHendeler(props.title, list)}>{list}</span>
                            ))}
                        </div>
                        <div className='NavBarDropdownList-list-container-mobile-cancel'>
                            <h1 onClick={menuListOffHendeler}><span>Cancel</span></h1>
                        </div>
                    </div>
                </div>
            </Mobile>
            <MobileLandscape>
                <div className='NavBarDropdownList-tablet'>
                    <li><span>{props.title} <BsCaretDownFill /></span>
                        <div className='Gender-dropdown-tablet' style={listPosition === "0" ? { left: 0 } : { left: `${props.position}` }}>
                            <ul className='dropdown-tablet'>
                                {dropList.map((list, i) => (
                                    <li key={i} onClick={() => newData.productFilterHendeler(props.title, list)}><span>{list}</span></li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </div>
            </MobileLandscape>
        </>
    )
}

export default NavBarDropdownList;