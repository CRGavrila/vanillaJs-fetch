Simple vanillajs fetcher for posts&comments from https://jsonplaceholder.typicode.com/

0. I used webpack to make dev easyer

1. Project uses MVC pattern

2. When localhost is initiated, it will fetch for all comments, paginated
  - number of articles rendered on page could be changed in: src\js\config.js

3. In model is state management with additional fetch requests

4. Assignation was to render comments&posts that are called by get function in: js\utils\index.js

5. The project uses fontawesome 5

# How to run?
  yarn & yarn dev

!! This will not work on IE do to javascript fetch, css variables
