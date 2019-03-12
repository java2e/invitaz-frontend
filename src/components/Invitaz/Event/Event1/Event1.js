import React from 'react';
import { InputGroup,FormControl,Form} from 'react-bootstrap';

import Men from '../../../../assets/images/masculine.png';
import Women from '../../../../assets/images/femenine.png';




const event1 = (props) => {
    return (

        <div>

            <div style={{margin:'auto',width: '100%'}}>
                <Form.Label>
                    <img src={Women} alt="MyBurger"/>
                </Form.Label>
                <InputGroup className="mb-3"  style={{width: '100%', textAlign: 'center', fontSize: 30}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>KADIN</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        onChange={(event)=>props.changed(event,'adSoyad1')}
                        value={props.form.adSoyad1}
                        placeholder="Adı Soyadı"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>

            <div style={{marginTop: 30}}></div>
            <div style={{margin:'auto',width: '100%'}}>
                <Form.Label>
                    <img src={Men} alt="MyBurger"/>
                </Form.Label>
                <InputGroup className="mb-3"  style={{width: '100%', textAlign: 'center', fontSize: 30}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>ERKEK</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        onChange={(event)=>props.changed(event,'adSoyad2')}
                        value={props.form.adSoyad2}
                        placeholder="Adı Soyadı"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>

        </div>


    );
}

export default event1;
