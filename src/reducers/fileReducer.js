import { fileConstants } from "../constants/fileConstancts";

const initialState = {
  driveData: { folders: [], files: [] },
};

export function fileReducer(state = initialState, action) {
  switch (action.type) {
    case fileConstants.GET_FILES_SUCCESS:
      return { driveData: action.data };
    default:
      return state;
  }
}
