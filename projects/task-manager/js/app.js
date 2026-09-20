// =====================================================
// app.js
// =====================================================


import {
    addTask,
    deleteTask,
    toggleTask,
    updatePriority,
    getTasks,
    searchTasks,
    filterTasks,
    sortTasks,
    getStatistics,
    demonstrateReference
} from "./taskStore.js";


import {
    cleanTaskTitle,
    createMessage,
    processText,
    getTaskDescription,
    getUserCity,
    getDisplayName,
    compareValues,
    convertValues,
    stringPractice,
    calculateTotal
} from "./utils.js";


import {
    renderTasks,
    renderStatistics,
    showDemoOutput
} from "./ui.js";


import {
    scopeDemo,
    hoistingDemo,
    dataTypeDemo,
    functionDemo,
    objectDemo,
    arrayDemo,
    controlFlowDemo,
    closureDemo,
    thisDemo,
    referenceDemo,
    executionContextDemo,
    eventLoopDemo
} from "./concepts.js";


// =====================================================
// DOM ELEMENTS
// =====================================================

const taskForm =
    document.querySelector("#taskForm");


const taskInput =
    document.querySelector("#taskInput");


const priorityInput =
    document.querySelector("#priorityInput");


const searchInput =
    document.querySelector("#searchInput");


const filterInput =
    document.querySelector("#filterInput");


const sortInput =
    document.querySelector("#sortInput");


// =====================================================
// APPLICATION STATE
// =====================================================

let currentSearch = "";

let currentFilter = "all";

let currentSort = "newest";


// =====================================================
// RENDER APPLICATION
// =====================================================

function renderApp() {

    let displayedTasks;


    // ---------------------------------------------
    // Search
    // ---------------------------------------------

    if (currentSearch !== "") {

        displayedTasks =
            searchTasks(currentSearch);

    } else {

        displayedTasks =
            filterTasks(currentFilter);
    }


    // ---------------------------------------------
    // Sort
    // ---------------------------------------------

    displayedTasks =
        sortTasks(
            displayedTasks,
            currentSort
        );


    // ---------------------------------------------
    // Render
    // ---------------------------------------------

    renderTasks(
        displayedTasks,
        handleToggle,
        handleDelete,
        handlePriorityChange
    );


    // ---------------------------------------------
    // Statistics
    // ---------------------------------------------

    const statistics =
        getStatistics();


    renderStatistics(statistics);
}


// =====================================================
// ADD TASK
// =====================================================

taskForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const rawTitle =
            taskInput.value;


        const title =
            cleanTaskTitle(rawTitle);


        if (!title) {

            alert(
                "Please enter a task."
            );

            return;
        }


        const priority =
            priorityInput.value;


        addTask(
            title,
            priority
        );


        taskInput.value = "";


        renderApp();
    }
);


// =====================================================
// TOGGLE TASK
// =====================================================

function handleToggle(id) {

    toggleTask(id);

    renderApp();
}


// =====================================================
// DELETE TASK
// =====================================================

function handleDelete(id) {

    deleteTask(id);

    renderApp();
}


// =====================================================
// CHANGE PRIORITY
// =====================================================

function handlePriorityChange(
    id,
    priority
) {

    updatePriority(
        id,
        priority
    );


    renderApp();
}


// =====================================================
// SEARCH
// =====================================================

searchInput.addEventListener(
    "input",
    function (event) {

        currentSearch =
            event.target.value;

        renderApp();
    }
);


// =====================================================
// FILTER
// =====================================================

filterInput.addEventListener(
    "change",
    function (event) {

        currentFilter =
            event.target.value;

        renderApp();
    }
);


// =====================================================
// SORT
// =====================================================

sortInput.addEventListener(
    "change",
    function (event) {

        currentSort =
            event.target.value;

        renderApp();
    }
);


// =====================================================
// SCOPE DEMO
// =====================================================

document
    .querySelector("#scopeDemoButton")
    .addEventListener(
        "click",
        () => {

            const message =
                scopeDemo();

            showDemoOutput(message);
        }
    );


// =====================================================
// CLOSURE DEMO
// =====================================================

document
    .querySelector("#closureDemoButton")
    .addEventListener(
        "click",
        () => {

            const message =
                closureDemo();

            showDemoOutput(message);
        }
    );


// =====================================================
// THIS DEMO
// =====================================================

document
    .querySelector("#thisDemoButton")
    .addEventListener(
        "click",
        () => {

            const message =
                thisDemo();

            showDemoOutput(message);
        }
    );


// =====================================================
// EVENT LOOP DEMO
// =====================================================

document
    .querySelector("#eventLoopButton")
    .addEventListener(
        "click",
        () => {

            const message =
                eventLoopDemo();

            showDemoOutput(message);
        }
    );


// =====================================================
// HOISTING DEMO
// =====================================================

document
    .querySelector("#hoistingDemoButton")
    .addEventListener(
        "click",
        () => {

            const message =
                hoistingDemo();

            showDemoOutput(message);
        }
    );


// =====================================================
// INITIAL RENDER
// =====================================================

renderApp();


// =====================================================
// EXTRA PRACTICE
// =====================================================

console.log(
    "===== EXTRA JAVASCRIPT PRACTICE ====="
);


// -----------------------------------------------------
// Functions
// -----------------------------------------------------

console.log(
    createMessage("Student")
);


// -----------------------------------------------------
// Rest parameters
// -----------------------------------------------------

console.log(
    "Total:",
    calculateTotal(
        10,
        20,
        30
    )
);


// -----------------------------------------------------
// Callback
// -----------------------------------------------------

const processedText =
    processText(
        "   hello javascript   ",
        text => text.toUpperCase()
    );


console.log(
    "Callback result:",
    processedText
);


// -----------------------------------------------------
// Destructuring
// -----------------------------------------------------

const firstTask =
    getTasks()[0];


console.log(
    "Task description:",
    getTaskDescription(firstTask)
);


// -----------------------------------------------------
// Optional chaining
// -----------------------------------------------------

const userWithoutAddress = {
    name: "Alex"
};


console.log(
    "City:",
    getUserCity(userWithoutAddress)
);


// -----------------------------------------------------
// Nullish coalescing
// -----------------------------------------------------

console.log(
    "Display name:",
    getDisplayName({})
);


// -----------------------------------------------------
// == vs ===
// -----------------------------------------------------

console.log(
    "Comparison:",
    compareValues("10")
);


// -----------------------------------------------------
// Type conversion
// -----------------------------------------------------

console.log(
    "Conversion:",
    convertValues("123")
);


// -----------------------------------------------------
// String methods
// -----------------------------------------------------

console.log(
    "String practice:",
    stringPractice(
        "Hello JavaScript"
    )
);


// -----------------------------------------------------
// Reference
// -----------------------------------------------------

demonstrateReference();


// -----------------------------------------------------
// Execution context
// -----------------------------------------------------

executionContextDemo();


// -----------------------------------------------------
// Other demos available from console
// -----------------------------------------------------

console.log(
    "Try these functions from the console:"
);

console.log(
    "dataTypeDemo()"
);

console.log(
    "functionDemo()"
);

console.log(
    "objectDemo()"
);

console.log(
    "arrayDemo()"
);

console.log(
    "controlFlowDemo()"
);

console.log(
    "referenceDemo()"
);