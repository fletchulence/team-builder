import React, {useState} from 'react';
import './App.css';

import Person from './components/Person';
import PersonForm from './components/PersonForm';

const initialFormVals = {
  username: '',
  email: '',
  role: '',
}

function App() {

  const [ person, setPerson ] = useState([]);

  const [ formVals, setFormVals ] = useState(initialFormVals)

  const updateForm = (input1, input2) =>{
    setFormVals({ ...formVals, [input1]: input2})
  }

  const submitForm = () =>{
    const newPerson = {
      username: formVals.username.trim(),
      email: formVals.email.trim(),
      role: formVals.role
    }
    setPerson(person.concat(newPerson))
  }
  console.log(person)

  return (
    <div className="App">
      <h2> HELLO WORLD !</h2>

      <PersonForm 
        vals={formVals}
        update={updateForm}
        submit={submitForm}
      />


      <Person details={person}/>

    </div>
  );
}

export default App;
