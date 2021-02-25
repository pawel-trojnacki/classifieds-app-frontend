import { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Ad } from 'types/ad.interface';
import AdListItem from '../AdListItem';
import ListItemLoader from '../ListItemLoader';

export interface Props {
  ads?: Ad[];
  favourites?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '920px',
      margin: '0 10px',
      padding: 0,
      textIndent: 0,
      [theme.breakpoints.up('sm')]: {
        margin: '0 5vw',
      },
      [theme.breakpoints.up('md')]: {
        margin: '0 auto',
      },
    },
  })
);

const AdList: FC<Props> = ({ ads, favourites }) => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {ads
        ? ads.map((ad) => (
            <AdListItem key={ad._id} ad={ad} favourites={favourites} />
          ))
        : [1, 2, 3].map((num) => <ListItemLoader key={num} />)}
    </ul>
  );
};

export default AdList;
