import "./client.css";
import clients from '../../clients.json';
import ClientCard from './ClientCard';

const Client = () => {
    return (
        <section className="client">
            <h2 className="client__title big-text">Client testimonials</h2>
            <div className="client-container">
                {clients.map((client, index) => (
                    <ClientCard key={client.name} client={client} index={index} />
                ))}
            </div>
        </section>
    );
}

export default Client;
