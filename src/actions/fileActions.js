import { fileConstants } from "../constants/fileConstancts";

const getFiles = () => {
  return (dispatch) => {
    const driveData = JSON.parse(localStorage.getItem("driveData"));

    if (!driveData) {
      dispatch(
        success({
          folders: [],
          files: [],
        })
      );
    } else {
      dispatch(success(driveData));
    }
  };

  function success(data) {
    return { type: fileConstants.GET_FILES_SUCCESS, data };
  }
};

const createFolder = (data) => {
  return (dispatch) => {
    const driveData = JSON.parse(localStorage.getItem("driveData"));
    const newFolder = {
      id: Date.now(),
      name: data.name,
      location: data._id,
    };

    driveData.folders.push(newFolder);

    dispatch(success(newFolder));
  };

  function success(data) {
    return { type: fileConstants.CREATE_FOLDER_SUCCESS, data };
  }
};

export const fileActions = {
  getFiles,
  createFolder,
};
