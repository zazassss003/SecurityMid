import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"

function Registration() {
    const initialValue = {
        username: "",
        password: "",
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(10).required(),
        password: Yup.string().min(4).max(15).required()
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data)
        })
    }
    return (
        <div>
            <Formik
                initialValues={initialValue}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainer">
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        id="inputCreat" //CSS purpose
                        name="username"
                        placeholder="Ex. john" />
                    <label>Password:</label>
                    <ErrorMessage name="password" component="span" />
                    <Field
                        id="inputCreat" //CSS purpose
                        type="password"
                        name="password"
                        placeholder="Your password" />
                    <button type="submit"> Register </button>
                </Form>
            </Formik>
        </div>
    )
}

export default Registration