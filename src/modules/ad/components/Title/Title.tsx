import { FC } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { sliceText } from 'utils/slice-text';

interface Props {
  content: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: '1.1em',
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.2em',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.3em',
      },
    },
  })
);

const Title: FC<Props> = ({ content }) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.title}
      variant="h6"
      variantMapping={{ h6: 'h2' }}
    >
      {sliceText(content)}
    </Typography>
  );
};

export default Title;
