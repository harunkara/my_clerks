/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable no-plusplus */

const initialState = {
    loading: false,
    data: [],
    error: null,
};
  
export const getRandomUsersReducer = (namespace) => (state = initialState, action) => {
    switch (action.type) {
    case `${namespace}/GET_REQUEST`: {
        return {
            ...state,
            loading: true,
            success: false,
        };
    }
    case `${namespace}/GET_SUCCESS`: {
        return {
            ...state,
            data: action.data.results,
            loading: false,
            success: true,
        };
    }
    case `${namespace}/GET_FAILURE`: {
        return {
            ...state,
            error: action.error,
            loading: false,
            data: [],
            success: false,
  
        };
    }
    default:
        return state;
    }
};
  