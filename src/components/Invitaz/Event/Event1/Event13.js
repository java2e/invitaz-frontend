import React from 'react';

import {Form, InputGroup} from 'react-bootstrap';


const event13 = (props) => {
    return (

        <div>
            <div className="ui input">

                <InputGroup className="mb-3" style={{width: '100%', textAlign: 'center', fontSize: 30}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>AÇIKLAMA</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control as="textarea" rows="3"
                                  value={props.form.aciklama}
                                  onChange={(event) => props.changed(event, 'aciklama')}
                    />
                </InputGroup>


            </div>
            <div style={{marginTop: 30}}></div>
        </div>


    );
}

export default event13;
