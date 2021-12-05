import { fileConstants } from "../constants/fileConstancts";
import { driveUtils } from "../utils/driveUtils";

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
    const driveData = driveUtils.getDriveData();

    const newFolder = {
      id: Date.now(),
      name: data.name,
      location: data._id,
    };

    driveData.folders.push(newFolder);
    localStorage.setItem("driveData", JSON.stringify(driveData));

    dispatch(success(driveData));
  };

  function success(data) {
    return { type: fileConstants.CREATE_FOLDER_SUCCESS, data };
  }
};

const uploadFile = (data) => {
  return (dispatch) => {
    const driveData = driveUtils.getDriveData();

    const newFile = {
      id: Date.now(),
      name: data.name,
      data: data.file,
      type: data.type || "",
      location: data.location,
    };

    driveData.files.push(newFile);
    console.log(driveData);
    localStorage.setItem("driveData", JSON.stringify(driveData));

    dispatch(success(driveData));
  };

  function success(data) {
    return { type: fileConstants.UPLOAD_FILE_SUCCESS, data };
  }
};

export const fileActions = {
  getFiles,
  createFolder,
  uploadFile,
};
