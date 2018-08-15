# React, Redux, React Router v4, Firebase, Netlify: Events

## Links
- [Intro to Firebase and React, CSS-Tricks](https://css-tricks.com/intro-firebase-react/)
- [How to Create a Reddit Clone Using React and Firebase, SitePoint](https://www.sitepoint.com/reddit-clone-react-firebase/)
- [React Redux Firebase CRUD App with Authentication, Section 1: 3](https://www.udemy.com/react-redux-firebase/learn/v4/t/lecture/9249426?start=0)
- [Programmatically navigate with React Router](https://tylermcginnis.com/react-router-programmatically-navigate/)
-[Pass props to a component rendered by React Router](https://tylermcginnis.com/react-router-pass-props-to-components/)
- [How to Integrate React with Firebase](https://www.youtube.com/watch?v=vmLaZafaw9E&index=6&list=PLbG4OyfwIxjFKJE_ZVZxsSt1ESc9S7kFb)
- [How to Deploy a React Application (with Netlify)](https://www.youtube.com/watch?v=lCcBEDPTk4o&index=10&list=PLbG4OyfwIxjFKJE_ZVZxsSt1ESc9S7kFb)
- [ReactJS: Upload Image to Firebase storage and Display on web, ConCat 7, YouTube](https://www.youtube.com/watch?v=YR4roPyfDQU)
- [Firebase Database Rules Tutorial](https://www.youtube.com/watch?v=qLrDWBKTUZo)
- [List of All Countries in JSON](https://dzone.com/articles/list-of-all-countries-in-json)
- [How to Connect Firebase Users to their Data - 3 Methods,Angular Firebase](https://www.youtube.com/watch?v=2ciHixbc4HE)
- [ReactJS Datapicker](https://www.npmjs.com/package/react-datepicker)
- [Format MomentJS](https://stackoverflow.com/questions/37993202/moment-js-with-react-js-es6)
- [Moment.js](https://momentjs.com)
- [ReactJS: Upload Image to Firebase storage and Display on web, ConCat 7, YouTube](https://www.youtube.com/watch?v=YR4roPyfDQU)
- [Storing an object in state of a React component](https://stackoverflow.com/questions/27105257/storing-an-object-in-state-of-a-react-component)
- [Udemy: React Redux Firebase CRUD App with Authentication, Ryan Dhungel](https://www.udemy.com/react-redux-firebase/)
- [Udemy: Advanced React and Redux: 2018 Edition, Stephen Grider](https://www.udemy.com/react-redux-tutorial/)

## Installations
- Install: yarn add firebase react-router-dom lodash moment react-datepicker redux react-redux redux-devtools-extension redux-thunk
- yarn start

## Setup firebase, bootstrap and fontawesome
- [React Redux Firebase CRUD App with Authentication, Section 1: 3](https://www.udemy.com/react-redux-firebase/learn/v4/t/lecture/9249426?start=0)
- [How to Integrate React with Firebase](https://www.youtube.com/watch?v=vmLaZafaw9E&index=6&list=PLbG4OyfwIxjFKJE_ZVZxsSt1ESc9S7kFb)
- Add bootstrap and fontawesome CDN to public/index.html
- Add bootstrap css to public/bootstrap.css
- Add firebase to src/config/firebase.js
- Create .env to store environment variables
- Change Firebase Database Rules from "auth != null" to "auth != true"

```javascript
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

## Setup react router and redux
- [Udemy: Advanced React and Redux: 2018 Edition, Stephen Grider, Section 6 Client Side Auth](https://www.udemy.com/react-redux-tutorial/learn/v4/t/lecture/10476500?start=0)
- Create redux store -> reducers -> actions - actionType | applyMiddleware()

## Firebase auth
- Enable email and google auth
- Persist Auth State
  - [Udemy: Advanced React and Redux: 2018 Edition, Stephen Grider, Section 6 Client Side Auth, 138 Persisting Login State](https://www.udemy.com/react-redux-tutorial/learn/v4/t/lecture/10476508?start=0)
  - Add the following initial state to createStore in index.js

  ```javascript
  const store = createStore(
    rootReducer,
    {
      auth: { authenticated: localStorage.getItem('userId') }
    },
    composeWithDevTools(applyMiddleware(thunk))
  );
  ```

## Higher Order Component (HOC)
- [Udemy: Advanced React and Redux: 2018 Edition, Stephen Grider, Section 3 Higher Order Components](https://www.udemy.com/react-redux-tutorial/learn/v4/t/lecture/10476344?start=0)
- [Udemy: Advanced React and Redux: 2018 Edition, Stephen Grider, Section 6 Client Side Auth](https://www.udemy.com/react-redux-tutorial/learn/v4/t/lecture/10476500?start=0)
- HOC: A react component made to help us reuse code
- Add requireAuth

![HOC](images/hoc.png)

![HOC: Connect](images/hoc-connect.png)

![HOC: requireAuth](images/hoc-requireAuth.png)

## Firebase database
- Public DB

-| events
  -| eventId
    - title
    - date
    - time
    - category
    - userId
  -| eventId
    - title
    - date
    - time
    - category
    - userId

- User Events DB

-| user-events
  -| userId
    -| eventId
      - title
      - date
      - time
      - category
    -| eventId
      - title
      - date
      - time
      - category
  -| userId
    -| eventId
      - title
      - date
      - time
      - category

## Netlify
- [How to Deploy a React Application (with Netlify)](https://www.youtube.com/watch?v=lCcBEDPTk4o&index=10&list=PLbG4OyfwIxjFKJE_ZVZxsSt1ESc9S7kFb)
- [Firebase Database Rules Tutorial](https://www.youtube.com/watch?v=qLrDWBKTUZo)

- Firebase Database Rules

```javascript
{
  "rules": {
    ".read": true,
    ".write": false
  }
}
```

- Firebase Authentication
  - Authentication -> Sign-in method -> Authorised domain -> Add domain

- Create a redirects file in the public folder: public/_redirects

```javascript
/* /index.html 200
```
- ** Run yarn run build
- Add environment variables to netlify

- https://zevents-fb-auth.netlify.com/
