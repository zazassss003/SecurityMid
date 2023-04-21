import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from 'axios';


function Leave() {

    const initialValue = {
        username: "",
        text: "",
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        text: Yup.string().min(1).max(20).required()
    })
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            console.log("OK!")
        })
    }

    return (
        <div className='createComment'>
            <Formik
                initialValues={initialValue}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <label>Name:</label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        id="inputCreat" //CSS purpose
                        name="username"
                        placeholder="Ex. john" />
                    <label>Comment:</label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        id="inputCreat"
                        name="text"
                        placeholder="Ex. 123" />
                    <button type="submit">Leave Comment</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Leave