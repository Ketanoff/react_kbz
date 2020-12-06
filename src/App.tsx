import React, {useState} from 'react';
import s from './App.module.css';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';

// import Accordion from './'


function App (props: any) {
    
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [on, setOn] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    
    
    return (<div className={s.App}>
        <OnOff value={on} onClick={setOn}/>
        <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
        {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
        <Accordion titleValue={'Menu'}
                   items={[{title: 'Proff', value: 1},
                       {title: 'Max', value: 2},
                       {title: 'Venych', value: 3}]}
                   collapsed={accordionCollapsed} onChange={setAccordionCollapsed}
                   onClick={(id)=>{alert(`user with ID ${id} should be happy`)}}/>
        <UncontrolledRating onChange={() => (0)} defaultValue={0}/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
        
        
        {/*<Rating value={ 0 }/>*/}
        {/*<Rating value={ 1 }/>*/}
        {/*<Rating value={ 2 }/>*/}
        
        {/*<Rating value={ 4 }/>*/}
        {/*<Rating value={ 5 }/>*/}
    </div>);
}

// type PageTitlePropsType = {
// 	title: string
// }
export default App
