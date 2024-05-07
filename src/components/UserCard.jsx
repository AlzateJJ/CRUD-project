import React from 'react'
import './styles/UserCard.css'

const UserCard = ( { user, setUpdateableUser, deleteUser, setFormIsClosed } ) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleUpdate = () => {
        setUpdateableUser(user)
        setFormIsClosed(false)
    }

    return (
        <article className='user-card'>
            <h2 className='user-name'>{`${user.first_name} ${user.last_name}`}</h2>
            <hr/>
            <ul className='user-data'>
                <li className='user-data__row'>
                    <span className='user-data__label'>Email</span>
                    <span className='user-data__value'>{user.email}</span>
                </li>
                <li className='user-data__row'>
                    <span className='user-data__label'>Birthday</span>
                    <span className='user-data__value'>{`🎁 ${user.birthday}`}</span>
                </li>
            </ul>
            <hr/>
            <section className='btn-wrapper'>
                <button className='btn-update' onClick={handleUpdate}>🖋️</button>
                <button className='btn-delete' onClick={handleDelete}>✖️</button>
            </section>
        </article>
    )
}

export default UserCard