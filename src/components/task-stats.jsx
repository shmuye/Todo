export default function TaskStats({ tasks }) {
    const totalTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.completed).length
    const activeTasks = totalTasks - completedTasks
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{totalTasks}</div>
                    <div className="text-sm text-gray-600">Total Tasks</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{completedTasks}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{activeTasks}</div>
                    <div className="text-sm text-gray-600">Active</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{completionRate}%</div>
                    <div className="text-sm text-gray-600">Complete</div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{completionRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${completionRate}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
