import "./pic.css";

const Pic = ({index}) => {
    return (
        <div className={`picture picture-${index}`}></div>
    );
}

export default Pic;
