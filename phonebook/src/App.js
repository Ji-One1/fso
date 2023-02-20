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



  useEffect(() => {
    contactService.getAll()
    .then(people => setPersons(people))
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
   
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.some((person)=> person.name === newName)){
      contactService.update(newName, newPerson)
      .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
    }
    else{
    contactService.create(newPerson)
    .then(returnedPerson => {setPersons(persons.concat(returnedPerson))})
    }

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
      <Contact filteredContacts={filteredContacts} persons={persons} setPersons={setPersons}/> 
    </div>
  )
}

export default App