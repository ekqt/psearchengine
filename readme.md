
# Programmable Search Engine

Programmable Search Engine (PSE) enables you to create a search engine for your website, your blog, or a collection of websites. You can configure your engine to search both web pages and images.

A PSE can be integrated into a website using Google's predefined javascript widget. However, for a more fine-grained control over search results, we will be using the PSE's Control Application Programming Interface (API).

Any concerns with Browser compatibility can be found [here](https://support.google.com/programmable-search/answer/4542173).

## Defining a PSE using Google's Control Panel
* Create a new search engine using [Control Panel](https://programmablesearchengine.google.com/create/new)
* If you want to search for images too, enable the **'Image Search'** setting.
* In the **'Sites to search'** section, add the pages you want to include in your search engine (in this case https://www.google.com/).
* Enable **'Search the entire web'** to Aagment your results with general Web Search results.

## PSE Search Elements
* A search query typed in the form text input field
* A script running the API calls and managing the results

## Custom Search JSON API 
The Custom Search JSON API lets you retrieve and display search results from PSEs programmatically. With this API, you can use **RESTful** requests to get either web search or image (in our case *both*) search results in [JSON](https://developers.google.com/custom-search/docs/glossary#json) format.

## Prerequisites
* Search Engine ID: which can be found [here](https://programmablesearchengine.google.com/cse/all).
* API Key: can be generated [here](https://developers.google.com/custom-search/v1/overview#api_key)

## Pricing
Custom Search JSON API provides 100 search queries per day for free. After 100 search queries, we will be programming error handling to disable service for our PSE.

## Making a Request
PSE's Control API is somewhat different from traditional [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer) APIs, instead of providing access to resources, it provides access to a service.

You can retrieve results for a particular search by sending an HTTP GET request to its URI. You pass in the details of the search request as query parameters. The format for the Custom Search JSON API URI is:

```javascript
  GET https://www.googleapis.com/customsearch/v1?[parameters]
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `key` | `string` | API Key |
| `cx` | `string` | Search engine ID  |
| `searchType` | `string` | Add if searching for Images|
| `q` | `string` | Search query |
| `start` | `string` | The index of the first result to return. |

***Note**: The JSON API will never return more than 100 results.*

### Example of an API call using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
This is how we would configure the requests for both a web and an image search query. We use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are literals delimited with backticks (`), allowing embedded expressions called substitutions.
```javascript
fetch(`https://www.googleapis.com/customsearch/v1?key=${APIKey}&cx=${searchEngineId}&q=${searchQuery}&start=${webStartIndex}`)
fetch(`https://www.googleapis.com/customsearch/v1?key=${APIKey}&cx=${searchEngineId}&searchType=image&q=${searchQuery}&start=${imageStartIndex}`)
```
PSE's Control API has been programmed using [asynchronous functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) declared with the *async* keyword, and the *await* keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains and to manage error handling.

## Demo

The full running project can be found deployed in Vercel using the following link: https://psearchengine.vercel.app/
  
## Contact me

* [Github](https://github.com/ekqt)
* [ekheinquarto@gmail.com](mailto:ekheinquarto@gmail.com)
* [Whatsapp](https://wa.me/420608984789)
* [Instagram](https://www.instagram.com/ekheinquarto/)