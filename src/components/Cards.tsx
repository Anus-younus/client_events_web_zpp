import React from 'react'
import './components.css'
import event1 from "../../public/event-1.png"
import event2 from "../../public/event-2.png"
import event3 from "../../public/event-3.png"
import event4 from "../../public/event-4.png"
import Card from './Card'

const events = [
    {
        id: "event-1",
        image: event1,
        heading: "MOCHA IN SPRING",
        para1: "Saturday, 25th February, 8PM",
        para2: "Tickets From £14"
    },
    {
        id: "event-2",
        image: event2,
        heading: "AIR HITCHED",
        para1: "Saturday, 24th juLY, 8PM",
        para2: "Tickets From £30"
    },
    {
        id: "event-3",
        image: event3,
        heading: "SUMMER SIENNA",
        para1: "SUNDAY, 23rd JULY, 3PM",
        para2: "Tickets From £50"
    },
    {
        id: "event-4",
        image: event4,
        heading: "AMOUR",
        para1: "FRIDAY, 3RD MARCH, 4PM",
        para2: "Tickets From £25"
    },
]

const Cards = () => {
    return (
        <div className='main-card-container'>
            <div className='card-container'>
                <h1 className='cards-logo'>HITCHED EVENTS</h1>
                <div className='cards'>
                    {events.map((event) => (
                        <Card key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards