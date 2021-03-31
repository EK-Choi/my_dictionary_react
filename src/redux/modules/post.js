import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
  list: [],
}

const initialPost = {
  word: "머선129",
  description: "무슨 일이야 의 사투리 표현의 변형",
  example: "아니 이게 머선129",
  insert_dt: "2021-02-27",
};

export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft)=>{

    }),
    [ADD_POST]: (state, action) => produce(state, (draft)=>{

    })
  }, initialState
);

const actionCreators = {
  setPost,
  addPost,
}

export {actionCreators};