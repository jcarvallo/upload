import { useEffect, useState } from "react";
import axios from "axios";
import Upload from "./components/Upload";
import Download from "./components/Download";


import { useReloadFile } from "./hooks/useReloadFile";
import mime from "mime";

function App() {
  const [user, setUser] = useState([]);
  const { list, handleFile } = useReloadFile();

  const getapi = async () => {
    axios
      .request({
        method: "get",
        url: "http://localhost:8080/api/download",
        responseType: "blob",
      })
      .then((res: any) => {
        const ext: any = mime.getExtension(res.headers["content-type"]);
        const url = window.URL.createObjectURL(new Blob([res.data]));

        const link = document.createElement("a");
        link.href = url;
        const fileName = `${+new Date()}.${ext}`;  
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        link.remove(); 
      });
  };
 
  const handleDownload = () => getapi();

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
      <br></br>
      <Download handleDownload={handleDownload} />
    </div>
  );
}

export default App;
