import Chapter from "./components/Chapter"

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '4rem' }}>
      <h1>The fairy tale is coming soon</h1>
      <p>This placeholder proves the deployment pipeline works.</p>
      <Chapter number={1}/>
    </div>
  )
}
