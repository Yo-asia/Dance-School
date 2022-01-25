import React, { useState } from 'react';

export function Attendees({attendees, addAttendee, removeAttendee, hidePreview}) {
    return (
        <div className='container'>
            <div className='headerItem item'>Name</div>
            <div className='headerItem item'>Surname</div>
            <div className='headerItem item'>Phone</div>
            <div className='headerItem item'>Action</div>
            {attendees.map((person) =>
                [
                    <div key="name" className='item'>{person.name}</div>,
                    <div key="surname" className='item'>{person.surname}</div>,
                    <div key="phone" className='item'>{person.phone}</div>,
                    <div key="actions" className='item'><button onClick={()=> removeAttendee(person)}>Remove</button></div>
                ]
            )}
            <CreateAttendee addAttendee ={addAttendee}/>
           <button onClick={hidePreview}>Close</button>
        </div>
    )
};

function CreateAttendee({ addAttendee }) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        if (!surname) return;
        if (!phone) return;
        addAttendee({ name, surname, phone });
        setName('');
        setSurname('');
        setPhone('');
    }
    return (
        <form onSubmit={handleSubmit} className='containerInputAttendee'>
            <input
                type="text"
                className="input"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="text"
                className="input"
                placeholder="Surname"
                value={surname}
                onChange={e => setSurname(e.target.value)}
            />
            <input
                type="number"
                className="input"
                placeholder="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            <button className="input">Add</button>
        </form>

    )
};
