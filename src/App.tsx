import StarRating from './challenges/star-rating'

function App() {

  return (
    <>
      <div style={{width: '100%'}}>
        <div style={{width: 'fit-content', margin: '0 auto', transform: 'translateY(50%)'}}>
          <StarRating numberOfStars={5} />
        </div>
      </div>
    </>
  )
}

export default App
