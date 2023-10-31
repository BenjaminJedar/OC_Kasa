import './tag.css';

function Tag({ tagValue }) {
  return (
    <div className="tag_box">
      <div className="tag">{tagValue}</div>
    </div>
  );
}

export default Tag;
