module.exports = {
  apps : [{
    script: '.build/src/main.js',
    watch: true,
    env: {
      "NODE_ENV": "development",
      "APP_PORT": 3000
    },
    env_production : {
       "NODE_ENV": "production",
       "APP_PORT": 8080
    }
  }]
};
