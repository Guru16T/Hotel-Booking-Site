function BookingNavbar({ setShowBookingNav }) {
  return (
    <div className="booking-navbar">
      
      <button onClick={() => setShowBookingNav(false)}>
        Close
      </button>
      <div className="home-bookbar-tabs bg-white rounded-3">
                    <button className="btn home-bookbar-tab p-3 video-underline" onClick={room}>Our rooms</button>
                    <button className="btn home-bookbar-tab p-3 video-underline" onClick={breakfast}>Breakfast</button>
                    <button className="btn home-bookbar-tab p-3 video-underline" onClick={meetingRoom}>Meetingroom</button>
                    <button className="btn home-bookbar-tab p-3 video-underline" onClick={offer}>Offers</button>
                    <button className="btn home-bookbar-tab p-3 video-underline" onClick={experiance}>Experiences</button>
                </div>

    </div>
  );
}

export default BookingNavbar;