import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '39-44-5324532'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    // Check if the added name is already existed in the phonebook
    const isExisted = persons.find(({name}) => name === newName)
    if (isExisted) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newPhoneNumber
      }
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewPhoneNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div> Name: <input value={newName} onChange={handleNameChange} /></div>
        <div> Number: <input value={newPhoneNumber} onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App