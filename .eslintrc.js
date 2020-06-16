module.exports = {
    "env": { //which environments script is designed to run in
        "browser": true,
        "es6": true //for new ES6 global variables (e.g., new types such as Set)
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended", //Uses the recommended rules from @eslint-plugin-react https://github.com/yannickcr/eslint-plugin-react#eslint-plugin-react
        "plugin:@typescript-eslint/eslint-recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin. https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin
        "plugin:prettier/recommended", //plugin that adds a rule that formats content using Prettier
    ],
    "globals": { // the additional global variables your script accesses during execution
        "Atomics": "readonly", //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Atomics
        "SharedArrayBuffer": "readonly" //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
    },
    "parser": "@typescript-eslint/parser", //An ESLint-specific parser which leverages typescript-estree and is designed to be used as a replacement for ESLint"s default parser, espree.
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true // Allows for the parsing of JSX
        },
        "ecmaVersion": 2018, // For ES9 ECMAScript syntax (2018 same as 9).
        "sourceType": "module" //Allows for the use of Javascript module (import/export) instead of CommonJS (require/exports) 
    },
    "plugins": [ //Engaged plugins installed separately
        "react", // думаю должен быть в Create-React-App
        "@typescript-eslint"
        // "eslint-plugin-react-hooks" enabled by default in Create React App
    ],
    "rules": {
        "semi": ["error", "never"], //disallows semicolons as the end of statements (except to disambiguate statements beginning with [, (, /, +, or -)
        "quotes": ["error", "single"], //requires the use of single quotes wherever possible
        "indent": [
            "error",
            2, // 2-space indentation
            { "SwitchCase": 1 } //1-space indentation for case clauses in switch statements
        ],
        //были отключены в прошлом проекте хз зачем
        "react/prop-types": "warn", // вроде будет ругаться на вложенные пропсы
        //"no-useless-catch": "off", 
        //"react-hooks/rules-of-hooks": "off",
        //"typescript-eslint/ban-ts-ignore": "off",
    }
};