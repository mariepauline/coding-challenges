import { Link } from 'react-router';

function App() {
  return (
    <>
      <div>
        <h1>This is my challenge hub!</h1>
        <p>Click the links to see the different challenges I've done</p>
        <Link to="/challenge/star-rating">Star Rating Challenge</Link>
      </div>
    </>
  );
}

export default App;
