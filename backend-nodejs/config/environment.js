

// Env for development
const development = {
    env: 'development',
    db: 'mongodb://localhost:27017/instaclone',
    port: 3000,
    JWT_SECRET: 'thisissecret',
    JWT_EXPIRES_IN: '90d',
}

module.exports = development;