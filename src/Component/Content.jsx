import "./Content.css"

function Content() {
    return (
        <>
            <div className="container my-5">
                <div className="row text-center justify-content-center mx-3">
                    <div className="col-md-5 left-box-color align-content-center">
                        <p className="fs-1 txt-vite txt-right fw-bold">Autumn campaign</p><br />
                        <p className="txt-vite">Professional meetings are even better<br /> with fresh mountain air and unique<br /> surroundings. Campaign price from 2,115 NOK</p>
                    </div>
                    <div className="col-md-5 right-box-color ms-3 align-content-center">
                        <p class="text-black fw-bold fs-1 style-font">20% discount at<br /> the Røros Hotell<br /> swimming facilities</p>
                        <p class="text-black">As a guest at Erzscheidergården or Vertshuset<br /> Røros, you receive a 20% discount on access<br /> to the swimming facility at Røros Hotell, as<br /> all hotels are under the same ownership.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;