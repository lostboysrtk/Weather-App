import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./Info.css";

export default function InfoBox({info}){

  const INIT_URL="https://t4.ftcdn.net/jpg/07/55/97/01/360_F_755970185_91qfWqP2mMyjfIvWC0lnJQNtyWIXdB7H.jpg";
  let HOT_URL="https://image.connexionfrance.com/239009.webp?imageId=239009&width=960&height=642&format=jpg";
  let COLD_URL="https://publichealthmatters.blog.gov.uk/wp-content/uploads/sites/33/2014/10/1280px-UK_snow_February_2_2009_img008-1024x680.jpg";
  let RAIN_URL="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";


    return(
    <div className='InfoBox'>
            <h3>Weather Information! - {info.city}..</h3>
    <div className='cardContainer'>
    <Card sx={{ maxWidth: 380 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={
            info.humidity>80? RAIN_URL:(info.temp<20)? COLD_URL:HOT_URL
          }
          title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80? <ThunderstormIcon/>:(info.temp<20)? <AcUnitIcon/>:<LightModeIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Min Temp: {info.tempMin}&deg;C</p>
          <p>Max Temp: {info.tempMax}&deg;C</p>
          <p>Humidity: {info.humidity}</p>
          <p>Weather can be described as <i>{info.weather}</i> feels like <i>{info.feelslike}&deg;C</i>.</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

    </div>
    );
};