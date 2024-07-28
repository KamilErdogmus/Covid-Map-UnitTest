# Covid Map with React Unit Test

## Description

This project is a Covid-19 statistics map application built with React. It includes unit testing to ensure the functionality and reliability of the app.

## APIS

- [Covid-19 Statistics API](https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/playground/apiendpoint_ef9e1955-666c-43ba-9b5c-4b463ae316dc).
- [Rest Countries API](https://restcountries.com/).

## Features

- Display Covid-19 statistics on a world map
- Filter data by country and date
- Interactive map with detailed statistics for each country
- Responsive design for mobile and desktop views
- Data visualization using charts and graphs

## Libraries

- **react-router-dom**: Routing for React applications.
- **react-icons**: Popular icons as React components.
- **tailwind**: Utility-first CSS framework.
- **react-simple-maps**: SVG maps in React.
- **@reduxjs/toolkit**: Tools for efficient Redux development.
- **react-redux**: React bindings for Redux.
- **@testing-library/user-event@14.0**: Simulates user interactions in tests.
- **axios**: Promise-based HTTP client.
- **react-testing-library**: Testing utilities for React components.
- **jest**: JavaScript testing framework.
- **redux-mock-store**: Mock Redux store for testing.
- **redux-thunk**: Middleware for async Redux actions.
- **react-loader-spinner**: Loading spinner components.
- **millify**: Converts long numbers to readable format.

## Using Elements

- [Uiverse.io-Retry Button](https://uiverse.io/namecho/slippery-moth-23)
- [Uiverse.io-Back Button](https://uiverse.io/Jedi-hongbin/modern-sloth-8)

## Preview

![](/public/%C4%B0ceCream.gif)

## Deployment

The project is deployed and can be accessed [here](https://covid-map-unit-test-nu.vercel.app/). For the project to run smoothly, please follow the installation steps below to set it up locally. Note that the project may behave differently across different browsers.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

````bash
git clone https://github.com/KamilErdogmus/Covid-Map-UnitTest.git

2. Navigate to the project directory:

```bash
cd your-repository
````

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your web browser and visit http://localhost:3000 to view the application.

## Testing

To ensure the quality and functionality of the app, we have included unit tests. Follow the steps below to run the tests:

1. **Run the tests**:

   ```bash
   npm test
   ```

2. **Testing Details**:

   - The tests cover various components and functionalities of the application.
   - Tests simulate user interactions such as clicking buttons and filling forms using `@testing-library/user-event`.
   - The test suite is managed by `jest` and ensures that the components render correctly, handle user input, and interact with the mock server as expected.
