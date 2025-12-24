import { useState } from "react";
import "./faq.css";
const faqData = [
    {
        question:
            "Arrival by car",
        answer:
            "Erzscheidergården is centrally located in Røros and is easily accessible by car. No matter which direction you come from, follow the signs to Røros city center. Once in the center, you will find signs directing you to Erzscheidergården. Parking is available near the hotel.",
    },
    {
        question: "Parking",
        answer:
            "We have space for approximately five cars in the backyard. Additionally, we have access to the parking lot at Røros Chapel. Parking permits can be collected at the reception. Please note that during ceremonies at Røros Chapel, our guests may be asked to move their cars for a few hours. In such cases, you can park at Røros Museum or in public parking areas in the center (parking fees may apply).",
    },
    {
        question:
            "Are you closed during Christmas?",
        answer:
            "Yes, Erzscheidergården is closed after checkout from 21nd of December 2025 until 2nd of January 2026.",
    },
    {
        question:
            "When is the check-in time?",
        answer:
            "Check-in is after 3 PM.",
    },
    {
        question:
            "What time is check-out?",
        answer:
            "Check-out is by 11:00 AM.",
    },
    {
        question:
            "Is breakfast included?",
        answer:
            "Yes, breakfast is always included with your booking.",
    },
    {
        question:
            "How to get to Røros",
        answer: `Røros is easily accessible by plane, train, bus, and car, regardless of your direction. Flights to Røros are available from Oslo, with Røros Airport just a short drive from the center. Train connections are also available from both the south and north, while bus services provide good coverage from Trondheim. 
         By plane Røros has a nearby airport with daily flights from Oslo Gardermoen Airport. The flight takes about 50 minutes. For detailed schedules and tickets, check the website of DAT or the local travel agency, Travelnet Røros Flyservice.    By bus There are daily departures to Røros from Trondheim with ATB. The bus ride takes approximately 3 hours, depending on traffic conditions. For detailed schedules and tickets, visit the ATB website.    By train Several daily train services run from both Trondheim and Oslo to Røros. The journey from Trondheim takes about 2 hours and 30 minutes, while the trip from Oslo takes around 5 hours, depending on the time of day and any delays. For detailed schedules and tickets, visit the ENTUR website. By car If you are traveling by car, Røros is easily reached from the south via E6 and FV.30, or from the north via FV.705 or E6 to RV.3. Both routes offer beautiful scenery and a pleasant drive. For travelers from Sweden, Røros is accessible via FV.31 from Funäsdalen, which also provides a scenic route over the mountain.`
    },
    {
        question:
            "Packed lunch",
        answer:
            "If you don't have time to eat before departure, we can prepare a packed lunch for you. Please contact the reception well in advance before closing time for breakfast. ",

        //             Price: NOK 120 per lunch box.

        // You can also prepare your own packed lunch for the trip. The lunch box will be provided by the staff, and if you bring a thermos, coffee or hot water for tea is included.
    },

    {
        question:
            "Information about bookings with pets",
        answer:
            "Yes, but we have only one room where pets are allowed. Bookings for pet-friendly rooms must be made directly with the hotel. Please contact us at post@erzscheidergaarden.no, and we’ll assist you with your reservation."

        // Please note that there is an additional charge of NOK 300 per night for pets in the room.",
    },
    {
        question:
            "Can we rent the entire hotel?",
        answer:
            "Absolutely! If you book a minimum of 20 rooms, you can enjoy the entire hotel to yourself."

        // When you rent the whole place, you gain full access to our rooms and conference facilities, along with a dedicated team ready to tailor your stay to your specific needs. Our bright and spacious meeting room is ideal for everything from workshops to executive meetings.

        // During your stay, you can savor delicious homemade breakfasts and lunches in privacy, with plenty of options for combining dinners at our nearby restaurants, including Vertshuset Røros, Kaffestuggu, and Røros Hotell.",
    },
    {
        question:
            "Do you have open during Easter?",
        answer:
            "No, Erzscheidergården is normally closed during Easter. The closing dates in 2025 are from 14th until 21st of April.",
    }
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-11">
                    <p className="fs-2 style-font text-center">Helpful information for your journey</p>
                    <hr />
                    {faqData.map((item, index) => (
                        <div key={index}>
                            <div className="d-flex faq-question" onClick={() => toggleFAQ(index)}>
                                <span className="fs-5">{item.question}</span>
                                <span className="ms-auto">
                                    <svg className={`arrow ${openIndex === index? "arrow-open" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                        <path fill-rule="evenodd" d="M11.81 7.64h-.14C10.52 7.49 8.02 6.6 4.17 5l-.35.5c1.7.95 3.25 2.76 4.64 5.45a49.63 49.63 0 0 1 3.27 7.9h.54c.8-2.55 1.86-5.2 3.21-7.9 1.39-2.69 2.96-4.5 4.7-5.46L19.82 5c-3.84 1.6-6.34 2.49-7.5 2.64h-.13a2.48 2.48 0 0 1-.38 0Z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </div>
                            <hr />
                            {openIndex === index && (
                                <p className="fs-6">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default FAQ;