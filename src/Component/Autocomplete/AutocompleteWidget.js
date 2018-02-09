
import React from 'react';
import PropTypes from 'prop-types';
import TextBox from './TextBox';
import ResultList from './ResultList';

export default class AutocompleteWidget extends React.Component {
    /**
     * @param {object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            noResults: false,
        };

        this.searchTimeout = null;
    }

    /**
     * @param {string} term
     */
    onInputChange(term) {
        clearTimeout(this.searchTimeout);

        if (!term || term.length === 1) {
            this.setState({ items: [], noResults: false, });
            return;
        }

        this.searchTimeout = setTimeout(() => { this.search(term); }, this.props.searchDelay);
    }

    /**
     * @param {string} term
     */
    search(term) {
        this.props.finderMethod(term, this.props.maxNumberOfResults)
            .then((result) => {
                if (result.numFound === 0) {
                    this.setState({ items: [], noResults: true, });
                    return;
                }

                this.setState({ items: result.items, noResults: false, });
            })
            .catch(() => {
                this.setState({ items: [], noResults: true, });
            });
    }

    /**
     * @returns {ReactElement}
     */
    render() {
        return (
            <div className="autocomplete-widget">
                <TextBox
                    id={this.props.textBoxAttributes.id}
                    placeholder={this.props.textBoxAttributes.placeholder}
                    onInputChange={this.onInputChange.bind(this)}
                />
                <ResultList
                    items={this.state.items}
                    noResults={this.state.noResults}
                />
            </div>
        );
    }
}

AutocompleteWidget.propTypes = {
    textBoxAttributes: PropTypes.objectOf(PropTypes.string).isRequired,
    finderMethod: PropTypes.func.isRequired,
    maxNumberOfResults: PropTypes.number.isRequired,
    searchDelay: PropTypes.number.isRequired,
};
