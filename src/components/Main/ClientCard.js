import "./clientcard.css";

const ClientCard = ({client, index}) => {
    return (
        <article className="client-article">
            <img className="client-article__avatar" src={client.image} alt={client.title} />
            <p className="client-article__content">{client.content}</p> 
            <h2 className="client-article__name big-text">{client.name}</h2>
            <h3 className="client-article__title">{client.title}</h3>
        </article>
    );
}

export default ClientCard;
