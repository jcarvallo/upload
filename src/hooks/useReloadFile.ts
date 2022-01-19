import { useState } from "react";

export const useReloadFile = () => {
    const [list, setList] = useState([]);
    const handleFile = (e: any) => {
      let lector = new FileReader();
      lector.onload = function (e: any) {
        let contenido = e.target.result;
        let list: any = [];
        for (const i of contenido.split(/\r?\n/)) {
          if (i !== "") list.push(i.split(/\t/));
        }
        setList(list);
      };
      lector.readAsText(e.target.files[0]);
    };
    return { handleFile, list };
}
