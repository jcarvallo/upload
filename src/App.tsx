import { useEffect, useState } from "react";
import Upload from "./components/Upload";
import { useReloadFile } from "./hooks/useReloadFile";

function App() {
  const [user, setUser] = useState([]);
  const { list, handleFile } = useReloadFile();
  useEffect(() => {
    if (list.length > 0) {
      let data: any = [];
      for (const tr of list) {
        data.push({ name: tr[0], lastName: tr[1], cuil: tr[2], gender: tr[3] });
      }
      setUser(data);
    }
  }, [list]);
  useEffect(() => console.log(user), [user]);
  return (
    <div className="App">
      <Upload handleFile={handleFile} />
    </div>
  );
}

export default App;
