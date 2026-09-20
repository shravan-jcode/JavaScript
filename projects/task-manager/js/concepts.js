// =====================================================
// concepts.js
// JavaScript Practice Laboratory
// =====================================================


// =====================================================
// 1. VARIABLES & SCOPE
// =====================================================

export function scopeDemo() {

    console.clear();

    console.log("===== VARIABLES & SCOPE =====");


    // const

    const studentName = "JavaScript Student";


    // let

    let score = 10;

    score = 20;


    // var

    var oldStyleVariable = "I use function scope";


    console.log(studentName);
    console.log(score);
    console.log(oldStyleVariable);


    // Block scope

    if (true) {

        let blockLet = "Inside block";

        const blockConst = "Inside block";

        var blockVar = "var escapes block";


        console.log(blockLet);
        console.log(blockConst);
        console.log(blockVar);
    }


    /*
        The following would cause an error:

        console.log(blockLet);

        because let is block scoped.
    */


    // var is function scoped.

    console.log(
        "var outside block:",
        blockVar
    );


    // Function scope

    function testFunctionScope() {

        var functionVariable =
            "I am inside function";

        console.log(functionVariable);
    }


    testFunctionScope();


    /*
        This would fail:

        console.log(functionVariable);

        because functionVariable belongs
        to testFunctionScope().
    */


    return "Open the browser console to see the scope examples.";
}


// =====================================================
// 2. HOISTING
// =====================================================

export function hoistingDemo() {

    console.clear();

    console.log("===== HOISTING =====");


    /*
        Function declarations are hoisted.

        This works even though the function is
        written below the call.
    */

    sayHello();


    function sayHello() {

        console.log(
            "Function declaration was hoisted."
        );
    }


    /*
        var is hoisted, but initialized with undefined.
    */

    console.log(
        "var before declaration:",
        hoistedVar
    );

    var hoistedVar = "Now I have a value";


    console.log(
        "var after declaration:",
        hoistedVar
    );


    /*
        let and const are also hoisted internally,
        but they are in the Temporal Dead Zone.

        This would throw an error:

        console.log(myLet);

        let myLet = 10;
    */


    return "Hoisting examples completed. Check the console.";
}


// =====================================================
// 3. DATA TYPES
// =====================================================

export function dataTypeDemo() {

    console.clear();

    console.log("===== DATA TYPES =====");


    const stringValue = "hello";

    const numberValue = 100;

    const booleanValue = true;

    const nullValue = null;

    let undefinedValue;


    console.log(
        typeof stringValue
    );

    console.log(
        typeof numberValue
    );

    console.log(
        typeof booleanValue
    );

    console.log(
        "null value:",
        nullValue
    );

    console.log(
        "undefined value:",
        undefinedValue
    );


    // Primitive

    const primitiveA = 10;

    let primitiveB = primitiveA;

    primitiveB = 20;


    console.log(
        "primitiveA:",
        primitiveA
    );

    console.log(
        "primitiveB:",
        primitiveB
    );


    // Reference type

    const objectA = {
        name: "John"
    };

    const objectB = objectA;

    objectB.name = "Mike";


    console.log(
        "objectA:",
        objectA
    );

    console.log(
        "objectB:",
        objectB
    );


    // Truthy / falsy

    const values = [
        false,
        0,
        "",
        null,
        undefined,
        NaN,
        "hello",
        10,
        [],
        {}
    ];


    values.forEach(value => {

        console.log(
            value,
            Boolean(value)
        );

    });


    // == vs ===

    console.log(
        "10 == '10':",
        10 == "10"
    );

    console.log(
        "10 === '10':",
        10 === "10"
    );


    // Type coercion

    console.log(
        "'5' + 2:",
        "5" + 2
    );

    console.log(
        "'5' - 2:",
        "5" - 2
    );


    return "Data type examples completed. Check the console.";
}


// =====================================================
// 4. FUNCTIONS
// =====================================================

