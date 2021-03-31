import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import {firestore} from "../../shared/firebase";

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

const getPostFB = () => {
  return function(dispatch, getState, {history}){
    const postDB = firestore.collection("post");

    postDB.get().then((docs)=>{
      let post_list = [];
      docs.forEach((doc)=>{
        let _post = {
          id: doc.id,
          ...doc.data()
        };
        let post ={
          id: doc.id,
          word: _post.word,
          description: _post.description,
          example: _post.example,
          insert_dt: _post.insert_dt,
        };
        post_list.push(post);
      })
      console.log(post_list);
      dispatch(setPost(post_list));
    })
  }
}

export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft)=>{
      draft.list = action.payload.post_list;
    }),
    [ADD_POST]: (state, action) => produce(state, (draft)=>{

    }),
  }, initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
}

export {actionCreators};