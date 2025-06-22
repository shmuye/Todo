

import React from "react"

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = React.useState(false)
    const [editText, setEditText] = React.useState(task.text)

    const handleEdit = () => {
        if (editText.trim() && editText !== task.text) {
            onEdit(task.id, editText.trim())
        }
        setIsEditing(false)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleEdit()
        } else if (e.key === "Escape") {
            setEditText(task.text)
            setIsEditing(false)
        }
    }

    const priorityColors = {
        low: "border-l-green-500 bg-green-50",
        medium: "border-l-yellow-500 bg-yellow-50",
        high: "border-l-red-500 bg-red-50",
    }

    const priorityBadges = {
        low: "bg-green-100 text-green-800",
        medium: "bg-yellow-100 text-yellow-800",
        high: "bg-red-100 text-red-800",
    }

    return (
        <div
            className={`border-l-4 ${priorityColors[task.priority]} rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow duration-200`}
        >
            <div className="flex items-center gap-3">
                {/* Checkbox */}
                <button
                    onClick={() => onToggle(task.id)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${task.completed ? "bg-green-500 border-green-500 text-white" : "border-gray-300 hover:border-green-400"
                        }`}
                >
                    {task.completed && (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </button>

                {/* Task Content */}
                <div className="flex-1">
                    {isEditing ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onBlur={handleEdit}
                            onKeyDown={handleKeyPress}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            autoFocus
                        />
                    ) : (
                        <div>
                            <span
                                className={`text-lg ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                                onDoubleClick={() => !task.completed && setIsEditing(true)}
                            >
                                {task.text}
                            </span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityBadges[task.priority]}`}>
                                    {task.priority.toUpperCase()}
                                </span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{task.category}</span>
                                <span className="text-xs text-gray-500">{task.createdAt.toLocaleDateString()}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    {!isEditing && !task.completed && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                            title="Edit task"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                        </button>
                    )}
                    <button
                        onClick={() => onDelete(task.id)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200"
                        title="Delete task"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
