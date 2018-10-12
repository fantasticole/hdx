To run, clone the repo and `yarn` from inside of the `hdx` directory. Once that is done, run `yarn start`.

## Visual Design Choices

  I decided to go with a lined background to invoke the feeling of a digital, ruled notebook. The buttons are simple with only icons to keep from cluttering the page but still get the point accross to the user.

## Technical Design Choices

  This project was jump-started with [Create React App](https://github.com/facebook/create-react-app) in order to hit the ground running. This gave me a framework to write some tests and see the app I was building in a browser.

  Each `<Task />` component can render a list of subtasks and each `<List />` component can render all the tasks given to it. The tasks are saved and edited in the state of the parent `<App />` component.

  For ease of use, when the user is done typing inside of the input, they can hit enter to save the task to the app state.
