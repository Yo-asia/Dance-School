import { useState } from 'react';

import './Schedule.css';

const groups = [
    {
        id: 1,
        day: 'Mon',
        hour: '8:00',
        trainer: 'Halina',
        level: 0,
    },
    {
        id: 2,
        day: 'Mon',
        hour: '9:00',
        trainer: 'Halina',
        level: 1,
    },
    {
        id: 3,
        day: 'Mon',
        hour: '10:00',
        trainer: 'Halina',
        level: 2,
    },
    {
        id: 4,
        day: 'Mon',
        hour: '11:00',
        trainer: 'Halina',
        level: 3,
    },
    {
        id: 5,
        day: 'Mon',
        hour: '11:00',
        trainer: 'Halina',
        level: 3,
    }
];

export function Schedule({openPreview, hidePreview, removeGroup}) {
    const [trainings, setTrainings] = useState(groups);
    const addTraining = (t) => {
        let idOfLast;
        if (trainings.length !== 0) {
            idOfLast = trainings[trainings.length - 1].id;
        } else { idOfLast = 0; };

        setTrainings([...trainings, { id: idOfLast + 1, ...t }]);
    };
 /*   const removeTraining = (id) => {
        const newTrainings = [...trainings];
        const index = newTrainings.findIndex((t) => t.id === id);
        newTrainings.splice(index, 1);
        setTrainings(newTrainings);
    };*/
    const removeTrainingFilter = (id) => {
        const newTrainings = trainings.filter((t) => t.id!==id);
        setTrainings(newTrainings);
        removeGroup();
        hidePreview();
    };
    return (
        <div className='container'>
            <div className='headerItem item'>ID</div>
            <div className='headerItem item'>Day</div>
            <div className='headerItem item'>Hour</div>
            <div className='headerItem item'>Trainer</div>
            <div className='headerItem item'>Level</div>
            <div className='headerItem item'>Action</div>
            {trainings.map((training) =>
                [
                    <div key="id" className='item'>{training.id}</div>,
                    <div key="day" className='item'>{training.day}</div>,
                    <div key="hour" className='item'>{training.hour}</div>,
                    <div key="trainer" className='item'>{training.trainer}</div>,
                    <div key="level" className='item'>{training.level}</div>,
                    <div key="actions" className='item'>
                        <button onClick={() => openPreview(training.id)}>Preview</button>
                        <button onClick={() => removeTrainingFilter(training.id)}>Remove</button>
                    </div>
                ]

            )}
            <CreateGroup addTraining={addTraining} />
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
            <button>Add</button>
        </form>
        
    )
};
