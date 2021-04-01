import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import {firestore} from "../../shared/firebase";
import moment from "moment";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
  list: [],
}

const initialPost = {
  word: "",
  description: "",
  example: "",
  insert_dt: moment().format("YYYY-MM-DD"),
};

const addPostFB = (word, description, example) => {
  return function(dispatch, getState, {history}){
    const postDB = firestore.collection("post");
    const _post = {
      ...initialPost,
      word: word,
      description: description,
      example: example,
      insert_dt: moment().format("YYYY-MM-DD")
    };

    postDB.add({..._post}).then((doc) => {
      let post = {..._post, id:doc.id};
      dispatch(addPost(post));
      history.replace("/");
    }).catch((err) => {
      console.log("post 작성 실패", err);
    })
  }
}

const getPostFB = () => {
  return function(dispatch, getState, {history}){
    const postDB = firestore.collection("post");

    postDB.get().then((docs)=>{
      let post_list = [];
      docs.forEach((doc)=>{
        let _post = doc.data();
        let post = Object.keys(_post).reduce((acc,cur) => {
          return{...acc, [cur]: _post[cur]}
        },{id: doc.id});
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
      draft.list.unshift(action.payload.post);
    }),
  }, initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB
}

export {actionCreators};