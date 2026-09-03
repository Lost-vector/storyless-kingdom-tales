function Navbar({ chapters, selectedChapter, onSelect }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1rem', borderBottom: '2px solid #333' }}>
      {chapters.map((num) => (
        <button
          key={num}
          onClick={() => onSelect(num)}
          style={{
            fontSize: '1.1rem',
            fontWeight: num === selectedChapter ? 'bold' : 'normal',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Chapter {num}
        </button>
      ))}
    </nav>
  )
}

export default Navbar