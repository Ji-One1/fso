const Contact = ({filteredContacts}) => {
    return(
      filteredContacts.map(person => <div key={person.name}> {person.name} {person.number}</div>)
    )
  }
export default Contact