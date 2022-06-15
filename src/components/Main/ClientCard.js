import "./clientcard.css";
import emily from '../../images/image-emily.jpg';
import thomas from '../../images/image-thomas.jpg';
import jennie from '../../images/image-jennie.jpg';

const ClientCard = ({client, index}) => {
    const imageUrl = index === 0 ? emily : (index === 1 ? thomas : jennie);

    return (
        <article className="client-article">
            <img className="client-article__avatar" src={imageUrl} alt={client.title} />
            <p className="client-article__content">{client.content}</p> 
            <h2 className="client-article__name big-text">{client.name}</h2>
            <h3 className="client-article__title">{client.title}</h3>
        </article>
    );
}

export default ClientCard;
