

export default function TaskFilters({
    currentFilter,
    currentSort,
    onFilterChange,
    onSortChange,
    onClearCompleted,
    hasCompletedTasks,
}) {
    const filterButtons = [
        { key: "all", label: "All", color: "blue" },
        { key: "active", label: "Active", color: "orange" },
        { key: "completed", label: "Completed", color: "green" },
    ]

    const sortOptions = [
        { key: "newest", label: "Newest First" },
        { key: "oldest", label: "Oldest First" },
        { key: "priority", label: "Priority" },
        { key: "alphabetical", label: "A-Z" },
    ]

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Filter Buttons */}
                <div className="flex gap-2">
                    {filterButtons.map(({ key, label, color }) => (
                        <button
                            key={key}
                            onClick={() => onFilterChange(key)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentFilter === key
                                ? `bg-${color}-500 text-white shadow-md`
                                : `bg-${color}-100 text-${color}-700 hover:bg-${color}-200`
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-4">
                    <select
                        value={currentSort}
                        onChange={(e) => onSortChange(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                        {sortOptions.map(({ key, label }) => (
                            <option key={key} value={key}>
                                {label}
                            </option>
                        ))}
                    </select>

                    {/* Clear Completed Button */}
                    {hasCompletedTasks && (
                        <button
                            onClick={onClearCompleted}
                            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200 font-medium"
                        >
                            Clear Completed
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
