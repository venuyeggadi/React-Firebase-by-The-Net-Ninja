import { useState } from 'react';
import './App.css';
import EventList from './components/EventList';
import Modal from './components/Modal';
import Title from './components/Title';
import NewEventForm from './components/NewEventForm';

function App() {
	const [showEvents, setShowEvents] = useState(true);
	const [events, setEvents] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const handleDelete = (id) => {
		setEvents((prevEvents) => {
			return prevEvents.filter((event) => {
				return event.id !== id
			});
		});
	}

	const handleAddEvent = (event) => {
		setEvents((prevEvents) => [...prevEvents, event]);
		setShowModal(false);
	}

	const subtitle = 'All the latest events in Marioland';

	return (
		<div className='App'>
			<Title title='Events in Your Area' subtitle={ subtitle } />
			{showEvents
				? <div>
					<button onClick={() => setShowEvents(false)}>Hide events</button>
				</div>
				: <div>
					<button onClick={() => setShowEvents(true)}>Show events</button>
				</div>
			}

			{showEvents && <EventList events={events} handleDelete={handleDelete} />}

			{showModal && <Modal isSalesModal={true}>
				<NewEventForm handleAddEvent={handleAddEvent} />
			</Modal>}
			<div>
				<button onClick={() => setShowModal(true)}>Add New Event</button>
			</div>
		</div>
	);
}

export default App;