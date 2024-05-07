import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const BASEURL = 'http://localhost:8080'
  const [ users, msj, getUsers, createUser, deleteUser, updateUser] = useCrud(BASEURL)

  const [updateableUser, setUpdateableUser] = useState()

  const [formIsClosed, setFormIsClosed] = useState(true)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)
  
  console.log(msj)
  const openForm = () => {
    setFormIsClosed(false)
  }

  return (
    <div className='app'>
      <header className='app__header'>
        <h1 className='app__title'>Users</h1>
        <button onClick={openForm} className='create__btn'>+ Create new user</button>
      </header>

      < FormUser
        createUser = {createUser}
        updateableUser = {updateableUser}
        setUpdateableUser = {setUpdateableUser}
        updateUser = {updateUser}
        formIsClosed = {formIsClosed}
        setFormIsClosed = {setFormIsClosed}
      />

      <div className='users-container'>
        {
          users?.map(user => (
            <UserCard 
              key = {user.id}
              user = {user}
              setUpdateableUser = {setUpdateableUser}
              deleteUser = {deleteUser}
              updateUser = {updateUser}
              setFormIsClosed = {setFormIsClosed}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
