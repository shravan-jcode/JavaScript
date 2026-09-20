// =====================================================
// ui.js
// =====================================================


const taskList =
    document.querySelector("#taskList");

const totalTasks =
    document.querySelector("#totalTasks");

const completedTasks =
    document.querySelector("#completedTasks");

const pendingTasks =
    document.querySelector("#pendingTasks");

const completionPercentage =
    document.querySelector("#completionPercentage");


// -----------------------------------------------------
// Render tasks
// -----------------------------------------------------

export function renderTasks(
    tasks,
    onToggle,
    onDelete,
    onPriorityChange
) {

    taskList.innerHTML = "";


    if (tasks.length === 0) {

        taskList.innerHTML =
            "<li>No tasks found.</li>";

        return;
    }


    // forEach()

    tasks.forEach(task => {

        // Object destructuring

        const {
            id,
            title,
            priority,
            completed
        } = task;


        const li =
            document.createElement("li");


        if (completed) {
            li.classList.add("completed");
        }


        li.innerHTML = `
            <strong>${title}</strong>

            <span class="${priority}">
                (${priority})
            </span>

            <select class="priority-select">
                <option value="low"
                    ${priority === "low" ? "selected" : ""}>
                    Low
                </option>

                <option value="medium"
                    ${priority === "medium" ? "selected" : ""}>
                    Medium
                </option>

                <option value="high"
                    ${priority === "high" ? "selected" : ""}>
                    High
                </option>
            </select>

            <button class="toggle-button">
                ${completed ? "Undo" : "Complete"}
            </button>

            <button class="delete-button">
                Delete
            </button>
        `;


        // ---------------------------------------------
        // Toggle
        // ---------------------------------------------

        const toggleButton =
            li.querySelector(".toggle-button");


        toggleButton.addEventListener(
            "click",
            () => {

                onToggle(id);

            }
        );


        // ---------------------------------------------
        // Delete
        // ---------------------------------------------

        const deleteButton =
            li.querySelector(".delete-button");


        deleteButton.addEventListener(
            "click",
            () => {

                onDelete(id);

            }
        );


        // ---------------------------------------------
        // Priority
        // ---------------------------------------------

        const prioritySelect =
            li.querySelector(".priority-select");


        prioritySelect.addEventListener(
            "change",
            function () {

                /*
                    This is a regular function.

                    `this` refers to the select element
                    because the function is called by the
                    event system.
                */

                onPriorityChange(
                    id,
                    this.value
                );
            }
        );


        taskList.appendChild(li);
    });
}


// -----------------------------------------------------
// Render statistics
// -----------------------------------------------------

export function renderStatistics(stats) {

    const {
        total,
        completed,
        pending,
        percentage
    } = stats;


    totalTasks.textContent = total;

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;

    completionPercentage.textContent =
        `${percentage}%`;
}


// -----------------------------------------------------
// Show demo output
// -----------------------------------------------------

export function showDemoOutput(message) {

    const output =
        document.querySelector("#demoOutput");

    output.textContent = message;
}