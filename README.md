# News Headlines Project

This project fetches News Headlines for 3 countries (United States,India,Germany) and displays 3 headlines per page and paginates the results in multiple pages.
Also this project has the search functionality to search for various headlines and like/hide functionality if user wants to like/hid the headline.

Project URL- https://emtrop-react-104l1bj7e-priyam1464.vercel.app/

## Tech Stack 

1. React Js
2. HTML5
3. CSS3
4. Javascript
5. Material UI


## Approach

So App.js which is the main parent of all components has the code for the tab layout for the 3 countries(US,India,Germany).
and routing is done through react router.Overall in all components we have used react functional components and react hooks.
Each headline has a like/hide functionality and the data for that is persisted in local storage
No context api or redux is used for state management.

### Components

1. Country News-This component takes country name as props and renders a list of cards of headlines relevant for a country.
   This component only renders a max of 3 headlines at a time
3. Headline-This component represents a single card of headline
4. SearchBar-This component is used to implement search functionality 
5. Pagination-This component is used to paginate the search results

### Custom Hooks

1. useLocalStorage-This is a custome hook used to set and get items in local storage.Used for persisiting like/hide
   headline data in local storage

### Services

1. NewsHeadlineService-This service is used to do an api call to fetch the news headlines.



