import React, { useState } from 'react';
import './App.css';
import { Schedule } from '../Schedule/Schedule';

const initGroups = [
  {
    id: 1,
    day: 'Mon',
    hour: '8:00',
    trainer: 'Agata',
    level: 0,
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
    id: 2,
    day: 'Mon',
    hour: '9:00',
    trainer: 'Agata',
    level: 1,
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
    id: 3,
    day: 'Mon',
    hour: '10:00',
    trainer: 'Agata',
    level: 2,
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
    id: 4,
    day: 'Mon',
    hour: '11:00',
    trainer: 'Agata',
    level: 3,
    list: []
  },
  {
    id: 5,
    day: 'Mon',
    hour: '11:00',
    trainer: 'Agata',
    level: 3,
    list: []
  }
];

function App() {
  const [groups, setGroups] = useState(initGroups);
  const addGroup = (g) => {
    let idOfLast;
    if (groups.length !== 0) {
      idOfLast = groups[groups.length - 1].id;
    } else { idOfLast = 0; };

    setGroups([...groups, { id: idOfLast + 1, ...g, list: [] }]);
  };
  const removeGroup = (id) => {
    const newGroups = groups.filter((g) => g.id !== id);
    setGroups(newGroups);
  };
  const addAttendee = (groupId, person) => {
    const group = groups.find((t) => t.id === groupId);
    const index = groups.indexOf(group);
    const newAttendeesList = [...group.list, person];
    const otherGroups = groups.filter((g) => g.id !== groupId);
    otherGroups.splice(index, 0, { ...group, list: newAttendeesList })
    setGroups(otherGroups);
  };
  const removeAttendee = (groupId, person) => {
    const group = groups.find((t) => t.id === groupId);
    const index = groups.indexOf(group);
    const newAttendeesList = group.list.filter((t) => t !== person);
    const otherGroups = groups.filter((g) => g.id !== groupId);
    otherGroups.splice(index, 0, { ...group, list: newAttendeesList })
    setGroups(otherGroups);
  };

  return (
    <div className="App">
      <h1>Dance school</h1>
      <Schedule groups={groups} addGroup={addGroup} removeGroup={removeGroup} addAttendee={addAttendee} removeAttendee={removeAttendee}/>

    </div>
  );
}

export default App;
