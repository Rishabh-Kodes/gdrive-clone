import FilesSection from "./FilesSection";
import FolderSection from "./FolderSection";

const Layout = (props) => {
  return (
    <>
      <div className="app-title">
        <h2>My Drive</h2>
      </div>

      {props.data.folders && <FolderSection folders={props.data.folders} />}
      {props.data.files && <FilesSection files={props.data.files} />}
    </>
  );
};

export default Layout;
