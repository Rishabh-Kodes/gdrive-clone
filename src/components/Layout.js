import FilesSection from "./FilesSection";
import FolderSection from "./FolderSection";

const Layout = (props) => {
  return (
    <>
      <div className="app-title">
        <h2>My Drive</h2>
      </div>

      {/* Folders */}
      {props.data.folders && (
        <FolderSection
          folders={props.data.folders.filter(
            (item) => item.location === props.location
          )}
        />
      )}

      {/* Files */}
      {props.data.files && (
        <FilesSection
          files={props.data.files.filter(
            (item) => item.location === props.location
          )}
        />
      )}
    </>
  );
};

export default Layout;
