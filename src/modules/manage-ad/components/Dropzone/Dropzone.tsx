import { Dispatch, FC, SetStateAction } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';

interface Props {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  limit?: number;
}

const Dropzone: FC<Props> = ({ files, setFiles, limit }) => {
  const handleDropzoneChange = (files: File[]) => {
    setFiles(files);
  };
  return (
    <DropzoneArea
      initialFiles={files}
      acceptedFiles={['image/jpeg', 'image/png']}
      filesLimit={limit ?? 5}
      onChange={handleDropzoneChange}
    />
  );
};

export default Dropzone;
