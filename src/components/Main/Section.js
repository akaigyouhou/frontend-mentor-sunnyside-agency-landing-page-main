import "./section.css";

const Section = ({article, index}) => {
    return (
        <div className={`section section-${index}`}>
            <div className={`section-image section-image-${index}`}></div>
            <div className="article-contianer">
                <article className={`article article-${index}`}>
                    <h2 className="article__title big-text">{article.title}</h2>
                    <p className="article__content">{article.content}</p>
                    <button className={`article__button article__button-${index}`}><span>Learn more</span></button>
                </article>
            </div>
        </div>
    );
}

export default Section;
