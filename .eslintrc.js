module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
        "arrow-body-style": ["error", "always"],
        "jsx-quotes": ["error", "prefer-single"],
        "jsx-a11y/anchor-is-valid": ["off"]
    },
    "env": {
        "browser": true
    }
};