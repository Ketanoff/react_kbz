import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'UseMemo_UseCallback'
};
export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    
    let resultA = 1;
    let resultB = 1;
    
    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            resultA = resultA * i;
        }
        return resultA;
    }, [a]);
    
    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }
    
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>;
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users');
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>;
};
const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Venych', 'Prof', 'Max']);
    
    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray;
    }, [users]);
    
    const addUsers = () => {
        const newUsers = [...users, 'Tolyan ' + new Date().getTime()];
        setUsers(newUsers);
    };
    
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>;
};

export const LikeUseCallback = () => {
    console.log('LikeUseCallback');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'CSS', 'JS', 'HTML']);
    
    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books);
            const newBooks = [...books, 'Angularc ' + new Date().getTime()];
            setBooks(newBooks);
        };
    }, [books]);
    
    const memoizedAddBook2 = useCallback(() => {
        console.log(books);
        const newBooks = [...books, 'Angularc ' + new Date().getTime()];
        setBooks(newBooks);
        ;
    }, [books]);
    
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>;
};

type BookSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log('BooksSecret');
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>;
};

const Book = React.memo(BooksSecret);