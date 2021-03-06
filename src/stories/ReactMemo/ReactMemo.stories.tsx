import React, {useState} from 'react';
import {Accordion} from '../../components/Accordion/Accordion';

export default {
    title: 'ReactMemo'
};


const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users');
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>;
};
const Users = React.memo(UsersSecret);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Venych', 'Prof', 'Max']);
    
    const addUsers = () => {
        const newUsers = [...users, 'Tolyan ' + new Date().getTime()];
        setUsers(newUsers);
    };
    
    users.push('Tolyan ' + new Date().getTime());
    
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>;
};

