import { useEffect, useState } from "react";
const useTime = () => {
    const [today, setToday] = useState()
    const [time, setTime] = useState()
    const [year, setYear] = useState()

    // GET DATE AND YEAR
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    useEffect(() => {
        const date = new Date();
        const newYear = date.getFullYear();
        const dd = String(date.getDate()).padStart(2, "0")
        const mm = String(date.getMonth() + 1);
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        const newDate = dd + " " + months[mm] + " " + newYear;
        const newtime = h + ":" + m + ":" + s;
        setToday(newDate)
        setTime(newtime)
        setYear(newYear)
        
    }, []);

    return { today, time, year }
}

export default useTime;
