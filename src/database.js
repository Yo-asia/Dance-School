const defaultTrainings = [
    {
        id: 1,
        day: 'Mon',
        hour: 8,
        trainer: 'Agata',
        level: 0,
    },   
    {
        id: 2,
        day: 'Mon',
        hour: 9,
        trainer: 'Agata',
        level: 1,
    },  
    {
        id: 3,
        day: 'Mon',
        hour: 10,
        trainer: 'Agata',
        level: 2,
    },  
    {
        id: 4,
        day: 'Mon',
        hour: 11,
        trainer: 'Agata',
        level: 3,
    },  
    {
        id: 5,
        day: 'Mon',
        hour: 11,
        trainer: 'Agata',
        level: 3,
    } 
]

const defaultAttendants = [
    
]


export default class Database {

    constructor() {
        this.trainings = defaultTrainings;
        this.attendants = defaultAttendants;
    }

    getTrainings() {
        return this.trainings;
    }
    
    getAttendants() {
        return this.attendants;
    }

    addTraining() {
        this.trainings.push({id: 66, day:'Tue', hour: 15, trainer: 'Marek', level: 6});
    }
} 

