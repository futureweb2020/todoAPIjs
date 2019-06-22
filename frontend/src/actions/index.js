export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
};

export const addAction = content => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId++,
  content
});

export const updateAction = id => ({
  type: actionTypes.UPDATE_TODO,
  id
});

export const deleteAction = id => ({
  type: actionTypes.DELETE_TODO,
  id
});

export const fetchActions = {
  
}
export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts(subreddit) {

  return function(dispatch) {

    dispatch(requestPosts(subreddit))
    /*
    GET: http://localhost:3000/todos
GET: http://localhost:3000/todos/:id
POST: http://localhost:3000/todos
PUT: http://localhost:3000/:id
DELETE: http://localhost:3000/:id*/

    return fetch(`http://localhost:3000/todos`)
      .then(response =>
        dispatch(receivePosts(subreddit, response.json()))
      )
  }
}