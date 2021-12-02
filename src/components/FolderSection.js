import Folder from "./Folder";

const FolderSection = (props) => {
  return (
    props.folders && (
      <section>
        <div className="section-header">
          <h3 className="section-title">Folders</h3>

          <button>Create Folder</button>
        </div>

        <div className="grid-6">
          {props.folders.map((item, index) => (
            <Folder data={item} key={index} />
          ))}
        </div>
      </section>
    )
  );
};

export default FolderSection;
