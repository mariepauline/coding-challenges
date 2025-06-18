import StarRating from "./star-rating/star-rating";

const Challenges = () => {
  return (
    <div>
      <h1>Star rating</h1>
      <a href="https://www.frontendpro.dev/frontend-coding-challenges/star-rating-component-geShE1ApkqUoNCqujxOd">From FrontendPro</a>
      <div style={{width: 'fit-content', margin: '0 auto'}}>
          <StarRating numberOfStars={5} />
        </div>
    </div>
  );
}
export default Challenges;