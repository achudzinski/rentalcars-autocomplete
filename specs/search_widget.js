
describe('Using search widget ', function() {

    const driver = browser.driver;
    const location = element(by.id('location'));

    function typeInFieldAndWaitForAjax(term) {
        browser.get('/app/');
        location.sendKeys(term);
        driver.sleep(1500);
    }

    it('displays search widget', function() {
        browser.get('/app/');

        const container = element.all(by.id('search-form-container'));
        expect(container.isPresent()).toBeTruthy();

        const label = element(by.tagName('#location-fieldset label'));
        expect(label.getText()).toEqual('Pick-up Location');

        const input = element.all(by.tagName('#location-fieldset input'));
        expect(input.isPresent()).toBeTruthy();
    });

    it('contains placeholder', function() {
        browser.get('/app/');

        const input = element(by.tagName('#location-fieldset input'));
        expect(input.getAttribute('placeholder')).toBe(
            'city, airport, station, region and district...'
        );
    });

    it('does not search when only one character has been typed', function() {
        typeInFieldAndWaitForAjax('n');

        const resultContainer = element(by.css('.autocomplete-result-list'));
        expect(resultContainer.getAttribute('class')).toContain('hidden');

        const foundItems = element.all(by.css('.autocomplete-result-list li'));
        expect(foundItems.count()).toBe(0);
    });

    it('searches when two or more characters have been typed', function() {
        typeInFieldAndWaitForAjax('ne');

        const resultContainer = element(by.css('.autocomplete-result-list'));
        expect(resultContainer.getAttribute('class')).not.toContain('hidden');

        const foundItems = element.all(by.css('.autocomplete-result-list li'));
        expect(foundItems.count()).toBeGreaterThan(0);

    });

    it('displays no more than six results', function() {
        typeInFieldAndWaitForAjax('new');

        const foundItems = element.all(by.css('.autocomplete-result-list li'));
        expect(foundItems.count()).toBe(6);
    });

    it('displays message if there is no results', function() {
        typeInFieldAndWaitForAjax('XXXXXXX');

        const resultContainer = element(by.css('.autocomplete-result-list'));
        expect(resultContainer.getText()).toBe('No results found');
        expect(resultContainer.getAttribute('class')).not.toContain('hidden');

        const foundItems = element.all(by.css('.autocomplete-result-list li'));
        expect(foundItems.count()).toBe(1);
        expect(foundItems.get(0).getAttribute('class')).toBe('no-results');
    });

    it('hides list of results if only one character is left in field', function() {
        typeInFieldAndWaitForAjax('ne');

        const foundItems = element.all(by.css('.autocomplete-result-list li'));
        expect(foundItems.count()).toBeGreaterThan(0);

        location.sendKeys(protractor.Key.BACK_SPACE);
        driver.sleep(1500);

        const foundItemsAfterSecondSearch = element.all(by.css('.autocomplete-result-list li'));
        expect(foundItems.count()).toBe(0);

        const resultContainer = element(by.css('.autocomplete-result-list'));
        expect(resultContainer.getAttribute('class')).toContain('hidden');
    });
});