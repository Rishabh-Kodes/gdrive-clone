const Folder = (props) => {
  return (
    <div className="folder">
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
            class=""
          ></path>
        </svg>
      </div>

      <div className="folder-name">{props.data.name}</div>
    </div>
  );
};

export default Folder;
