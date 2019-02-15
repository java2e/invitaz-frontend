import React from 'react';
import Women from "../../../../assets/images/femenine.png";

import { InputGroup,FormControl,Card,Button,Form} from 'react-bootstrap';


const event14 = (props) => {
    return (

        <div>
            <div className="ui input">


                <Form.Label>
                    <img src={Women} alt="MyBurger"/>
                </Form.Label>
                <InputGroup className="mb-3"  style={{width: '100%', textAlign: 'center', fontSize: 30}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>ADRES</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={props.form.lokasyon}
                        onChange={(event)=>props.changed(event,'lokasyon')}
                        placeholder="Adı Soyadı"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <div style={{marginTop: 30}}></div>
        </div>


    );
}

export default event14;
