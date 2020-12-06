import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title  : 'Accordion',
    comment: Accordion
}

const callback = action('on or off clicked')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () =>
    <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}
               onClick={onClickCallback}/>
export const UsersUnCollapsedMode = () =>
    <Accordion titleValue={'Users'} collapsed={false} onChange={callback}
               items={[{title: 'Proff', value: 1}, {title: 'Max', value: 2}, {title: 'Venych', value: 3}]}
               onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)} items={
        [{title: 'Proff', value: 1},
            {title: 'Max', value: 2},
            {title: 'Venych', value: 3}]}
                      onClick={onClickCallback}/>
}
