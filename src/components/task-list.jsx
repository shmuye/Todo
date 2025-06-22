
import TaskItem from "./task-item"

export default function TaskList({ tasks, filter, sort, onToggleTask, onDeleteTask, onEditTask }) {
    // Filter tasks
    const filteredTasks = tasks.filter((task) => {
        switch (filter) {
            case "active":
                return !task.completed
            case "completed":
                return task.completed
            default:
                return true
        }
    })

    // Sort tasks
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        switch (sort) {
            case "oldest":
                return a.createdAt.getTime() - b.createdAt.getTime()
            case "priority":
                const priorityOrder = { high: 3, medium: 2, low: 1 }
                return priorityOrder[b.priority] - priorityOrder[a.priority]
            case "alphabetical":
                return a.text.localeCompare(b.text)
            default: // newest
                return b.createdAt.getTime() - a.createdAt.getTime()
        }
    })

    if (sortedTasks.length === 0) {
        const emptyMessages = {
            all: "No tasks yet. Create your first task above!",
            active: "No active tasks. Great job!",
            completed: "No completed tasks yet.",
        }

        return (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                    </svg>
                </div>
                <p className="text-gray-600 text-lg">{emptyMessages[filter]}</p>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {filter === "all" ? "All Tasks" : filter === "active" ? "Active Tasks" : "Completed Tasks"}
                <span className="text-sm font-normal text-gray-500 ml-2">({sortedTasks.length})</span>
            </h2>
            <div className="space-y-0">
                {sortedTasks.map((task) => (
                    <TaskItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} onEdit={onEditTask} />
                ))}
            </div>
        </div>
    )
}
