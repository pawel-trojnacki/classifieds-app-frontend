import { FC } from 'react';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import IconButton from 'modules/common/components/IconButton';
import Link from 'modules/common/components/Link';

interface Props {
  _id: string;
}

const Actions: FC<Props> = ({ _id }) => {
  const handleDeleteButtonClick = () => {
    console.log('ok');
  };
  return (
    <div>
      <Link to={`/edit/${_id}`}>
        <IconButton
          tooltip="Edit ad"
          ariaLabel="delete ad"
          link
          size="small"
          white={false}
        >
          <EditIcon />
        </IconButton>
      </Link>
      <IconButton
        tooltip="Delete ad"
        ariaLabel="delete ad"
        size="small"
        white={false}
        onClick={handleDeleteButtonClick}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Actions;
