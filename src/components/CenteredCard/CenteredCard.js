import "./styles.css";

function CenteredCard({ children }) {
  return (
    <div className="container">
      <div>
        <span>{children}</span>
      </div>
    </div>
  );
}

export default CenteredCard;
