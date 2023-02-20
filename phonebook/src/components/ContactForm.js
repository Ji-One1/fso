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
export default ContactForm