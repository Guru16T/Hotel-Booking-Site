import Home from "./Home";
import Rooms from "./Component/Rooms";
import Experiance from "./Component/Experiance";
import Offer from "./Component/Offers";
import About from "./Component/About";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Breakfast from "./Component/Breakfast";
import MeetingRoom from "./Component/MeetingRoom";
import BookingSection from "./Component/BookingBox";

function App() {
  return (
    <BrowserRouter>
      <Link to="/" />
      <Link to="/room" />
      <Link to="/experiance" />
      <Link to="/offer" />
      <Link to="/about" />
      <Link to="/breakfast" />
      <Link to="/mettingroom" />
      <Link to="/booking" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Rooms />} />
        <Route path="/experiance" element={<Experiance />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/about" element={<About />} />
        <Route path="/breakfast" element={<Breakfast />}/>
        <Route path="/mettingroom" element={<MeetingRoom />} />
        <Route path="/booking" element={<BookingSection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;