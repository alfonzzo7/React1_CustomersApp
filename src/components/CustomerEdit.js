import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Prompt } from 'react-router-dom';

import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from './CustomerActions';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_EDIT } from '../constants/permissions';

// const isRequired = value => (
//     !value && "Este campo es requerido"
// );

// const isNumber = value => (
//     isNaN(Number(value)) && "Este campo debe ser númerico"
// );

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo Nombre es requerido";
    }

    if (!values.dni) {
        error.dni = "El campo DNI es requerido";
    }

    if (!values.age) {
        error.age = "El campo Edad es requerido";
    }

    if (isNaN(Number(values.age))) {
        error.age = "Este campo debe ser númerico";
    } 

    return error;
}

const MyField = ({label, name, input, meta, type}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const toNumber = value => value && Number(value);

const toUpper = value => value && value.toUpperCase();

const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceded}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form onSubmit={handleSubmit}>
                {/* <Field label="Nombre" name="name" component={MyField} type="text" validate={isRequired}></Field>
                <Field label="DNI" name="dni" component={MyField} type="text" validate={isRequired}></Field>
                <Field label="Edad" name="age" component={MyField} type="text" validate={[isRequired, isNumber]}></Field> */}
                <Field label="Nombre" name="name" component={MyField} type="text" parse={toUpper}></Field>
                <Field label="DNI" name="dni" component={MyField} type="text"></Field>
                <Field label="Edad" name="age" component={MyField} type="number" parse={toNumber}></Field>
                <CustomerActions>
                    <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                    <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                </CustomerActions>
                <Prompt when={!pristine && !submitSucceded} message="Se perderán los datos si continúa"></Prompt>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    handleSubmit: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(reduxForm({form: 'CustomerEdit', validate})(CustomerEdit)));