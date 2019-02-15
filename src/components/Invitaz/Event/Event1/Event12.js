import React from 'react';

import {Form, InputGroup} from 'react-bootstrap';

import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker-cssmodules.css'


const event12 = (props) => {
    return (

        <div style={{width:'100%',margin:'auto'}}>
            <div style={{width:'50%',margin:'auto'}}>
                <Form.Label>

                </Form.Label>
                <InputGroup className="mb-3" style={{fontSize: 30}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>TARİH</InputGroup.Text>
                    </InputGroup.Prepend>

                    <DatePicker
                        selected={props.form.tarih}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="dd mm yyyy h:mm aa"
                        timeCaption="time"
                        onChange={props.onHandlerDate}
                    />

                </InputGroup>
            </div>
            <div style={{marginTop: 30}}></div>
        </div>


    );
}

export default event12;
