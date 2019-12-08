import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from "yup";

const validationSchema = yup.object({
  area: yup.number().required(),
  rooms: yup.number().required(),
  price: yup.number().required(),
  yearOfConstruction: yup.number().required(),
  //repairType: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  houseNumber: yup.number().required(),
  roomNumber: yup.number().required(),
})


const AddApartment = props => {
  return (
    <div>
      <Formik
        onSubmit={value => {
          const { area, rooms, price, yearOfConstruction, city, street, houseNumber, roomNumber } = value;
          const apartment = {
            area,
            rooms,
            price,
            yearOfConstruction,
            address: {
              city,
              street,
              houseNumber,
              roomNumber
            }
          }
          props.add(apartment)
        }}
        validateOnChange={true}
        initialValues={{
          area: 0,
          rooms: 0,
          price: 0,
          yearOfConstruction: 1901,
          repairType: '',
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
                  type='text'
                  name='area'
                  placeholder='area'
                  value={values.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.area}
                >
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Rooms:</Form.Label>
                <Form.Control
                  type='text'
                  name='rooms'
                  placeholder='rooms'
                  value={values.rooms}
                  onChange={handleChange}
                  isValid={touched.rooms && !errors.rooms}
                >
                </Form.Control>
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
                >
                </Form.Control>
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
                >
                </Form.Control>
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
                >
                </Form.Control>
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
                ></Form.Control>
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
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Room numer:</Form.Label>
                <Form.Control
                  type='number'
                  name='roomNumber'
                  placeholder='Room Number'
                  value={values.roomNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.roomNumber}
                ></Form.Control>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Add</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddApartment;