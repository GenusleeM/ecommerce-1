import './AdminAddProduct.css'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";
import useTime from '../../CostomHook/useTime';

const AdminAddProduct = () => {
    console.clear();
    const navigate = useNavigate();

    // GET DATE AND YEAR
    const { today, time } = useTime()


    const productId = uuid()
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [gender, setGender] = useState();
    const [color, setColor] = useState();
    const [motive, setMotive] = useState();
    const [collection, setCollection] = useState();

    const [size, setSize] = useState();
    const [newSize, setNewSize] = useState([]);
    const handleSize = (e, sz) => {
        e.preventDefault();
        setNewSize([...newSize, sz])
        setSize("")
    }

    const [productTitle, setProductTitle] = useState("");
    const [productSubtitle, setProductSubtitle] = useState("");
    const [detail, setDetail] = useState("");
    const [newDetail, setNewDetail] = useState([]);
    const handleDetail = (e, sz) => {
        e.preventDefault();
        setNewDetail([...newDetail, sz])
        setDetail("")
    }
    const resetHendeler = () => {
        setNewSize([])
    }
    const resetDetail = () => {
        setNewDetail([])
    }

    // const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
            // setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };


    const removePicture = () => {
        setImgData(null)
        setTimeout(setImgData(null), 5000);
    }

    const addProductHandeler = () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "id": productId,
            "name": name,
            "price": price,
            "size": newSize,
            "gender": gender.replace(/\s/g, ''),
            "color": color.replace(/\s/g, ''),
            "motive": motive,
            "collection": collection,
            "productTitle": productTitle,
            "productSubtitle": productSubtitle,
            "detail": newDetail,
            "image": [imgData],
            "create": `${today} (${time})`,
            "editor": "Admin",
        });
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://localhost:8000/item", requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));

        setTimeout(() => {
            setName('')
            setPrice('')
            setNewSize([])
            setGender('')
            setColor('')
            setMotive('')
            setCollection('')
            setNewSize('')
            setProductTitle('')
            setProductSubtitle('')
            setNewDetail([])
            setImgData(null)
        }, 1000);

        setTimeout(() => {
            navigate('/admin/product');
        }, 1000);

    };
    return (
        <div className='AdminAddProduct'>
            <div className='AdminAddProduct-addNewItem'>
                <div className='AdminAddProduct-addNewItem-header'>
                    <h1>Add New Product</h1>
                    <button onClick={addProductHandeler}>Add Item</button>
                </div>
                <div className='AdminAddProduct-addNewItem-form'>
                    <div className='AdminAddProduct-addNewItem-form-container'>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            value={name} />
                        <input
                            type="number"
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price"
                            value={price} />
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="Men">Men</option>
                            <option value="Woman">Woman</option>
                            <option value="Children">Children</option>
                            <option value="Versatile">Versatile</option>
                        </select>
                    </div>
                    <div className='AdminAddProduct-addNewItem-form-container'>
                        <input
                            type="text"
                            onChange={(e) => setColor(e.target.value)}
                            placeholder="Base Color"
                            value={color} />
                        <input
                            type="text"
                            onChange={(e) => setMotive(e.target.value)}
                            placeholder="Motive"
                            value={motive} />
                        <input
                            type="text"
                            onChange={(e) => setCollection(e.target.value)}
                            placeholder="Type of collection"
                            value={collection} />
                    </div>
                    <div className='AdminAddProduct-addNewItem-form-container'>
                        <div className='AdminAddProduct-addNewItem-form-size'>
                            <div className='AdminAddProduct-addNewItem-form-sizeForm'>
                                <input
                                    type="text"
                                    onChange={(event) => setSize(event.target.value)}
                                    placeholder="Size"
                                    value={size} />
                                <button onClick={(e) => handleSize(e, size)}>Add Number</button>
                                <button onClick={resetHendeler}>Reset</button>
                            </div>
                            <div className='AdminAddProduct-addNewItem-form-sizeList'>
                                <h1>Size List :</h1>
                                {newSize.length !== 0 && newSize.map((item, i) => (
                                    <h2 key={i}>* {item} |</h2>
                                ))}
                                {newSize.length === 0 && <h3>* Empty *</h3>}
                            </div>
                        </div>
                    </div>
                    <div className='AdminAddProduct-addNewItem-form-container'>
                        <textarea
                            type="text"
                            onChange={(e) => setProductTitle(e.target.value)}
                            placeholder="Product Title"
                            value={productTitle} />
                        <textarea
                            type="text"
                            onChange={(e) => setProductSubtitle(e.target.value)}
                            placeholder="Product Subtitle"
                            value={productSubtitle} />
                    </div>
                    <div className='AdminAddProduct-addNewItem-form-container'>
                        <div className='AdminAddProduct-addNewItem-form-size'>
                            <div className='AdminAddProduct-addNewItem-form-sizeForm'>
                                <input
                                    type="text"
                                    name="first_name"
                                    onChange={(event) => setDetail(event.target.value)}
                                    placeholder="Product Detail"
                                    value={detail} />
                                <button onClick={(e) => handleDetail(e, detail)}>Add Detail</button>
                                <button onClick={resetDetail}>Reset</button>
                            </div>
                            <div className='AdminAddProduct-addNewItem-form-detailList'>
                                <h1>Product Detail :</h1>
                                {newDetail.length !== 0 && newDetail.map((item, i) => (
                                    <h2 key={i}>{i + 1}. {item}</h2>
                                ))}
                                {newDetail.length === 0 && <h3>* Empty *</h3>}
                            </div>
                        </div>
                    </div>
                    <div className='AdminAddProduct-addNewItem-form-container'>
                        <div className='AdminAddProduct-addNewItem-form-image'>
                            <h1>Product Image :</h1>
                            {!imgData &&
                                <div className="AdminAddProduct-addNewItem-form-insertImage">
                                    <input id="productPic" type="file" onChange={onChangePicture} />
                                </div>
                            }
                            {imgData &&
                                <div className="AdminAddProduct-addNewItem-form-displayImage">
                                    <img src={imgData} alt="Product" />
                                    <span onClick={removePicture}>Remove</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminAddProduct