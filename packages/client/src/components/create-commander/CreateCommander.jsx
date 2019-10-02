// ./components/my-form-component.js'
import React from 'react';
// import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';



const CreateCommander = () => {
    const handleSubmit = (val) => {
        // Do anything you want with the form value
        console.log(val);
    }

    const isCommander = (val) => val === "moghan"; /* check if val is email */
  
    return (
        <Form
            model="user"
            onSubmit={(val) => handleSubmit(val)}
        >
            <label htmlFor="user.firstName">First name</label>
            <Control.text model=".firstName" id=".firstName" />

            <label htmlFor="user.lastName">Last name</label>
            <Control.text model=".lastName" id=".lastName" />

            <button type="submit">Submit!</button>
        </Form>
    );
}

// No need to connect()!
export default CreateCommander;