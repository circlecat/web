import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from "yup";

const validationSchema = yup.object({
  area: yup.number().required().min(1).max(10000),
  rooms: yup.number().required().min(1).max(100),
  price: yup.number().required().min(1).max(999999999),
  yearOfConstruction: yup.number().required().min(1901).max(new Date().getFullYear()),
  repairType: yup.string().required(),
  city: yup.string().required().min(1).max(55),
  street: yup.string().required().min(1).max(255),
  houseNumber: yup.number().required().min(1).max(1000),
  roomNumber: yup.number().required().min(1).max(1000),
})

const AddApartment = props => {
  const { repairTypes } = props.store;
  console.log(repairTypes);

  return (
    <Formik
      onSubmit={value => {
        const { area, rooms, price, yearOfConstruction, city, street, houseNumber, roomNumber, repairType } = value;
        console.log(repairType);
        const apartment = {
          area,
          rooms,
          price,
          yearOfConstruction,
          repairType,
          address: {
            city,
            street,
            houseNumber,
            roomNumber
          }
        }

        console.log(apartment);

        props.store.addApartment(apartment);
      }}
      validateOnChange={true}
      initialValues={{
        area: 0,
        rooms: 0,
        price: 0,
        yearOfConstruction: 1901,
        repairType: repairTypes[0],
        city: '',
        street: '',
        houseNumber: 0,
        roomNumber: 0,
      }}
      validationSchema={validationSchema}
    >
      {({ values, errors, handleChange, handleSubmit, handleBlur, isValid, touched, isInvalid }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <h3>New Apartment</h3>
          <Form.Row>
            <Form.Group>
              <Form.Label>Area:</Form.Label>
              <Form.Control
                type='number'
                name='area'
                placeholder='area'
                value={values.area}
                onChange={handleChange}
                isValid={touched.area && !errors.area}
                isInvalid={!!errors.area}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.area}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Rooms:</Form.Label>
              <Form.Control
                type='number'
                name='rooms'
                placeholder='rooms'
                value={values.rooms}
                onChange={handleChange}
                isValid={touched.rooms && !errors.rooms}
                isInvalid={!!errors.rooms}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.rooms}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type='number'
                name='price'
                placeholder='price'
                value={values.price}
                onChange={handleChange}
                isValid={touched.price && !errors.price}
                isInvalid={!!errors.price}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.price}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Year Of Construction:</Form.Label>
              <Form.Control
                type='number'
                name='yearOfConstruction'
                placeholder='Year Of Construction'
                value={values.yearOfConstruction}
                onChange={handleChange}
                isValid={touched.yearOfConstruction && !errors.yearOfConstruction}
                isInvalid={!!errors.yearOfConstruction}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.yearOfConstruction}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Repair type:</Form.Label>
              <select
                name="repairType"
                value={values.repairType}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: 'block' }}
              >
                <option value='' label='Select repair type'></option>
                <option value={repairTypes[0]} label={repairTypes[0]}></option>
                <option value={repairTypes[1]} label={repairTypes[1]}></option>
                <option value={repairTypes[2]} label={repairTypes[2]}></option>
              </select>
              {errors.repairType &&
                touched.repairType &&
                <div style={{color: 'red'}}>
                  {errors.repairType}
                </div>}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.Label>City:</Form.Label>
              <Form.Control
                name='city'
                type='text'
                placeholder='city'
                value={values.city}
                onChange={handleChange}
                isValid={touched.city && !errors.city}
                isInvalid={!!errors.city}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Street:</Form.Label>
              <Form.Control
                type='text'
                name='street'
                placeholder='street'
                value={values.street}
                onChange={handleChange}
                isValid={touched.street && !errors.street}
                isInvalid={!!errors.street}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.street}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>House Number:</Form.Label>
              <Form.Control
                type='number'
                name='houseNumber'
                placeholder='House Number'
                value={values.houseNumber}
                onChange={handleChange}
                isValid={touched.houseNumber && !errors.houseNumber}
                isInvalid={!!errors.houseNumber}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.houseNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Room number:</Form.Label>
              <Form.Control
                type='number'
                name='roomNumber'
                placeholder='Room Number'
                value={values.roomNumber}
                onChange={handleChange}
                isValid={touched.roomNumber && !errors.roomNumber}
                isInvalid={!!errors.roomNumber}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.roomNumber}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Add</Button>
        </Form>
      )}
    </Formik>
  )
}

export default AddApartment;