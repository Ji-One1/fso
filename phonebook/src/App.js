import { useState } from 'react'

const Filter = ({handleSubmit, filter, setFilter}) => {
  
  const handleFilterChange = e => setFilter(e.target.value)

  return(
    <form onSubmit={handleSubmit}>
      <div>Filter shown with: <input value={filter} onChange={handleFilterChange}/></div>
    </form>
  )
}

const ContactForm = ({handleSubmit, newName, newNumber, setNewName, setNewNumber}) => {
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = e => setNewNumber(e.target.value)

  return(
    <form onSubmit={handleSubmit}>
    <div>name: <input value={newName} onChange={handleNameChange}/></div>
    <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
    <div><button type="submit">add</button></div>
  </form>
  )
}

const Contact = ({filteredContacts}) => {
  return(
    filteredContacts.map(person => <div key={person.name}> {person.name} {person.number}</div>)
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
    }
  
    const filteredContacts =  persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    console.log(filteredContacts);

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