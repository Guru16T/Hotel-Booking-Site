import React, { useState } from "react";
import "./BookingSection.css";
import Navbar from "./Navbar";

const monthNames = [
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

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function addMonths(date, count) {
  const d = new Date(date.getFullYear(), date.getMonth() + count, 1);
  return d;
}

function isSameDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}

function isAfter(a, b) {
  return a && b && a.getTime() > b.getTime();
}

function isBefore(a, b) {
  return a && b && a.getTime() < b.getTime();
}

function isInRange(day, start, end) {
  if (!start || !end) return false;
  const t = day.getTime();
  return t > start.getTime() && t < end.getTime();
}

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState(new Date(2025, 11, 5));
  const [checkOut, setCheckOut] = useState(new Date(2025, 11, 6));
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 11, 1));
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeField, setActiveField] = useState("checkin");

  const nextMonth = addMonths(currentMonth, 1);

  const handleFieldClick = (field) => {
    setActiveField(field);
    setShowCalendar((prev) => !prev || activeField !== field);
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
      if (!checkIn && !checkOut && d === 1) {
        classes += "";
      }

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

  const formatDisplayDate = (date) => {
    if (!date) return "--";
    return {
      day: date.getDate() + ".",
      monthYear: `${monthNames[date.getMonth()]} ${date.getFullYear()}`,
    };
  };

  const checkInDisplay = formatDisplayDate(checkIn);
  const checkOutDisplay = formatDisplayDate(checkOut);

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(2);

  function App() {
  const [showBookingNav, setShowBookingNav] = useState(false);

  return (
    <>
      {showBookingNav ? (
        <BookingNavbar setShowBookingNav={setShowBookingNav} />
      ) : (
        <MainNavbar setShowBookingNav={setShowBookingNav}/>
      )}

      <BookingSection showBookingNav={showBookingNav} />
    </>
  );
}


  return (
    <>
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
      <div className="row position-relative">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <div className="col-lg-3 hero-right p-4 border-0 rounded-1">
            <div className="relative w-full">

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

              <button className="btn w-100 py-2 booking-btn">
                <span>View rooms and prices</span> <svg class="svg-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
                  <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default BookingSection;