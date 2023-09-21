import axios from "axios"

const baseUrl = "https://aged-river-4740.fly.dev/api/persons"

const getAll = () =>{
   
    return axios
            .get(baseUrl)
            .then(response =>(response.data))
 }

const create = newObject => {
    return axios
            .post(baseUrl, newObject)
            .then(response => response.data)
            
 }

const deleteContact = (id) => {
    return axios
             .delete(`${baseUrl}/${id}`)
             .then(response => response.data)

}

const update = (id, newObject) => {
    return axios   
            .put(`${baseUrl}/${id}`, newObject)
            .then(response => response.data)
}

 export default { getAll, create, deleteContact, update}