export function functionDemo() {

    console.clear();

    console.log("===== FUNCTIONS =====");


    // Function declaration

    function add(a, b) {

        return a + b;
    }


    console.log(
        "Declaration:",
        add(10, 20)
    );


    // Function expression

    const subtract = function (a, b) {

        return a - b;
    };


    console.log(
        "Expression:",
        subtract(20, 5)
    );


    // Arrow function

    const multiply = (a, b) => {

        return a * b;
    };


    console.log(
        "Arrow:",
        multiply(5, 4)
    );


    // Default parameter

    function greet(name = "Student") {

        return `Hello ${name}`;
    }


    console.log(
        greet()
    );

    console.log(
        greet("Alex")
    );


    // Rest parameter

    function total(...numbers) {

        return numbers.reduce(
            (sum, number) => sum + number,
            0
        );
    }


    console.log(
        "Rest:",
        total(10, 20, 30, 40)
    );


    // Callback

    function execute(callback) {

        return callback();
    }


    const result = execute(
        () => "Callback executed"
    );


    console.log(result);


    return "Function examples completed. Check the console.";
}


// =====================================================
// 5. OBJECTS
// =====================================================

export function objectDemo() {

    console.clear();

    console.log("===== OBJECTS =====");


    const student = {

        name: "Alex",

        age: 22,

        course: "JavaScript",

        address: {
            city: "Pune"
        }
    };


    // Access

    console.log(
        student.name
    );


    console.log(
        student["course"]
    );


    // Destructuring

    const {
        name,
        age
    } = student;


    console.log(
        name,
        age
    );


    // Spread

    const updatedStudent = {
        ...student,
        age: 23
    };


    console.log(
        updatedStudent
    );


    // Shorthand properties

    const country = "India";

    const person = {
        name,
        country
    };


    console.log(person);


    // Optional chaining

    console.log(
        student.address?.city
    );


    console.log(
        student.contact?.phone
    );


    // Nullish coalescing

    const phone =
        student.phone ?? "No phone";


    console.log(phone);


    return "Object examples completed. Check the console.";
}


// =====================================================
// 6. ARRAYS
// =====================================================

export function arrayDemo() {

    console.clear();

    console.log("===== ARRAYS =====");


    const numbers = [
        1,
        2,
        3,
        4,
        5
    ];


    // map()

    const doubled = numbers.map(
        number => number * 2
    );


    console.log(
        "map:",
        doubled
    );


    // filter()

    const even = numbers.filter(
        number => number % 2 === 0
    );


    console.log(
        "filter:",
        even
    );


    // reduce()

    const sum = numbers.reduce(
        (total, number) =>
            total + number,
        0
    );


    console.log(
        "reduce:",
        sum
    );


    // find()

    const found = numbers.find(
        number => number > 3
    );


    console.log(
        "find:",
        found
    );


    // findIndex()

    const foundIndex = numbers.findIndex(
        number => number === 3
    );


    console.log(
        "findIndex:",
        foundIndex
    );


    // some()

    const hasBigNumber = numbers.some(
        number => number > 4
    );


    console.log(
        "some:",
        hasBigNumber
    );


    // every()

    const allPositive = numbers.every(
        number => number > 0
    );


    console.log(
        "every:",
        allPositive
    );


    // forEach()

    numbers.forEach(
        number => console.log(
            "forEach:",
            number
        )
    );


    // sort()

    const unsorted = [
        40,
        10,
        5,
        30
    ];


    const sorted = [...unsorted].sort(
        (a, b) => a - b
    );


    console.log(
        "sort:",
        sorted
    );


    // slice()

    const sliced =
        numbers.slice(1, 4);


    console.log(
        "slice:",
        sliced
    );


    // splice()

    const spliceExample = [
        "A",
        "B",
        "C",
        "D"
    ];


    spliceExample.splice(
        1,
        2
    );


    console.log(
        "splice:",
        spliceExample
    );


    return "Array examples completed. Check the console.";
}


// =====================================================
// 7. CONTROL FLOW & LOOPS
// =====================================================

