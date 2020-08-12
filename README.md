# Spot Homework App Backend

Backend code for a homework app which can sync your Microsoft Teams and Moodle assignments.

[Play Store download](https://play.google.com/store/apps/details?id=io.gres.homework) 

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Development

```
npm run dev
```

## Deploy

1. Create an .env file with ``` NODE_ENV=production ```
2. ``` docker-compose up -d ```
3. Setup an reverse proxy (Nginx) to port *5000* and secure it with ssl
