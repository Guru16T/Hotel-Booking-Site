import "./Navbar.css"
import { useNavigate } from "react-router-dom";

function Navbar({ setShowBookingNav }) {

    const navigate = useNavigate()

    const experiance = () =>{
        navigate("/experiance")
    }

    const about = () =>{
        navigate("/about")
    }

    const offer = () =>{
        navigate("/offer")
    }
    
    const room = () =>{
        navigate("/room")
    }

    const breakfast = () =>{
        navigate("/breakfast")
    }

    const meetingRoom = () =>{
        navigate("/mettingroom")
    }

    const home = () => {
        navigate("/")
    }

    return (
        <div className="home-bookbar-wrapper my-5">
            <div className="home-bookbar">
                <button className="btn home-bookbar-primary p-3" onClick={home}>Book accommodation</button>

                <div className="home-bookbar-tabs bg-white rounded-3">
                    <button className="btn home-bookbar-tab p-3 video-underline" onClick={room}>Our rooms</button>
                    <button className="btn home-bookbar-tab p-3 video-underline" onClick={breakfast}>Breakfast</button>
                    <button className="btn home-bookbar-tab p-3 video-underline" onClick={meetingRoom}>Meetingroom</button>
                    <button className="btn home-bookbar-tab p-3 video-underline" onClick={offer}>Offers</button>
                    <button className="btn home-bookbar-tab p-3 video-underline" onClick={experiance}>Experiences</button>
                </div>

                <button className="navbar-toggler home-bookbar-menu rounded-3" onClick={about} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-black"></span>
                    </button>
            </div>
        </div>
    )
}

export default Navbar;