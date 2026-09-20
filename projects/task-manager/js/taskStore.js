// =====================================================
// taskStore.js
// =====================================================


// -----------------------------------------------------
// let
// -----------------------------------------------------

let tasks = [
    {
        id: 1,
        title: "Learn variables",
        priority: "high",
        completed: true
    },

    {
        id: 2,
        title: "Practice array methods",
        priority: "medium",
        completed: false
    },

    {
        id: 3,
        title: "Understand closures",
        priority: "high",
        completed: false
    }
];


// -----------------------------------------------------
// const
// -----------------------------------------------------

const priorityValues = {
    low: 1,
    medium: 2,
    high: 3
};


// -----------------------------------------------------
// Generate ID
// -----------------------------------------------------

export function generateId() {

    if (tasks.length === 0) {
        return 1;
    }

    return Math.max(
        ...tasks.map(task => task.id)
    ) + 1;
}


// -----------------------------------------------------
// Get all tasks
// -----------------------------------------------------

export function getTasks() {

    // slice creates a shallow copy of the array.

    return tasks.slice();
}


// -----------------------------------------------------
// Add task
// -----------------------------------------------------

export function addTask(title, priority = "medium") {

    const newTask = {
        id: generateId(),
        title,
        priority,
        completed: false
    };

    tasks.push(newTask);

    return newTask;
}


// -----------------------------------------------------
// Delete task
// -----------------------------------------------------

export function deleteTask(id) {

    const index = tasks.findIndex(
        task => task.id === id
    );

    if (index !== -1) {

        // splice modifies the original array.

        tasks.splice(index, 1);

        return true;
    }

    return false;
}


// -----------------------------------------------------
// Toggle task
// -----------------------------------------------------

export function toggleTask(id) {

    const task = tasks.find(
        task => task.id === id
    );

    if (!task) {
        return false;
    }

    task.completed = !task.completed;

    return true;
}


// -----------------------------------------------------
// Update priority
// -----------------------------------------------------

export function updatePriority(id, priority) {

    const task = tasks.find(
        task => task.id === id
    );

    if (!task) {
        return false;
    }

    task.priority = priority;

    return true;
}


// -----------------------------------------------------
// Search tasks
// -----------------------------------------------------

export function searchTasks(searchText) {

    const search = searchText
        .trim()
        .toLowerCase();

    if (search === "") {
        return getTasks();
    }

    return tasks.filter(task =>
        task.title
            .toLowerCase()
            .includes(search)
    );
}


// -----------------------------------------------------
// Filter tasks
// -----------------------------------------------------

export function filterTasks(filter) {

    switch (filter) {

        case "completed":

            return tasks.filter(
                task => task.completed
            );


        case "pending":

            return tasks.filter(
                task => !task.completed
            );


        case "all":

            return getTasks();


        default:

            return getTasks();
    }
}


// -----------------------------------------------------
// Sort tasks
// -----------------------------------------------------

export function sortTasks(taskArray, sortType) {

    // Create a copy before sorting.

    const sortedTasks = [...taskArray];

    switch (sortType) {

        case "newest":

            return sortedTasks.sort(
                (a, b) => b.id - a.id
            );


        case "oldest":

            return sortedTasks.sort(
                (a, b) => a.id - b.id
            );


        case "alphabetical":

            return sortedTasks.sort(
                (a, b) =>
                    a.title.localeCompare(b.title)
            );


        case "priority":

            return sortedTasks.sort(
                (a, b) =>
                    priorityValues[b.priority] -
                    priorityValues[a.priority]
            );


        default:

            return sortedTasks;
    }
}


// -----------------------------------------------------
// Statistics
// -----------------------------------------------------

export function getStatistics() {

    const total = tasks.length;


    // filter()

    const completed = tasks.filter(
        task => task.completed
    ).length;


    const pending = tasks.filter(
        task => !task.completed
    ).length;


    // reduce()

    const totalTitleCharacters = tasks.reduce(
        (total, task) => total + task.title.length,
        0
    );


    // some()

    const hasHighPriority = tasks.some(
        task => task.priority === "high"
    );


    // every()

    const everythingCompleted =
        tasks.length > 0 &&
        tasks.every(task => task.completed);


    const percentage =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);


    return {
        total,
        completed,
        pending,
        percentage,
        totalTitleCharacters,
        hasHighPriority,
        everythingCompleted
    };
}


// -----------------------------------------------------
// Demonstrate reference behavior
// -----------------------------------------------------

export function demonstrateReference() {

    const originalTask = tasks[0];

    // Both variables point to the same object.

    const referenceCopy = originalTask;

    referenceCopy.title = "Changed through reference";

    console.log(
        "Original task after reference change:",
        originalTask
    );


    // Restore the original title.

    originalTask.title = "Learn variables";


    // Shallow copy

    const shallowCopy = {
        ...originalTask
    };

    shallowCopy.title = "Changed shallow copy";


    console.log(
        "Original after shallow copy:",
        originalTask
    );

    console.log(
        "Shallow copy:",
        shallowCopy
    );
}


// -----------------------------------------------------
// Export priority object
// -----------------------------------------------------

export {
    priorityValues
};