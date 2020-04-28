import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';

import { Form, TextInput, SubmitButton } from './styles';

function SearchForm({ onFormSubmit, onValueChange, value }) {
  const textInputRef = createRef();

  useEffect(() => {
    const element = textInputRef.current;
    element && element.focus();
  }, [textInputRef]);

  return (
    <Form onSubmit={onFormSubmit}>
      <TextInput
        data-cy="search-input"
        type="text"
        placeholder="Start typing to search"
        ref={textInputRef}
        value={value}
        onChange={onValueChange}
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
}

SearchForm.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  onFormSubmit: PropTypes.func,
};
SearchForm.defaultProps = {
  value: '',
  onValueChange: () => {},
  onFormSubmit: () => {},
};

export default SearchForm;
