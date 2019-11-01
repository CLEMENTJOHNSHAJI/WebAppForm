import React, {Component} from 'react';
import './App.css';
import { Form } from "react-bootstrap";
import { InputText } from "primereact/inputtext";
import axios from 'axios';


export default class RegistrationComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userdata:{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          address: "",
          phone_no: "",
      }
    };
      this.getInput = this.getInput.bind(this);
  }

    getInput(event) {
      const {userdata} = this.state;
        const { name, value } = event.target;
        const { payload } = this.state;
        this.setState({ userdata: { ...userdata, [name]: value } });
    }

  onSave(){

      console.log(this.state.userdata);
      const {userdata} = this.state;

      console.log(this.state.userdata);
      axios.post(`http://192.168.20.140:8001/api/auth/register`, {
          first_name: userdata.first_name,
          last_name: userdata.last_name,
          email: userdata.email,
          password: userdata.password,
          address: userdata.address,
          phone_no: userdata.phone_no
      })
          .then(res => {
              alert('User details saved');
              const obj = {
                  first_name: "",
                  last_name: "",
                  email: "",
                  password: "",
                  address: "",
                  phone_no: "",
              };
              // window.location.reload();
              this.setState({ userdata:obj }         );
          })
          .catch(()=> {
              alert('incatch');
          })

  }

  render() {
    return (
        <div className='App-header'>

            Register Here


          <Form.Group controlId="length">
            <label htmlFor="length">First Name</label>
            <InputText type="text" name="first_name"
                       value={this.state.userdata.first_name}
                       onChange={(e) => this.getInput(e)} />
          </Form.Group>

            <Form.Group controlId="length">
                <label htmlFor="length">Last Name</label>
                <InputText type="text" name="last_name"
                           value={this.state.userdata.last_name}
                           onChange={(e) => this.getInput(e)} />
            </Form.Group>

            <Form.Group controlId="length">
                <label htmlFor="length">Email</label>
                <InputText type="text" name="email"
                           value={this.state.userdata.email}
                           onChange={(e) => this.getInput(e)} />
            </Form.Group>

            <Form.Group controlId="length">
                <label htmlFor="length">Password</label>
                <InputText type="text" name="password"
                           value={this.state.userdata.password}
                           onChange={(e) => this.getInput(e)} />
            </Form.Group>

            <Form.Group controlId="length">
                <label htmlFor="length">Address</label>
                <InputText type="text" name="address"
                           value={this.state.userdata.address}
                           onChange={(e) => this.getInput(e)} />
            </Form.Group>

            <Form.Group controlId="length">
                <label htmlFor="length">Phone Number</label>
                <InputText type="text" name="phone_no"
                           value={this.state.userdata.phone_no}
                           onChange={(e) => this.getInput(e)} />
            </Form.Group>


            <button onClick={this.onSave.bind(this)}>
                Save
            </button>

        </div>
    );
  }

}
