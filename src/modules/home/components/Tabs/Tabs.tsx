import { FC, ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Paper, Tabs as MuiTabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RootState } from 'store/root/store';
import { categories } from '../../constants/categories';
import Tab from '../Tab';
import Parallax from 'modules/common/components/Parallax';

const useStyles = makeStyles({
  root: {
    width: '100%',
    boxShadow: '0px 5px 5px -5px rgba(0, 0, 0, 0.5)',
  },
});

const Image: FC<{ icon: string; name: string }> = ({ icon, name }) => (
  <img src={icon} alt={name} />
);

const Tabs: FC = () => {
  const classes = useStyles();

  const category = useSelector((state: RootState) => state.filters.category);
  const currentValue = categories.findIndex((cat) => cat.name === category);

  const [value, setValue] = useState(currentValue);
  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Parallax>
      <Paper className={classes.root}>
        <Box maxWidth="1440px" marginX="auto" paddingTop={8}>
          <MuiTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="primary"
            aria-label="categories of classifieds"
          >
            {categories.map(({ name, component }) => (
              <Tab
                key={name}
                label={name}
                icon={<Image icon={component} name={name} />}
              />
            ))}
          </MuiTabs>
        </Box>
      </Paper>
    </Parallax>
  );
};

export default Tabs;
