import ColorButton from "./components/ColorButton"

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-4xl font-bold">Welcome to Kids&apos; Corner!</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Fun Facts for Curious Kids</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>A group of flamingos is called a &ldquo;flamboyance&rdquo;</li>
            <li>The shortest war in history lasted only 38 minutes</li>
            <li>A sneeze travels out of your mouth at over 100 miles per hour</li>
            <li>Octopuses have three hearts</li>
          </ul>
        </section>

        <ColorButton />
      </main>

      <footer className="bg-green-500 text-white text-center py-4">
        <p className="text-lg">Have a great day, young explorer!</p>
      </footer>
    </div>
  )
}

