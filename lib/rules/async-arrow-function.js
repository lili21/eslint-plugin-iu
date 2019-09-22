/**
 * @fileoverview can not use async arrow function in class body with modern mode
 * @author li.li
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "can not use async arrow function in class",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            ArrowFunctionExpression(node) {
                if (node.async && context.getAncestors().some(n => n.type === 'ClassBody')) {
                    context.report({
                      node,
                      message: 'Do not use async arrow function in class',
                    });
                }
            }
            // give me methods

        };
    }
};
