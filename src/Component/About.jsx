import "./About.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {

    // const [open, setOpen] = useState(true);
    // if (!open) return null;

    const navigate = useNavigate()

    const home = () =>{
        navigate("/")
    }

    return (
        <>
            <div class="menu-overlay py-5">
                <button
                    type="button"
                    className="btn-close-overlay"
                    onClick={home}
                    aria-label="Close menu"
                >
                    ×
                </button>
                <div class="container-fluid px-5">
                    <div class="row">
                        <div class="col-md-5 mb-4">
                            <ul class="list-unstyled overlay-list-big fw-bold">
                                <li>Our rooms</li>
                                <li>Homemade breakfast</li>
                                <li>Meeting facilities</li>
                                <li>Offers</li>
                            </ul>
                        </div>

                        <div class="col-md-5 mb-4">
                            <ul class="list-unstyled overlay-list-big fw-bold">
                                <li>About the hotel</li>
                                <li>Experiences</li>
                                <li>Explore Røros</li>
                            </ul>
                        </div>

                        <div class="col-md-2 mb-4">
                            <ul class="list-unstyled overlay-list-small">
                                <li>Contact us</li>
                                <li>Giftcard</li>
                                <li>job-opportunities</li>
                                <li>Sustainability</li>
                                <li>Røroshotellene</li>
                                <li>Røros Hotell</li>
                                <li>Erzscheidergården</li>
                                <li>Vertshuset Røros</li>
                                <li>Kaffestuggu</li>
                            </ul>
                        </div>

                        <div class="container mb-4">
                            <div class="row">
                                <div class="col-12 col-md-3 mb-3">
                                    <p class="fw-bold mb-1">Email</p>
                                    <p class="mb-3">post@erzscheidergaarden.no</p>

                                    <p class="fw-bold mb-1">Phone</p>
                                    <p class="mb-0">+47 72 41 11 94</p>
                                </div>

                                <div class="col-12 col-md-3 mb-3">
                                    <p class=""><span className="fw-bold">Reception opening hours</span><br />
                                        Monday-Saturday:
                                        07:00-22:30<br />
                                        Sunday:
                                        Closed, 07:00-15:00<br />
                                        Christmas and New Year:<br />
                                        Closed after check-out on 21/12 2025<br /> until 02/01 2026.</p>
                                </div>

                                <div class="col-12 col-md-3 mb-3">
                                    <p><span className="fw-bold">Breakfast</span><br />
                                        Monday-Friday:<br />
                                        07:30-09:30<br />
                                        Saturday-Sunday:<br />
                                        08:00-10:00</p>
                                </div>

                                <div class="col-12 col-md-3 mb-3">
                                    <p class="fw-bold mb-1">Follow us</p>
                                    <p class="mb-0">Facebook</p>
                                    <p class="mb-0">Instagram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;