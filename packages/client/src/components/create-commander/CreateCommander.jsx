// ./components/my-form-component.js'
import React from 'react';
// import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import styled from 'styled-components';
import { Col } from '../common/common';

const LabelName = styled.label`
    margin: 10px;
    color: red;
    height: auto;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

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
            <Row>
            <Col xs="5">
                <LabelName htmlFor="user.firstName">First name</LabelName>
            </Col>
            <Col xs="7">
                <Control.text model=".firstName" id=".firstName" />
            </Col>
            </ Row>

            <label htmlFor="user.lastName">Last name</label>
            <Control.text model=".lastName" id=".lastName" />

            <button type="submit">Submit!</button>
        </Form>
    );
}

// No need to connect()!
export default CreateCommander;