
import 'whatwg-fetch';

export default class LocationFinder {
    /**
     * @param {string} url - url to the endpoint. It should contain two parameters:
     *  - {number_of_results_required}
     *  - {search_term}
     */
    constructor(url) {
        this.url = url;
    }

    /**
     * @param {string} term
     * @param {number} maxResults
     * @returns {Promise.<{numFound: number, items: array}>}
     */
    find(term, maxResults) {
        const url = this.url
            .replace('{number_of_results_required}', maxResults)
            .replace('{search_term}', encodeURIComponent(term));

        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then(response => response.json())
            .then(json => ({ numFound: json.results.numFound, items: json.results.docs, }));
    }
}
