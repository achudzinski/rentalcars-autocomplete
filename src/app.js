
// eslint-disable-next-line
import Config from 'config';
import React from 'react';
import ReactDOM from 'react-dom';
import AutocompleteWidget from './Component/Autocomplete/AutocompleteWidget';
import LocationFinder from "./Service/LocationFinder";

// eslint-disable-next-line
import style from './styles/app.scss';

const locationFinder = new LocationFinder(Config.autocompleteSearchUrl);
const container = document.getElementById('location-autocomplete-widget');

ReactDOM.render(
    <AutocompleteWidget
        textBoxAttributes={{
            id: "location",
            placeholder: "city, airport, station, region and district...",
        }}
        finderMethod={locationFinder.find.bind(locationFinder)}
        maxNumberOfResults={Config.maxNumberOfResults}
        searchDelay={Config.searchDelay}
    />,
    container
);
