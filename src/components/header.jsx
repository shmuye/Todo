export default function Header({ title, subtitle }) {
    return (
        <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
            {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
        </header>
    )
}
