
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ResultItem from './ResultItem';

export default class ResultList extends React.Component {
    /**
     * @returns {array}
     */
    getItems() {
        return this.props.items.map(item => <ResultItem item={item} key={item.placeKey} />);
    }

    /**
     * @returns {ReactElement}
     */
    render() {
        const listClass = classNames({
            'autocomplete-result-list': true,
            'hidden': this.props.items.length === 0 && !this.props.noResults,
        });

        return (
            <ul className={listClass} role="listbox">
                {this.getItems()}
                {this.props.noResults ? <li className="no-results">No results found</li> : null}
            </ul>
        );
    }
}

ResultList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    noResults: PropTypes.bool,
};
