# Todo Man

[![Interfaced with React](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/square_128/react.png "Interfaced with React")](https://reactjs.org/)
[![Built with Styled Components](https://jpoissonnier.gallerycdn.vsassets.io/extensions/jpoissonnier/vscode-styled-components/0.0.26/1553589418918/Microsoft.VisualStudio.Services.Icons.Default "Built with Styled Components")](https://styled-components.com/)
[![Components from Material UI](https://d2.alternativeto.net/dist/icons/material-ui_125634.png?width=128&height=128&mode=crop&upscale=false "Components from Material UI")](https://material-ui.com/)

## Motivation
* A simple and straigthforward TODO manager in order to keep your routine flowing

## Online Demo
* Please open [this link](https://codesandbox.io/s/geru-todo-jp8cc) and refresh the page in order to start up the server. The same goes for development purposes
* Click here to preview -> [Todo Man](https://todoman.netlify.com/)

### Setup Development Environment
1. Clone the project from https://github.com/olavoparno/todo-man.git
2. Run `npm install` in order to install the project dependencies
3. Run either `npm run build` to build the project into `<rootDir>/build` or run `npm start` in order to serve the project locally in your browser

### External Libs used
1. [react-datepicker](https://github.com/Hacker0x01/react-datepicker)
   - Chosen due to its implementation simplicity
2. [react-tag-autocomplete](https://github.com/i-like-robots/react-tags#readme)
   - Same as react-datepicker
3. [styled-components](https://github.com/styled-components/styled-components)
   - Chosen due to its simplicity in delivering independent styled components and its powerful ability to understand SASS like syntax
4. [font-awesome](https://github.com/FortAwesome/react-fontawesome)
   - Used to provide simple icons
5. [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)
   - Adopted in order to keep track of releases and its changes

### TODO
* A better state management implementation
* React components unit tests
* Better componentization definition
* Implement unit tests for React Components and Todo service
* Add Tags management screen
* Control TODO item state such as completed, in progress, etc

