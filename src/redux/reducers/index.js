
import { ADD_DATA, DELETE_DATA, EDIT_DATA, SET_TABLE_DATA } from "../action/constant";



const initialState = {
  rows: [],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
    return{
        ...state,
        rows:[...state.rows,action.payload]
    }
    case SET_TABLE_DATA:
      return {
        ...state,
        rows: action.payload,
      };
    case EDIT_DATA:
    const index = state.rows.findIndex((product) => product.id === action.payload.id);
    if (index !== -1) {
      const updatedRows = [...state.rows];
      updatedRows[index] = action.payload;
      return {
        ...state,
        rows: updatedRows,
      };
    }
    return state;
    case DELETE_DATA:
    return {
      ...state,
      rows: state.rows.filter((product) => product.id !== action.payload),
    };
  
    default:
      return state;
  }
};



export default tableReducer;
