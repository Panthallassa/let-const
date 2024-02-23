const PI = 3.14

// var can be redeclared within the same scope without causing any errors. 
// Both function on different scopes with var being function-scoped and 
// let being block scoped. Var is also effected by hoisting in a different way
// making them be processed first in the complilation phase. 

// var and const also function on different scopes, with const being
//  block-scoped as well. const cant be reassigned or updated after its
//  initial deceration. const also is not hoisted to the top of its scope 
// in the compilation process.

// while let can be reassigned const can not and const has do be declared
// with an initial value. 

// hoisting brings variables and functions declerations to the top of their scopes
// during the compilation phase which means you can use them before thay are 
// declared. it only affects declerations with var.