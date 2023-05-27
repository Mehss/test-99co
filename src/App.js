import "./styles.css";

export default function ListingAd({ url }) {
  return (
    <div className="App">
      <img
        className="mainPic"
        width="150"
        height="150"
        src="https://via.placeholder.com/150"
        alt="Placeholder"
      />
      <div className="mainContent">
        <h1>title</h1>
        <p className="address">address</p>
        <button>See description</button>
        <p className="description">description</p>
      </div>
    </div>
  );
}
