import image from '../assets/news.png';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{
        maxWidth: '345px',
        cursor: 'pointer', // 👈 Makes the cursor change to pointer
      }}
      onClick={() => window.open(url, '_blank')} // Optional: makes the whole card clickable
    >
      <img
        src={src ? src : image}
        style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        className="card-img-top"
        alt="News"
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : 'No Title'}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : 'Stay informed with the latest updates. Click below to read the full story.'}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
