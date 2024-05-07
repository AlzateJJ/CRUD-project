import { Form, useForm } from "react-hook-form";
import './styles/FormUser.css'
import { useEffect } from "react";

const FormUser = ( { createUser, updateableUser, setUpdateableUser, updateUser, formIsClosed, setFormIsClosed } ) => {

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        console.log(updateableUser)
        reset(updateableUser)
    }, [updateableUser])

    const submit = data => {
        console.log(data)

        if (updateableUser) {
            // UPDATE
            updateUser('/users', updateableUser.id, data)
            setUpdateableUser()
        } else {
            // CREATE
            createUser('/users', data)
        }

        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
        setFormIsClosed(true)
    }

    const closeForm = () => {
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
        setFormIsClosed(true)
        setUpdateableUser()
    }

    return (
        <div className={`form-container ${formIsClosed && "form__close"}`}>
            <form className="form" onSubmit={handleSubmit(submit)}>
                <header className="form__header">
                    <h2 className="form__title">User Form</h2>
                    <div onClick={closeForm} className="form__exit">x</div>
                </header>
                <label className="form__label">
                    <span className="form__field">Email</span>
                    <input {...register('email')} type="email" className="form__field-value" />
                </label>
                <label className="form__label">
                    <span className="form__field">Password</span>
                    <input {...register('password')} type="password" className="form__field-value" />
                </label>
                <label className="form__label">
                    <span className="form__field">First Name</span>
                    <input {...register('first_name')} type="text" className="form__field-value" />
                </label>
                <label className="form__label">
                    <span className="form__field">Last Name</span>
                    <input {...register('last_name')} type="text" className="form__field-value" />
                </label>
                <label className="form__label">
                    <span className="form__field">Birthday</span>
                    <input {...register('birthday')} type="date" className="form__field-value" />
                </label>
                <button className="form__btn">Submit</button>
            </form>
        </div>
    );
};

export default FormUser;
