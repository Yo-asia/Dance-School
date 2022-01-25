import React, { useEffect, useState } from 'react';
import { Attendees } from '../Attendees/Attendees';

import './Schedule.css';



export function Schedule({ groups, addGroup, removeGroup, addAttendee, removeAttendee }) {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const hidePreview = () => { setSelectedGroup(null) };
    useEffect(() => {
        if (selectedGroup !== null)
            setSelectedGroup(groups.find(g => selectedGroup.id === g.id));
    }, [groups, selectedGroup]);
    return (
        <div>
            <div className='container'>
                <div className='headerItem item'>ID</div>
                <div className='headerItem item'>Day</div>
                <div className='headerItem item'>Hour</div>
                <div className='headerItem item'>Trainer</div>
                <div className='headerItem item'>Level</div>
                <div className='headerItem item'>Action</div>
                {groups.map((training) =>
                    [
                        <div key="id" className='item'>{training.id}</div>,
                        <div key="day" className='item'>{training.day}</div>,
                        <div key="hour" className='item'>{training.hour}</div>,
                        <div key="trainer" className='item'>{training.trainer}</div>,
                        <div key="level" className='item'>{training.level}</div>,
                        <div key="actions" className='item'>
                            <button onClick={() => setSelectedGroup(training)}>Preview</button>
                            <button onClick={() => {hidePreview(); removeGroup(training.id); }}>Remove</button>
                        </div>
                    ]

                )}

                <CreateGroup addTraining={addGroup} />
            </div>
            <div>
                {selectedGroup === null ? null :
                    [
                        <h2 key="title">Group {selectedGroup.id}</h2>,
                        <Attendees key="attendees"
                            attendees={selectedGroup.list}
                            addAttendee={(a) => addAttendee(selectedGroup.id, a)}
                            removeAttendee={(a) => removeAttendee(selectedGroup.id, a)}
                            hidePreview={hidePreview}
                        />
                    ]
                }
            </div>
        </div>


    )
};

function CreateGroup({ addTraining }) {

    const [day, setDay] = useState("");
    const [hour, setHour] = useState("");
    const [trainer, setTrainer] = useState("");
    const [level, setLevel] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!day) return;
        if (!hour) return;
        if (!trainer) return;
        if (!level) return;
        addTraining({ day, hour, trainer, level })
        setDay('');
        setHour('');
        setTrainer('');
        setLevel('');
    }
    return (
        <form onSubmit={handleSubmit} className='containerInput'>
            <select className="input" value={day} onChange={e => setDay(e.target.value)}>
                <option value="">Day</option>
                <option>Mon</option>
                <option>Tue</option>
                <option>Wen</option>
                <option>Thu</option>
                <option>Fri</option>
            </select>
            <input
                type="time"
                step= "3600"
                className="input"
                placeholder="Hour"
                value={hour}
                onChange={e => setHour(e.target.value)}
            />
            <input
                type="text"
                className="input"
                placeholder="Trainer"
                value={trainer}
                onChange={e => setTrainer(e.target.value)}
            />
            <input
                type="number"
                className="input"
                placeholder="Level"
                value={level}
                onChange={e => setLevel(e.target.value)}
            />
            <button className="input">Add</button>
        </form>

    )
};