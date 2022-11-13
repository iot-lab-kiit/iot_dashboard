import { useEffect } from 'react';

const Weather = () => {
    var options = {
        url: 'https://io.adafruit.com/api/v2/vaibhavg45/feeds',
        headers: {
          'X-AIO-Key': 'aio_JXLJ44dANwjMcIUaz6Qskb0YLJRO',
          'Content-Type': 'application/json'
        }
      };

      useEffect(()=>{
        const getData = async() =>{
            const response = await fetch(options.url,options.headers);
            const data = await response.json();
            console.log(data);
        }
        getData();
      })
      

      return (
        <div>
            <h1>Weather</h1>
            {/* <p>Temperature: {data.feeds[0].last_value}</p> */}
        </div>
      )
}

export default Weather;
