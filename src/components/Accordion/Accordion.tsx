import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    collapsed: boolean
    titleValue: string
    onChange: (value: boolean) => void
    items: ItemType[]
    onClick: (value: boolean) => void
}

export function Accordion (props: AccordionPropsType) {
    
    return (<div>
        <AccordionTitle title={props.titleValue}
                        collapsed={props.collapsed}
                        onChange={props.onChange}
        />
        {/*<button onClick={() =>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>)
}

export type AccordionTitlePropsType = {
    collapsed: boolean
    title: string
    onChange: (value: boolean) => void
}

function AccordionTitle (props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onChange(!props.collapsed)}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody (props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
    
}
