import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import './OrderList.css'
import { BsTrash, BsCamera } from "react-icons/bs";
import { Desktop, Mobile, MobileLandscape, Tablet } from "../../UI Components/MediaQuery/MediaQuery";


const OrderList = (props) => {
    const dataItem = props.data

    // Data Context Hooks
    const newData = useContext(DataContext);

    useEffect(() => {
        if(dataItem.qty === 0){
            newData.setForchReload(!newData.forchReload)
        }
    }, [dataItem.qty]);

    return (
        <>
            <Desktop>
                <div className="OrderList">
                    <div style={{
                        backgroundImage: `url(${dataItem.image[0]})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }} className="OrderList-img">{!dataItem.image[0] && <BsCamera />}</div>
                    <div className="OrderList-info">
                        <div>
                            <h1>{dataItem.title}</h1>
                            <h2>{dataItem.gender} Originals</h2>
                            <div className="OrderList-totalItem">
                                <button onClick={() => newData.takeQty(dataItem.id)}>-</button>
                                <h3>{dataItem.qty} Item</h3>
                                <button onClick={() => newData.addQty(dataItem.id)}>+</button>
                            </div>
                        </div>
                        <div className="OrderList-info-btn">
                            <button onClick={() => newData.deleteItem(dataItem.id)}><BsTrash /></button>
                        </div>
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div className="OrderList-tablet">
                    <div style={{
                        backgroundImage: `url(${dataItem.image[0]})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }} className="OrderList-img-tablet">{!dataItem.image[0] && <BsCamera />}</div>
                    <div className="OrderList-info-tablet">
                        <div>
                            <h1>{dataItem.title}</h1>
                            <h2>{dataItem.gender} Originals</h2>
                            <div className="OrderList-totalItem-tablet">
                                <button onClick={() => newData.takeQty(dataItem.id)}>-</button>
                                <h3>{dataItem.qty} Item</h3>
                                <button onClick={() => newData.addQty(dataItem.id)}>+</button>
                            </div>
                        </div>
                        <div className="OrderList-info-btn">
                            <button onClick={() => newData.deleteItem(dataItem.id)}><BsTrash /></button>
                        </div>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div className="OrderList-mobile">
                    <div style={{
                        backgroundImage: `url(${dataItem.image[0]})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }} className="OrderList-img-mobile">{!dataItem.image[0] && <BsCamera />}</div>
                    <div className="OrderList-info-mobile">
                        <div>
                            <h1>{dataItem.title}</h1>
                            <h2>{dataItem.gender} Originals</h2>
                            <div className="OrderList-totalItem-mobile">
                                <button onClick={() => newData.takeQty(dataItem.id)}><span>-</span></button>
                                <h3>{dataItem.qty} Item</h3>
                                <button onClick={() => newData.addQty(dataItem.id)}><span>+</span></button>
                            </div>
                        </div>
                        <div className="OrderList-info-btn-mobile">
                            <button onClick={() => newData.deleteItem(dataItem.id)}><BsTrash /></button>
                        </div>
                    </div>
                </div>
            </Mobile>
            <MobileLandscape>
                <div className="OrderList-mobileLandscape">
                    <div style={{
                        backgroundImage: `url(${dataItem.image[0]})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }} className="OrderList-img-mobileLandscape">{!dataItem.image[0] && <BsCamera />}</div>
                    <div className="OrderList-info-mobileLandscape">
                        <div>
                            <h1>{dataItem.title}</h1>
                            <h2>{dataItem.gender} Originals</h2>
                            <div className="OrderList-totalItem-mobileLandscape">
                                <button onClick={() => newData.takeQty(dataItem.id)}>-</button>
                                <h3>{dataItem.qty} Item</h3>
                                <button onClick={() => newData.addQty(dataItem.id)}>+</button>
                            </div>
                        </div>
                        <div className="OrderList-info-btn-mobileLandscape">
                            <button onClick={() => newData.deleteItem(dataItem.id)}><BsTrash /></button>
                        </div>
                    </div>
                </div>
            </MobileLandscape>
        </>
    )
}

export default OrderList;