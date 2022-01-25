import React, { useState, useEffect, useCallback} from 'react';

const attendeesInitial = [
    {
        groupId:1,
        list: [
            {
                name: 'Ania',
                surname: 'X',
                phone: 117
            },
            {
                name: 'Gosia',
                surname: 'Y',
                phone: 118
            },
            {
                name: 'Kasia',
                surname: 'z',
                phone: 119
            }
        ]
    },
    {
        groupId:2,
        list: [
            {
                name: 'Ania',
                surname: 'X',
                phone: 227
            },
            {
                name: 'Gosia',
                surname: 'Y',
                phone: 228
            },
            {
                name: 'Kasia',
                surname: 'z',
                phone: 229
            }
        ]
    },
    {
        groupId:3,
        list: [
            {
                name: 'Ania',
                surname: 'X',
                phone: 337
            },
            {
                name: 'Gosia',
                surname: 'Y',
                phone: 338
            },
            {
                name: 'Kasia',
                surname: 'z',
                phone: 339
            }
        ]
    },
    {
        groupId:5,
        list: [
            {
                name: 'Ania',
                surname: 'X',
                phone: 557
            },
            {
                name: 'Gosia',
                surname: 'Y',
                phone: 558
            },
            {
                name: 'Kasia',
                surname: 'z',
                phone: 559
            }
        ]
    }
];

export function AttendeesList({groupId, hidePreview, removeGroup}) {
    
    const [attendees, setAttendees] = useState(attendeesInitial);
    const [attendeesList, setAttendeesList] = useState([]);

    if (removeGroup) {
        const otherAttendees = attendees.filter((list) => list.groupId!==groupId);
        setAttendees([...otherAttendees]);
    }
    const getGroupWithId = useCallback((id) =>{
        if (attendees.filter((list) => list.groupId===id).length===0){
            setAttendees([...attendees, { groupId: id, list: [] }]);
            return [];
        }
       return attendees.find((list) => list.groupId===id).list;
    }, [attendees]);

    useEffect (() => {
        setAttendeesList(getGroupWithId(groupId))
    }, [groupId, getGroupWithId]);

    const addAttendee = (a) => {
        const newAttendeesList = [...attendeesList, a];
        setAttendeesList(newAttendeesList);
        const otherAttendees = attendees.filter((list) => list.groupId!==groupId);
        setAttendees([...otherAttendees, {groupId: groupId, list: newAttendeesList}]);
    };
    const removeAttendee = (person) => {
        const newAttendeesList = attendeesList.filter((t) => t!==person);
        setAttendeesList(newAttendeesList);
        const otherAttendees = attendees.filter((list) => list.groupId!==groupId);
        setAttendees([...otherAttendees, {groupId: groupId, list: newAttendeesList}]);
    };

    return (
        <div className='container'>
            <div className='headerItem item'>Name</div>
            <div className='headerItem item'>Surname</div>
            <div className='headerItem item'>Phone</div>
            <div className='headerItem item'>Action</div>
            {attendeesList.map((person) =>
                [
                    <div key="name" className='item'>{person.name}</div>,
                    <div key="surname" className='item'>{person.surname}</div>,
                    <div key="phone" className='item'>{person.phone}</div>,
                    <div key="actions" className='item'><button onClick={()=> removeAttendee(person)}>Remove</button></div>
                ]
            )}
            <CreateAttendee addAttendee ={addAttendee} />
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
            <button>Add</button>
        </form>

    )
};
