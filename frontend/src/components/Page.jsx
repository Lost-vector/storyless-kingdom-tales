const API_URL = 'https://wqqnpfckoypqu44uguqfmjaqxq0emujj.lambda-url.eu-west-3.on.aws'

// function Chapter({ number }) {
//   const [chapter, setChapter] = useState(null)

//   useEffect(() => {
//     fetch(`${API_URL}/chapters/${number}`)
//       .then(res => res.json())
//       .then(setChapter)
//   }, [number])

//   if (!chapter) return <p>Loading...</p>

//   return (
//     <div>
//       <h2>{chapter.title}</h2>
//       <img src={chapter.imageUrl} alt={chapter.title} />
//       <p>{chapter.text}</p>
//       <div>Yoo</div>
//     </div>
//   )
// }

// export default Chapter;

function Page({ page }) {
  console.log("page type :====  " + page.type + "   "+ page.content)

  if (page.type === 'image') {
    return (
      <img
        src={`${API_URL}/content/images/${page.content}`}
        alt="story page"
        style={{ maxWidth: '100%', maxHeight: '400px' }}
      />
    )
  }

  return <p style={{ maxWidth: '500px', lineHeight: 1.6 }}>{page.content}</p>
}

export default Page