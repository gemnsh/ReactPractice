import './Card.css';

const Card = (props) =>{
    const classes = 'card ' + props.className;
    return <div className={classes} style={{background: props.bgColor}}> {props.children}</div>;
}   
export default Card;