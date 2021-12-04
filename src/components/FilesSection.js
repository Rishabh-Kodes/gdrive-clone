import File from "./File";

const FilesSection = (props) => {
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      console.log("file", base64);
    });
  };
  return (
    props.files && (
      <section>
        <div className="section-header">
          <h3 className="section-title">Files</h3>

          <div className="upload-btn-wrapper">
            <button>Upload File</button>
            <input type="file" onChange={imageUpload} />
          </div>
        </div>

        {props.files.length > 0 ? (
          <div className="grid-6">
            {props.files.map((item, index) => (
              <File data={item} key={index} />
            ))}
          </div>
        ) : (
          <p className="no-files">No files</p>
        )}
      </section>
    )
  );
};

export default FilesSection;
