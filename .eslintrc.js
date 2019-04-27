module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "import",
    "import-order-alphabetical"
  ],
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "never"
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none"
        },
        "singleline": {
          "delimiter": "semi"
        }
      }
    ],
    "camelcase": "off",
    "@typescript-eslint/camelcase": [
      "error",
      {
        "ignoreDestructuring": true
      }
    ],
    "sort-imports": "off",
    "import/order": "off",
    "import-order-alphabetical/order": "off",
    "simple-import-sort/sort": "off"
  }
}

// @TODO when ordered-imports from tslint is brought into @typescript-eslint

// "import-order-alphabetical/order": [
//   "error",
//   {
//     "groups": [
//       "builtin",
//       "external",
//       [ "parent", "sibling", "internal" ],
//       "index"
//     ],
//     "newlines-between": "always-and-inside-groups"
//   }
// ],
