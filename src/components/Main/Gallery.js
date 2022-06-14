import "./gallery.css";
import Pic from './Pic';

const Gallery = () => {

    return (
        <div className="gallery">
        {(new Array(4)).fill(1).map((_, index) => (
            <Pic key={index} index={index} />
        ))}
        </div>
    );
}

export default Gallery;
