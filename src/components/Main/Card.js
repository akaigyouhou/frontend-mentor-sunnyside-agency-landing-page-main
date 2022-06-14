import "./card.css";

const Card = ({title, content, index}) => {
    return (
        <article className={`card card-${index}` + (index === 0 ? " graphic-design-text" : " photography-text")}>
            <h2 className={`card__title card__title-${index} big-text`}>{title}</h2>
            <p className="card__content">{content}</p>
        </article>
    );
}

export default Card;
