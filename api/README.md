# Strapi API

## Available Scripts

In the project directory, you can run:

### `yarn`

`yarn` installs all dependencies to make this project work.

### `yarn seed`

`yarn seed` seeds demo data.

**You need to run this command before starting your project**

### `yarn develop`
`yarn develop` starts the server in developement environment and builds the administration panel.
Open [http://localhost:1337/admin](http://localhost:1337/admin) to view it in the browser.

## Configure the Datadog APM

The Datadog APM client is included through the `/api/config/functions/bootstrap.js` file.

Set the Datadog APM environment variables in the `.env` file:
```shell
DD_SERVICE=foodadvisor
DD_ENV=localhost
DD_AGENT_HOST=127.0.0.1
```
