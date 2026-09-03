// App.jsx
import { useState } from 'react'
import Navbar from './components/Navbar'
import BookViewer from './components/Bookviewer'


const chapters = [1, 2, 3]

// mock data for now — step 5 shows how to fetch this from your backend
const chapterPages = {
  1: [
    { type: 'image', content: 'chap1-page1.jpg' },
    { type: 'text', content: 'Once upon a time, in a land far away...' },
  ],
  2: [
    { type: 'text', content: 'The story continues...' },
  ],
  3: [
    { type: 'image', content: 'chap3-page1.jpg' },
  ],
}

export default function App() {
  const [selectedChapter, setSelectedChapter] = useState(1)

  return (
    <div style={{ fontFamily: 'sans-serif', marginTop: '2rem' }}>
      <Navbar
        chapters={chapters}
        selectedChapter={selectedChapter}
        onSelect={setSelectedChapter}
      />
      <BookViewer pages={chapterPages[selectedChapter]} />
    </div>
  )
}