import "./CheckOutList.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { BsTrash, BsCamera } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MobileLandscape } from "../MediaQuery/MediaQuery";

const CheckOutListMobileLandscape = (props) => {
  const dataItem = props.data;

  // Data Context
  const newData = useContext(DataContext);

  // Detail Product
  const navigate = useNavigate();
  const detailHendeler = (id) => {
    navigate(`/detail/${id}`);
    newData.setForchReload(!newData.forchReload);
  };

  // Refresh / makesure data qty is >= 1 otherwise delete
  useEffect(() => {
    if (dataItem.qty === 0) {
      newData.setForchReload(!newData.forchReload);
    }
  }, [dataItem.qty]);

  // Update Cart Data, Size included
  const [size, setSize] = useState("");
  const sizeHendeler = (e) => {
    setSize(e.target.value);
    dataItem["size"] = e.target.value;
    localStorage.setItem("cart", JSON.stringify(newData.cart));
  };

  useEffect(() => {
    if (dataItem.size !== undefined) {
      setSize(dataItem.size);
    }
  }, []);

  // Get Size List from the product
  const [sizeList, setSizeList] = useState();
  useEffect(() => {
    if (newData.isPending === false) {
      let filterBy =
        newData.data &&
        newData.data.filter((obj) => obj.id.includes(dataItem.id));
      setSizeList(filterBy[0].size);
    }
  }, [newData.isPending]);

  return (
    <MobileLandscape>
      <div className="CheckOutList-Tablet">
        <div
          style={{
            backgroundImage: `url(${dataItem.image[0]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="CheckOutList-img-Tablet"
          onClick={() => detailHendeler(dataItem.id)}
        >
          {!dataItem.image[0] && <BsCamera />}
        </div>
        <div className="CheckOutList-info-Tablet">
          <div className="CheckOutList-info-detail-Tablet">
            <div className="CheckOutList-info-DetailInfo-Tablet">
              <h1>{dataItem.title}</h1>
              <h2>{dataItem.gender} Originals</h2>
              <div className="CheckOutList-info-detail-size-Tablet ">
                <p>Color: {dataItem.color}</p>
                <label
                  className={
                    size === "" || size === undefined ? "size-empty" : ""
                  }
                >
                  <select value={size} onChange={(e) => sizeHendeler(e)}>
                    <option value="">Size</option>
                    {sizeList !== undefined &&
                      sizeList.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="CheckOutList-totalItem-Tablet">
              <button onClick={() => newData.takeQty(dataItem.id)}>-</button>
              <h3>{dataItem.qty} Item</h3>
              <button onClick={() => newData.addQty(dataItem.id)}>+</button>
            </div>
          </div>
          <div className="CheckOutList-info-btn-Tablet">
            <h3>$ {dataItem.price}</h3>
            <button onClick={() => newData.deleteItem(dataItem.id)}>
              <BsTrash /> <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </MobileLandscape>
  );
};

export default CheckOutListMobileLandscape;
