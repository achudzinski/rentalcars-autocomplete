
<h1>Rentalcars Pick-up Location</h1>

<h2>Backend endpoint</h2>

The application is configured to use endpoint mentioned in Test 2 (https://cors.io/...), but sometimes it returns error:

```
Over Quota
This application is temporarily over its serving quota. Please try again later.
```

in that case it can be change on 
```
https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows={number_of_results_required}&solrTerm={search_term}
```

in configuration file `config/config.dev.json`.

<h2>Install</h2>

```bash
npm install
```

<h2>Usage</h2>

```bash
npm run webpack:watch
```

Application is available on address <a href="http://localhost:8081/app/">http://localhost:8081/app/</a>. 

If port 8081 is already used, it can be changed in webpack.config.js.

<h2>Tests</h2>

To run end-to-end tests run:

```bash
npm run e2e-test
```

