
import { useState } from "react"
import Header from "./components/header"
import TaskStats from "./components/task-stats"
import TaskInput from "./components/task-input"
import TaskFilters from "./components/task-filters"
import TaskList from "./components/task-list"

export default function TodoApp() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("newest")

  const addTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: Date.now(),
      createdAt: new Date(),
    }
    setTasks((prev) => [...prev, newTask])
  }

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const editTask = (id, newText) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, text: newText } : task)))
  }

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed))
  }

  const hasCompletedTasks = tasks.some((task) => task.completed)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header
          title="Todo App"
          subtitle="Organize your tasks with priorities, categories, and smart filtering"
        />

        <TaskStats tasks={tasks} />

        <TaskInput onAddTask={addTask} />

        <TaskFilters
          currentFilter={filter}
          currentSort={sort}
          onFilterChange={setFilter}
          onSortChange={setSort}
          onClearCompleted={clearCompleted}
          hasCompletedTasks={hasCompletedTasks}
        />

        <TaskList
          tasks={tasks}
          filter={filter}
          sort={sort}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
      </div>
    </div>
  )
}
