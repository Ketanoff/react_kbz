import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
};

export const SimpleExample = () => {
    console.log('SimpleExample');
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    });
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, []);
    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    });
    
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>;
};

