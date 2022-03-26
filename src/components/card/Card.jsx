function Card(props) {
    return (

        <div className="card" style={{ width: "18em"  }}>
            <img 
            src={
                props.img 
                ?props.img
                :"https://motor.ru/imgs/2021/07/04/22/4749187/91fb218720ee1e2273caccc56d541dddfeae8485.jpg"
                
                }   />

            
            <div className="card-body">
                <h5>{props.tittle } за {props.price} </h5>
                <h6>{props.description}</h6>
                <h6>{props.prise}</h6>
                
                <a href="#" className="btn btn-primary">Подробнее</a>
            </div>
        </div>
        

       )
}


export default Card;