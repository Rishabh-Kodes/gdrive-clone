import File from "./File";

const FilesSection = (props) => {
  return (
    props.files && (
      <section>
        <div className="section-header">
          <h3 className="section-title">Files</h3>

          <button>Upload File</button>
        </div>

        <div className="grid-6">
          {props.files.map((item, index) => (
            <File data={item} key={index} />
          ))}
        </div>
      </section>
    )
  );
};

export default FilesSection;
