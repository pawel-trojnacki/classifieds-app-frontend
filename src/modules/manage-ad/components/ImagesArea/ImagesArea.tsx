import { Dispatch, FC, SetStateAction } from 'react';
import { Grid } from '@material-ui/core';
import ImageField from '../ImageField';

interface Props {
  images: string[];
  filesToRemove: string[];
  setFilesToRemove: Dispatch<SetStateAction<string[]>>;
}

const ImagesArea: FC<Props> = ({ images, filesToRemove, setFilesToRemove }) => {
  const handleRemoveButtonClick = (image: string) => {
    setFilesToRemove((prevState) => [...prevState, image]);
  };

  const handleUndoButtonClick = (image: string) => {
    setFilesToRemove((prevState) => prevState.filter((file) => file !== image));
  };

  const isRemoved = (image: string) => filesToRemove.includes(image);
  return (
    <Grid container spacing={2}>
      {images.map((image) => (
        <ImageField
          key={image}
          image={image}
          isRemoved={isRemoved(image)}
          handleRemoveButtonClick={handleRemoveButtonClick}
          handleUndoButtonClick={handleUndoButtonClick}
        />
      ))}
    </Grid>
  );
};

export default ImagesArea;
