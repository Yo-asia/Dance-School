import React, { useState } from 'react';
import './App.css';
import { Schedule } from '../Schedule/Schedule';


function App() {
  const [groupId, setGroupId] = useState(null);
  const [removeGroupId, setRemoveGroupId] = useState(false);
  
  const hidePreview = () => setGroupId(null);
  const openPreview = (id) => setGroupId(id);
  const removeGroup = () => setRemoveGroupId(true);

  return (
    <div className="App">
      <h1>Dance school</h1>
      <Schedule openPreview={openPreview} hidePreview={hidePreview} removeGroup={removeGroup}/>
      {groupId === null ? null : 
        [
          <h2 key="title">Group {groupId}</h2>,
          <AttendeesList key="attendees" groupId={groupId} hidePreview={hidePreview} removeGroup={removeGroupId}/>
        ]
      }
    </div>
  );
}

export default App;
