import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image';
function App() {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Name/>
        <Price/>
        <Description/>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
