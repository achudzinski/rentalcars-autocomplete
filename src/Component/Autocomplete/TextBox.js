
import React from 'react';
import PropTypes from 'prop-types';

export default function TextBox({ id, placeholder, onInputChange, }) {
    return (<input
        id={id}
        autoComplete="off"
        placeholder={placeholder}
        onChange={ e => onInputChange(e.target.value) }
        aria-required="true"
        aria-autocomplete="list"
        aria-haspopup="true"
    />);
}

TextBox.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
};
