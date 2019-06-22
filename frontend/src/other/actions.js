const url = 'http://localhost:3000/';

const startRequest = () => ({
    type: 'START_REQUESET'
});

const responseToFetch = (data) => ({
    type: 'RECEIVE_TODOLIST',
    data
})

const responseToUpdate = (id, data) => ({
    type: 'UPDATE_TODO',
    id,
    data
});

const responseToAdd = (id, data) => ({
    type: 'ADD_TODO',
    id,
    data
});

const responseToDelete = (id) => ({
    type: 'DELETE_TODO',
    id
});

function shouldFetchPosts(state) {
    if (state.isFetching) {
      return false;
    } else {
      return true;
    }
  }
  

export function fetchIfNeeded(acton) {
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.
  
    // This is useful for avoiding a network request if
    // a cached value is already available.
  
    return (dispatch, getState) => {
      if (shouldFetchPosts(getState())) {
        // Dispatch a thunk from thunk!
        return dispatch(fetchAction(acton))
      } else {
        // Let the calling code know there's nothing to wait for.
        return Promise.resolve()
      }
    }
  }

export function fetchAction(action, data = []) {
    return function(dispatch) {
        
        let actionURL = url;
        let method = 'POST';
    
      dispatch(startRequest());
      
      switch (action) {
        case 'fetch_list':
            break;
        case 'add_todo':
            break;
        case 'update_todo':
            break;
        case 'delete_todo':
            break;
        default:
            break;
      }
  
      return fetch(actionURL, {
        method: method,
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
      })
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json =>{
            let responseData = JSON.parse(json);
            switch (action) {
                case 'fetch_list':
                    dispatch(responseToFetch(responseData));
                    break;
                case 'add_todo':
                    dispatch(responseToAdd());
                    break;
                case 'update_todo':
                    break;
                case 'delete_todo':
                    break;
                default:
                    break;
              }
            }
        );
    }
  }
