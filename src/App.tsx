import Card from './components/card/card';

function App() {
  return (
    <>
      <div>
        <h1>This is my challenge hub!</h1>
        <div className="cards">
          <Card
            header="Star Rating"
            subheader="FrontendPro Challenge"
            link="/challenge/star-rating"
            tags={['React', 'CSS']}
          >
            <p>
              This challenge involved creating a star rating component that
              allows users to rate items on a scale of 1 to 5 stars.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
