/**
 * @fileoverview can not use async arrow function in class body with modern mode
 * @author li.li
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/async-arrow-function"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("async-arrow-function", rule, {

    valid: [
        {
            code: `class Test {
                async foo() {}
            }`,
            parser: require.resolve('babel-eslint'),
        },
        {
            code: `class Test {
                foo = () => {}
            }`,
            parser: require.resolve('babel-eslint'),
        }
    ],

    invalid: [
        {
            code: `class Test {
                foo = async () => {}
            }`,
            parser: require.resolve('babel-eslint'),
            errors: [{
                message: "Do not use async arrow function in class",
                type: "ArrowFunctionExpression"
            }]
        },
        {
            code: `class Test {
                bar() {
                    baz(async () => {})
                }
            }`,
            parser: require.resolve('babel-eslint'),
            errors: [{
                message: "Do not use async arrow function in class",
                type: "ArrowFunctionExpression"
            }]
        }
    ]
});
