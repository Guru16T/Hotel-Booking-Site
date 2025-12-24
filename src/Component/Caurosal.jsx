import hotel from "../assets/hotel.webp";
import made from "../assets/made.webp";
import pack from "../assets/pack.webp";
import room from "../assets/room.webp";
import hall from "../assets/hall.webp";
import book from "../assets/book.webp";
import lab from "../assets/lab.webp";
import mount from "../assets/mount.webp";
import Heartfelt from "./Heartfelt";
import Image from "./Images";
import Content from "./Content";
import Video from "./Video";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Caurosal() {

    const navigate = useNavigate()

    const rooms = () => {
        navigate("/room")
    }

    const homeMade = () => {
        navigate("/breakfast")
    }

    const experiance = () => {
        navigate("/experiance")
    }

    const offers = () => {
        navigate("/offer")
    }

    const about = () => {
        navigate("/about")
    }

    const meet = () =>{
        navigate("/mettingroom")
    }

    return (
        <>
            <div
                id="featureCarousel"
                className="carousel slide position-relative"
                data-bs-ride="carousel"
                style={{ background: "#f9efea" }}
            >
                <div id="featureCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-inner py-5">

                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center gap-4 flex-wrap">

                                    <div className="text-center">
                                        <img
                                            src={room}
                                            className="rounded"
                                            style={{ width: "280px", height: "350px", objectFit: "cover" }}
                                            alt="Room"
                                        />
                                        <h3 className="mt-3" style={{ fontFamily: "Georgia, serif" }}>
                                            Our rooms
                                        </h3>
                                        <button className="btn btn-outline-dark mt-2 salmon arrow-btn" onClick={rooms}>Explore
                                            <svg class="ms-2 arrow-move" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <img
                                            src={made}
                                            className="rounded"
                                            style={{ width: "280px", height: "350px", objectFit: "cover" }}
                                            alt="Breakfast"
                                        />
                                        <h3 className="mt-3" style={{ fontFamily: "Georgia, serif" }}>
                                            Homemade breakfast
                                        </h3>
                                        <button className="btn btn-outline-dark mt-2 salmon arrow-btn" onClick={homeMade}>Explore
                                            <svg class="ms-2 arrow-move" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <img
                                            src={hotel}
                                            className="rounded"
                                            style={{ width: "280px", height: "350px", objectFit: "cover" }}
                                            alt="Hotel"
                                        />
                                        <h3 className="mt-3" style={{ fontFamily: "Georgia, serif" }}>
                                            The entire hotel<br /> exclusively for you
                                        </h3>
                                        <button className="btn btn-outline-dark mt-2 salmon arrow-btn">Explore
                                            <svg class="ms-2 arrow-move" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <img
                                            src={pack}
                                            className="rounded"
                                            style={{ width: "280px", height: "350px", objectFit: "cover" }}
                                            alt="Offers"
                                        />
                                        <h3 className="mt-3" style={{ fontFamily: "Georgia, serif" }}>
                                            Packages and offers
                                        </h3>
                                        <button className="btn btn-outline-dark mt-2 salmon arrow-btn" onClick={offers}>Explore
                                            <svg class="ms-2 arrow-move" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center gap-4 flex-wrap">

                                    <div className="text-center">
                                        <img
                                            src={hall}
                                            className="rounded"
                                            style={{ width: "280px", height: "350px", objectFit: "cover" }}
                                            alt="Room"
                                        />
                                        <h3 className="mt-3" style={{ fontFamily: "Georgia, serif" }}>
                                            Erzscheideren
                                        </h3>
                                        <button className="btn btn-outline-dark mt-2 salmon arrow-btn" onClick={meet}>Explore
                                            <svg class="ms-2 arrow-move" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <img
                                            src={book}
                                            className="rounded"
                                            style={{ width: "280px", height: "350px", objectFit: "cover" }}
                                            alt="Breakfast"
                                        />
                                        <h3 className="mt-3" style={{ fontFamily: "Georgia, serif" }}>
                                            About the hotel
                                        </h3>
                                        <button className="btn btn-outline-dark mt-2 salmon arrow-btn" onClick={about}>Explore
                                            <svg class="ms-2 arrow-move" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <img
                                            src={lab}
                                            className="rounded"
                                            style={{ width: "280px", height: "350px", objectFit: "cover" }}
                                            alt="Hotel"
                                        />
                                        <h3 className="mt-3" style={{ fontFamily: "Georgia, serif" }}>
                                            Experiences
                                        </h3>
                                        <button className="btn btn-outline-dark mt-2 salmon arrow-btn" onClick={experiance}>Explore
                                            <svg class="ms-2 arrow-move" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <img
                                            src={mount}
                                            className="rounded"
                                            style={{ width: "280px", height: "350px", objectFit: "cover" }}
                                            alt="Offers"
                                        />
                                        <h3 className="mt-3" style={{ fontFamily: "Georgia, serif" }}>
                                            Explore Rores
                                        </h3>
                                        <button className="btn btn-outline-dark mt-2 salmon arrow-btn">Explore
                                            <svg class="ms-2 arrow-move" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M7.2 12.16v.12c-.16.98-1.17 3.12-3.01 6.41l.56.31c1.1-1.46 3.17-2.78 6.24-3.97a68.72 68.72 0 0 1 9.06-2.8v-.46a73.7 73.7 0 0 1-9.06-2.75C7.92 7.83 5.84 6.5 4.75 5l-.56.3c1.84 3.3 2.85 5.44 3.02 6.42v.12a1.59 1.59 0 0 1 0 .32Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
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
                <Heartfelt />
                <Image />
                <Content />
                <Video />
                <Footer />
            </div>
        </>
    )
}

export default Caurosal;