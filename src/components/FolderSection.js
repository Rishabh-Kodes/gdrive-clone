import { useState } from "react";
import Folder from "./Folder";

const FolderSection = (props) => {
  const [showCreateFolder, setShowCreateFolder] = useState(true);
  const [folderName, setFolderName] = useState("");

  const handleCancel = () => {
    setShowCreateFolder(false);
  };

  const handelCreate = () => {
    console.log(folderName);
    setShowCreateFolder(false);
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

          <div className="grid-6">
            {props.folders.map((item, index) => (
              <Folder data={item} key={index} />
            ))}
          </div>
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