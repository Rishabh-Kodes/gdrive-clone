import Layout from "./components/Layout";
const App = () => {
  const driveData = {
    folders: [
      { name: "Folder 1", files: {} },
      { name: "Folder 2", files: {} },
      { name: "Folder 3", files: {} },
    ],
    files: [
      { name: "File 1", data: "" },
      { name: "File 2", data: "" },
      { name: "File 3", data: "" },
    ],
  };

  return <Layout data={driveData} />;
};

export default App;
