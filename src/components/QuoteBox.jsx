import "./styles/QuoteBox.css";

const QuoteBox = ({ handleChangeQuote, quote }) => {
  return (
    <section className="quoteBox">
      <h1 className="textStyle">FORTUNE COOKIES</h1>

      <section className="sectionStyle">
        <button className="buttonStyle" onClick={handleChangeQuote}>
          Try luck
        </button>
        <article className="articleStyle">
          <p>{quote.phrase}</p>
        </article>
      </section>
      <footer className="footerStyle">
        <h4>Source: {quote.author}</h4>
      </footer>
    </section>
  );
};
export default QuoteBox;
