import './Video.css'
import bed2 from "../assets/bed2.webp"
import Navbar from './Navbar'
import FAQ from './FAQ'

function Video() {
    return (
        <>
            {/* // <div className="Container">
        // <video className='videoloop' src="https://roroshotellene.b-cdn.net/uploads/videos/basseng-sune_n.mp4" style={{opacity: 1}}></video>
        // </div> */}
            <div className="container">
                <p className='fs-2 style-font text-center'>Facilities at Erzscheidergården</p>
                <div class="">

                    <ul className="row">
                        <li class="col-md-4 d-inline-flex fs-5 py-3 border-top border-warning-subtle">Homemade breakfast included</li>
                        <li class="col-md-3 d-inline-flex fs-5 py-3 border-top border-warning-subtle">Meeting room</li>
                        <li class="col-md-4 d-inline-flex fs-5 py-3 border-top border-warning-subtle">Free parking</li>
                    </ul>
                    <ul className='row'>
                        <li class="col-md-4 d-inline-flex fs-5 py-3 border-top border-warning-subtle">Non smoking</li>
                        <li class="col-md-3 d-inline-flex fs-5 py-3 border-top border-warning-subtle">View of Røros church</li>
                        <li class="col-md-4 d-inline-flex fs-5 py-3 border-top border-warning-subtle">Wifi available</li>
                    </ul>
                </div>
            </div>
            <div className="container text-center my-5">
                <div className="row">
                <img src={bed2} alt='...' className='rounded-1 bed' />
                </div>
            </div>
            {/* <div className="container">
                <p className="fs-2 fw-bold text-center style-font">Helpful information for your&nbsp;journey</p><br />
                <p className='pt-2 fs-5 mx-5 text-black content border-top border-warning-subtle'>Arrival by car<span className='float-end'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                    </svg></span></p>
                <p className='pt-2 fs-5 mx-5 text-black content border-top border-warning-subtle'>Parking<span className='float-end'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                    </svg></span></p>
                <p className='pt-2 fs-5 mx-5 text-black content border-top border-warning-subtle'>Are you closed during Christmas?<span className='float-end'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                    </svg></span></p>
                <p className='pt-2 fs-5 mx-5 text-black content border-top border-warning-subtle'>When is in check in time<span className='float-end'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                    </svg></span></p>
                <p className='pt-2 fs-5 mx-5 text-black content border-top border-warning-subtle'>What time is check-out?<span className='float-end'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                    </svg></span></p>
                <p className='pt-2 fs-5 mx-5 text-black content border-top border-warning-subtle'>Is breakfast included?<span className='float-end'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                    </svg></span></p>
                <p className='pt-2 fs-5 mx-5 text-black content border-top border-warning-subtle'>How to go to Roros<span className='float-end'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                    </svg></span></p>
                <p className='pt-2 fs-5 mx-5 text-black content border-top border-warning-subtle'>Information about booking with bets<span className='float-end'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                    </svg></span></p>
                <p className='pt-2 fs-5 mx-5 text-black content border-top border-warning-subtle'>Can we rent the entire hotel?<span className='float-end'>
                    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                    </svg></span></p>
            </div> */}
            <FAQ />
            <Navbar />
        </>
    )
}

export default Video