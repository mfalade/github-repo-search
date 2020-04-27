import React from 'react';
import PropTypes from 'prop-types';

import { Form, TextInput, SubmitButton } from './styles';

function SearchForm({ onFormSubmit, onValueChange, value }) {
  return (
    <Form onSubmit={onFormSubmit}>
      <TextInput
        type="text"
        value={value}
        onChange={onValueChange}
        placeholder="Start typing to search"
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
