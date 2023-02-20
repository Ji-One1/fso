import contactService from "../services/contactService";

const Contact = ({filteredContacts, persons, setPersons}) => {
    const handleDelete = (e) => {
        e.preventDefault()
        const duplicate = persons.find(dupe => dupe.id == e.target.id)
        if (!window.confirm(`Delete ${duplicate.name}?`)) {
            return;
          }
          
        contactService.deleteContact(e.target.id)
        .then(setPersons(persons.filter(person => person.id !== parseInt(e.target.id))))
    }

    return(
      filteredContacts.map(person => <form key={person.name} onSubmit={handleDelete} id={person.id}><div> {person.name} {person.number} <button key={person.id}>delete</button></div></form>)
    )
  }
export default Contact