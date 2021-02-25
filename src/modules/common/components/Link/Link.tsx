import { forwardRef, ReactNode, Ref } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  children: ReactNode;
  to: string;
  white?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
    white: {
      textDecoration: 'none',
      color: theme.palette.common.white,
    },
  })
);

const Link = (
  { children, to, white }: Props,
  ref: Ref<HTMLAnchorElement | null>
) => {
  const classes = useStyles();
  return (
    <RouterLink
      ref={ref}
      to={to}
      className={white ? classes.white : classes.root}
    >
      {children}
    </RouterLink>
  );
};

export default forwardRef(Link);
