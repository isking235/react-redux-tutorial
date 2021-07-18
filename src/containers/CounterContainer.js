import React,{useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux'; //Hooks를 사용하여 컨테이너 컴포넌트 만들기
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease=useCallback(()=>dispatch(increase()), [dispatch]);
    const onDecrease=useCallback(()=>dispatch(decrease()), [dispatch]);


    return (
        <Counter 
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}            
        />
    );
};


export default CounterContainer;