import React, {useState} from "react"

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newPersons, setNewPersons ] = useState('')

  const handlePersonChange = (event) => {
    setNewPersons(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = { name: newPersons }
    setPersons(persons.concat(nameObject));
    setNewPersons('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newPersons} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li> )}
      </ul>
    </div>
  )
}

export default App;
