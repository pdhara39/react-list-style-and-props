import "./stylesheet.css"
const divone ={
    color:"red",
    fonstSize:"20px",
};
export default function Style(){
    return(<div>
        <div style={divone}>This div is styled inline css</div>
        <div className="div2">This div is styled by external css file</div>
        </div>
    )
}