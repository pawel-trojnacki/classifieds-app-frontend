import { FC } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBackIos as BackIcon } from '@material-ui/icons';
import Link from 'modules/common/components/Link';

const useStyles = makeStyles({
  icon: {
    maxHeight: '16px',
    margin: 'auto 0',
  },
});

const Component: FC = () => {
  const classes = useStyles();
  return (
    <Link to="/" white>
      <Button color="inherit" component="span">
        <BackIcon className={classes.icon} />
        Back
      </Button>
    </Link>
  );
};

export default Component;
