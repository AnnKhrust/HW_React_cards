import Card from "./assets/Components/Cards/Cards";
import Body from "./assets/Components/Body/Body";
import Img from "./assets/Components/Img/Img";


function App() {

  return (
    <>
      <Card>
        <Img img="src/assets/img/img1.jpg" />
        <Body
          title="Card title"
          content="Some quick example text to build on the card title and make up the bulk of the card's content."
          linkBtn="#"
          textBtn="Go somewhere"
        />
      </Card>
      <Card>
        <Body
          title="Special title treatment"
          content="With supporting text below as a natural lead-in to additional content."
          linkBtn="#"
          textBtn="Go somewhere"
        />
      </Card>
    </>
  )
}

export default App;