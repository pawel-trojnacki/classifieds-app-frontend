import { ChangeEvent, FC } from 'react';
import { Box, Tabs as MuiTabs, Tab } from '@material-ui/core';

interface Props {
  value: number;
  handleChange: (event: ChangeEvent<{}>, newValue: number) => void;
}

const Tabs: FC<Props> = ({ value, handleChange }) => {
  return (
    <Box marginY={{ xs: 4, md: 5 }}>
      <MuiTabs value={value} onChange={handleChange} variant="fullWidth">
        {['Sign in', 'Sign up'].map((label) => (
          <Tab key={label} label={label} data-cy="swith-auth-form" />
        ))}
      </MuiTabs>
    </Box>
  );
};

export default Tabs;
