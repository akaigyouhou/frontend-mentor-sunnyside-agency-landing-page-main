import "./main.css";
import Section from './Section';
import articles from '../../articles.json';
import cards from '../../cards.json';
import Card from './Card';
import Client from './Client';
import Gallery from './Gallery';


const Main = () => {
    return (
        <main className="main">
            {articles.map((article, index) => (
                <Section key={article.title} article={article} index={index} />
            ))}
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card key={card.title} title={card.title} content={card.content} index={index} />
                ))}
            </div>
            <Client />
            <Gallery />
        </main>
    );
}

export default Main;
