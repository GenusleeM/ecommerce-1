import "./Product.css";
import { useContext, useState } from "react";
import {
  Desktop,
  Mobile,
  MobileLandscape,
  Tablet,
} from "../../UI Components/MediaQuery/MediaQuery";
import { useNavigate, Routes, Route } from "react-router-dom";
import { DataContext } from "../../UI Components/DataProvider/DataProvider";
import { BsArrowLeftShort, BsFillCaretUpFill } from "react-icons/bs";
import $ from "jquery";
import ErrorMessage from "../../UI Components/ErrorMessage/ErrorMessage";
import NavBarDropdownLink from "../../UI Components/NavBarDropdownLink/NavBarDropdownLink";
import ProductMan from "../../UI Components/ProductMan/ProductMan";
import ProductWoman from "../../UI Components/ProductWoman/ProductWoman";
import ProductChildren from "../../UI Components/ProductChildren/ProductChildren";
import ProductTshirt from "../../UI Components/ProductTshirt/ProductTshirt";
import ProductShoes from "../../UI Components/ProductShoes/ProductShoes";
import ProductNotFound from "../../UI Components/ProductNotFound/ProductNotFound";
import { createBrowserHistory } from "history";
import MetaData from "../../UI Components/MetaData/MetaData";

const Product = () => {
  const navigate = useNavigate();


  // Get Meta Title
  const history = createBrowserHistory();
  const getPathLocation = history.location.pathname
  const getPathTitle = getPathLocation.split(" ");
  const metaTitle = getPathTitle[0].replaceAll('/', ' ').trim().toUpperCase();


  // Data Context Hooks
  const newData = useContext(DataContext);


  // SEARCH HENDELER
  const [search, setSearch] = useState('')


  // SCROLL UP ON CLICK
  const slideUp = () => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  };

  const prevPageHendeler = () => {
    navigate("/");
  };

  const reloadHendeler = () => {
    newData.setProductData(newData.newProductData)
    newData.setSearchByColor(null)
    newData.setSearchBySize(null)
    newData.setSearchByGender(null)
    newData.setSearchByName(null)
    newData.setSearchByCollection(null)
    setSearch('')
  }


  return (
    <div className="Gender">
      <MetaData title={metaTitle} />
      <Desktop>
        <div className="Gender-backTop" onClick={slideUp}>
          <BsFillCaretUpFill />
        </div>
        <div className="Gender-navigation">
          <h4>
            <BsArrowLeftShort />{" "}
            <span className="back" onClick={prevPageHendeler}>
              Home
            </span>
            /<span> Product</span> /<Routes>
              <Route path="/man" element={<span>Men</span>} />
              <Route path="/woman" element={<span>Woman</span>} />
              <Route path="/children" element={<span>Children</span>} />
              <Route path="/tshirt" element={<span>T-shirt</span>} />
              <Route path="/shoes" element={<span>Shoes</span>} />
              <Route path="/*" element={""} />
            </Routes>
          </h4>
          <div className="Gender-title">
            <Routes>
              <Route path="/man" element={<h1>Men's Products</h1>} />
              <Route path="/woman" element={<h1>Woman's Products</h1>} />
              <Route path="/children" element={<h1>Children's Products</h1>} />
              <Route path="/tshirt" element={<h1>T-shirt Collection</h1>} />
              <Route path="/shoes" element={<h1>Shoes Collection</h1>} />
              <Route path="/*" element={""} />
            </Routes>
            <div className="Gender-search">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name"
                value={search} />
              <button onClick={() => newData.productFilterHendeler('name', search)}>Find</button>
            </div>
          </div>
          {newData.errorMessage && <ErrorMessage />}
          <div className="Gender-productHeader"></div>
          <div className="Gender-navigation-container">
            <NavBarDropdownLink />
            <button onClick={reloadHendeler}>Reset</button>
          </div>
        </div>
        <div className="Gender-product">
          <Routes>
            <Route path="/man" element={<ProductMan />} />
            <Route path="/woman" element={<ProductWoman />} />
            <Route path="/children" element={<ProductChildren />} />
            <Route path="/tshirt" element={<ProductTshirt />} />
            <Route path="/shoes" element={<ProductShoes />} />
            <Route path="/*" element={<ProductNotFound />} />

          </Routes>
        </div>
      </Desktop>
      <Tablet>
        <div className="Gender-backTop-tablet" onClick={slideUp}>
          <BsFillCaretUpFill />
        </div>
        <div className="Gender-navigation-tablet">
          <h4>
            <BsArrowLeftShort />{" "}
            <span className="back" onClick={prevPageHendeler}>
              {" "}
              Home
            </span>{" "}
            /<span> Product</span> /<Routes>
              <Route path="/man" element={<span>Men</span>} />
              <Route path="/woman" element={<span>Woman</span>} />
              <Route path="/children" element={<span>Children</span>} />
              <Route path="/tshirt" element={<span>T-shirt</span>} />
              <Route path="/shoes" element={<span>Shoes</span>} />
            </Routes>
          </h4>
          <div className="Gender-title-tablet">
            <Routes>
              <Route path="/man" element={<h1>Men's Products</h1>} />
              <Route path="/woman" element={<h1>Woman's Products</h1>} />
              <Route path="/children" element={<h1>Children's Products</h1>} />
              <Route path="/tshirt" element={<h1>T-shirt Collection</h1>} />
              <Route path="/shoes" element={<h1>Shoes Collection</h1>} />
            </Routes>
            <div className="Gender-search-tablet">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name"
                value={search} />
              <button onClick={() => newData.productFilterHendeler('name', search)}>Find</button>
            </div>
          </div>
          {newData.errorMessage && <ErrorMessage />}
          <div className="Gender-navigation-container-tablet">
            <NavBarDropdownLink />
            <button onClick={reloadHendeler}>Reset</button>
          </div>
        </div>
        <div className="Gender-product-tablet">
          <Routes>
            <Route path="/man" element={<ProductMan />} />
            <Route path="/woman" element={<ProductWoman />} />
            <Route path="/children" element={<ProductChildren />} />
            <Route path="/tshirt" element={<ProductTshirt />} />
            <Route path="/shoes" element={<ProductShoes />} />
          </Routes>
        </div>
      </Tablet>
      <Mobile>
        <div className="Gender-backTop-mobile" onClick={slideUp}>
          <BsFillCaretUpFill />
        </div>
        <div className="Gender-navigation-mobile">
          <h4>
            <BsArrowLeftShort />{" "}
            <span className="back" onClick={prevPageHendeler}>
              {" "}
              Home
            </span>{" "}
            /<span> Product</span> /<Routes>
              <Route path="/man" element={<span>Men</span>} />
              <Route path="/woman" element={<span>Woman</span>} />
              <Route path="/children" element={<span>Children</span>} />
              <Route path="/tshirt" element={<span>T-shirt</span>} />
              <Route path="/shoes" element={<span>Shoes</span>} />
            </Routes>
          </h4>
          <div className="Gender-title-mobile">
            <Routes>
              <Route path="/man" element={<h1>Men's Products</h1>} />
              <Route path="/woman" element={<h1>Woman's Products</h1>} />
              <Route path="/children" element={<h1>Children's Products</h1>} />
              <Route path="/tshirt" element={<h1>T-shirt Collection</h1>} />
              <Route path="/shoes" element={<h1>Shoes Collection</h1>} />
            </Routes>
            <div className="Gender-search-mobile">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name"
                value={search} />
              <button onClick={() => newData.productFilterHendeler('name', search)}>Find</button>
            </div>
          </div>
          {newData.errorMessage && <ErrorMessage />}
          <div className="Gender-productHeader-mobile"></div>
          <div className="Gender-navigation-container-mobile">
            <NavBarDropdownLink />
            <button onClick={reloadHendeler}>Reset</button>
          </div>
        </div>
        <div className="Gender-product-mobile">
          <Routes>
            <Route path="/man" element={<ProductMan />} />
            <Route path="/woman" element={<ProductWoman />} />
            <Route path="/children" element={<ProductChildren />} />
            <Route path="/tshirt" element={<ProductTshirt />} />
            <Route path="/shoes" element={<ProductShoes />} />
          </Routes>
        </div>
      </Mobile>
      <MobileLandscape>
        <div className="Gender-backTop-mobileLandscape" onClick={slideUp}>
          <BsFillCaretUpFill />
        </div>
        <div className="Gender-navigation-tablet">
          <h4>
            <BsArrowLeftShort />{" "}
            <span className="back" onClick={prevPageHendeler}>
              {" "}
              Home
            </span>{" "}
            /<span> Product</span> /<Routes>
              <Route path="/man" element={<span>Men</span>} />
              <Route path="/woman" element={<span>Woman</span>} />
              <Route path="/children" element={<span>Children</span>} />
              <Route path="/tshirt" element={<span>T-shirt</span>} />
              <Route path="/shoes" element={<span>Shoes</span>} />
            </Routes>
          </h4>
          <div className="Gender-title-tablet">
            <Routes>
              <Route path="/man" element={<h1>Men's Products</h1>} />
              <Route path="/woman" element={<h1>Woman's Products</h1>} />
              <Route path="/children" element={<h1>Children's Products</h1>} />
              <Route path="/tshirt" element={<h1>T-shirt Collection</h1>} />
              <Route path="/shoes" element={<h1>Shoes Collection</h1>} />
            </Routes>
            <div className="Gender-search-tablet">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name"
                value={search} />
              <button onClick={() => newData.productFilterHendeler('name', search)}>Find</button>
            </div>
          </div>
          {newData.errorMessage && <ErrorMessage />}
          <div className="Gender-navigation-container-tablet">
            <NavBarDropdownLink />
            <button onClick={reloadHendeler}>Reset</button>
          </div>
        </div>
        <div className="Gender-product-tablet">
          <Routes>
            <Route path="/man" element={<ProductMan />} />
            <Route path="/woman" element={<ProductWoman />} />
            <Route path="/children" element={<ProductChildren />} />
            <Route path="/tshirt" element={<ProductTshirt />} />
            <Route path="/shoes" element={<ProductShoes />} />
          </Routes>
        </div>
      </MobileLandscape>
    </div>
  );
};

export default Product;
