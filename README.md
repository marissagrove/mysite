# Setup

You'll need Clojure/[Lein](https://github.com/technomancy/leiningen) for the backend, and [Webpack](https://webpack.github.io/) for the frontend

    npm install webpack -g
    npm install babel-runtime --save-dev

Next, install all of the project dependencies via npm:

    npm install

# Running

Use Lein to launch the server:

    lein run

Separately, we'll run webpack in dev mode to compile the JSX files:

    webpack --config webpack.config.js --progress --colors --watch

