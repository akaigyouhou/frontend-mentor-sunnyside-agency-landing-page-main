import "./menu.css";

const Menu = ({open}) => {

    return (
        <div className={"menu" + (open ? " menu-open" : "")}>
            <button className="menu-item">About</button>
            <button className="menu-item">Services</button>
            <button className="menu-item">Projects</button>
            <button className="menu-item-contact">Contact</button>
        </div>
    );
}

export default Menu;