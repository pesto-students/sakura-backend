## ENV Variables

After initial pull, a developer should not commit the env files. To prevent git from tracking them, use these commands on your local:

```
git update-index --skip-worktree .\env\.dev.env
git update-index --skip-worktree .\env\.prod.env
```

Following is the updated list of Environment variables used in the app:

- APP_PORT : tells on which port the server should open

## For development app start

`npm run start`

## For production app start

Following are the steps to deploy the app:

1. Edit the environment variables and provide proper values.
2. `npm run build`
3. `pm2 start --env production`

### Install PM2 using:

```
npm install pm2@latest -g
```

## Environment Variables

Following environment variables are required for the application. If deploying on EC2 then create `.env.prod` file, or enter the environment variables in AWS lambda console if deploying over serverless:

```
# Need not to set APP_PORT on serverless
# App global configs
APP_PORT=3000

# Database Configs
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=admin123
DB_NAME=mydb

# AWS Lambda
LAMBDA_STAGING=dev
```
