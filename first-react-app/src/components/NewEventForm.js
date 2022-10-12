import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm({handleAddEvent}) { 
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('hyderabad');

    function resetForm() {
        setTitle ('');
        setDate('');
        setLocation('hyderabad');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        handleAddEvent(event);
        resetForm();
    }

    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="title">Event Title:</label>
            <input type="text" id="title" /> */}
            <label>
                <span>Event Title:</span>
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input 
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <label>
                <span>Select Location: </span>
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="banglore">Banglore</option>
                    <option value="delhi">Delhi</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}