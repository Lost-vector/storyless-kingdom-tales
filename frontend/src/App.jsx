import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import BookViewer from './components/Bookviewer'

const API_URL = 'https://wqqnpfckoypqu44uguqfmjaqxq0emujj.lambda-url.eu-west-3.on.aws'
const chapters = [1, 2, 3]

export default function App() {
  const [selectedChapter, setSelectedChapter] = useState(1)
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`${API_URL}/chapters/${selectedChapter}`)
      .then(res => {
        if (!res.ok) throw new Error(`Chapter ${selectedChapter} not found`)
        return res.json()
      })
      .then(data => setPages(data.pages))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [selectedChapter])

  return (
    <div style={{ fontFamily: 'sans-serif', marginTop: '2rem' }}>
      <Navbar
        chapters={chapters}
        selectedChapter={selectedChapter}
        onSelect={setSelectedChapter}
      />

      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
      {!loading && !error && <BookViewer pages={pages} />}
    </div>
  )
}