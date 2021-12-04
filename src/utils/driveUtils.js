const moveFile = (fileId, folderId) => {
  const driveData = JSON.parse(localStorage.getItem("driveData"));

  try {
    driveData.files.filter((item, index) => {
      if (item.id === parseInt(fileId)) {
        console.log(item.name);

        driveData.files[index].location = folderId;
        localStorage.setItem("driveData", JSON.stringify(driveData));
      }
    });
  } catch (error) {}
};

export { moveFile };
