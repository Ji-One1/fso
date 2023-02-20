import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Contact from './components/Contact'
import contactService from './services/contactService'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')



  useEffect(() => setPersons(contactService.getAll()), [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (persons.some((person)=> person.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(contactService.post(newPerson)))

    setNewName('')
    setNewNumber('')
    }
  
    const filteredContacts =  persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSubmit={handleSubmit} filter={filter} setFilter={setFilter}/>
      <h2>Add Contact</h2>
      <ContactForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Contact filteredContacts={filteredContacts}/> 
    </div>
  )
}

export default App