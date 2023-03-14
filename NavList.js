import { Link } from "react-router-dom";

function NavList(props) {
    const stil = {
        display: 'inline-block',
        margin: '0 10px',
    };

    const hover_btn = {
        className: "btn btn-lg btn-danger"
    }

    const normal_btn = {
        className: "btn btn-lg btn-warning"
    }

    // onMouseOver={hover_btn} onMouseOut={normal_btn}
    return (
        <li style={stil}>
            <Link key={props.path} className="btn btn-lg btn-warning" to={props.path}>{props.name}</Link>
            {/* <a href={"#"} 
                onClick= {props.tiklandiginda}
                className="btn btn-lg btn-warning"
                onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                onMouseOut={(e) => Object.assign(e.target, normal_btn)}
                >
                {props.menuElemani}
            </a> */}
        </li>
    );
}

export default NavList;