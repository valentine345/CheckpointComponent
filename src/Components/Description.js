import Card from 'react-bootstrap/Card';
const Description=()=>{
    var description = "Désormais âgé de 25 ans, Kylian Mbappé a connu en huit ans de carrière autant de hauts et de bas que certains vieux briscards en bout de course."
    return(
        <Card.Text>
            {description}
        </Card.Text>
    )
}

export default Description