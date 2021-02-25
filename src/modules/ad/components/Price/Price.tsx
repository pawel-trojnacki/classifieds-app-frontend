import { FC } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { formatPrice } from 'utils/format-price';

interface Props {
  content: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    price: {
      fontWeight: 'bold',
      marginBottom: '5px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.1em',
      },
    },
  })
);

const Price: FC<Props> = ({ content }) => {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.price}>
      {formatPrice(content)}
    </Typography>
  );
};

export default Price;
