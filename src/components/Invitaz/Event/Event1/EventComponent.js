import React from 'react';

import Event1 from '../Event1/Event1';
import Event12 from '../Event1/Event12';
import Event13 from '../Event1/Event13';
import Event14 from '../Event1/Event14';
import Event15 from '../Event1/Event15';


const eventComponent = (props) => {
    if (props.current === 0) {
        return <Event1 changed={props.onChangeInput} form={props.form}/>
    }
    if (props.current === 1) {
        return <Event12 form={props.form}  onHandlerDate={props.onHandlerDate}/>
    }
    if (props.current === 2) {
        return <Event13 form={props.form} changed={props.onChangeInput}/>
    }
    if (props.current === 3) {
        return <Event14 form={props.form} changed={props.onChangeInput}/>
    }
    if (props.current === 4) {
        return <Event15 form={props.form} changed={props.onChangeInput}/>
    }

    return <Event1 changed={props.onChangeInput} form={props.form}/> ;


}

export default eventComponent;
