import { useContext, useEffect } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { BsCamera, BsFillBagCheckFill } from "react-icons/bs";
import {
  Desktop,
  Mobile,
  MobileLandscape,
  Tablet,
} from "../../UI Components/MediaQuery/MediaQuery";
import "./ProductCard.css";
import { useNavigate, generatePath } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();

  // Data Context Hooks
  const newData = useContext(DataContext);

  const addToCart = (id, image, info, title, gender, color, price) => {
    const newCartList = newData.cart;
    const cartDataitem = {
      id: id,
      image: image,
      info: info,
      title: title,
      gender: gender,
      color: color,
      price: price,
      size: "",
      qty: 1,
    };

    // if data exist on cart state add qty +1 otherwise add the item to list
    const cartCondition = newData.cart.some(
      (item) => item.id === cartDataitem.id
    );
    if (cartCondition === false) {
      newCartList.push(cartDataitem);
      newData.setNewCartItem([cartDataitem]);
      setTimeout(() => {
        localStorage.setItem("cart", JSON.stringify(newCartList));
        newData.setCart(newCartList);
      }, 500);
      newData.setForchReload(!newData.forchReload);
    } else {
      const doubleList = [];
      const cartFilter = newData.cart.find((x) => x.id === cartDataitem.id);
      const priceFilter = newData.dataItem.find(
        (x) => x.id === cartDataitem.id
      );
      cartFilter.qty = cartFilter.qty + 1;
      cartFilter.price = (Number(cartFilter.qty) * Number(priceFilter.price)).toFixed(2);

      doubleList.push(cartFilter);
      newData.setCartDoubleList([cartFilter]);

      setTimeout(() => {
        newCartList.map(
          (obj) => doubleList.find((o) => o.id === obj.id) || obj
        );
        newData.setCart(newCartList);
        localStorage.setItem("cart", JSON.stringify(newCartList));
        
      }, 500);
      newData.setForchReload(!newData.forchReload);
    }
    newData.setCheckOutListItem(JSON.parse(localStorage.getItem("cart")));
    
  };

  const detailHendeler = (id) => {
    navigate(`/detail/${props.id}`);
    newData.setForchReload(!newData.forchReload);
  };

  return (
    <>
      <Desktop>
        <div className="ProductCard">
          <div
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="ProductCard-img"
            onClick={() => detailHendeler(props.id)}
          >
            {!props.image && <BsCamera />}
            <div className="ProductCard-img-price">
              <span>{props.info}</span>
            </div>
          </div>
          <div className="ProductCard-title">
            <div className="ProductCard-title-text">
              <h1>{props.prodTitle}</h1>
            </div>
            <h2>{props.gender} Originals</h2>
            <h2>
              {props.color[0].toUpperCase() +
                props.color.slice(1).toLowerCase()}
            </h2>
            <div className="ProductCard-buy">
              <h3>$ {props.price}</h3>
              <button
                onClick={() =>
                  addToCart(
                    props.id,
                    props.image,
                    props.info,
                    props.prodTitle,
                    props.gender,
                    props.color,
                    props.price
                  )
                }
              >
                <BsFillBagCheckFill /> <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </Desktop>
      <Tablet>
        <div className="ProductCard-tablet">
          <div
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="ProductCard-img-tablet"
            onClick={() => detailHendeler(props.id)}
          >
            {!props.image && <BsCamera />}
            <div className="ProductCard-img-price-tablet">
              <span>{props.info}</span>
            </div>
          </div>
          <div className="ProductCard-title-tablet">
            <div className="ProductCard-title-text-tablet">
              <h1>{props.prodTitle}</h1>
            </div>
            <h2>{props.gender} Originals</h2>
            <h2>
              {props.color[0].toUpperCase() +
                props.color.slice(1).toLowerCase()}
            </h2>
            <div className="ProductCard-buy-tablet">
              <h3>$ {props.price}</h3>
              <button
                onClick={() =>
                  addToCart(
                    props.id,
                    props.image,
                    props.info,
                    props.prodTitle,
                    props.gender,
                    props.color,
                    props.price
                  )
                }
              >
                <BsFillBagCheckFill /> <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="ProductCard-mobile">
          <div
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="ProductCard-img-mobile"
            onClick={() => detailHendeler(props.id)}
          >
            {!props.image && <BsCamera />}
            <div className="ProductCard-img-price-mobile">
              <span>{props.info}</span>
            </div>
          </div>
          <div className="ProductCard-title-mobile">
            <div className="ProductCard-title-text-mobile">
              <h1>{props.prodTitle}</h1>
            </div>
            <h2>{props.gender} Originals</h2>
            <h2>
              {props.color[0].toUpperCase() +
                props.color.slice(1).toLowerCase()}
            </h2>
            <div className="ProductCard-buy-mobile">
              <h3>$ {props.price}</h3>
              <button
                onClick={() =>
                  addToCart(
                    props.id,
                    props.image,
                    props.info,
                    props.prodTitle,
                    props.gender,
                    props.color,
                    props.price
                  )
                }
              >
                <BsFillBagCheckFill /> <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </Mobile>
      <MobileLandscape>
        <div className="ProductCard-tablet">
          <div
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="ProductCard-img-tablet"
            onClick={() => detailHendeler(props.id)}
          >
            {!props.image && <BsCamera />}
            <div className="ProductCard-img-price">
              <span>{props.info}</span>
            </div>
          </div>
          <div className="ProductCard-title-tablet">
            <div className="ProductCard-title-text-tablet">
              <h1>{props.prodTitle}</h1>
            </div>
            <h2>{props.gender} Originals</h2>
            <h2>
              {props.color[0].toUpperCase() +
                props.color.slice(1).toLowerCase()}
            </h2>
            <div className="ProductCard-buy-tablet">
              <h3>$ {props.price}</h3>
              <button
                onClick={() =>
                  addToCart(
                    props.id,
                    props.image,
                    props.info,
                    props.prodTitle,
                    props.gender,
                    props.color,
                    props.price
                  )
                }
              >
                <BsFillBagCheckFill /> <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </MobileLandscape>
    </>
  );
};

export default ProductCard;
