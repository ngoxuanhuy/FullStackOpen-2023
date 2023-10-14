import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filteredText, setFilterText] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    // Check if the added name is already existed in the phonebook
    const isExisted = persons.find(({ name }) => name === newName)
    if (isExisted) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newPhoneNumber,
        id: persons.length + 1
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

  const handleFilterChange = (event) => {
    setFilterText(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleOnChange={handleFilterChange} value={filteredText}/>
      
      <h3>Add a new</h3>
      <PersonForm handleSubmit={addNewPerson} 
                  inputName={newName} inputPhoneNumber={newPhoneNumber} 
                  handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      
      <h2>Numbers</h2>
      <Persons persons={persons} filteredText={filteredText} />
    </div>
  )
}

export default App