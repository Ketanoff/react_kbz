import React from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    comment: UncontrolledOnOff
}

export const UncontrolledMode = () => <UncontrolledOnOff onChange={x => x}/>
