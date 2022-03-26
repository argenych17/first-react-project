
import './App.css';
import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from './components/footer/footer';

function App() {

  const carsArray= [
    {
      tittle: "Продаю АУДИ A8 ",
      price:5000,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ipsa!",
      img:"https://avatars.mds.yandex.net/get-verba/3587101/2a0000017d8623b296bb5cd0810e0a2fbfc1/cattouchret"
    },
    {
      tittle: "Продаю BMW E38 ",
      price:4000,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ipsa!",
      img:"https://motor.ru/imgs/2021/07/04/22/4749187/91fb218720ee1e2273caccc56d541dddfeae8485.jpg"
    },
    {
      tittle: "Продаю Honda Civic ",
      price:8000,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ipsa!",
      img:"https://upload.wikimedia.org/wikipedia/commons/3/36/2006_Honda_Civic_Si.jpg"
    },

  ]

  return (
    <div className="App">
     <Header />
     <div className="container mt-5 " >
       <div className='row justify-content-between '>
       
        {
          carsArray.map((item) => <Card
           tittle={item.tittle} 
           price={item.price}
           img={item.img}
           description={item.description}
          
          />)
        }


       </div>
     </div>

     <Footer  />
    </div>
)  ;
}

export default App;
