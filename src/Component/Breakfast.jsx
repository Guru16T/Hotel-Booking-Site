import "./Breakfast.css"
import break1 from "../assets/break1.webp"
import break2 from "../assets/break2.webp"
import break3 from "../assets/break3.webp"
import break4 from "../assets/break4.webp"
import break5 from "../assets/break5.webp"
import break6 from "../assets/break6.webp"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Breakfast() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="py-3 position-absolute">
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
                                        <li className="d-inline-block ">
                                            <a
                                                className="link fill-color nav-size"
                                                href="https://www.roroshotellene.no/en/erzscheidergaarden/"
                                                aria-current="page"
                                            >
                                                Homemade breakfast
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
                    <div className="col-md-6 break-img">
                    </div>
                    <div className="col-md-6 brexk-bg text-center align-content-center">
                        <p class="fs-1 break-font fw-bold break-time">Homemade<br /> breakfast</p>
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <p className="break-time fs-5"><span className="fw-medium break-time">Monday-Friday</span><br />
                                    07:30-09:30</p>
                            </div>
                            <div className="col-4">
                                <p className="break-time fs-5"><span className="fw-medium break-time">Saturday-Sunday</span><br />
                                    08:00-10:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid break-bg">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="fs-1 fw-bold break-font head-color">Every morning, we offer a generous, homemade<br /> breakfast to give you the perfect start to your day.</p>
                            <svg class="rooms-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M13.7546 20.2692 2.566 9.1164l.9117-3.6763 3.6796-.911 4.8454 4.8411 4.8454-4.841 3.6861.9109.9118 3.6764-2.7158 2.7133-1.6672-1.6657-2.1361 2.1342 3.3995 3.3901 5.2557-5.2511c.3517-.3513.4949-.8719.3777-1.3534l-1.1657-4.6784c-.1498-.6116-.6252-1.0801-1.2309-1.2298L17.0174 2.05c-.5666-.1431-1.1788.026-1.5891.4425L12.0027 5.915 8.5771 2.4925A1.6819 1.6819 0 0 0 6.9815 2.05L2.4357 3.1757c-.6122.1497-1.081.6247-1.2309 1.2298L.0391 9.0839A1.499 1.499 0 0 0 0 9.4223c0 .3709.1498.7418.4168 1.0085L11.9962 22l1.7454-1.7438.013.013Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <p className="fs-5">At our hotel, you’ll wake up to a breakfast experience that’s as warm and inviting as it is homemade. We put our heart and soul into creating an atmosphere that feels cozy, authentic, and generous. The charming breakfast area is filled with the delightful aroma of freshly baked bread from local bakeries. In addition, we offer our homemade "tjukkmjølk" waffles, which are exceptionally moist and flavorful. We highly recommend enjoying them with our freshly made jam and authentic Røros sour cream.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-6 ps-4">
                            <img src={break1} alt="..." width="85%" />
                        </div>
                        <div className="col-md-6">
                            <img src={break2} alt="..." width="80%" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-6 ps-4">
                            <p className="fs-3">Packed lunch</p>
                        </div>
                        <div className="col-md-6">
                            <p className="fs-5">For those on the go, we offer a takeaway lunch packed with our finest homemade treats. Prepare a meal to take with you and bring a little bit of our hospitality along on your journey. If you'd like a packed lunch, you can purchase one by contacting the reception. We’re here to ensure you start your day warmly, whether you stay with us or take your breakfast to enjoy whilst on the road.</p>
                            <hr />
                            <p className="fs-4 d-flex">Price for packed lunch
                                <div className="">
                                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-6 ps-4">
                            <p className="fs-3">Lounge area</p>
                        </div>
                        <div className="col-md-6">
                            <p className="fs-5 d-flex">In the lounge near the reception, you’ll always find coffee, tea, and home baked goods. If you’re in the mood for a little something extra or a nice drink, we have a full selection of beverages available.
                                Sune Eriksen
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-6 ps-4">
                            <img src={break3} alt="..." width="80%" />
                        </div>
                        <div className="col-md-6">
                            <img src={break4} alt="..." width="80%" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-6 ps-4">
                            <p className="fs-3">Local ingredients</p>
                        </div>
                        <div className="col-md-6">
                            <p className="fs-5">We take pride in our homemade breakfast and the local ingredients sourced from Røros. The breakfast selection are served in beautiful Trønder ceramics from Potteriet Røros, and our "tjukkmjølk" waffles are made with products from Rørosmeieriet. Most are made with ingredients from Røros, including many we’ve harvested and prepared ourselves. Our guests often comment on how generous it all looks, and we do everything we can to ensure you have the perfect start to your day with our homemade breakfast.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-6 ps-4">
                            <p className="fs-3">Lunch and dinner</p>
                        </div>
                        <div className="col-md-6">
                            <p className="fs-5">Røros has become a hub for locally produced food and ingredients, offering a wide variety of cafés and restaurants where you can enjoy delicious meals.
                            </p>
                            <p className="fs-5 fw-medium">Kaffestuggu</p>
                            <p className="fs-5">A bit further down the main street, Kjerkgata, you’ll find Røros’ oldest café, Kaffestuggu. Here, you can enjoy tasty sandwiches, cakes, and coffee during the day. They also serve generous lunch and dinner dishes. At Kaffestuggu, you have the opportunity to try local specialties like surpølse and Røroskål. The café also offers outdoor seating both in the backyard facing Kjerkgata and on the opposite side in Bergmannsgata.</p>
                        </div>
                    </div>
                </div>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="small">Kaffestuggu</p>
                            <p className="break-font fs-1 pt-3">Kaffestuggu</p>
                            <p className="pt-3"><span className="fw-medium">Monday-Wednesday</span><br />
                                11:00-18:00<br />
                                11:30-17:30</p>
                            <div className="row pt-3">
                                <div className="col-4">
                                    <p><span className="fw-medium">Thursday-Saturday</span><br />
                                        11:00-23:00<br />
                                        11:00-21:45</p>
                                </div>
                                <div className="col-6">
                                    <span className="fw-medium">Sunday</span><br />
                                    11:00-18:00<br />
                                    11:30-17:30
                                </div>
                            </div>
                            <p className="pt-3"><span className="fw-medium">Before Christmas</span><br />
                                3, 9, 10, 16 and 17 December:<br />
                                Open: 11:00–20:00 (kitchen until 19:30)</p>
                            <p className="pt-3"><span className="fw-medium">New Year</span><br />
                                1. and 6. January – Closed</p>
                            <button className="btn break-btn py-2 px-3 me-3">Explore</button>
                            <button className="btn break-btn py-2 px-3 me-3">Menus</button>
                            <button className="btn break-btn py-2 px-3">Book table</button>
                        </div>
                        <div className="col-md-6">
                            <img src={break5} alt="..." />
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <p className="fs-5 fw-medium">Vertshuset Røros</p>
                            <p className="fs-5">If you're looking for a finer dining experience after a day full of activities, we recommend Vertshuset Røros, located just down the street from us on Kjerkgata. In the main restaurant, inspired by the 19th-century bourgeoisie of Røros, you can choose from an à la carte menu or enjoy a three-course dinner. We recommend booking a table in advance. At Berkel, they serve both lunch and à la carte dishes in the evening.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={break6} alt="..." width="85%" />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5 align-content-center">
                            <p className="small"><span className="fw-medium">Food and drink</span></p>
                            <p className="fs-1 break-font">Vertshuset Røros</p>
                            <div className="row py-3">
                                <div className="col-4">
                                    <span className="fw-medium">Tuesday</span><br />
                                    17:00-23:00<br />
                                    Kitchen closes 21:30
                                </div>
                                <div className="col-6">
                                    <span className="fw-medium">Wednesday-Saturday</span><br />
                                    12:00-16:00<br />
                                    17:00-23:00<br />
                                    Kitchen closes 21:30
                                </div>
                            </div>
                            <button className="btn break-btn py-2 px-3 me-3">Explore</button>
                            <button className="btn break-btn py-2 px-3 me-3">Menus</button>
                            <button className="btn break-btn py-2 px-3">Book a table</button>
                        </div>
                    </div>
                </div>
                <Navbar />
                <Footer />
            </div>
        </>
    )
}

export default Breakfast;