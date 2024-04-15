import Card from 'react-bootstrap/Card';

const Image=()=>{
    var alhassane = "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/personnalites/kylian-mbappe/87919214-1-fre-FR/Kylian-Mbappe.jpg"
    return(
        <Card.Img variant="top" src={alhassane} />
    )
}

export default Image