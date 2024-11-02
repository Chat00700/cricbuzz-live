require('dotenv/config');

/**
 * @param {any} value
 * @param {any} fallback
 * @returns {any}
 */
function getEnv(value, fallback) {
    const result = process.env[value];

    // Check if the environment variable is defined
    if ([undefined, null, ''].includes(result)) {
        // Return the fallback if provided
        if (fallback) {
            return fallback;
        }
        return undefined;
    }

    return result;
}

/**
 * App Environment Configuration
 */
const appEnv = {
    // Application Environment
    NODE_ENV: getEnv('NODE_ENV', 'development'),

    APP_KEY: getEnv('APP_KEY', 'default_app_key'),
    APP_NAME: getEnv('APP_NAME', 'cricbuzz-live'),
    APP_LANG: getEnv('APP_LANG', 'en'),
    APP_PORT: Number(getEnv('APP_PORT', 8000)),

    // Configuration - Rate limiting is disabled by setting a high RATE_LIMIT and RATE_DELAY to 0
    AXIOS_TIMEOUT: getEnv('AXIOS_TIMEOUT', '10m'), // Extended timeout for longer requests
    RATE_LIMIT: Number(getEnv('RATE_LIMIT', 1000000)), // High limit to avoid restrictions
    RATE_DELAY: getEnv('RATE_DELAY', '0'), // No delay between requests
};

/**
 * Secret Environment Variables
 */
const secretEnv = {};

/**
 * Base URL Configuration
 */
const baseURLEnv = {
    APP_BASE_URL: getEnv('APP_BASE_URL', 'http://localhost:8000'),
};

/**
 * Third-Party Environment Variables
 */
const thirdPartyEnv = {};

// Combine all environment configurations into one object
const env = {
    ...appEnv,
    ...secretEnv,
    ...baseURLEnv,
    ...thirdPartyEnv,
};

// Export the environment configuration
module.exports = { env };
