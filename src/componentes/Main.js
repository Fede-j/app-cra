import Button from 'react-bootstrap/Button';
// Evitamos tener que acordarnos tantas clases.

const Main = (props) => {
    return (
        <main>
            <h2>{props.titulo}</h2>
            <Button onClick={()=>{console.log("click")}}>Click</Button>
            
        </main>
    )
}

export default Main