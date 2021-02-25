import { FC } from 'react';
import { IconButton as MuiIconButton, Tooltip } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

interface Props {
  tooltip: string;
  white?: boolean;
  red?: boolean;
  link?: boolean;
  disabled?: boolean;
  edge?: 'start' | 'end' | false;
  onClick?: any;
  size?: 'small' | 'medium';
  ariaLabel?: string;
  ariaControls?: string;
  ariaHaspopup?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    white: {
      color: theme.palette.common.white,
    },
    red: {
      color: red[600],
    },
  })
);

export const IconButton: FC<Props> = ({
  children,
  tooltip,
  white = true,
  red,
  disabled,
  link,
  edge,
  size,
  onClick,
  ariaLabel,
  ariaControls,
}) => {
  const classes = useStyles();
  return (
    <Tooltip title={tooltip}>
      <MuiIconButton
        className={red ? classes.red : white ? classes.white : ''}
        component={link ? 'div' : 'button'}
        disabled={disabled}
        edge={edge}
        size={size || 'medium'}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-controls={ariaControls}
      >
        {children}
      </MuiIconButton>
    </Tooltip>
  );
};

export default IconButton;
