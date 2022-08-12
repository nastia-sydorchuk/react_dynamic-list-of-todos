import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import { Filter } from '../../types/Filter';

type Props = {
  selectValue: string,
  setSelectValue: (param: string) => void,
  setAppliedQuery: (appliedQuery: string) => void,
};

export const TodoFilter: React.FC<Props> = ({
  selectValue, setSelectValue, setAppliedQuery,
}) => {
  const [query, setQuery] = useState('');

  const applyQuery = useCallback(debounce(setAppliedQuery, 1000), []);

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={selectValue}
            onChange={(event) => setSelectValue(event.target.value)}
          >
            <option value={Filter.all}>{Filter.all}</option>
            <option value={Filter.active}>{Filter.active}</option>
            <option value={Filter.completed}>{Filter.completed}</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            applyQuery(event.target.value);
          }}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => {
                setQuery('');
                setAppliedQuery('');
              }}
            />
          </span>
        )}
      </p>
    </form>
  );
};