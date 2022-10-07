import axios from "axios";

function request(namespace) {
    return {
      type: `${namespace}/GET_REQUEST`,
    };
  }
  
  function success(namespace, data) {
    return {
      type: `${namespace}/GET_SUCCESS`,
      data,
    };
  }
  
  function failure(namespace, error) {
    return {
      type: `${namespace}/GET_FAILURE`,
      error,
    };
  }
export function getRandomUsersAction(namespace){
    return dispatch => {
        dispatch(request(namespace));
        axios.get(namespace)
          .then(res => {
            if (res.data.errorCode) {
             console.log('Error:',res.data.errorCode);
            } else {
              dispatch(success(namespace, res.data));
            }
          })
          .then(() => {
          })
          .catch((error) => {
            dispatch(failure(namespace, error));
            console.log('Error:',error);
          });
      };
}