import "./CheckOut.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../UI Components/DataProvider/DataProvider";
import { BsCreditCard, BsCash, BsArrowRepeat } from "react-icons/bs";
import ErrorMessage from "../../UI Components/ErrorMessage/ErrorMessage";
import Carousel from "../../UI Components/Carousel/Carousel";
import CheckOutList from "../../UI Components/CheckOutList/CheckOutList";
import CartIsEmpty from "../../UI Components/CartIsEmpty/CartIsEmpty";
import CreditcardForm from "../../UI Components/CreditcardForm/CreditcardForm";
import $ from "jquery";

const CheckOutMobile = () => {
  // Data Context Hooks
  const newData = useContext(DataContext);

  // total items
  const totalItems = newData.cart !== null ? newData.cart.length : [{}]

  // Get Subtotal Price
  let listSubtotal = [];
  let totalItemCart = [];
  function add(accumulator, a) {
    return accumulator + a;
  }

  useEffect(() => {
    // Get total product item
    newData.cart.map((number) => totalItemCart.push(Number(number.qty)));
    newData.setTotalCartItem(Number(totalItemCart.reduce(add, 0)));

    // Get subtotal
    newData.cart.map((number) => listSubtotal.push(Number(number.price)));
    newData.setSubtotal(Number(listSubtotal.reduce(add, 0).toFixed(2)));

    // Free shipping or not
    if (newData.subtotal <= 100) {
      // console.log('sorry need to pay')
      newData.setShippingCost(2.5);
    } else {
      // console.log('Yay free delivery')
      newData.setShippingCost("Free");
    }

    // total payment
    if (newData.shippingCost !== "Free") {
      newData.setTotal(newData.subtotal + newData.shippingCost);
    } else {
      newData.setTotal(newData.subtotal);
    }
  }, [newData.cart, listSubtotal]);

  //   Checkout Proccess Hendeler
  const [checkOutLoading, setCheckOutLoading] = useState(false);

  // Proccess Botton Hendeler
  const proccessHendeler = () => {
    setCheckOutLoading(true);

    let errorText = [];

    // Check if there item in cart list
    if (newData.cart.length === 0) {
      errorText.push(" -> There is no item to process");
    } else {
      // Check if there is size in cart list
      if (newData.cart.some((item) => item.size) === false) {
        errorText.push(" -> The size box can not be red");
      }

      // Check if size is not empty in cart list
      if (newData.cart.some((item) => item.size === "") === true) {
        errorText.push(" -> There is an item without size being selected");
      }

      // Check if qty is not empty in cart list
      if (
        newData.cart.some((item) => item.qy === 0) === true ||
        newData.cart.some((item) => item.qy === "") === true
      ) {
        errorText.push(" -> Quantity can not be empty or 0");
      }
    }

    // Show the error messages OR redirect to payment section
    if (errorText.length > 0) {
      setTimeout(() => {
        $("html,body").animate({ scrollTop: 0 }, "slow");
      }, 500);
      setTimeout(() => {
        newData.setErrorMessage(errorText);
        setCheckOutLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setCheckOutLoading(false);
        $("html,body").animate({ scrollTop: 0 }, "slow");
      }, 500);
      setTimeout(() => {
        newData.setProccessing(true);
      }, 1000);
    }
  };

  // Discount form
  const [discount, setDiscount] = useState("");
  const cupon = (e) => {
    setDiscount(e.target.value.toUpperCase());
  };

  // Product sugestion
  const [sugestionProuct, setSugestionProduct] = useState([]);

  useEffect(() => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    if (newData.isPending === false) {
      let shuffle = newData.data.sort(() => Math.random() - 0.5);
      setTimeout(() => {
        setSugestionProduct(shuffle);
      }, 500);
    }
  }, [newData.isPending]);

  return (
    <div className="CheckOut-Mobile">
      {newData.errorMessage !== null && <ErrorMessage />}
      <div className="CheckOut-conainer-Mobile">
        <div className="CheckOut-ItemList-Mobile">
          <div
            className="CheckOut-ItemList-orderItem-Mobile"
            style={
              newData.proccessing === true
                ? { overflow: "unset", maxHeight: "fit-content" }
                : {}
            }
          >
            {newData.proccessing === true ? (
              <CreditcardForm />
            ) : newData.cart.length !== 0 ? (
              newData.cart.map((data, index) => (
                <CheckOutList key={index} data={data} />
              ))
            ) : (
              <CartIsEmpty />
            )}
          </div>
          <div className="CheckOut-payment-Mobile">
            <div className="CheckOut-billing-Mobile">
              <div className="CheckOut-billing-paymenMethod-Mobile">
                <h1>Payment Method</h1>
                <div className="CheckOut-billing-paymenMethod-list-Mobile">
                  <input type="radio" value="Credit Card" name="paymenMethod" />{" "}
                  <BsCreditCard /> <span>Credit Card</span>
                </div>
                <div className="CheckOut-billing-paymenMethod-list-Mobile">
                  <input
                    type="radio"
                    value="Cash On Delivery"
                    name="paymenMethod"
                  />{" "}
                  <BsCash /> <span>Cash On Delivery</span>
                </div>
              </div>
              <hr />
              <div className="CheckOut-billing-total-Mobile">
                <h4>Product</h4>
                <h4>{newData.totalCartItem} Item</h4>
              </div>
              <div className="CheckOut-billing-total-Mobile">
                <h4>Subtotal</h4>
                <h4>$ {newData.subtotal}</h4>
              </div>
              <div className="CheckOut-billing-total-Mobile">
                <h4>Shipping</h4>
                <h4>{totalItems === 0 ? 0 : newData.shippingCost}</h4>
              </div>
              <hr />
              <div className="CheckOut-billing-total-Mobile total">
                <h4>Total</h4>
                <h1>$ {totalItems === 0 ? 0 : newData.total}</h1>
              </div>
              {newData.proccessing !== true && (
                <div className="CheckOut-cart-btn-Mobile">
                  {checkOutLoading === true ? (
                    <h4>
                      <BsArrowRepeat />
                      <span>Loading...</span>
                    </h4>
                  ) : (
                    <span
                      onClick={
                        newData.login === true ? proccessHendeler : "Login"
                      }
                    >
                      {newData.login === true ? "Proccess" : "Login"}
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="CheckOut-discount-Mobile">
              <h1>Discount Code</h1>
              <div>
                <input
                  type="text"
                  name="first_name"
                  onChange={(e) => cupon(e)}
                  placeholder="Code XXX"
                  value={discount}
                />
                <button>Apply</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Carousel title="YOU MIGHT LIKE" data={sugestionProuct} />
        </div>
      </div>
    </div>
  );
};

export default CheckOutMobile;
