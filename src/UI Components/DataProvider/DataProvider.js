import React, { createContext, useState, useEffect } from "react";
import $ from "jquery";
import useTime from "../../CostomHook/useTime";
import useFetch from "../../CostomHook/useFetch";

export const DataContext = createContext();

export const DataProvider = (props) => {
  // STATE COLLECTION
  const [login, setLogin] = useState(true);
  const [forchReload, setForchReload] = useState(false);
  const [navBarShow, setNavBarShow] = useState(false);
  const [adminPage, setAdminPage] = useState(false);
  const [checkOutItem, setCheckOutItem] = useState([]);

  // FETCH DATA PRODUCT
  const { data, dataError, isPending } = useFetch("http://localhost:8000/item");
  const [dataItem, setDataItem] = useState([]);
  // console.log('Reload fetching')

  useEffect(() => {
    if (isPending === false) {
      setDataItem(data);
    }
  }, [isPending]);

  // PRODUCT DROPDOWN LIST
  const [openProductFilter, setOpenProductFilter] = useState(false);
  const [listInfo, setListInfo] = useState(null);

  // PRODUCT SEARCH BY NAME,COLOR,SIZE,COLLECTION
  const [keyword, setKeyword] = useState(null);
  const [select, setSelect] = useState(null);
  const [searchByName, setSearchByName] = useState(null);
  const [searchByColor, setSearchByColor] = useState(null);
  const [searchBySize, setSearchBySize] = useState(null);
  const [searchByGender, setSearchByGender] = useState(null);
  const [searchByCollection, setSearchByCollection] = useState(null);

  // PRODUCT MAN PAGE
  const [productData, setProductData] = useState(null);
  const [newProductData, setNewProductData] = useState(null);
  const [newProductColection, setNewProductColection] = useState(null);

  // PRODUCT SEARCH FUNCTION
  const productFilterHendeler = (i, list) => {
    if (i.toLowerCase() === "color") {
      setSearchByColor(list);
      setSearchBySize(null);
      setSearchByGender(null);
      setSearchByName(null);
      setSearchByCollection(null);
    }
    if (i.toLowerCase() === "size") {
      setSearchBySize(list[0]);
      setSearchByColor(null);
      setSearchByGender(null);
      setSearchByName(null);
      setSearchByCollection(null);
    }
    if (i.toLowerCase() === "gender") {
      setSelect(i);
      setSearchByGender(list);
      setSearchByColor(null);
      setSearchBySize(null);
      setSearchByName(null);
      setSearchByCollection(null);
    }
    if (i.toLowerCase() === "name") {
      setSearchByName(list);
      setSearchByColor(null);
      setSearchBySize(null);
      setSearchByGender(null);
      setSearchByCollection(null);
    }
    if (i.toLowerCase() === "collection") {
      setSelect(i);
      setSearchByCollection(list);
      setSearchByName(null);
      setSearchByColor(null);
      setSearchBySize(null);
      setSearchByGender(null);
    }
    setListInfo(null);

    setTimeout(() => {
      setKeyword(list);
    }, 2000);
  };

  // GET CART LIST FROM LOCAL STORAGE

  const retrievedObject = localStorage.getItem("cart");
  const checkPayConfirm = localStorage.getItem("pay_confirm");
  let [cartLocalStore, setCartLocalStore] = useState(
    JSON.parse(retrievedObject)
  );

  useEffect(() => {
    if (retrievedObject === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    // if (checkPayConfirm === null) {
    //   localStorage.setItem("pay_confirm", JSON.stringify([]));
    // }
    setCartLocalStore(JSON.parse(retrievedObject));
  }, [retrievedObject, checkPayConfirm]);

  // CART LIST
  const [cart, setCart] = useState(cartLocalStore);
  const [newDataCart, setNewDataCart] = useState([]);
  const [newCartItem, setNewCartItem] = useState([]);
  const [removeCartIte, setRemoveCartIte] = useState([]);
  

  // CART DOUBLE LIST TRIGER
  const [cartDoubleList, setCartDoubleList] = useState([]);

  // ITEM SIZE BUTTON STYLR
  const [isAvailable, setIsAvailable] = useState(false);

  // REMOVE ITEM FROM CART
  const deleteItem = (id) => {
    setTimeout(() => {
      const cartList = cart;
      cartList.splice(
        cart.findIndex((i) => i.id === id),
        1
      );
      setCart(cartList);
      setTimeout(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        setCheckOutListItem(cart);
        setForchReload(!forchReload);
      }, 500);
    }, 500);
  };

  // ADD QTY ITEM FROM CART
  const addQty = (triger) => {
    setTimeout(() => {
      const cartFilter = cart.find((x) => x.id === triger);
      const priceFilter = dataItem.find((x) => x.id === triger);

      if (cartFilter.qty !== undefined) {
        cartFilter.qty = cartFilter.qty + 1;
        cartFilter.price = (
          Number(cartFilter.qty) * Number(priceFilter.price)
        ).toFixed(2);
      }

      const array = cart;
      const replace = [];
      replace.push(cartFilter);
      const newArray = array.map(
        (obj) => replace.find((o) => o.id === obj.id) || obj
      );
      setCart(newArray);
      setTimeout(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        setCheckOutListItem(cart);
        setForchReload(!forchReload);
      }, 500);
    }, 1000);
  };

  // REMOVE QTY ITEM FROM CART
  const takeQty = (triger) => {
    setTimeout(() => {
      const cartFilter = cart.find((x) => x.id === triger);
      const priceFilter = dataItem.find((x) => x.id === triger);

      if (cartFilter.qty !== undefined) {
        cartFilter.qty = cartFilter.qty - 1;
        cartFilter.price = (
          Number(cartFilter.qty) * Number(priceFilter.price)
        ).toFixed(2);
      }

      if (cartFilter.qty > 0) {
        const array = cart;
        const replace = [];
        replace.push(cartFilter);
        const newArray = array.map(
          (obj) => replace.find((o) => o.id === obj.id) || obj
        );
        setCart(newArray);
        setTimeout(() => {
          localStorage.setItem("cart", JSON.stringify(cart));
          setCheckOutListItem(cart);
          setForchReload(!forchReload);
        }, 500);
      } else {
        deleteItem(triger);
      }
    }, 1000);
  };

  // PAYMENT INFORMATION

  // get data from localstorage
  const [checkOutListItem, setCheckOutListItem] = useState([]);
  const [totalCartItem, setTotalCartItem] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(subtotal);
  const [shippingCost, setShippingCost] = useState(" ");

  useEffect(() => {
    if (retrievedObject !== null && checkOutListItem.length >= 0) {
      setCheckOutListItem(JSON.parse(retrievedObject));
      setCartLocalStore(JSON.parse(retrievedObject));
    }

    if (forchReload !== false) {
      setCheckOutListItem(JSON.parse(retrievedObject));
      setCartLocalStore(JSON.parse(retrievedObject));
      setTimeout(() => {
        setForchReload(false);
      }, 1000);
    }
  }, [forchReload, checkOutListItem.length]);

  // Proccess button
  const [proccessing, setProccessing] = useState(false);
  const [creditcardForm, setCreditcardForm] = useState(false);

  // ERROR UP MESSAGE
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    errorMessage !== null && setTimeout(() => setErrorMessage(null), 5000);
  }, [errorMessage]);

  // GET DATE AND YEAR
  const { year } = useTime();

  // GET COUNTRY / CITY LOCATION BY IP
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");

  let requestCountry = "http://ip-api.com/json";
  useEffect(() => {
    $.ajax({
      url: requestCountry,
      type: "GET",
      success: function (json) {
        setCountry(json.country);
      },
      error: function (err) {
        setCountryError(
          "Your internet is not stable, it has been an error for " + err
        );
        setCountry("International");
      },
    });
  }, []);

  // NABAR LINK ITEM
  // const [gender, setGender] = useState("");
  const [discount, setDiscount] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [collection, setCollection] = useState("");

  // ADMIN PAGE
  const [adminSubPage, setAdminSubPage] = useState("Admin");

  // ADMIN SEARCH PRODUCT PAGE
  const [searchProduct, setSearchProduct] = useState("");

  // ADMIN EDIT PRODUCT PAGE
  const [editById, setEditById] = useState("");

  // FORCE RELOAD
  useEffect(() => {
    if (forchReload === true) {
      if (isAvailable === true) {
        setIsAvailable(false);
      }

      setTimeout(() => {
        setForchReload(false);
      }, 1000);
      return;
    }
  }, [forchReload]);

  return (
    <DataContext.Provider
      value={{
        // STATE COLLECTION
        login,
        forchReload,
        setForchReload,
        navBarShow,
        setNavBarShow,
        adminPage,
        setAdminPage,
        checkOutItem,
        setCheckOutItem,

        // FETCH DATA PRODUCT
        data,
        dataError,
        isPending,
        dataItem,
        setDataItem,

        // PRODUCT DROPDOWN LIST
        openProductFilter,
        setOpenProductFilter,
        listInfo,
        setListInfo,

        // PRODUCT SEARCH BY NAME,COLOR,SIZE,GENDER,COLLECTION
        searchByName,
        setSearchByName,
        searchByColor,
        setSearchByColor,
        searchBySize,
        setSearchBySize,
        searchByGender,
        setSearchByGender,
        searchByCollection,
        setSearchByCollection,
        keyword,
        setKeyword,
        select,
        setSelect,

        // PRODUCT MAN PAGE
        productData,
        setProductData,
        newProductData,
        setNewProductData,
        newProductColection,
        setNewProductColection,

        // PRODUCT SEARCH FUNCTION
        productFilterHendeler,

        // CART LIST
        cart,
        setCart,
        newDataCart,
        setNewDataCart,
        newCartItem,
        setNewCartItem,
        removeCartIte,
        setRemoveCartIte,

        // CART DOUBLE LIST TRIGER
        cartDoubleList,
        setCartDoubleList,

        // REMOVE ITEM, ADD QTY, REMOVE QTY FROM CART
        deleteItem,
        addQty,
        takeQty,

        // ITEM SIZE BUTTON STYLR
        isAvailable,
        setIsAvailable,

        // PAYMENT INFORMATION
        checkOutListItem,
        setCheckOutListItem,
        totalCartItem,
        setTotalCartItem,
        subtotal,
        setSubtotal,
        total,
        setTotal,
        shippingCost,
        setShippingCost,

        // Proccess button
        proccessing,
        setProccessing,
        creditcardForm,
        setCreditcardForm,

        // POP UP MESSAGE
        errorMessage,
        setErrorMessage,

        // GET SPESIFIC DATE
        year,

        // GET COUNTRY / CITY LOCATION BY IP
        country,

        // NABAR LINK ITEM
        discount,
        setDiscount,
        color,
        setColor,
        size,
        setSize,
        collection,
        setCollection,

        // ADMIN PAGE
        adminSubPage,
        setAdminSubPage,

        // ADMIN SEARCH PRODUCT PAGE
        searchProduct,
        setSearchProduct,

        // ADMIN EDIT PRODUCT PAGE
        editById,
        setEditById,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
