import { ChangeEvent, FC, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { RootState } from 'store/root/store';
import { setFilter } from 'store/filters/actions';
import { FiltersType } from 'store/filters/reducer';

const SearchInput: FC = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const { search, page } = filters;
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>(search);

  const sendQuery = (query: string) => {
    if (page > 1) {
      dispatch(setFilter({ filter: FiltersType.Page, value: 1 }));
    }
    dispatch(setFilter({ filter: FiltersType.Search, value: query }));
  };

  const delayedQuery = useRef(debounce((q) => sendQuery(q), 500)).current;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    delayedQuery(value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel htmlFor="search-input">Search</InputLabel>
        <Input
          id="search-input"
          value={query}
          onChange={handleInputChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default SearchInput;
