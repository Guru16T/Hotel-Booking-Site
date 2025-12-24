import "./Metting.css"
import meetHall from "../assets/meetHall.webp"
import meet1 from "../assets/meet1.webp"
import meet2 from '../assets/meet2.webp'
import meet3 from "../assets/meet3.webp"
import meet4 from "../assets/meet4.webp"
import meet5 from "../assets/meet5.webp"
import meet6 from "../assets/meet6.webp"
import meet7 from "../assets/meet7.svg"
import meet8 from "../assets/meet8.svg"
import meet9 from "../assets/meet9.svg"
import meet10 from "../assets/meet10.svg"
import { useState } from "react"
import ex1 from "../assets/ex1.webp"
import ex2 from "../assets/ex2.webp"
import ex3 from "../assets/ex3.webp"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"

function MeetingRoom() {

    const navigate = useNavigate()

    const experiance = () => {
        navigate("/experiance")
    }

    const meetData = [{
        question: "Do I need adapters or other equipment for connectivity?",
        answer: "We have a good selection of adapters that work for various connections. Feel free to ask us if you need something specific."
    }, {
        question: "Is the conference room wheelchair accessible?",
        answer: "Unfortunately, our meeting room is not wheelchair accessible as it is located on the second floor without elevator access."
    }, {
        question: "Are pets allowed in the conference facilities?",
        answer: "No, pets are not permitted in our conference room."
    }, {
        question: "Is the use of a copier or printer included in the price?",
        answer: "No, the use of a copier or printer is not included, but it is available for a fee. You will be charged per printed page, with a standard rate of NOK 1 per page."
    },
    {
        question: "Can we rent the entire hotel?",
        answer: "Absolutely! If you book a minimum of 20 rooms, you can enjoy the entire hotel to yourself.When you rent the whole place, you gain full access to our rooms and conference facilities, along with a dedicated team ready to tailor your stay to your specific needs. Our bright and spacious meeting room is ideal for everything from workshops to executive meetings. During your stay, you can savor delicious homemade breakfasts and lunches in privacy, with plenty of options for combining dinners at our nearby restaurants, including Vertshuset Røros, Kaffestuggu, and Røros Hotell."
    }
    ]

    const [openMeet, setOpenMeet] = useState(null)
    const meetToggle = ((index) => {
        setOpenMeet(openMeet === index ? null : index)
    })

    return (
        <>
            <div className="container-fluid top-bg">
                <div className="container py-3">
                    <div className="row">
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
                                    <li className="d-inline-block small" >
                                        <a className="link fill-color nav-size" href="https://www.roroshotellene.no/en/">
                                            Røroshotellene
                                        </a>
                                        <span className="fill-color px-2">-</span>
                                    </li>
                                    <li className="d-inline-block small">
                                        <a
                                            className="link fill-color nav-size"
                                            href="https://www.roroshotellene.no/en/erzscheidergaarden/"
                                            aria-current="page"
                                        >
                                            Erzscheidergården
                                        </a>
                                        <span className="fill-color px-2">-</span>
                                    </li>
                                    <li className="d-inline-block small">
                                        <a
                                            className="link fill-color nav-size"
                                            href="https://www.roroshotellene.no/en/erzscheidergaarden/"
                                            aria-current="page"
                                        >
                                            Metting Room
                                        </a>
                                        <span className="fill-color px-2">-</span>
                                    </li>
                                    <li className="d-inline-block">
                                        <a
                                            className="link fill-color nav-size"
                                            href="https://www.roroshotellene.no/en/erzscheidergaarden/"
                                            aria-current="page"
                                        >
                                            Erzscheideren
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
                <div className="container-fluid">
                    <div className="row">
                            <div className="right-meet z-3 text-center col-md-6">
                                <p className="fs-5 fw-medium break-time">Meeting rooms</p>
                                <p className="fs-1 style-font break-time">Erzscheideren</p>
                            </div>
                        <div className="col-md-3 position-absolute"></div>
                        <div className="col-md-12 text-center mt-5 position-realative">
                            <img src={meetHall} alt="..." className="theme-overlay w-auto" />
                        </div>
                        <div className="col-md-3 left-meet">
                            <p className="break-time fs-6">
                                <span className="break-time fw-bold">Size</span><br />
                                41 m2<br /><br />
                                <span className="break-time fw-bold">Capacity</span><br />
                                Up to 24 people
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid metting-bg">
                <div
                    id="featureCarousel"
                    className="carousel slide position-relative"
                    data-bs-ride="carousel"
                >
                    <div id="featureCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-inner py-5">

                                <div className="carousel-item active">
                                    <div className="d-flex justify-content-center gap-4 flex-wrap">

                                        <div className="text-center">
                                            <img
                                                src={meet1}
                                                className="rounded"
                                                style={{ width: "280px", height: "400px", objectFit: "cover" }}
                                                alt="Room"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <img
                                                src={meet2}
                                                className="rounded"
                                                style={{ width: "280px", height: "400px", objectFit: "cover" }}
                                                alt="Breakfast"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <img
                                                src={meet3}
                                                className="rounded"
                                                style={{ width: "600px", height: "400px", objectFit: "cover" }}
                                                alt="Hotel"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center gap-4 flex-wrap">

                                        <div className="text-center">
                                            <img
                                                src={meet4}
                                                className=""
                                                style={{ width: "280px", height: "400px", objectFit: "cover" }}
                                                alt="Room"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <img
                                                src={meet5}
                                                className=""
                                                style={{ width: "280px", height: "400px", objectFit: "cover" }}
                                                alt="Breakfast"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <img
                                                src={meet6}
                                                className=""
                                                style={{ width: "600px", height: "400px", objectFit: "cover" }}
                                                alt="Hotel"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="button-abs button-prev me-5 arrow-btn"
                            type="button"
                            data-bs-target="#featureCarousel"
                            data-bs-slide="prev"
                        >
                            <svg className="arrow-move" width="30" height="30" viewBox="0 0 40 24">
                                <path d="m36.008 11.484-17.257.181c.162-.765.587-1.817 1.265-3.153a103.615 103.615 0 0 1 2.432-4.484l-.735-.362c-1.025 2.18-2.849 3.892-5.479 5.124-2.63 1.232-5.521 2.075-8.681 2.513a54.055 54.055 0 0 1-4.186.425v.543c1.358.084 2.75.223 4.186.425 3.16.487 6.051 1.336 8.681 2.548 2.63 1.211 4.454 2.91 5.479 5.089l.735-.362a107.952 107.952 0 0 1-2.432-4.484c-.678-1.33-1.095-2.387-1.265-3.153h17.257v-.85Z"></path>
                            </svg>
                        </button>
                        <button
                            className="button-abs button-next arrow-btn"
                            type="button"
                            data-bs-target="#featureCarousel"
                            data-bs-slide="next"
                        >
                            <svg className="arrow-move" width="30" height="30" viewBox="0 0 40 24">
                                <path d="m2.555 11.484 17.257.181c-.163-.765-.587-1.817-1.266-3.153a103.615 103.615 0 0 0-2.432-4.484l.735-.362c1.026 2.18 2.85 3.892 5.48 5.124 2.63 1.232 5.52 2.075 8.68 2.513 1.436.202 2.836.341 4.186.425v.543c-1.357.084-2.75.223-4.185.425-3.16.487-6.052 1.336-8.682 2.548-2.63 1.211-4.453 2.91-5.479 5.089l-.735-.362a107.952 107.952 0 0 0 2.432-4.484c.679-1.33 1.096-2.387 1.266-3.153H2.555v-.85Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="fs-5 fw-medium">Send us a request</p>
                            <p className="fs-5"><span className="fw-medium">Phone</span><br /><span className="meet-link">+47 72 40 80 00</span></p>
                            <br />
                            <p className="fs-5"><span className="fw-medium">Email</span><br /><span className="meet-link">salg@roroshotellene.no</span></p>
                            <br />
                            <button className="btn request-btn py-2 px-3">Send request
                                {/* <svg class="arrow d-inline" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                                </svg> */}
                            </button>
                        </div>
                        <div className="col-md-6">
                            <p className="fs-5">The spacious and bright conference room at Erzscheidergården is ideal for meetings and events, comfortably accommodating up to 24 participants. Equipped with modern technology and offering stunning views of Røros and Slegghaugan, it's perfect for board meetings, workshops, and various gatherings.</p>
                            <br />
                            <p className="fs-5">When you book, you have the option to customize your meeting with additions such as fresh fruit, coffee/tea, iced water, and snacks, along with a delicious two-course lunch. Our dedicated team ensures a seamless and enjoyable meeting experience.</p>
                            <br />
                            <p className="fs-5 fw-medium">An exclusive setting for your next meeting</p>
                            <p className="fs-5"><u>Rent the entire Erzscheidergården</u> and enjoy the exclusivity of having the place all to yourselves. You’ll have full access to rooms, conference facilities, and a personalized host who will tailor your stay to meet your needs.</p>
                            <br />
                            <p className="fs-5">Erzscheidergården is celebrated for its soulful ambiance, steeped in history and personality. Situated next to the iconic Røros Church and within walking distance of museums, galleries, and other cultural attractions, it offers the perfect backdrop for a memorable stay. Each of our 24 rooms is uniquely designed, combining historical charm with modern comfort to provide guests with a one-of-a-kind experience.</p>
                            <br />
                            <p className="fs-5 fw-medium">Amenities</p>
                            <br />
                            <div className="row">
                                <div className="col-6">
                                    <ul>
                                        <hr />
                                        <li className="fs-5">Wifi available</li>
                                        <hr />
                                        <li className="fs-5">Sun shading</li>
                                        <hr />
                                        <li className="fs-5">Pen and paper</li>
                                        <hr />
                                        <li className="fs-5">Monitor</li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <hr />
                                        <li className="fs-5">Projector</li><hr />
                                        <li className="fs-5">Natural light</li><hr />
                                        <li className="fs-5">Flip chart stand</li><hr />
                                        <li className="fs-5">A/V equipment</li>
                                    </ul>
                                </div><br />
                                <p className="fs-4 fw-medium py-5">Available meeting room configurations</p>
                                <div className="row">
                                    <div className="col-md-6 text-center align-content-center">
                                        <img src={meet7} alt="..." className="fill-svg" />
                                        <p className="fs-5 fw-medium">Theater<br /> 24 people</p>
                                    </div>
                                    <div className="col-md-6 text-center align-content-center">
                                        <img src={meet8} alt="..." className="fill-svg" />
                                        <p className="fs-5 fw-medium">Classroom<br /> 24 people</p>
                                    </div><hr />
                                    <div className="col-md-6 text-center align-content-center">
                                        <img src={meet9} alt="..." className="fill-svg" />
                                        <p className="fs-5 fw-medium">U-shape<br /> 16 people</p>
                                    </div>
                                    <div className="col-md-6 text-center align-content-center">
                                        <img src={meet10} alt="..." className="fill-svg" />
                                        <p className="fs-5 fw-medium">Boardroom<br /> 16 people</p>
                                    </div><hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <p className="fs-2">Helpful information</p><hr />
                            {meetData.map((item, index) => (
                                <div key={index}>
                                    <div className="d-flex faq-question" onClick={() => meetToggle(index)}>
                                        <span className="fs-5 meet-link">{item.question}</span>
                                        <span className="ms-auto">
                                            <svg className={`arrow ${openMeet === index ? "arrow-open" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                                <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <hr />
                                    {openMeet === index && (
                                        <p className="fs-5">{item.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row text-center justify-content-center mx-3">
                        <div className="col-md-5 left-box-color align-content-center">
                            <span className="txt-vite fw-medium mb-5">Erzscheidergården</span>
                            <p className="fs-1 txt-vite txt-right fw-bold style-font">Book your<br /> private hotel</p>
                            <p className="txt-vite">Reserve the entire Erzscheidergården<br /> for an uninterrupted and exclusive<br /> venue for your next gathering!</p>
                            <button className="btn py-2 px-3 btn-left">Read more</button>
                        </div>
                        <div className="col-md-5 right-box-color ms-3 align-content-center">
                            <span className="text-black fw-medium">Conference Packages</span>
                            <p class="text-black fw-bold fs-1 style-font">Tailored<br /> Packages</p>
                            <p class="text-black">Discover our range of tailored packages<br /> for corporate meetings and gatherings.</p>
                            <button className="btn py-2 px-3 btn-right">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="container text-center py-5">
                    <span className="style-font fs-2 text-center">Experiences in Røros</span>
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-md-4 my-5">
                            <div className="experience-item">
                                <div className="experience-img-wrapper">
                                    <img src={ex1} alt="Guided tour of Olavsgruva" className="img-fluid rounded-1" />
                                </div>
                                <div className="text-center mt-3">
                                    <p className="experience-title mb-2 fs-4 fw-bold">
                                        GUIDED TOUR<br />OF OLAVSGRUVA
                                    </p>
                                    <p className="small mb-1">1 hour and 15 minutes <b>•</b> Suitable for all</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 my-5">
                            <div className="experience-item">
                                <div className="experience-img-wrapper">
                                    <img src={ex2} alt="Guided bike tour" className="img-fluid rounded-1" />
                                </div>
                                <div className="text-center mt-3">
                                    <p className="experience-title mb-2 fs-4 fw-bold">GUIDED BIKE TOUR</p>
                                    <p className="small mb-0">Suitable for all</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 my-5">
                            <div className="experience-item">
                                <div className="experience-img-wrapper">
                                    <img src={ex3} alt="Guided bike tour" className="img-fluid rounded-1" />
                                </div>
                                <div className="text-center mt-3">
                                    <p className="experience-title mb-2 fs-4 fw-bold">GUIDED BIKE TOUR</p>
                                    <p className="small mb-0">Suitable for all</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn py-2 px-3 ex-btn rounded-1 arrow-btn" onClick={experiance}>See more experiance
                        <svg class="ms-2 arrow-move" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <Navbar />
                <Footer />
            </div>
        </>
    )
}

export default MeetingRoom;
