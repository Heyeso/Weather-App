import $ from "jquery";


const Result = (props) => {
    let temp = parseFloat(props.data.main.temp - 273.15).toFixed(0);

    if(temp > 25) {
        $(".contain").css({"background-color": "rgb(255, 94, 0)"})
    }
    else
        if(temp > 15) {
            $(".contain").css({"background-color": "rgb(201, 201, 0)"})
        }
        else
            if(temp > 5) {
                $(".contain").css({"background-color": "rgb(0, 128, 49)"})
            }
            else
                $(".contain").css({"background-color": "rgb(0, 132, 255)"})
    
    let desc = props.data.weather[0].main;
    let img = "";

    if(desc === "Rain") {
        img = "images/weatherConditions/rain.png"
    }
    else
        if(desc === "Clear") {
            img = "images/weatherConditions/clear.png"
        }
        else
            if(desc === "Drizzle") {
                img = "images/weatherConditions/drizzle.png"
            }
            else
                if(desc === "Snow") {
                    img = "images/weatherConditions/snow.png"
                }
                else
                    if(desc === "Thunderstorm") {
                        img = "images/weatherConditions/thunderstorm.png"
                    }
                    else
                        if(desc === "Clouds") {
                            img = "images/weatherConditions/clouds.png"
                        }
                        else
                            img = "images/weatherConditions/atmosphere.png"

    return(
        <div className="result">
            <h1 className="location">
                {props.data.name + " " + props.data.sys.country}
            </h1>
            <div className="weather">
                <div className="desc">{desc}</div>
                <img src={img} alt="Weather description" />
                <div className="degree">{temp}<span>°</span>c</div>
            </div>
        </div>
    )
}

export default Result