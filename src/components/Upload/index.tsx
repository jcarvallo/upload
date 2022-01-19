import { FC } from "react";
import { FormGroup, Input, Label } from "reactstrap";

interface IUpload {
  handleFile: any;
}

const Upload: FC<IUpload> = ({ handleFile }) => {
  return (
    <FormGroup>
      <Label for="exampleFile">File</Label>
      <Input
        id="exampleFile"
        name="file"
        type="file"
        onChange={(e) => handleFile(e)}
      />
    </FormGroup>
  );
};

export default Upload;
