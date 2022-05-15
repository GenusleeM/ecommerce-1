import './Footer.css'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Desktop, Mobile, MobileLandscape, Tablet } from "../../UI Components/MediaQuery/MediaQuery";



const Footer = () => {
    // Data Context Hooks
    const newData = useContext(DataContext);

    const navigate = useNavigate();
    const adminHendeler = () => {
        navigate('/admin')
    }

    const linkGenderHendeler = (gender) => {
        newData.setGender(gender)
        newData.setSearchByGender(gender)
        newData.setNewProductData(null);
        newData.setProductData(null);
        newData.setNewProductColection(null);
        newData.setSearchByColor(null)
        newData.setSearchBySize(null)
        newData.setSearchByGender(null)
        newData.setSearchByName(null)
        newData.setSearchByCollection(null)
        newData.setMenuOpen(false)
    }


    const linkCollectionHendeler = (col) => {
        newData.setGender(null)
        newData.setSearchByGender(null)
        newData.setNewProductData(null);
        newData.setProductData(null);
        newData.setNewProductColection(null);
        newData.setSearchByColor(null)
        newData.setSearchBySize(null)
        newData.setSearchByGender(null)
        newData.setSearchByName(null)
        newData.setSearchByCollection(col)
        newData.setMenuOpen(false)
    }
    return (
        <>
            <Desktop>
                <div className='Footer'>
                    <div className='Footer-container'>
                        <div className='Footer-brand'>
                            <div className='Footer-brand-container'>
                                <div className='Footer-logo'></div>
                                <div>
                                    <h1>www.adidas.com</h1>
                                </div>
                            </div>
                        </div>
                        <div className='Footer-item'>
                            <h1>Gender</h1>
                            <Link to="/product/man" onClick={() => { linkGenderHendeler('men') }}>Men</Link>
                            <Link to="/product/woman" onClick={() => { linkGenderHendeler('woman') }}>Woman</Link>
                            <Link to="/product/children" onClick={() => { linkGenderHendeler('children') }}>Children</Link>
                        </div>
                        <div className='Footer-item'>
                            <h1>Navigate</h1>
                            <Link className='NavBar-link-small' to="/product/tshirt" onClick={() => { linkCollectionHendeler('T-Shirt') }}>T-Shirt</Link>
                            <Link className='NavBar-link-small' to="/product/shoes" onClick={() => { linkCollectionHendeler('Shoes') }}>Shoes</Link>
                            <Link className='NavBar-link-small' to="/trousers">Trousers</Link>
                        </div>
                        <div className='Footer-item'>
                            <h1>Member</h1>
                            <h2 onClick={adminHendeler}>Admin</h2>
                            <h2>Client</h2>
                        </div>
                        <div className='Footer-hours'>
                            <h1>Opening Hours</h1>
                            <h2>Mon - Thu 08:00 - 21:00</h2>
                            <h2>Fri 09:00 - 21:00</h2>
                            <h2>Sat 09:00 - 15:00</h2>
                        </div>
                    </div>
                    <div className='Footer-reserve'>
                        <h1>ADIDAS - {newData.country}</h1>
                        <h2>All Reserve © ADIDAS {newData.year}</h2>
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div className='Footer-tablet'>
                    <div className='Footer-container-tablet'>
                        <div className='Footer-brand-tablet'>
                            <div className='Footer-brand-container-tablet'>
                                <div className='Footer-logo-tablet'></div>
                                <div>
                                    <h1>www.adidas.com</h1>
                                </div>
                            </div>
                        </div>
                        <div className='Footer-item-tablet'>
                            <h1>Gender</h1>
                            <Link to="/product/man" onClick={() => { linkGenderHendeler('men') }}>Men</Link>
                            <Link to="/product/woman" onClick={() => { linkGenderHendeler('woman') }}>Woman</Link>
                            <Link to="/product/children" onClick={() => { linkGenderHendeler('children') }}>Children</Link>
                        </div>
                        <div className='Footer-item-tablet'>
                            <h1>Navigate</h1>
                            <Link className='NavBar-link-small' to="/product/tshirt" onClick={() => { linkCollectionHendeler('T-Shirt') }}>T-Shirt</Link>
                            <Link className='NavBar-link-small' to="/product/shoes" onClick={() => { linkCollectionHendeler('Shoes') }}>Shoes</Link>
                            <Link className='NavBar-link-small' to="/trousers">Trousers</Link>
                        </div>
                        <div className='Footer-hours-tablet'>
                            <h1>Opening Hours</h1>
                            <h2>Mon - Thu 08:00 - 21:00</h2>
                            <h2>Fri 09:00 - 21:00</h2>
                            <h2>Sat 09:00 - 15:00</h2>
                        </div>
                    </div>
                    <div className='Footer-reserve-tablet'>
                        <h1>ADIDAS - {newData.country}</h1>
                        <h2>All Reserve © ADIDAS {newData.year}</h2>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div className='Footer-mobile'>
                    <div className='Footer-container-mobile'>
                        <div className='Footer-logo-mobile'></div>
                        <div className='Footer-logo-text-mobile'>
                            <h1>ADIDAS - {newData.country} </h1>
                        </div>

                    </div>
                    <div className='Footer-reserve-mobile'>
                        <h1>All Reserve © ADIDAS {newData.year}</h1>
                    </div>
                </div>
            </Mobile>
            <MobileLandscape>
                <div className='Footer-tablet'>
                    <div className='Footer-container-tablet'>
                        <div className='Footer-brand-tablet'>
                            <div className='Footer-brand-container-tablet'>
                                <div className='Footer-logo-tablet'></div>
                                <div>
                                    <h1>www.adidas.com</h1>
                                </div>
                            </div>
                        </div>
                        <div className='Footer-item-tablet'>
                            <h1>Gender</h1>
                            <Link to="/product/man" onClick={() => { linkGenderHendeler('men') }}>Men</Link>
                            <Link to="/product/woman" onClick={() => { linkGenderHendeler('woman') }}>Woman</Link>
                            <Link to="/product/children" onClick={() => { linkGenderHendeler('children') }}>Children</Link>
                        </div>
                        <div className='Footer-item-tablet'>
                            <h1>Navigate</h1>
                            <Link className='NavBar-link-small' to="/product/tshirt" onClick={() => { linkCollectionHendeler('T-Shirt') }}>T-Shirt</Link>
                            <Link className='NavBar-link-small' to="/product/shoes" onClick={() => { linkCollectionHendeler('Shoes') }}>Shoes</Link>
                            <Link className='NavBar-link-small' to="/trousers">Trousers</Link>
                        </div>
                        <div className='Footer-hours-tablet'>
                            <h1>Opening Hours</h1>
                            <h2>Mon - Thu 08:00 - 21:00</h2>
                            <h2>Fri 09:00 - 21:00</h2>
                            <h2>Sat 09:00 - 15:00</h2>
                        </div>
                    </div>
                    <div className='Footer-reserve-tablet'>
                        <h1>ADIDAS - {newData.country}</h1>
                        <h2>All Reserve © ADIDAS {newData.year}</h2>
                    </div>
                </div>
            </MobileLandscape>
        </>
    )
}

export default Footer;