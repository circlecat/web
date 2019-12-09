import { observable, configure, action, decorate } from 'mobx';
configure({ enforceActions: 'observed' });

class ApartmentStore {
  freeApartments = [];
  rentedAppartments = [];
  repairTypes = [];

  getFreeApartments() {
    fetch('http://localhost:3088/apartment/free')
      .then(res => res.json())
      .then(this.setFreeApartments)
  }

  setFreeApartments(apartments) {
    this.freeApartments = apartments;
  }

  getRentedApartments() {
    fetch('http://localhost:3088/apartment/rented')
      .then(res => res.json())
      .then(this.setRentedApartments)
  }

  setRentedApartments(apartments) {
    this.rentedAppartments = apartments;
  }

  getRepairTypes() {
    fetch('http://localhost:3088/apartment/get-repair-type') //edit
      .then(res => res.json())
      .then(this.setRepairTypes)
  }

  setRepairTypes(repairTypes) {
    this.repairTypes = repairTypes;
  }

  addApartment(apartment) {
    fetch('http://localhost:3088/apartment/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apartment)
    })
      .then(json => {
        this.getRentedApartments();
        this.getFreeApartments()
      })
      .catch(reason => reason)
  }

  rentOutApartment(id) {
    fetch(`http://localhost:3088/apartment/rent-out/${id}`)
      .then(() => {
        this.getRentedApartments();
        this.getFreeApartments()
      })
  }

  freeRentedApartment(id) {
    fetch(`http://localhost:3088/apartment/stop-rent-out/${id}`)
      .then(() => {
        this.getRentedApartments();
        this.getFreeApartments()
      })
  }

  removeApartment(id) {
    fetch(`http://localhost:3088/apartment/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        this.getRentedApartments();
        this.getFreeApartments()
      })
  }

  editApartment(apartment) {
    fetch(`http://localhost:3088/apartment/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apartment) 
    })
      .then(() => {
        this.getRentedApartments();
        this.getFreeApartments()
      })
  }
}

decorate(ApartmentStore, {
  freeApartments: observable,
  rentedAppartments: observable,
  getFreeApartments: action,
  setFreeApartments: action.bound,
  getRentedApartments: action,
  setRentedApartments: action.bound,
  addApartment: action,
  rentOutApartment: action,
  freeRentedApartment: action,
  removeApartment: action,
  editApartment: action,
  getRepairTypes: action,
  setRepairTypes: action.bound
})

export default ApartmentStore;