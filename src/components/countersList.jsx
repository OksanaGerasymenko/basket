import React, {useState} from 'react';
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        {id:0, value:0, name: "Ненужная вещь"},
        {id:1, value:2, name: "Ложка"},
        {id:2, value:4, name: "Вилка"},
        {id:3, value:1, name: "Пылесос"},
        {id:4, value:0, name: "Набор минималиста"},
    ]
    const [counters, setCounters] = useState(initialState);

    const handleDelete = (counterId) => {
        setCounters(counters.filter(counter => counter.id !== counterId));
    }

    const handleReset = () => {
        setCounters(initialState);
    }

    const handleIncrement = (counterId) => {
        setCounters(counters.map(counter => {
            if (counter.id === counterId) counter.value++;
            return counter;
        }))
    }

    const handleDecrement = (counterId) => {
        setCounters(counters.map(counter => {
            if (counter.id === counterId) counter.value--;
            return counter;
        }))
    }

    return <h4>
        {counters.map(counter => <Counter
                                    key={counter.id}
                                    {...counter}
                                    onDelete = {() => handleDelete(counter.id)}
                                    onIncrement = {() => handleIncrement(counter.id)}
                                    onDecrement = {() => handleDecrement(counter.id)}
                                    />)}
         <button className="btn btn-primary m-2 p-2" onClick={handleReset}>Reset</button>
    </h4>
}

export default CountersList;
