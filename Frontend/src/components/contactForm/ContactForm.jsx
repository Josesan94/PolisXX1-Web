import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import './contactForm.css'
import ButtonPolis from '../button/ButtonPolis';
import Title from '../title/Title';
import emailjs from '@emailjs/browser';
import { TextareaAutosize } from '@material-ui/core';
export const ContactForm = () => {

    const validationSchema = yup.object({
        name: yup
            .string('Ingrese su nombre')
            .required('El nombre es requerido'),
        lastName: yup
            .string('Ingrese su apellido')
            .required('El apellido es requerido'),
        email: yup
            .string('Ingrese su email')
            .email('Ingrese un email valido')
            .required('Su email es requerido'),
        description: yup
        .string('Ingrese un mensaje')
        .required('El mensaje es requerido')
        .max(500,'El mensaje no puede contener mas de 500 caractéres')             
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            description:''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, resetForm,}) => {
            sendEmail(values)
            alert(
                "Thank you for the submission. Korionna will be in contact with you shortly"
              );
              setSubmitting(false);
              resetForm();
        },
    });

    const sendEmail = (value) => {
        
    
        emailjs.send('service_1ffr9zb', 'template_yz5yhs3', value, 'dWjK4mM_MJAJJbRoR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };
 
    return (
        <div className="form-conteiner form-login">
            <Title
                        type='sky-3'
                        placeholder='Formá parte de nuestra comunidad y no te pierdas ninguna de nuestras novedades, eventos o informes.  ¡Cada día somos más!'
                        position='center'
                    />
            <form onSubmit={formik.handleSubmit} >
                <div className="form-container">
                    
                        <TextField
                            className='input-login mb-2 '
                            id="name"
                            name="name"
                            label="Nombre"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            className='input-login mb-2 '
                            id="lastName"
                            name="lastName"
                            control="textarea"
                            label="Apellido"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                            className='input-login mb-2'
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={4} 
                            style={{ width: 400 }}
                            id="description"
                            name="description"
                            placeholder="Mensaje..."
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            />
                    <div className="w-75 d-flex justify-content-center m-auto">
                        <ButtonPolis type='submit' placeholder={'Suscribirse'} />
                    </div>
                        
                </div>
            </form>
        </div>
    )
}
