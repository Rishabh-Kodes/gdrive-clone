const File = (props) => {
  const handleOnDragStart = (e, id) => {
    e.dataTransfer.setData("_id", id);
    e.dataTransfer.setData("type", "file");
  };

  const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64Data.split(",")[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    const blobUrl = URL.createObjectURL(blob);

    return blobUrl;
  };

  return (
    <a
      href={b64toBlob(props.data.data, props.data.type)}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className="file"
        title={props.data.name}
        draggable
        onDragStart={(e) => handleOnDragStart(e, props.data.id)}
      >
        <div className="file-thumbnail">
          {props.data.type.split("/")[0] === "image" ? (
            <img src={props.data.data} alt={props.data.name} />
          ) : (
            <img src="/file.png" alt={props.data.name} />
          )}
        </div>
        <div className="file-head">
          <div className="file-icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="file"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="rgb(95, 99, 104)"
                d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
              ></path>
            </svg>
          </div>

          <div className="file-name">{props.data.name}</div>
        </div>
      </div>
    </a>
  );
};

export default File;