export function controlFlowDemo() {

    console.clear();

    console.log(
        "===== CONTROL FLOW & LOOPS ====="
    );


    const score = 75;


    // if / else

    if (score >= 80) {

        console.log("Excellent");

    } else if (score >= 50) {

        console.log("Passed");

    } else {

        console.log("Failed");
    }


    // switch

    const day = "Monday";


    switch (day) {

        case "Monday":

            console.log("Start of week");

            break;


        case "Friday":

            console.log("Almost weekend");

            break;


        default:

            console.log("Normal day");
    }


    // for

    for (
        let i = 0;
        i < 3;
        i++
    ) {

        console.log(
            "for:",
            i
        );
    }


    // for...of

    const fruits = [
        "apple",
        "banana",
        "orange"
    ];


    for (const fruit of fruits) {

        console.log(
            "for...of:",
            fruit
        );
    }


    // for...in

    const user = {
        name: "Alex",
        age: 22
    };


    for (const key in user) {

        console.log(
            "for...in:",
            key,
            user[key]
        );
    }


    // while

    let count = 0;


    while (count < 3) {

        console.log(
            "while:",
            count
        );

        count++;
    }


    return "Control flow examples completed. Check the console.";
}


// =====================================================
// 8. CLOSURES
// =====================================================

export function closureDemo() {

    console.clear();

    console.log("===== CLOSURES =====");


    function createCounter() {

        let count = 0;


        return function () {

            count++;

            return count;
        };
    }


    const counter = createCounter();


    console.log(
        counter()
    );

    console.log(
        counter()
    );

    console.log(
        counter()
    );


    /*
        createCounter() has already finished.

        But the returned function still remembers
        the `count` variable.

        That's a closure.
    */


    return "Closure executed. Counter remembers its value.";
}


// =====================================================
// 9. THIS
// =====================================================

export function thisDemo() {

    console.clear();

    console.log("===== THIS =====");


    const user = {

        name: "Alex",

        regularFunction: function () {

            console.log(
                "Regular function this:",
                this.name
            );
        },


        arrowFunction: () => {

            /*
                Arrow functions don't create their own
                `this`.

                Here `this` comes from the surrounding
                scope.
            */

            console.log(
                "Arrow function this:",
                this
            );
        }
    };


    user.regularFunction();

    user.arrowFunction();


    return "Check the console for the difference between regular and arrow functions.";
}


// =====================================================
// 10. PASS BY VALUE / REFERENCE
// =====================================================

export function referenceDemo() {

    console.clear();

    console.log(
        "===== VALUE VS REFERENCE ====="
    );


    // Primitive = copied by value

    let a = 10;

    let b = a;

    b = 20;


    console.log(
        "a:",
        a
    );

    console.log(
        "b:",
        b
    );


    // Object = reference behavior

    const personA = {
        name: "John"
    };


    const personB = personA;


    personB.name = "Mike";


    console.log(
        "personA:",
        personA
    );


    console.log(
        "personB:",
        personB
    );


    // Shallow copy

    const personC = {
        ...personA
    };


    personC.name = "Sarah";


    console.log(
        "personA:",
        personA
    );


    console.log(
        "personC:",
        personC
    );


    // Deep copy

    const original = {

        name: "John",

        address: {
            city: "Pune"
        }
    };


    const deepCopy =
        JSON.parse(
            JSON.stringify(original)
        );


    deepCopy.address.city =
        "Mumbai";


    console.log(
        "original:",
        original
    );


    console.log(
        "deepCopy:",
        deepCopy
    );


    return "Reference examples completed. Check the console.";
}


// =====================================================
// 11. EXECUTION CONTEXT / CALL STACK
// =====================================================

export function executionContextDemo() {

    console.clear();

    console.log(
        "===== EXECUTION CONTEXT / CALL STACK ====="
    );


    function first() {

        console.log(
            "first() started"
        );

        second();

        console.log(
            "first() finished"
        );
    }


    function second() {

        console.log(
            "second() started"
        );

        third();

        console.log(
            "second() finished"
        );
    }


    function third() {

        console.log(
            "third() running"
        );
    }


    first();


    return "Watch the console to understand the call stack.";
}


// =====================================================
// 12. EVENT LOOP
// =====================================================

export function eventLoopDemo() {

    console.clear();

    console.log(
        "===== EVENT LOOP ====="
    );


    console.log(
        "1. Synchronous code"
    );


    setTimeout(() => {

        console.log(
            "3. setTimeout callback"
        );

    }, 0);


    console.log(
        "2. More synchronous code"
    );


    return "Expected console order: 1, 2, 3";
}