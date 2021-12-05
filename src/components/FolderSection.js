import { useState } from "react";
import { useDispatch } from "react-redux";
import { fileActions } from "../actions/fileActions";
import Folder from "./Folder";

const FolderSection = (props) => {
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [folderName, setFolderName] = useState("");

  const dispatch = useDispatch();

  const handleCancel = () => {
    setShowCreateFolder(false);
  };

  const handelCreate = () => {
    setShowCreateFolder(false);
    if (folderName !== "") {
      dispatch(
        fileActions.createFolder({ name: folderName, _id: props.location })
      );
    }
    setFolderName("");
  };

  return (
    props.folders && (
      <>
        <section>
          <div className="section-header">
            <h3 className="section-title">Folders</h3>

            <button onClick={() => setShowCreateFolder(true)}>
              Create Folder
            </button>
          </div>

          {props.folders.length > 0 ? (
            <div className="grid-6">
              {props.folders.map((item, index) => (
                <Folder data={item} key={index} />
              ))}
            </div>
          ) : (
            <p className="no-files">No folders</p>
          )}
        </section>

        {showCreateFolder && (
          <div className="modal">
            <div className="create-folder">
              <div className="title">New folder</div>

              <input
                type="text"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                autoFocus
              />
              <div className="buttons">
                <button className="btn-white" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn-white create-btn" onClick={handelCreate}>
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  );
};

export default FolderSection;
