import Folder from "./Folder";

const Layout = (props) => {
  return (
    <>
      <div className="app-title">
        <h2>My Drive</h2>
      </div>

      <section className="folder-section">
        <div className="section-header">
          <h3 className="section-title">Folders</h3>

          <button>Create Folder</button>
        </div>

        <div className="drive-folders">
          {props.data.folders.map((item, index) => (
            <Folder data={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Layout;
