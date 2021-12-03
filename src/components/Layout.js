import FilesSection from "./FilesSection";
import FolderSection from "./FolderSection";
import { useParams, Link } from "react-router-dom";

const Layout = (props) => {
  let { id } = useParams();
  const location = props.root ? 0 : parseInt(id);

  return (
    <>
      <div className="app-title">
        <h2>
          <Link to="/">My Drive</Link>
        </h2>
      </div>

      {/* Folders */}
      {props.data.folders && (
        <FolderSection
          folders={props.data.folders.filter(
            (item) => item.location === location
          )}
        />
      )}

      {/* Files */}
      {props.data.files && (
        <FilesSection
          files={props.data.files.filter((item) => item.location === location)}
        />
      )}
    </>
  );
};

export default Layout;
