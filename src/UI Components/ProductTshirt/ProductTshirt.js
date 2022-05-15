import './ProductTshirt.css'
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../ProductCard/ProductCard";
import ProductNotFound from '../ProductNotFound/ProductNotFound';
import $ from 'jquery'


const ProductTshirt = () => {
    // Data Context Hooks
    const newData = useContext(DataContext);

    useEffect(() => {
        // RESET FILTER FROM PROFIDER
        newData.setSearchByGender(null)
    }, []);



    // FILTER KEY WORD
    const keyword = 'T-Shirt'


    // GET DATA STATE
    const selectedInfo = newData.productData && newData.productData.filter((obj) => obj.gender.includes(keyword))

    useEffect(() => {
        $("html,body").animate({ scrollTop: 0 }, "slow")
        newData.setKeyword(keyword)
        newData.setSearchByCollection(keyword)

        setTimeout(() => {
            if (newData.isPending === false) {
                // Get Main Data
                if (newData.newProductData && newData.newProductData === null) {
                    const arrayData = [];
                    let filterBy = newData.data && newData.data.filter((obj) => obj.collection.includes(keyword));
                    let shuffle = filterBy && filterBy.sort(() => Math.random() - 0.5)
                    Array.prototype.push.apply(arrayData, shuffle);
                    newData.setNewProductData(arrayData);
                    newData.setProductData(arrayData);

                    console.log(arrayData)
                }
                if (selectedInfo === null || selectedInfo.length === 0) {
                    const arrayData = [];
                    let filterBy = newData.data && newData.data.filter((obj) => obj.collection.includes(keyword));
                    let shuffle = filterBy && filterBy.sort(() => Math.random() - 0.5)
                    Array.prototype.push.apply(arrayData, shuffle);
                    newData.setNewProductData(arrayData);
                    newData.setProductData(arrayData);
                }

                // Filter by name
                if (newData.searchByName) {
                    if (newData.newProductColection && newData.newProductColection !== null) {
                        const arrayData = [];
                        let filterBy =
                            newData.newProductColection &&
                            newData.newProductColection.filter((obj) =>
                                obj.name.toLowerCase().startsWith(newData.searchByName.toLowerCase())
                            );
                        let shuffle = filterBy && filterBy.sort(() => Math.random() - 0.5)
                        Array.prototype.push.apply(arrayData, shuffle);

                        // console.log(arrayData)
                        newData.setProductData([]);
                        setTimeout(() => {
                            newData.setProductData(arrayData);
                        }, 500);
                    } else {
                        const arrayData = [];
                        let filterBy =
                            newData.newProductData &&
                            newData.newProductData.filter((obj) =>
                                obj.name.toLowerCase().startsWith(newData.searchByName.toLowerCase())
                            );
                        let shuffle = filterBy && filterBy.sort(() => Math.random() - 0.5)
                        Array.prototype.push.apply(arrayData, shuffle);

                        // console.log(arrayData)
                        setTimeout(() => {
                            newData.setProductData(arrayData);
                        }, 500);
                    }
                }


                // Filter by color
                if (newData.searchByColor) {

                    if (newData.newProductColection && newData.newProductColection !== null) {
                        const arrayData = [];
                        let filterBy =
                            newData.newProductColection &&
                            newData.newProductColection.filter((obj) =>
                                obj.color.includes(newData.searchByColor)
                            );
                        let shuffle = filterBy && filterBy.sort(() => Math.random() - 0.5)
                        Array.prototype.push.apply(arrayData, shuffle);

                        // console.log(arrayData)
                        newData.setProductData([]);
                        setTimeout(() => {
                            newData.setProductData(arrayData);
                        }, 500);
                    } else {
                        const arrayData = [];
                        let filterBy =
                            newData.newProductData &&
                            newData.newProductData.filter((obj) =>
                                obj.color.includes(newData.searchByColor)
                            );
                        let shuffle = filterBy && filterBy.sort(() => Math.random() - 0.5)
                        Array.prototype.push.apply(arrayData, shuffle);

                        // console.log(arrayData)
                        setTimeout(() => {
                            newData.setProductData(arrayData);
                        }, 500);
                    }
                }


                // Filter by size
                if (newData.searchBySize) {

                    if (newData.newProductColection && newData.newProductColection !== null) {
                        const arrayData = [];
                        let filterBy =
                            newData.newProductColection &&
                            newData.newProductColection.filter((obj) =>
                                obj.size.includes(newData.searchBySize)
                            );
                        let shuffle = filterBy && filterBy.sort(() => Math.random() - 0.5)
                        Array.prototype.push.apply(arrayData, shuffle);

                        // console.log(arrayData)
                        setTimeout(() => {
                            newData.setProductData(arrayData);
                        }, 500);
                    } else {
                        const arrayData = [];
                        let filterBy =
                            newData.newProductData &&
                            newData.newProductData.filter((obj) =>
                                obj.size.includes(newData.searchBySize)
                            );
                        let shuffle = filterBy && filterBy.sort(() => Math.random() - 0.5)
                        Array.prototype.push.apply(arrayData, shuffle);

                        // console.log(arrayData)
                        setTimeout(() => {
                            newData.setProductData(arrayData);
                        }, 500);
                    }
                }


                // Filter by gender
                if (newData.searchByGender) {
                    const arrayData = [];
                    let filterBy =
                        newData.newProductData &&
                        newData.newProductData.filter((obj) =>
                            obj.gender.includes(newData.searchByGender)
                        );
                    let shuffle = filterBy && filterBy.sort(() => Math.random() - 0.5)
                    Array.prototype.push.apply(arrayData, shuffle);

                    // console.log(arrayData)
                    setTimeout(() => {
                        newData.setProductData(arrayData);
                        newData.setNewProductColection(arrayData);
                    }, 500);

                }
            }
        }, 500);
        newData.dataError && newData.setErrorMessage(newData.dataError);
    }, [
        newData.isPending,
        newData.dataError,
        // newData.newProductData,
        newData.searchByColor,
        newData.searchBySize,
        newData.searchByCollection,
        newData.searchByCollection,
        newData.searchByName
    ]);

    // INFINATE SCROLL
    const [totalImage, setTotalImage] = useState();
    const [isLimit, setIsLimit] = useState(12);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setTotalImage(newData.productData && newData.productData.length);
    }, [newData.productData]);

    const fetchMoreData = () => {
        if (isLimit >= totalImage) {
            setHasMore({ hasMore: false });
            // alert("hash more");
            return;
        }

        // api call like which sends 12 more records in .5 secs
        setTimeout(() => {
            setIsLimit(isLimit + 12);
        }, 500);
    };
    return (
        <>
            {newData.productData && (
                <InfiniteScroll
                    dataLength={isLimit}
                    next={fetchMoreData}
                    hasMore={hasMore}
                >
                    {newData.productData.length >= 1 ? newData.productData.slice(0, isLimit).map((index, i) => (
                        <ProductCard
                            key={i}
                            id={index.id}
                            image={index.image}
                            prodTitle={index.name}
                            gender={index.gender}
                            color={index.color}
                            price={index.price}
                            info="50% Disc"
                        />
                    )) : <ProductNotFound />}
                </InfiniteScroll>
            )}
        </>
    )
}

export default ProductTshirt;
