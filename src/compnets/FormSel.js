import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export class FormSel extends Component {
    render() {
        return (
            <div>
                <Form.Select defaultValue= "0" as="select" custom name='selecteHorn' onChange={this.props.NumberOfH} >
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="100">Wow</option>
        </Form.Select>
            </div>
        )
    }
}

export default FormSel
