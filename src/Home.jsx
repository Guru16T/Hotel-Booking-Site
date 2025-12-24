import Caurosal from "./Component/Caurosal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingNavbar from "./Component/BookingNav";
import Navbar from "./Component/Navbar";

function Home() {

    const navigate = useNavigate()

    const rooms = () => {
        navigate("/room")
    }

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const [count, setCount] = useState(2);
    const [open, setOpen] = useState(false)

    const addMonths = (date, count) => {
        return new Date(date.getFullYear(), date.getMonth() + count, 1);
    };

    const isSameDay = (a, b) => {
        if (!a || !b) return false;
        return (
            a.getDate() === b.getDate() &&
            a.getMonth() === b.getMonth() &&
            a.getFullYear() === b.getFullYear()
        );
    };

    const isBefore = (a, b) => a && b && a.getTime() < b.getTime();
    const isAfter = (a, b) => a && b && a.getTime() > b.getTime();

    const isInRange = (day, start, end) => {
        if (!start || !end) return false;
        const t = day.getTime();
        return t > start.getTime() && t < end.getTime();
    };

    const formatDisplayDate = (date) => {
        if (!date) return "--";
        return {
            day: date.getDate() + ".",
            monthYear: `${monthNames[date.getMonth()]} ${date.getFullYear()}`
        };
    };

    const [checkIn, setCheckIn] = useState(new Date(2025, 11, 5));
    const [checkOut, setCheckOut] = useState(new Date(2025, 11, 6));
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 11, 1));
    const [showCalendar, setShowCalendar] = useState(false);
    const [activeField, setActiveField] = useState("checkin");

    const nextMonth = addMonths(currentMonth, 1);

    const handleFieldClick = (field) => {
        setActiveField(field);
        setShowCalendar(prev => !prev || activeField !== field);
    };

    const handleDayClick = (day) => {
        if (!checkIn || (checkIn && checkOut)) {
            setCheckIn(day);
            setCheckOut(null);
        } else if (checkIn && !checkOut) {
            if (isBefore(day, checkIn)) {
                setCheckOut(checkIn);
                setCheckIn(day);
            } else {
                setCheckOut(day);
            }
        }
    };

    const renderMonth = (monthDate, showPrev, showNext) => {
        const year = monthDate.getFullYear();
        const month = monthDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const startingDay = firstDay.getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const cells = [];

        for (let i = 0; i < startingDay; i++) {
            cells.push(<div key={`e-${i}`} className="day-cell empty" />);
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const thisDate = new Date(year, month, d);

            const isStart = isSameDay(thisDate, checkIn);
            const isEnd = isSameDay(thisDate, checkOut);
            const inRange = isInRange(thisDate, checkIn, checkOut);

            let classes = "day-button";
            if (inRange) classes += " in-range";
            if (isStart) classes += " selected-start";
            if (isEnd) classes += " selected-end";

            cells.push(
                <button
                    key={d}
                    type="button"
                    className={classes}
                    onClick={() => handleDayClick(thisDate)}
                >
                    {d}
                </button>
            );
        }

        return (
            <div className="month-block" key={month}>
                {/* HEADER */}
                <div className="month-header">
                    {showPrev ? (
                        <button
                            type="button"
                            className="nav-arrow"
                            onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
                        >
                            ‹
                        </button>
                    ) : (
                        <span className="nav-arrow-placeholder" />
                    )}

                    <span className="month-title">
                        {monthNames[month]} {year}
                    </span>

                    {showNext ? (
                        <button
                            type="button"
                            className="nav-arrow"
                            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                        >
                            ›
                        </button>
                    ) : (
                        <span className="nav-arrow-placeholder" />
                    )}
                </div>

                <div className="day-names-row">
                    {dayNames.map((name) => (
                        <div key={name} className="day-name">
                            {name}
                        </div>
                    ))}
                </div>

                <div className="days-grid">{cells}</div>
            </div>
        );
    };

    const checkInDisplay = formatDisplayDate(checkIn);
    const checkOutDisplay = formatDisplayDate(checkOut);

    // const [showBookingNav, setShowBookingNav] = useState(false);

    return (
        <>
            <div className="bg-color">
                <div className="py-3">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="flex-shrink-0">
                                <svg
                                    className="logo fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 64 90"
                                    role="img"
                                    aria-label="Erzscheidergården logo"
                                >
                                    <path d="M57.52 39.59 23.1 74.09l-11.35-2.81-2.81-11.35 14.94-14.94L8.94 30.05l2.81-11.37 11.35-2.81 8.37 8.37-5.14 5.14 6.59 6.59 10.46-10.48-16.2-16.2A4.445 4.445 0 0 0 23 8.13L8.56 11.72c-1.89.46-3.33 1.93-3.8 3.8L1.29 29.54c-.44 1.75.08 3.63 1.37 4.9L13.22 45 2.66 55.56a5.18 5.18 0 0 0-1.37 4.92L4.76 74.5c.46 1.89 1.93 3.33 3.8 3.8L23 81.89a4.416 4.416 0 0 0 4.15-1.17l35.7-35.7-5.38-5.38.04-.04Z"></path>
                                </svg>
                            </div>

                            <div className="text-center flex-grow-1 px-3">
                                <svg
                                    className="fill-current web"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 237 40"
                                    aria-hidden="true"
                                >
                                    <path d="M206 29.5c.4-.1.7-.3.9-.5l.5-1 .2-2.2V16c0-.9-.2-1.5-.5-1.9-.3-.4-.6-.6-1.1-.6a19.3 19.3 0 0 0 4.4-1.6h.3l.1 2.6c.6-.8 1.1-1.4 1.8-1.9.6-.5 1.3-.7 2.1-.8 1 0 1.7.2 2.3.8.7.5 1 1.4 1 2.6v10.5c0 1.2.1 2 .4 2.6.2.6.7 1 1.2 1v.1h-1a52.8 52.8 0 0 0-4.5 0h-1c.3-.1.6-.2.9-.5l.5-1 .1-2.3v-9.9c0-.7-.1-1.4-.4-1.8-.3-.5-.6-.8-1.1-.8-.5 0-.8.2-1.1.4-.4.2-.7.6-1 1v11.2l.1 2.1c.2.6.3 1 .5 1.2l1 .4h-1.4a41 41 0 0 0-4.1 0H206ZM200.5 29.8c-1 0-1.9-.3-2.6-.8a5.1 5.1 0 0 1-1.8-2.3c-.4-1.1-.6-2.5-.6-4.1 0-1.7.2-3.6.7-5.2a10 10 0 0 1 2.3-4c1-1 2.2-1.5 3.5-1.5 1.3 0 1.4.3 1.9 1 .5.6.7 1.4.7 2.4s-.1 1.4-.3 2c-.3.7-.5 1.3-1 1.8l-.7 1a2 2 0 0 1-.8.4l-1.2.1h-1.4l-.5.1v.5c0 1.3.2 2.6.5 3.7.3 1 .6 2 1 2.6.5.7 1 1 1.7 1 .6 0 1.2-.3 1.8-.8.5-.5.9-1.4 1.1-2.5h.1c-.2 1.1-.5 2-1 2.7-.3.6-.8 1.1-1.4 1.4-.6.3-1.3.5-2 .5Zm-.7-9.4 1.6-.1c.3-.1.5-.3.6-.6l.2-1.2-.2-2.7c-.1-1-.3-1.8-.6-2.4-.3-.7-.6-1-1-1-.3 0-.8.5-1 1.3l-.7 3.2a27.8 27.8 0 0 0 0 3.6h1.1ZM192.4 25.4c0 1.3.1 2.3.4 3 .2.6.6 1 1.2 1v.1h-4.6l-.2-2.4-.5.7c-.3.6-.7 1-1.2 1.4-.4.4-1 .5-1.7.5-1.3 0-2.4-.6-3.2-1.8a11 11 0 0 1-1.3-5.8c0-2.6.2-3.6.7-5.1a9 9 0 0 1 1.8-3.7c.8-.9 1.8-1.4 2.9-1.4 1 0 .7.1 1.2.2.4 0 .8.2 1.2.4v-4c0-1-.1-1.7-.3-2.2 0-.5-.3-.8-.6-1-.2-.2-.6-.3-1-.2l.7-.2a69.9 69.9 0 0 0 4.3-.9l.2.1v21.3Zm-3.8 2.4c.2-.2.3-.5.3-1l.1-1.9v-8.7c-.1-.8-.4-1.5-.8-2-.3-.7-.7-1.2-1-1.5a2 2 0 0 0-1.2-.4c-.4 0-.8.2-1 .7-.4.4-.6 1-.7 1.8-.2.7-.2 1.6-.2 2.5 0 2 .1 4 .5 5.6.3 1.6.7 3 1.3 3.9.5 1 1.2 1.4 1.9 1.4.6 0 .6-.1.8-.4ZM171 29.5c.7-.2 1-.5 1.3-1 .3-.6.4-1.5.4-2.7l-.1-9.9c0-.9-.2-1.5-.4-1.9-.3-.4-.7-.5-1.2-.4v-.1a73.5 73.5 0 0 0 4.5-1.6h.2l.1 8 .5-4c.3-1.3.7-2.3 1.1-3 .5-.9 1-1.3 1.7-1.3.6 0 1 .2 1.3.6.3.3.4.8.4 1.4 0 .7-.2 1.3-.5 2a6 6 0 0 1-1 1.7c0-.3 0-.6-.3-.8a.9.9 0 0 0-.7-.4c-.3 0-.7.2-1.1.5-.4.4-.7 1-1 1.6a7 7 0 0 0-.3 2.6v5a6 6 0 0 0 .6 2.7c.3.5.8.9 1.6 1h-1.4a86.7 86.7 0 0 0-4.6 0h-1Zm4.7-10.3.3.2-.2.6-.3.3.2-1.1ZM161.5 29.8c-.7 0-1.3-.3-1.8-.8-.4-.6-.7-1.3-.7-2 0-1.6.5-2.9 1.5-4 1-1 2.5-2.1 4.5-3.1v-2c0-1.5-.2-2.7-.4-3.8-.3-1-.7-1.5-1.2-1.5s-.8.3-1 .9c-.4.5-.5 1.3-.5 2.2 0 1 .1 1.4.3 2 .2.4.5.6 1 .5-.6.6-1.2.9-1.8.9a2 2 0 0 1-1.5-.6 2 2 0 0 1-.6-1.5c0-.6.3-1.7 1-2.4.5-.8 1.3-1.4 2.3-1.8 1-.5 1.9-.8 2.8-.8 1 0 1.5.3 2 .9.7.6 1 1.5 1 2.7v11c0 .6 0 1 .2 1.4.2.4.4.6.8.6.3 0 .5-.2.7-.5.2-.3.3-.8.4-1.3h.1c-.1 1-.5 1.8-1 2.3a3 3 0 0 1-2 .7c-.8 0-1.4-.2-1.8-.5-.4-.3-.7-.8-.8-1.5a5 5 0 0 1-1.5 1.5c-.6.3-1.3.5-2 .5Zm2.1-1.2.7-.2.7-.7V20.1c-1 .5-1.8 1.3-2.2 2.3-.4 1-.6 2.2-.6 3.5 0 1.3.1 1.5.4 2 .3.4.6.7 1 .7Zm.1-17.7c-.6 0-1.1-.2-1.5-.5a2 2 0 0 1-.6-1.5c0-.6.2-1.2.5-1.6.4-.3 1-.5 1.6-.5.7 0 1.2.2 1.6.5.3.4.5.9.5 1.5a2 2 0 0 1-.6 1.6 2 2 0 0 1-1.5.5Zm0 0c.4 0 .6-.3.8-.6.3-.4.4-.8.4-1.3s-.1-1.2-.3-1.5c-.2-.4-.5-.6-.9-.6a1 1 0 0 0-.9.5c-.2.3-.2.8-.2 1.3 0 .6 0 1.1.3 1.5.2.4.5.6.9.6ZM152 35.7c-.8.3-1.6.4-2.4.3-.7-.1-1.3-.3-1.8-.6-.5-.2-.9-.4-1-.7a2 2 0 0 1-.7-1.4c0-.5.2-.9.6-1.2.4-.2.8-.3 1.3-.2.4 0 .7.2 1 .4l.5.8.6 1 .7 1.3c.3.2.6.3 1 .2.4-.1.7-.4.9-.8a42.5 42.5 0 0 0 .4-4.5v-3.4l-.6 1-.2.3-1 1.1c-.5.3-.9.4-1.3.4-1.6 0-2.8-.6-3.8-1.8-.9-1.2-1.4-3-1.4-5.6 0-2.6.3-3.3.7-5a10 10 0 0 1 2-3.8c1-1 2-1.6 3.3-1.6 1.2 0 1.3.1 2 .3a3 3 0 0 1 1.4 1l1.9-1.3h.2v17.2c0 1.5-.2 2.7-.5 3.6-.3.8-.7 1.5-1.3 2-.6.3-1.4.7-2.4 1Zm-.7-7.3c.2 0 .4 0 .6-.2l.5-.7c.2-.2.3-.5.3-1l.1-2V16c-.2-1-.5-1.7-.8-2.2-.3-.6-.6-1-1-1.1l-1.2-.3-.7.1c-.2 0-.4.2-.6.4-.4.4-.7 1.2-1 2.3a22.3 22.3 0 0 0 .3 8.4 10 10 0 0 0 1.4 3.4c.6.9 1.3 1.3 2 1.3h.1ZM133.3 29.5c.6-.2 1-.5 1.3-1 .2-.6.3-1.5.3-2.7V16c0-.9-.2-1.5-.5-1.9-.2-.4-.6-.5-1.2-.4v-.1a72.8 72.8 0 0 0 4.5-1.6h.3v8l.6-4c.3-1.3.6-2.3 1-3 .6-.9 1.1-1.3 1.8-1.3.5 0 1 .2 1.2.6.3.3.5.8.5 1.4 0 .7-.2 1.3-.5 2a6 6 0 0 1-1 1.7c0-.3-.1-.6-.3-.8a.9.9 0 0 0-.8-.4c-.3 0-.7.2-1 .5-.4.4-.7 1-1 1.6a7 7 0 0 0-.3 2.6v5a6 6 0 0 0 .5 2.7c.4.5 1 .9 1.7 1H139a86.5 86.5 0 0 0-4.6 0h-1.1Zm4.6-10.3.3.2-.2.6-.3.3.2-1.1ZM127.8 29.8c-1 0-1.9-.3-2.6-.8a5.1 5.1 0 0 1-1.8-2.3c-.4-1.1-.6-2.5-.6-4.1 0-1.7.2-3.6.8-5.2a10 10 0 0 1 2.2-4c1-1 2.2-1.5 3.5-1.5 1.3 0 1.4.3 1.9 1 .5.6.7 1.4.7 2.4s-.1 1.4-.3 2c-.2.7-.5 1.3-1 1.8-.2.4-.4.8-.7 1a2 2 0 0 1-.8.4l-1.2.1h-1.4l-.5.1v.5c0 1.3.2 2.6.5 3.7.3 1 .6 2 1 2.6.6.7 1 1 1.7 1 .6 0 1.2-.3 1.8-.8.5-.5.9-1.4 1.1-2.5h.1c-.2 1.1-.5 2-1 2.7-.3.6-.8 1.1-1.4 1.4-.6.3-1.3.5-2 .5Zm-.7-9.4 1.6-.1c.3-.1.5-.3.6-.6l.2-1.2-.2-2.7c-.1-1-.3-1.8-.6-2.4-.3-.7-.6-1-1-1-.3 0-.8.5-1 1.3L126 17a27.5 27.5 0 0 0 .1 3.6h1ZM119.7 25.4a9 9 0 0 0 .4 3c.2.6.6 1 1.2 1v.1h-4.6l-.2-2.4-.5.7c-.3.6-.8 1-1.2 1.4-.4.4-1 .5-1.7.5-1.4 0-2.4-.6-3.3-1.8a11 11 0 0 1-1.2-5.8c0-2.6.2-3.6.6-5.1a9 9 0 0 1 2-3.7c.7-.9 1.7-1.4 2.8-1.4 1 0 .7.1 1.1.2.5 0 .8.2 1.2.4v-4c0-1 0-1.7-.2-2.2-.1-.5-.3-.8-.6-1-.3-.2-.6-.3-1-.2l.7-.2a70.3 70.3 0 0 0 4.2-.9l.3.1v21.3Zm-3.8 2.4c.2-.2.3-.5.3-1l.1-1.9v-8.7c-.1-.8-.4-1.5-.7-2-.4-.7-.8-1.2-1.2-1.5a2 2 0 0 0-1.1-.4c-.4 0-.8.2-1 .7-.4.4-.6 1-.7 1.8-.2.7-.2 1.6-.2 2.5 0 2 .1 4 .5 5.6.3 1.6.7 3 1.3 3.9.5 1 1.2 1.4 1.9 1.4s.6-.1.8-.4ZM102 16c0-.9-.1-1.4-.4-1.8-.3-.3-.7-.4-1.3-.3v-.1l1-.3c1.7-.5 3-.9 3.7-1.3l.4.1v13.9H102V16Zm1.6-5.2c-.8 0-1.3-.2-1.7-.6-.4-.4-.6-1-.6-1.7s.2-1.2.6-1.6c.4-.4 1-.6 1.7-.6s1.3.2 1.6.6c.4.4.6 1 .6 1.6 0 .8-.2 1.3-.6 1.7-.4.5-1 .6-1.6.6Zm1.3 18.8c-.9 0-1.6-.2-2.1-.7-.5-.5-.8-1.2-.8-2v-1h3.4v1.7c0 .6 0 1 .2 1.2l.4.2c.2 0 .3-.1.5-.4.3-.3.4-.8.6-1.5l.4-2.6-.1 2.5a4 4 0 0 1-.7 1.8c-.4.6-1 .8-1.8.8ZM95 29.8c-1.6 0-2.8-.6-3.7-1.8-.9-1.2-1.3-3-1.3-5.4a13.5 13.5 0 0 1 3-9.2c1-1 2.2-1.6 3.5-1.6 1.3 0 1.5.4 2 1s.8 1.4.8 2.4a6 6 0 0 1-2 4.4c-.6.6-1.3.8-2.1.8s-.8 0-1.1-.2a3 3 0 0 1-1-.5c0 1.4.2 2.8.4 4.2.3 1.3.7 2.4 1.2 3.3.5.9 1 1.3 1.7 1.3s1.4-.3 1.8-.9c.5-.6 1-1.4 1.1-2.4h.1c-.2 1-.5 1.8-.8 2.5-.4.6-.8 1.1-1.4 1.5a4 4 0 0 1-2.2.6Zm-.2-9.6c.7 0 1.2-.4 1.5-1a8 8 0 0 0 .5-3.2c0-1.5 0-1.2-.2-1.8-.1-.5-.3-1-.6-1.3-.2-.4-.5-.6-.8-.6-.5 0-1 .4-1.2 1.1-.3.7-.5 1.6-.7 2.6l-.2 3.6c.5.4 1.1.6 1.7.6ZM75.1 29.5c.7-.1 1.1-.5 1.3-1.1.3-.6.4-1.5.4-2.6V8.7c0-1.2-.2-2-.6-2.5-.3-.4-.7-.5-1.3-.4v-.1A33.2 33.2 0 0 0 79.7 4h.4v10.4c.6-.9 1.2-1.5 1.9-1.9.6-.4 1.3-.6 2-.7 1 0 1.7.3 2.3.9.6.6.9 1.4.9 2.6v10.4c0 1.2.2 2.1.4 2.6.3.6.7 1 1.2 1.1h-6.5c.4 0 .7-.2.9-.4.2-.3.4-.6.5-1.1l.2-2.2v-9.6c0-.8-.2-1.5-.6-2-.3-.6-.8-.8-1.3-.8-.6 0-1.2.5-1.9 1.3l.1 11.1c0 1 0 1.7.2 2.2.1.5.3.9.5 1.1.2.2.5.4.9.4v.1h-1.6l-2.2-.1h-1.6l-1.2.1v-.1ZM69.6 29.7a4 4 0 0 1-3.6-1.9 9.8 9.8 0 0 1-1.2-5.4c0-2.3.2-3.7.7-5.3a9 9 0 0 1 2.1-3.8c1-.9 2-1.4 3.3-1.4 1.2 0 1.2.1 1.7.3.5 0 1 .3 1.4.7-.5 1.3-.6 3.3-.5 6l-.8-2c-.6-1.5-1.1-2.6-1.6-3.3-.5-.7-1-1.1-1.6-1.1-.6 0-1 .3-1.3 1-.3.6-.6 1.4-.7 2.3l-.2 2.5c0 1.8.3 3.5.7 5 .3 1.6.8 2.8 1.5 3.8.6.9 1.3 1.3 2.1 1.3s1.1-.3 1.6-.8a5 5 0 0 0 1.1-2.3l.1.1c-.2 1-.5 1.7-1 2.4a4 4 0 0 1-1.5 1.4c-.6.4-1.4.6-2.3.6ZM58.1 29.7c-.6 0-1.3 0-2-.2a5 5 0 0 1-1.8-.7 33 33 0 0 0 .7-6 10.7 10.7 0 0 0 2 5.7c.7.7 1.3 1 2 1 .6 0 .8 0 1-.3.3-.3.5-.7.5-1.1a6 6 0 0 0-.3-2 15.5 15.5 0 0 0-2.6-4.1c-.7-.7-1.3-1.3-1.6-2l-1-1.7-.2-1.9c0-1.4.3-2.4 1-3.2.6-.7 1.6-1.1 2.7-1.1 1.2 0 1 0 1.6.2l1 .2c.3 0 .6-.1.7-.3.2-.1.2-.4.2-.6h.1v.6a83.2 83.2 0 0 0 .4 5.9h-.1a22.3 22.3 0 0 0-2.4-4.8c-.5-.8-1-1.1-1.5-1.1s-.8 0-1 .4c-.2.2-.3.6-.3 1.1l.3 1.8c.2.6.5 1.2 1 1.8.3.7.9 1.4 1.5 2l1.7 2a6.2 6.2 0 0 1 1.2 3.8c0 .8-.2 1.6-.5 2.3-.4.7-1 1.3-1.6 1.7-.8.4-1.6.6-2.7.6ZM44.1 29.4v-.1l4.4-16.8H48c-.5 0-1 .2-1.5.6-.4.5-1 1.1-1.4 2l-1.2 3 .2-3c.1-1.6.2-2.6.1-3l1.3.2h6.6l-4.4 17h.8c.5 0 1.1-.3 1.7-1l1.5-2.5 1-2.7-.2 3.2-.3 3.2h-8.1ZM32.2 29.5c.6-.2 1-.5 1.3-1 .2-.6.3-1.5.3-2.7V16c0-.9-.2-1.5-.5-1.9-.2-.4-.6-.5-1.2-.4v-.1a73.2 73.2 0 0 0 4.5-1.6h.3v8l.6-4c.3-1.3.6-2.3 1.1-3 .5-.9 1-1.3 1.7-1.3.5 0 1 .2 1.2.6.3.3.5.8.5 1.4 0 .7-.2 1.3-.5 2a6 6 0 0 1-1 1.7c0-.3 0-.6-.3-.8a.9.9 0 0 0-.7-.4c-.4 0-.8.2-1.1.5-.4.4-.7 1-1 1.6a7 7 0 0 0-.3 2.6v5a6 6 0 0 0 .5 2.7c.4.5 1 .9 1.7 1h-1.4a86.6 86.6 0 0 0-4.6 0h-1.1Zm4.6-10.3.3.2-.2.6-.3.3.2-1.1ZM26.7 19.4c-.4-.8-1-1.5-1.7-2-.7-.6-1.5-1-2.4-1h-2.8v-.1h2.8c.6 0 1-.1 1.5-.4.5-.3.9-.6 1.1-1 .3-.5.5-1 .5-1.5a25.9 25.9 0 0 1 .4 2.8l.3 1.8.4 1.4ZM25 29.8c-2.6 0-4.6-1-5.9-2.7-1.3-1.9-2-4.3-2-7.3-.1-2.1.1-4.2.7-6.2s1.4-3.7 2.7-5a6 6 0 0 1 4.5-2c1.8 0 1.3 0 2.4.3l1.2.3c.4 0 .6 0 .9-.2.2 0 .4-.3.5-.7a51.8 51.8 0 0 0 1 7.6h-.1a62 62 0 0 0-4-5.9c-.9-.9-1.7-1.3-2.4-1.3S22.9 7 22.3 8c-.6.8-1 2-1.3 3.5a35.7 35.7 0 0 0 .2 11.1c.4 2 1 3.7 1.6 5 .7 1.4 1.5 2 2.4 2 1 0 1.3-.3 2-1.2.7-.8 1.3-1.8 2-3l1.8-4a28.3 28.3 0 0 0-.5 6l-.1 1.2a33.2 33.2 0 0 0-4.2 1l-1.2.2Z"></path>
                                </svg>
                                <ol className="pt-2 mb-0">
                                    <li className="d-inline-block">
                                        <a className="link fill-color" href="https://www.roroshotellene.no/en/">
                                            Røroshotellene
                                        </a>
                                        <span className="fill-color px-2">-</span>
                                    </li>
                                    <li className="d-inline-block">
                                        <a
                                            className="link fill-color"
                                            href="https://www.roroshotellene.no/en/erzscheidergaarden/"
                                            aria-current="page"
                                        >
                                            Erzscheidergården
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <div className="lang-switcher">
                                <a href="#" className="link fill-color">No</a>
                                <span className="fill-color px-1">|</span>
                                <a href="#" className="link fill-color">En</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid position-relative pt-4">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <img className="home-img object-fit-cover" src="https://i1.vrs.gd/roroshotellene/uploads/images/SE_ROROS_0424_6856.jpg?quality=70&amp;" alt="" />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <div className="hero-container">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-5 hero-left d-flex align-items-center">
                                <div className="hero-content text-center">
                                    <p className="hero-title ms-5 mt-5 fs-1">
                                        Timeless tranquility <br />
                                        and historic charm <br />
                                        at Erzscheidergården
                                    </p>
                                    <button className="btn hero-btn salmon px-3 py-2" onClick={rooms}>
                                        See our rooms
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4">

                                <div className="hero-right p-4 border-0 rounded-1">
                                    <div className="w-full">

                                        <button
                                            id="hero-booking-widget-hotel-toggle"
                                            type="button"
                                            role="combobox"
                                            onClick={() => setOpen(!open)}
                                            aria-expanded={open}
                                            aria-controls="hero-booking-widget-hotel-listbox"
                                            aria-haspopup="listbox"
                                            className="flex w-full svg-bg border-0 mb-2 p-2 px-3 bg-white items-center justify-between option-bg"
                                        >
                                            <span className="ellipsis float-start ">Erzscheidergården</span>

                                            <span
                                                className={`inline-block size-[16px] ml-8 transition-transform duration-300 ${open ? "rotate-180" : ""
                                                    }`}
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="absolute full mt-1 fill-current float-end"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="15"
                                                    height="15"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </button>

                                        <div
                                            id="hero-booking-widget-hotel-listbox"
                                            role="listbox"
                                            hidden={!open}
                                            className="absolute top-full left-0 w-full max-h-[244px] mt-2 z-20 bg-white text-black rounded border-2 border-gray-300 shadow-lg position-absolute"
                                        >
                                            <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 option-bg">All our hotels</div>
                                            <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 option-bg">Røros Hotell</div>
                                            <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 option-bg">Erzscheidergården</div>
                                            <div className="py-2 px-4 cursor-pointer hover:bg-gray-200 option-bg">Vertshuset Røros</div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <label className="small text-black pb-2">Check-in date</label>
                                                <div className="text-center bg-white p-2"
                                                    onClick={() => handleFieldClick("checkin")}>
                                                    <h2 className="date-number">{checkInDisplay.day}</h2><br />
                                                    <p className="date-month">{checkInDisplay.monthYear}</p>
                                                    <svg class="svg-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
                                                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <label className="small text-black pb-2">Check-out date</label>
                                                <div className="p-2 bg-white text-center"
                                                    onClick={() => handleFieldClick("checkout")}>
                                                    <h2 className="date-number">{checkOutDisplay.day}</h2><br />
                                                    <p className="date-month">{checkOutDisplay.monthYear}</p>
                                                    <svg class="svg-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
                                                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="d-flex justify-content-between align-items-center my-3">
                                            <div className="">Guests per room</div>
                                            <div className="d-flex align-items-center gap-2">
                                                <button className="guest-btn rounded-circle" onClick={() => setCount(count - 1)}
                                                ><b>−
                                                    </b></button>
                                                <span className="fs-6">{count}</span>
                                                <button className="guest-btn rounded-circle" onClick={() => setCount(count + 1)}><b>+</b></button>
                                            </div>
                                        </div>
                                        <a href="#" className="small text-decoration-underline mb-4 d-inline-block text-black">
                                            Multiple rooms?
                                        </a>

                                        <button className="btn w-100 py-2 booking-btn arrow-btn">
                                            <span>View rooms and prices</span> 
                                            <svg class="svg-bg ms-2 arrow-move" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
                                                <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="booking-section-wrapper d-flex align-items-start">
                {showCalendar && (
                    <div className="calendar-wrapper">
                        <div className="calendar-inner">
                            {renderMonth(currentMonth, true, false)}
                            {renderMonth(nextMonth, false, true)}
                        </div>
                    </div>
                )}
            </div>
            <Caurosal />
            {/* {showBookingNav ? (
                <BookingNavbar setShowBookingNav={setShowBookingNav} />
            ) : (
                <Navbar setShowBookingNav={setShowBookingNav} />
            )} */}
        </>
    );
}

export default Home;
