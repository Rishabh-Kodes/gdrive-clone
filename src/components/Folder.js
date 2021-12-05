import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { driveUtils } from "../utils/driveUtils";
import { fileActions } from "../actions/fileActions";

const Folder = (props) => {
  const dispatch = useDispatch();

  const handleOnDrop = (e, folderId) => {
    let _id = e.dataTransfer.getData("_id");
    let type = e.dataTransfer.getData("type");

    if (type === "file") {
      driveUtils.moveFile(_id, folderId);
    } else if (type === "folder") {
      driveUtils.moveFolder(_id, folderId);
    }

    dispatch(fileActions.getFiles());
  };

  const handleOnDragStart = (e, id) => {
    e.dataTransfer.setData("_id", id);
    e.dataTransfer.setData("type", "folder");
  };

  return (
    <Link to={`/${props.data.id}`}>
      <div
        className="folder"
        draggable
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleOnDrop(e, props.data.id)}
        onDragStart={(e) => handleOnDragStart(e, props.data.id)}
      >
        <div className="folder-icon">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="folder"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="rgb(95, 99, 104)"
              d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"
            ></path>
          </svg>
        </div>

        <div className="folder-name">{props.data.name}</div>
      </div>
    </Link>
  );
};

export default Folder;
