import { FC } from "react";
import { Button } from "reactstrap";
interface IPropsDownload {
  handleDownload: () => void;
}

const Download: FC<IPropsDownload> = ({ handleDownload }) => {
  return (
    <div>
      <Button color="primary" onClick={() => handleDownload()}>
        Download
      </Button>
    </div>
  );
};

export default Download;
