import Layout from "./components/Layout";
import { useEffect } from "react";
import { fileActions } from "./actions/fileActions";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // let driveData = {
  //   folders: [
  //     { id: 1638473894775, name: "Folder 1", location: 0 },
  //     { id: 1638473987675, name: "Folder 2", location: 0 },
  //     { id: 1638473988195, name: "Folder 3", location: 0 },
  //     { id: 1638473988709, name: "Folder 4", location: 1638473987675 },
  //   ],
  //   files: [
  //     { id: 1638474022890, name: "File 1", data: "", location: 0 },
  //     { id: 1638474054111, name: "File 2", data: "", location: 0 },
  //     { id: 1638474053487, name: "File 3", data: "", location: 0 },
  //     { id: 1638474053014, name: "File 4", data: "", location: 1638473987675 },
  //     { id: 1638474051701, name: "File 5", data: "", location: 1638473987675 },
  //   ],
  // };

  // localStorage.setItem("driveData", JSON.stringify(driveData));

  const driveData = useSelector((state) => state.driveData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fileActions.getFiles());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout data={driveData} root={true} />} />
        <Route path="/:id" element={<Layout data={driveData} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
