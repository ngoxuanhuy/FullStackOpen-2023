import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filteredText, setFilterText] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    // Check if the added name is already existed in the phonebook
    const isExisted = persons.find(({ name }) => name === newName)
    if (isExisted) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newPhoneNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
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

  const handleContact = (id) => {
    console.log("The id is clicked: ", id);
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}`)) {
      personService.removeContact(id)
      // Update the component's state
      const changedPersons = persons.filter(p => p.id !== id)
      setPersons(changedPersons)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleOnChange={handleFilterChange} value={filteredText} />

      <h3>Add a new</h3>
      <PersonForm handleSubmit={addNewPerson}
        inputName={newName} inputPhoneNumber={newPhoneNumber}
        handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} />

      <h2>Numbers</h2>
      {
        persons.map(p => 
            <Person key={p.id} name={p.name} number={p.number}
              handleContact={() => handleContact(p.id)} />
        )
      }
    </div>
  )
}

export default App