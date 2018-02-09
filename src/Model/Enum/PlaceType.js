
const _places = {
    A: 'Airport',
    C: 'City',
    D: 'Station',
};

export default class PlaceType {
    /**
     * @returns {object}
     */
    static get places() {
        return _places;
    }

    /**
     * @param {string} placeType
     *
     * @returns {string|null}
     */
    static getDisplayableName(placeType) {
        if (PlaceType.places[placeType] === undefined) {
            return null;
        }

        return PlaceType.places[placeType];
    }
}
