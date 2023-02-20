import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Contact from './components/Contact'
import contactService from './services/contactService'
import Notification from './components/Notification'


const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorObject, setErrorObject] = useState({error:null})

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
      if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        return;
      }
      const duplicate = persons.find(dupe => dupe.name === newName)
      contactService.update(duplicate.id, newPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.name === returnedPerson.name ? returnedPerson : person))
        setErrorObject({action:'Updated', name:newName, error: false})
      })
    }
    else{
    contactService.create(newPerson)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setErrorObject({action:'Added', name:newName, error: false})
    })
    }

    setTimeout(() => setErrorObject({...errorObject, error: null}), 5000)
    setNewName('')
    setNewNumber('')
    
  }
  
    const filteredContacts =  persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))



  return (
    <div>
      <Notification errorObject={errorObject}/>
      <h2>Phonebook</h2>
      <Filter handleSubmit={handleSubmit} filter={filter} setFilter={setFilter}/>
      <h2>Add Contact</h2>
      <ContactForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Contact filteredContacts={filteredContacts} persons={persons} setPersons={setPersons} setErrorObject={setErrorObject}/> 
    </div>
  )
}

export default App