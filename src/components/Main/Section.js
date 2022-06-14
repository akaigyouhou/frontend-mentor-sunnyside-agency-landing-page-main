import "./section.css";

const Section = ({article, index}) => {
    return (
        <section className="section">
            <div className={`section-image section-image-${index}`}></div>
            <article className="article">
                <h2 className="article__title big-text">{article.title}</h2>
                <p className="article__content">{article.content}</p>
                <button className={`article__button article__button-${index}`}>Learn more</button>
            </article>
        </section>
    );
}

export default Section;
