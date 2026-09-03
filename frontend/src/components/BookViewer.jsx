import { useState, useEffect } from 'react'
import Page from './Page'

function BookViewer({ pages }) {
  const [pageIndex, setPageIndex] = useState(0)

  // whenever the chapter (and therefore "pages") changes, jump back to page 1
  useEffect(() => {
    setPageIndex(0)
  }, [pages])

  if (!pages || pages.length === 0) return <p>No pages yet.</p>

  const currentPage = pages[pageIndex]

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Page page={currentPage} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() => setPageIndex((i) => i - 1)}
          disabled={pageIndex === 0}
        >
          ←
        </button>
        <span style={{ margin: '0 1rem' }}>{pageIndex + 1} / {pages.length}</span>
        <button
          onClick={() => setPageIndex((i) => i + 1)}
          disabled={pageIndex === pages.length - 1}
        >
          →
        </button>
      </div>
    </div>
  )
}

export default BookViewer