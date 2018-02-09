
import React from 'react';
import PropTypes from 'prop-types';
import PlaceType from "../../Model/Enum/PlaceType";

export default class ResultItem extends React.Component {
    /**
     * @returns {ReactElement}
     */
    render() {
        const { item, } = this.props;

        return (
            <li role="menuitem">
                {PlaceType.getDisplayableName(item.placeType)},
                {item.name},
                {item.city},
                {item.country}
            </li>
        );
    }
}

ResultItem.propTypes = {
    item: PropTypes.object.isRequired,
};
