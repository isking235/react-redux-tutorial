//redux-actions적용
import {createAction, handleActions} from 'redux-actions';

/*액션 타입 정의 하기*/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함수
export const increase = createAction(INCREASE); //redux-actions 적용
export const decrease = createAction(DECREASE); //redux-actions 적용

//초기 상태 및 리듀서 함수 만들기
const initialState = {
	number : 0
};

const counter = handleActions(
	{
		[INCREASE]: (state, action) => ({number: state.number + 1}),
		[DECREASE]: (state, action) => ({number: state.number - 1}),
	},
	initialState,
);

export default counter;