import "./DetailProduct";
import $ from "jquery";
import { MobileLandscape } from "../../UI Components/MediaQuery/MediaQuery";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../UI Components/DataProvider/DataProvider";
import { BsArrowLeftShort, BsFillCaretUpFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import {
  BsEmojiHeartEyes,
  BsEmojiSmile,
  BsEmojiExpressionless,
  BsEmojiFrown,
  BsEmojiAngry,
  BsPlus,
  BsPerson,
} from "react-icons/bs";
import Carousel from "../../UI Components/Carousel/Carousel";
import MetaData from "../../UI Components/MetaData/MetaData";

const DetailProductMobileLandscape = () => {
  // // Data Context Hooks
  const newData = useContext(DataContext);

  const navigate = useNavigate();
  let { id } = useParams();

  // Update Cart Data, Size included
  const [reload, setReload] = useState(false);
  useEffect(() => {
    if (reload === true) {
      setReload(!reload);
      setTimeout(() => {
        return;
      }, 500);
    }
  }, [reload]);

  // SCROLL UP ON CLICK
  const slideUp = () => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  };

  // STATE DATA PRODUCT
  const [product, setProduct] = useState([]);
  const [similarItems, setSimilarItems] = useState([]);
  const metaTitle =
    product.length >= 1
      ? `${product[0].name} - ${product[0].productTitle}`
      : "";

  // get product by id
  useEffect(() => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    if (newData.isPending === false) {
      let findProductById =
        newData.data && newData.data.filter((obj) => obj.id.includes(id));
      setTimeout(() => {
        setProduct(findProductById);
      }, 500);
    }
  }, [newData.isPending, id]);

  // get similar items
  useEffect(() => {
    if (product.length !== 0) {
      let findProductByCollection =
        newData.data &&
        newData.data.filter((obj) =>
          obj.collection.includes(product[0].collection)
        );
      let shuffle =
        findProductByCollection &&
        findProductByCollection.sort(() => Math.random() - 0.5);
      setTimeout(() => {
        setSimilarItems(shuffle);
      }, 500);
    }
  }, [product]);

  const prevPageHendeler = () => {
    navigate("/");
  };

  // Get Size info
  const [cartFilter, setCartFilter] = useState(null);

  //  Set Size into item object
  const sizeHendeler = (number) => {
    cartFilter["size"] = number;
    localStorage.setItem("cart", JSON.stringify(newData.cart));
    setReload(true);
  };

  // hold the size before adding to cart
  const [holdSize, setHoldSize] = useState("");
  const HoldSizeHendeler = (number) => {
    setHoldSize(number);
    setReload(true);
  };

  // Add to cart
  const addToCart = (id, image, info, title, gender, color, price, size) => {
    const newCartList = newData.cart;
    const cartDataitem = {
      id: id,
      image: image,
      info: info,
      title: title,
      gender: gender,
      color: color,
      price: price,
      qty: 1,
      size: size,
    };

    // if data exist on cart state add qty +1 otherwise add the item to list
    const cartCondition = newData.cart.some(
      (item) => item.id === cartDataitem.id
    );
    if (cartCondition === false) {
      setHoldSize("");
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
      cartFilter.qty = cartFilter.qty + 1;
      doubleList.push(cartFilter);
      newData.setCartDoubleList([cartFilter]);

      setTimeout(() => {
        newCartList.map(
          (obj) => doubleList.find((o) => o.id === obj.id) || obj
        );
        newData.setCart(newCartList);
      }, 500);
      newData.setForchReload(!newData.forchReload);
    }
    newData.setCheckOutListItem(JSON.parse(localStorage.getItem("cart")));
    setReload(true);
  };


  useEffect(() => {
    if (newData.cart.length >= 0) {
      setCartFilter(newData.cart.find((x) => x.id === id));
    }

    if (cartFilter !== undefined && cartFilter !== null) {
      newData.setIsAvailable(true);
    }
  }, [newData.cart.length, cartFilter]);

  return (
    <MobileLandscape>
      <MetaData title={metaTitle} />
      <div className="DetailProduct-MobileLandscape">
        <div
          className="DetailProduct-backTop-MobileLandscape"
          onClick={slideUp}
        >
          <BsFillCaretUpFill />
        </div>
        <div className="DetailProduct-navigation-MobileLandscape">
          <h4>
            <BsArrowLeftShort />
            <span className="back" onClick={prevPageHendeler}>
              Home
            </span>
            /<span> Product</span> / <span>Detail Product</span>
          </h4>
        </div>
        <div className="DetailProduct-detail-MobileLandscape">
          <div className="DetailProduct-detail-left-MobileLandscape">
            <div className="DetailProduct-detail-left-img-MobileLandscape">
              <div
                style={{
                  backgroundImage: `url(${
                    product.length >= 1 && product[0].image[0]
                  })`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="DetailProduct-detail-left-productCard-img-MobileLandscape"
              ></div>
            </div>
          </div>
          <div className="DetailProduct-detail-right-MobileLandscape">
            <div className="DetailProduct-detail-right-title-MobileLandscape">
              <h1>{product.length >= 1 && product[0].name}</h1>
              <h4>$ {product.length >= 1 && product[0].price}</h4>

              <div className="DetailProduct-detail-right-size-MobileLandscape">
                <h4>Available sizes</h4>
                <div className="DetailProduct-detail-right-size-list-MobileLandscape">
                  {product.length >= 1 &&
                    product[0].size.map((data, index) =>
                      newData.isAvailable === true ? (
                        <button
                          key={index}
                          className={
                            data ===
                            (cartFilter !== undefined && cartFilter.size)
                              ? "buttonSize"
                              : ""
                          }
                          onClick={() => sizeHendeler(data)}
                        >
                          {data}
                        </button>
                      ) : (
                        <button
                          key={index}
                          className={data === holdSize ? "buttonSize" : ""}
                          onClick={() => HoldSizeHendeler(data)}
                        >
                          {data}
                        </button>
                      )
                    )}
                </div>
              </div>
              <button
                onClick={() =>
                  addToCart(
                    product[0].id,
                    product[0].image[0],
                    "50% Disc",
                    product[0].name,
                    product[0].gender,
                    product[0].color,
                    product[0].price,
                    holdSize
                  )
                }
                className={
                  holdSize !== ""
                    ? "DetailProduct-detail-right-add-MobileLandscape active"
                    : "DetailProduct-detail-right-add-MobileLandscape"
                }
              >
                ADD TO CART
              </button>
            </div>
            <div className="DetailProduct-detail-right-info-MobileLandscape">
              <h1>{product.length >= 1 && product[0].productTitle}</h1>
              <p>{product.length >= 1 && product[0].productSubtitle}</p>
            </div>
            <div className="DetailProduct-detail-right-detail-MobileLandscape">
              <h1>DETAILS</h1>
              <div className="DetailProduct-detail-right-detail-list-MobileLandscape">
                <span>
                  * Fit for{" "}
                  {product.length >= 1 && product[0].gender.toLowerCase()}
                </span>
                {product.length >= 1 &&
                  product[0].detail.map((data, index) => (
                    <span key={index}>* {data}</span>
                  ))}
              </div>
            </div>
            <div className="DetailProduct-detail-right-note-MobileLandscape">
              <h1>Note :</h1>
              <span>- Free delivery for min spend $100</span>
              <span>
                - 60 DAYS * PERIOD FOR FREE RETURN OR EXCHANGE OF GOODS
              </span>
            </div>
          </div>
        </div>
        <Carousel title="SIMILAR ITEMS" data={similarItems} />
        <div className="DetailProduct-reviews-MobileLandscape">
          <h1>REVIEWS</h1>
          <div className="DetailProduct-reviews-addButton-MobileLandscape">
            <div className="DetailProduct-reviews-addButton-list-MobileLandscape">
              <h4>
                <BsPerson /> 500
              </h4>
              <span>like this product</span>
            </div>
            <div className="DetailProduct-reviews-addButton-list-btn-MobileLandscape">
              <BsPlus />
              <h4>Add Reviews</h4>
            </div>
          </div>
          <div className="DetailProduct-reviews-listContainer-MobileLandscape">
            <div className="DetailProduct-reviews-list-MobileLandscape">
              <div className="DetailProduct-reviews-list-user-MobileLandscape">
                <div className="DetailProduct-reviews-list-user-icon-MobileLandscape">
                  <BsPerson />
                </div>
                <div className="DetailProduct-reviews-list-user-name-MobileLandscape">
                  <h4>Anita </h4> |<span>Days ago</span>
                </div>
              </div>
              <p>
                Really good top, does exactly what is needed and nice length /
                fit for gym. Not too tight
              </p>
              <div className="DetailProduct-reviews-list-emoticon-MobileLandscape">
                <span>
                  <BsEmojiHeartEyes /> Useful
                </span>
                {/* <span>
                  <BsEmojiSmile /> Not bad
                </span>
                <span>
                  <BsEmojiExpressionless /> Not Sure
                </span>
                <span>
                  <BsEmojiFrown /> Maybe not for me
                </span>
                <span>
                  <BsEmojiAngry />
                  Disappointed
                </span> */}
              </div>
            </div>
            <div className="DetailProduct-reviews-list-MobileLandscape">
              <div className="DetailProduct-reviews-list-user-MobileLandscape">
                <div className="DetailProduct-reviews-list-user-icon-MobileLandscape">
                  <BsPerson />
                </div>
                <div className="DetailProduct-reviews-list-user-name-MobileLandscape">
                  <h4>Anita </h4> |<span>Days ago</span>
                </div>
              </div>
              <p>
                Really good top, does exactly what is needed and nice length /
                fit for gym. Not too tight
              </p>
              <div className="DetailProduct-reviews-list-emoticon-MobileLandscape">
                <span>
                  <BsEmojiFrown /> Maybe not for me
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileLandscape>
  );
};

export default DetailProductMobileLandscape;

