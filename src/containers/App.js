import React from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react';
import Apartment from '../components/Apartment'
import AddApartment from '../components/AddApartment';

@observer class App extends React.Component {
  componentDidMount() {
    this.props.store.getFreeApartments();
    this.props.store.getRentedApartments();
  }

  rentOut = id => this.props.store.rentOutApartment(id);

  free = id => this.props.store.freeRentedApartment(id);
  
  add = apartment => this.props.store.addApartment(apartment);

  delete = id => this.props.store.removeApartment(id);

  edit = id => this.props.store;

  renderList1 = () => (
    <ListGroup>
      {this.props.store.freeApartments.map((el, id) => (
        <ListGroup.Item key={id}> 
          <Apartment
            data={el}
            handleChangeButtonClick={this.rentOut}
            handleDeleteButtonClick={this.delete}
            handleEditButtonClick={this.edit}
            ></Apartment>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )

  renderList2 = () => (
    <ListGroup>
      {this.props.store.rentedAppartments.map((el, id) => (
        <ListGroup.Item key={id}> 
          <Apartment 
            data={el} 
            handleChangeButtonClick={this.free}
            handleDeleteButtonClick={this.delete}
            handleEditButtonClick={this.edit}
            ></Apartment>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )

  render() {
    return (
      <Container>
        <Row>
          <AddApartment add={this.add} />
        </Row>
        <br></br>
        <Row>
          <Col>
            {this.renderList1()}
          </Col>
          <Col>
            {this.renderList2()}
          </Col>
        </Row>
      </Container>
    )
  }
}


export default App;
