module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:jsdoc/recommended'
    ],
    'overrides': [
        {
            'files': [
                '**/*.test.js'
            ],
            'env': {
                'jest': true
            }
        }
    ],
    'plugins': [
        'jsdoc'
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'arrow-body-style': [
            'error',
            'always'
        ],
        'arrow-parens': [
            'error',
            'always'
        ],
        'arrow-spacing': [
            'error'
        ],
        'brace-style': [
            'error'
        ],
        'consistent-return': [
            'error'
        ],
        'curly': [
            'error'
        ],
        'eqeqeq': [
            'error'
        ],
        'indent': [
            'error',
            4, {
                SwitchCase: 1
            }
        ],
        'key-spacing': [
            'error',
            {
                'beforeColon': false
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'lines-between-class-members': [
            'error',
            'always'
        ],
        'new-parens': [
            'error'
        ],
        'newline-after-var': [
            'error',
            'always'
        ],
        'newline-before-return': [
            'error'
        ],
        'no-console': [
            'error', {
                allow: [
                    'error',
                    'info',
                    'warn'
                ]
            }
        ],
        'no-else-return': [
            'error'
        ],
        'no-lonely-if': [
            'error'
        ],
        'no-multiple-empty-lines': [
            'error', {
                max: 1
            }
        ],
        'no-multi-spaces': [
            'error'
        ],
        'no-tabs': [
            'error'
        ],
        'no-var': [
            'error'
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'one-var': [
            'error',
            'never'
        ],
        'prefer-const': [
            'error'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'require-await': [
            'error'
        ],
        'semi': [
            'error',
            'always'
        ],
        'space-before-blocks': [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'space-unary-ops': [
            'error'
        ],
        'spaced-comment': [
            'error'
        ],
        'unicode-bom': [
            'error',
            'never'
        ],
        'jsdoc/require-jsdoc': [
            'warn', {
                'require': {
                    'MethodDefinition': true
                },
                'exemptEmptyFunctions': true
            }
        ],
        'jsdoc/require-param-description': [
            'off'
        ],
        'jsdoc/require-returns-description': [
            'off'
        ]
    }
}
