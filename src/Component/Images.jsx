import human from "../assets/human.webp"
import './Image.css'
import '../assets/tower.webp'
import '../assets/img.webp'
import img from '../assets/img.webp'
import tower from '../assets/tower.webp'
import bed from '../assets/bed.webp'

function Image() {
    return (
        <>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5 align-content-center">
                    <div className="row-md-3"></div>
                    <p>Experiences</p><br />
                    <div className="col-md-3 d-inline-block">
                        <p><b>Duration</b><br />50 minutes</p>
                    </div>
                    <div className="col-md-3 d-inline-block">
                        <p><b>Sujtable for</b><br />All</p>
                    </div><br />
                    <p><b>Price</b><br />From NOK 150</p>
                    <button className="btn btn-outline-light hero-btn button-explore px-4 py-2 salmon">
                        Explore
                    </button>
                </div>
                <div className="col-md-6">
                    <img src={human} alt="..." width="80%" className="" />
                </div>
            </div>
        </div>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt="..." width="80%" />
                </div>
                <div className="col-md-6">
                    <img src={tower} alt="..." width="90%" />
                </div>
            </div>
        </div>
        <div className="cotainer py-5">
            <div className="text-center">
                    <img src={bed} alt="" className="bed" />
            </div>
        </div>
        </>
    )
}

export default Image;