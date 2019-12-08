import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Apartment = props => {
  const { handleChangeButtonClick, handleDeleteButtonClick, handleEditButtonClick } = props;
  const { id, area, rooms, price, yearOfConstruction, repairType, address, isRented, rentStartDate, rentEndDate } = props.data;

  return (
    <Container>
      <Row>
        <Col>
          Apartment:
          <ul style={{ listStyleType: 'none' }}>
            <li>Area: {area} м²</li>
            <li>Rooms: {rooms}</li>
            <li>Price: {price}</li>
            <li>Year of construction: {yearOfConstruction}</li>
            <li>Repair Type: {repairType}</li>
            <li>{!isRented || `Rent start date: ${rentStartDate}`}</li>
            <li>{!isRented || `Rent end date: ${rentEndDate}`}</li>
          </ul>
        </Col>
        <Col>
          Address:
          <ul style={{ listStyleType: 'none' }}>
            <li>City: {address.city} м²</li>
            <li>Street: {address.street}</li>
            <li>House: {address.houseNumber}</li>
            <li>Room: {address.roomNumber}</li>
          </ul>
        </Col>
        <Col>
          <Button onClick={() => handleChangeButtonClick(id)} >{isRented ? "Cancel" : 'Rent Out'}</Button>
          <Button style={{ backgroundColor: 'green' }} onClick={() => handleEditButtonClick(id)} >Edit</Button>
          <Button style={{ backgroundColor: 'red' }} onClick={() => handleDeleteButtonClick(id)} >Delete</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Apartment;
