import { useEffect, useState, useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import NavBarDropdown from "../NavBarDropdown/NavBarDropdown";
import NavBarDropdownList from "../../UI Components/NavBarDropdownList/NavBarDropdownList";
import useFetch from "../../CostomHook/useFetch";

const NavBarDropdownLink = () => {
    // Data Context Hooks
    const newData = useContext(DataContext);

    // FETCH DATA PRODUCT
    const { data, dataError, isPending } = useFetch("http://localhost:8000/item");
    dataError && newData.setErrorMessage(dataError)
    const [colorList, setColorList] = useState();
    const [sizeList, setSizeList] = useState();
    const [collectionList, setCollectionList] = useState();
    // console.log(sizeList)

    useEffect(() => {

        if (isPending === false) {
            // Get color list
            const arrayColor = [];
            if (newData.select === 'Gender') {
                let filterBycolectionColor =
                    newData.productData &&
                    newData.productData.filter((obj) =>
                        obj.gender.includes(newData.keyword)
                    );
                let filterByColor = Array.from(
                    new Set(filterBycolectionColor && filterBycolectionColor.map((el) => el.color))
                );
                Array.prototype.push.apply(arrayColor, filterByColor);
                setColorList(arrayColor);
            } else {
                let filterBycolectionColor =
                    newData.productData &&
                    newData.productData.filter((obj) =>
                        obj.collection.includes(newData.keyword)
                    );
                let filterByColor = Array.from(
                    new Set(filterBycolectionColor && filterBycolectionColor.map((el) => el.color))
                );
                Array.prototype.push.apply(arrayColor, filterByColor);
                setColorList(arrayColor);
            }
        }
    }, [isPending, newData.keyword]);


    useEffect(() => {

        if (isPending === false) {

            // Get size list
            const arraySize = [];
            if (newData.select === 'Gender') {

                    let filterBycolectionSize =
                        newData.productData &&
                        newData.productData.filter((obj) =>
                            obj.gender.includes(newData.keyword)
                        );
                    let filterBySize = Array.from(new Set(filterBycolectionSize && filterBycolectionSize.map((el) => el.size)));
                    const subarray = [
                        ...new Set(filterBySize.map((e) => JSON.stringify(e))),
                    ].map((e) => JSON.parse(e));
                    const subarrayFilter = subarray.map(({ teacher, ...object }) => ({
                        ...object,
                        ...teacher,
                    }));
                    const newSubarray = Array.from(new Set(subarrayFilter.map((el) => el)));
                    const Output = Object.entries(newSubarray).flatMap(
                        ([parameter, values]) =>
                            Object.entries(values).map(([machine, size]) => [size])
                    );
                    const filterOutput = Output.filter(
                        (v, i, a) =>
                            a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
                    );
                    Array.prototype.push.apply(arraySize, filterOutput.sort());
                    setSizeList(arraySize);

            } else {
                    
                    let filterBycolectionSize =
                        newData.productData &&
                        newData.productData.filter((obj) =>
                            obj.collection.includes(newData.keyword)
                        );
                    let filterBySize = Array.from(new Set(filterBycolectionSize && filterBycolectionSize.map((el) => el.size)));
                    const subarray = [
                        ...new Set(filterBySize.map((e) => JSON.stringify(e))),
                    ].map((e) => JSON.parse(e));
                    const subarrayFilter = subarray.map(({ teacher, ...object }) => ({
                        ...object,
                        ...teacher,
                    }));
                    const newSubarray = Array.from(new Set(subarrayFilter.map((el) => el)));
                    const Output = Object.entries(newSubarray).flatMap(
                        ([parameter, values]) =>
                            Object.entries(values).map(([machine, size]) => [size])
                    );
                    const filterOutput = Output.filter(
                        (v, i, a) =>
                            a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
                    );
                    Array.prototype.push.apply(arraySize, filterOutput.sort());
                    setSizeList(arraySize);

            }


        }
    }, [isPending, newData.keyword]);


    useEffect(() => {

        if (isPending === false) {

            // Get collection list
            const arrayCollection = [];
            let filterByCollection = Array.from(
                newData.searchByCollection ? new Set(data && data.map((el) => el.gender)) : new Set(data && data.map((el) => el.collection))
            );
            Array.prototype.push.apply(arrayCollection, filterByCollection);
            setCollectionList(arrayCollection);
        }
    }, [isPending, newData.keyword]);

    // console.log(newData.searchByGender)

    // console.log(newData.searchByGender !== null)

    return (
        <NavBarDropdown>

            {
                !newData.searchByGender ? (
                    <>
                        {
                            newData.searchByGender !== null && (
                                <>
                                    <NavBarDropdownList position={0} title="Color" list={colorList} />
                                    <NavBarDropdownList position={0} title="Size" list={sizeList} />
                                </>
                            )
                        }
                        {
                            newData.searchByGender === null && (
                                <>
                                    <NavBarDropdownList position={0} title="Gender" list={collectionList} />
                                </>
                            )
                        }
                    </>
                ) : (
                    <>
                        {
                            newData.searchByCollection !== null && (
                                <>
                                    <NavBarDropdownList position={0} title="Color" list={colorList} />
                                    <NavBarDropdownList position={0} title="Size" list={sizeList} />
                                </>
                            )
                        }
                        {
                            newData.searchByCollection === null && (
                                <>
                                    <NavBarDropdownList position={0} title="Collection" list={collectionList} />
                                </>
                            )
                        }
                    </>
                )
            }

        </NavBarDropdown >
    );
};

export default NavBarDropdownLink;
