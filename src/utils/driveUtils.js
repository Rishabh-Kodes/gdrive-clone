const getDriveData = () => {
  const driveData = JSON.parse(localStorage.getItem("driveData")) || {
    folders: [],
    files: [],
  };

  return driveData;
};

const moveFile = (fileId, folderId) => {
  const driveData = getDriveData();

  try {
    for (var i = 0; i < driveData.files.length; i++) {
      if (driveData.files[i].id === parseInt(fileId)) {
        driveData.files[i].location = folderId;
        localStorage.setItem("driveData", JSON.stringify(driveData));
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const moveFolder = (folderId, destFolderId) => {
  const driveData = getDriveData();

  try {
    for (var i = 0; i < driveData.folders.length; i++) {
      if (driveData.folders[i].id === parseInt(folderId)) {
        driveData.folders[i].location = destFolderId;
        localStorage.setItem("driveData", JSON.stringify(driveData));
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const driveUtils = { getDriveData, moveFile, moveFolder };
