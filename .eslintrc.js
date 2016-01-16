module.exports = {
  'extends': [
    'eslint:recommended'
  ],
  'ecmaFeatures': {
    'modules': true,
    'destructuring': true,
    'forOf': true  
  },
  'env': {
    'node': true,
    'es6': true
    //'jquery': true
    //'browser': true,
  },
  'globals': {
    // 'angular': true
  },
  'rules': {
    'no-unused-vars': [ 2, {
      'vars': 'local'
    } ],
    'no-console': 0,
    'quotes': [
      2,
      'single'
    ],
    'indent': [
      2,
      2
    ],
    'semi': [
      2,
      'always'
    ]
  }
};
