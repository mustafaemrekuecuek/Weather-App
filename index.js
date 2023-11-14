import axios from "axios";
import express, { request, response } from "express";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const port = 3000;

const API_Key = process.env.API;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

function formatUnixTimestampToTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
  }
  
app.post("/submit", async (req,res) => {
    const location = req.body.location;
    const unicodeLettersRegex = /^[A-Za-z]+$/;

    if(!unicodeLettersRegex.test(location) || location == ""){
        return;
    }
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lang=en&q=${location}&units=metric&appid=${API_Key}`);
        const result = response.data;
        const weather = result.weather[0];

        const sunriseTimestamp = result.sys.sunrise * 1000; // Umrechnung in Millisekunden
        const sunsetTimestamp = result.sys.sunset * 1000; // Umrechnung in Millisekunden
        const durationInMilliseconds = sunsetTimestamp - sunriseTimestamp;

        res.render("index.ejs", {
            weather: weather.main,
            temperature: Math.floor(result.main.temp),
            wind: result.wind.speed,
            country: result.sys.country,
            input: result.name,
            suntime: Math.floor(durationInMilliseconds / (1000 * 60 * 60)),
            description: weather.description,
            sunrise: formatUnixTimestampToTime(result.sys.sunrise),
            sunset: formatUnixTimestampToTime(result.sys.sunset),
            cod: response.status,
            time: formatUnixTimestampToTime(result.dt),
            humidity: result.main.humidity,
            cloud: result.clouds.all,
            rain: result.rain,
        });

    } catch(error) {
        console.log(error.message);
            res.render("index.ejs", {
                cod: error.response.status,
                message: error.response.data.message,
            });
    }
});

app.listen(port, () => {
      console.log(`Listening on port ${port}`);
});