module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules":{
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": [1, { "forbid": ["any"] }],
    "arrow-body-style": [1, "always"],
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
    "linebreak-style": ["error", process.platform === 'win32' ? "windows" : "unix"],
    "jsx-a11y/label-has-for": [ 2, { "required": { "every": [ "id" ] }}],
  },
  "env": {
    "browser": true,
    "node": true
  }
};