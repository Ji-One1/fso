import '../index.css'

const Notification = ({errorObject}) => {
  if (errorObject.error === null){
    return
  }
  if (errorObject.message){
    return <div className="error"> {errorObject.message} </div>
  }
  if (errorObject.error){
      return <div className="error">Information of {errorObject.name} has already been removed from server</div>
    }
    return <div className="success">{errorObject.action} {errorObject.name}</div>
  }
  

  export default Notification