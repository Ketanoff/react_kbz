import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    comment: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff value={true} onClick={callback}/>
export const OffMode = () => <OnOff value={false} onClick={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff value={value} onClick={setValue}/>
}