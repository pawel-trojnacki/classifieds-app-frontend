import { FC, useState } from 'react';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import IconButton from 'modules/common/components/IconButton';
import Link from 'modules/common/components/Link';
import Dialog from '../Dialog';

interface Props {
  _id: string;
}

const Actions: FC<Props> = ({ _id }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <>
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
          onClick={handleDialogOpen}
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <Dialog open={open} handleClose={handleDialogClose} _id={_id} />
    </>
  );
};

export default Actions;
