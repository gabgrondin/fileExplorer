# File explorer done in react and nodejs

The goal was to provide a web based file explorer.
The requirements were the following:

1. VsCode like file explorer
2. Can take one or more folder as arguments
3. The web app should update when a file is added, renamed or deleted
4. Tree view with multiple collapsible sections. **Still missing**

## Time spent

By already having a job and a family, the time I had for this homework was pretty low for the requirements. I did four evening of coding for a total of 10 hours.

## Architecture

On the first 3 hours coding session, I wanted to try a SSR like web app where folder structure would be calculated and renderer on server side. This is somewhat needed since the front-end app doesn't have access to the file system. However, I quickly noticed that the updates of the folders were not possible without a manual refresh.

On the next day, I came with the idea of websockets. I could receive the initial state at the beginning based on the arguments and then I could communicate with the front-end application to update the folders when they changed. Starting from there, this is what I came with. A simple react application that stores the folder state in redux and communicates with the nodejs backend via a websocket.

My first thinking was to add the click event to navigate through all the files and folder but I quickly noticed that the time would miss. Anyway, I didn't `see` the tree like with multiple sections until the last day. I had been to concentrated on the architecture.

### Library used

For the backend, I used `express` as it is pretty simply to start with. Also, for the websockets, i used `express-ws` which again, is simple to use. Note that this was my first experience with Websockets and NodeJs directly.

For the frontend, I went with what I know the most, `react`, `material-ui` and `redux`. I also found a nice library that provide a hook in order to use websockets (`react-use-websocket`).

## How to run the applications

In a command line, in the directory of this ReadMe file, run the following command:

1. `node ./fileExplorerNode/index.js args` where args is an array of folders. If not provided, `./` will be used.
2. npm run --prefix fileExplorerFrontEnd start

The backend will run on port 3001 and frontend will run on port 3005.

From there, you can simply navigate to http://localhost:3005.

## What is missing

1. Folder navigation
2. Error handling
3. Some Unit testing in frontend and all in backend
4. Metrics
5. Logs
6. Handling websocket reconnection
7. i18n
8. a11y
