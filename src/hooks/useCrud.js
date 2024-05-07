import axios from "axios"
import { useState } from "react"

const useCrud = (BASEURL) => {

    const [results, setResults] = useState()
    const [msj, setMsj] = useState()

    const getApi = (path) => {
        const url = `${BASEURL}${path}/`
        console.log(url)
        axios.get(url)
            .then(res => {
                setResults(res.data)
                setMsj("obtencion de usuarios")})
            .catch(err => console.log(err))
    }

    const createApi = (path, data) => {
        const url = `${BASEURL}${path}/`
        console.log(url)
        axios.post(url, data)
        // importante que sea res.data, porque si agregamos solo data
        // al arreglo, no se agregaría el id que le dió el backend
            .then(res => {
                console.log(res.data)
                setResults([...results, res.data])
                setMsj("se creó un usuario!")})
            .catch(err => console.log(err))
    }

    const deleteApi = (path, id) => {
        const url = `${BASEURL}${path}/${id}/`
        console.log(url)
        axios.delete(url)
            .then(setResults(results.filter(r => r.id !== id)))
            .catch(err => console.log(err))
    }

    const updateApi = (path, id, data) => {
        const url = `${BASEURL}${path}/${id}/`
        console.log(url)
        axios.put(url, data)
            .then(res => setResults(results.map(r => r.id === id ? res.data : r)))
            .catch(err => console.log(err))
    }

    return [ results, msj, getApi, createApi, deleteApi, updateApi ]

}

export default useCrud