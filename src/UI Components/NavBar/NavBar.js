import { useState, useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { BsBag } from "react-icons/bs";
import OrderList from '../OrderList/OrderList';
import { BsFillGrid3X3GapFill, BsXSquareFill } from "react-icons/bs";
import { Desktop, Mobile, MobileLandscape, Tablet } from "../../UI Components/MediaQuery/MediaQuery";


const NavBar = () => {

    // Data Context Hooks
    const newData = useContext(DataContext);

    const navigate = useNavigate();


    const [menuOpen, setMenuOpen] = useState(false);
    const menuOpenNow = ()=>{
        if(menuOpen === false){
            setMenuOpen(true)
        }else{
            setMenuOpen(false)
        }
    }

    const cartHendeler = () => {
        if (newData.navBarShow === false) {
            newData.setNavBarShow(true)
            newData.setListInfo(null);
            navigate('/cart')
        } else {
            newData.setNavBarShow(false)
            navigate(-1)
        }
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

    const backHome = () => {
        navigate('/')
    }

    const toCheckOut = () => {
        newData.setNavBarShow(true)
        newData.setNavBarShow(!newData.navBarShow)
        navigate('/checkOut')
    }

    return (
        <>
            <Desktop>
                <div className='NavBar'>
                    <div className="NavBar-nav">
                        <div className="NavBar-logo" onClick={backHome}></div>
                        <div className="NavBar-container-link">
                            <div className="NavBar-link">
                                <Link to="/product/man" onClick={() => { linkGenderHendeler('men') }}>Men</Link>
                                <Link to="/product/woman" onClick={() => { linkGenderHendeler('woman') }}>Woman</Link>
                                <Link to="/product/children" onClick={() => { linkGenderHendeler('children') }}>Children</Link>
                                <Link className='NavBar-link-small' to="/product/tshirt" onClick={() => { linkCollectionHendeler('T-Shirt') }}>T-Shirt</Link>
                                <Link className='NavBar-link-small' to="/product/shoes" onClick={() => { linkCollectionHendeler('Shoes') }}>Shoes</Link>
                                <Link className='NavBar-link-small' to="/trousers">Trousers</Link>
                                <span>|</span>
                                <Link className='NavBar-link-small' to="/login">{newData.login === true ? "Logout" : "Login"}</Link>
                            </div>
                            <div className="NavBar-link">
                                <BsBag onClick={() => { newData.setNavBarShow(!newData.navBarShow) }} />
                            </div>
                            <div className={`NavBar-cart ${newData.navBarShow === true && 'NavBar-cart-show'}`}>
                                <div className="NavBar-cart-list">
                                    {newData.cart !== null && newData.cart.length > 0 ?
                                        <div>
                                            {newData.cart.slice(0, 3).map((item, index) => (
                                                <OrderList key={index} data={item} />
                                            ))}
                                        </div> :
                                        <div className="NavBar-cart-list-empty">
                                            <h3>Cart is empty</h3>
                                            <h4>You have zero item</h4>
                                            <h4>on your cart at the moment</h4>
                                        </div>
                                    }

                                    <div className="NavBar-cart-btn" onClick={toCheckOut}><span>Check Out</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='NavBar-info'><h1>SAVE UP TO 50% ON SEASONAL SALES / RETURNS AND EXCHANGES WITHIN 60 DAYS</h1></div>
                </div>
            </Desktop>
            <Tablet>
                <div className='NavBar-tablet'>
                    <div className="NavBar-nav-tablet">
                        <div className="NavBar-logo-tablet" onClick={backHome}></div>
                        <div className="NavBar-container-link-tablet">
                            <div className="NavBar-link-tablet">
                                <Link to="/product/man" onClick={() => { linkGenderHendeler('men') }}>Men</Link>
                                <Link to="/product/woman" onClick={() => { linkGenderHendeler('woman') }}>Woman</Link>
                                <Link to="/product/children" onClick={() => { linkGenderHendeler('children') }}>Children</Link>
                                <Link className='NavBar-link-small-tablet' to="/product/tshirt" onClick={() => { linkCollectionHendeler('T-Shirt') }}>T-Shirt</Link>
                                <Link className='NavBar-link-small' to="/product/shoes" onClick={() => { linkCollectionHendeler('Shoes') }}>Shoes</Link>
                                <Link className='NavBar-link-small-tablet' to="/trousers">Trousers</Link>
                                <span>|</span>
                                <Link className='NavBar-link-small-tablet' to="/login">{newData.login === true ? "Logout" : "Member"}</Link>
                            </div>
                            <div className="NavBar-link-tablet">
                                <div>
                                    <BsBag onClick={() => { newData.setNavBarShow(!newData.navBarShow) }} />
                                    <div className={`NavBar-cart-tablet ${newData.navBarShow === true && 'NavBar-cart-show-tablet'}`}>
                                        <div className="NavBar-cart-list-tablet">
                                            {newData.cart !== null && newData.cart.length > 0 ?
                                                <div>
                                                    {newData.cart.slice(0, 3).map((item, index) => (
                                                        <OrderList key={index} data={item} />
                                                    ))}
                                                </div> :
                                                <div className="NavBar-cart-list-empty-tablet">
                                                    <h3>Cart is empty</h3>
                                                    <h4>You have zero item</h4>
                                                    <h4>on your cart at the moment</h4>
                                                </div>
                                            }
                                            <div className="NavBar-cart-btn-tablet" onClick={toCheckOut}><span>Check Out</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='NavBar-info-tablet'><h1>SAVE UP TO 50% ON SEASONAL SALES / RETURNS AND EXCHANGES WITHIN 60 DAYS</h1></div>
                </div>
            </Tablet>
            <Mobile>
                <nav className="NavBar-mobile">
                    <div className="NavBar-icon-mobile">
                        <BsFillGrid3X3GapFill
                            onClick={menuOpenNow}
                        />
                    </div>
                    <div className="NavBar-logo-mobile" onClick={backHome}></div>
                    <div className="NavBar-mobile-bag" >
                        <BsBag onClick={cartHendeler} />
                    </div>
                </nav>
                <div className={
                    menuOpen !== true
                        ? 'NavBar-list-container'
                        : "NavBar-list-container menuOpen"
                } >

                    <div
                        className={
                            menuOpen !== true
                                ? "NavBar-list-mobile"
                                : "NavBar-list-mobile menuOpen"
                        }
                    >
                        <div className="NavBar-list-icon-mobile">
                            <BsXSquareFill onClick={() => setMenuOpen((menuOpen) => !menuOpen)} />
                        </div>
                        <div className="NavBar-list-container-mobile">
                            <div className="NavBar-list-item-mobile">

                                <Link to="/product/man" onClick={() => { linkGenderHendeler('men') }}>Men</Link>
                                <Link to="/product/woman" onClick={() => { linkGenderHendeler('woman') }}>Woman</Link>
                                <Link to="/product/children" onClick={() => { linkGenderHendeler('children') }}>Children</Link>
                                <Link className='NavBar-link-small' to="/product/tshirt" onClick={() => { linkCollectionHendeler('T-Shirt') }}>T-Shirt</Link>
                                <Link className='NavBar-link-small' to="/product/shoes" onClick={() => { linkCollectionHendeler('Shoes') }}>Shoes</Link>
                                <Link className='NavBar-link-small' to="/trousers">Trousers</Link>
                                <Link className='NavBar-link-small' to="/login" onClick={(menuOpen) => setMenuOpen(!menuOpen)}>{newData.login === true ? "Logout" : "Member"}</Link>
                            </div>
                            <div className="NavBar-list-location-mobile">
                                <h1>www.adidas.com</h1>
                                <h2>ADIDAS - {newData.country}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Mobile>
            <MobileLandscape>
                <div className='NavBar-mobileLandscape'>
                    <div className="NavBar-nav-mobileLandscape">
                        <div className="NavBar-logo-mobileLandscape" onClick={backHome}></div>
                        <div className="NavBar-container-link-mobileLandscape">
                            <div className="NavBar-link-mobileLandscape">
                                <Link to="/product/man" onClick={() => { linkGenderHendeler('men') }}>Men</Link>
                                <Link to="/product/woman" onClick={() => { linkGenderHendeler('woman') }}>Woman</Link>
                                <Link to="/product/children" onClick={() => { linkGenderHendeler('children') }}>Children</Link>
                                <Link className='NavBar-link-small-mobileLandscape' to="/product/tshirt" onClick={() => { linkCollectionHendeler('T-Shirt') }}>T-Shirt</Link>
                                <Link className='NavBar-link-small' to="/product/shoes" onClick={() => { linkCollectionHendeler('Shoes') }}>Shoes</Link>
                                <Link className='NavBar-link-small-mobileLandscape' to="/trousers">Trousers</Link>
                                <span>|</span>
                                <Link className='NavBar-link-small-mobileLandscape' to="/login">{newData.login === true ? "Logout" : "Member"}</Link>
                            </div>
                            <div className="NavBar-link-mobileLandscape">
                                <div>
                                    <BsBag onClick={() => { newData.setNavBarShow(!newData.navBarShow) }} />
                                    <div className={`NavBar-cart-mobileLandscape ${newData.navBarShow === true && 'NavBar-cart-show-mobileLandscape'}`}>
                                        <div className="NavBar-cart-list-mobileLandscape">
                                            {newData.cart !== null && newData.cart.length > 0 ?
                                                <div>
                                                    {newData.cart.slice(0, 3).map((item, index) => (
                                                        <OrderList key={index} data={item} />
                                                    ))}
                                                </div> :
                                                <div className="NavBar-cart-list-empty-tablet">
                                                    <h3>Cart is empty</h3>
                                                    <h4>You have zero item</h4>
                                                    <h4>on your cart at the moment</h4>
                                                </div>
                                            }
                                            <div className="NavBar-cart-btn-mobileLandscape" onClick={toCheckOut}><span>Check Out</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='NavBar-info-tablet'><h1>SAVE UP TO 50% ON SEASONAL SALES / RETURNS AND EXCHANGES WITHIN 60 DAYS</h1></div>
                </div>
            </MobileLandscape>

        </>
    )
}

export default NavBar;