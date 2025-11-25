export const ReportCard = ({ wheather }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">
        {wheather.name},{wheather.sys.country}
      </h2>
      <div className="flex justify-center item-center mt-4">
        <img
          src={`https://openweathermap.org/img/wn/${wheather.weather[0].icon}@2x.png`}
          alt={wheather.weather[0].description}
          className="w-16 h-16"
        />

        <p className="text-4xl font-bold">
          {Math.round(wheather.main?.temp)}°C
        </p>
      </div>
      <p className=" text-center text-gray-500 capitalize text-lg font-semibold mt-2">
        {wheather.weather[0].description}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="text-center">
          <p className="text-gray-400">Humidity</p>
          <p className="font-bold">{wheather.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Wind</p>
          <p className="font-bold">{wheather.wind.speed}km/h</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Pressure</p>
          <p className="font-bold">{wheather.main.pressure}hPa</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400"> Feels like</p>
          <p className="font-bold">{Math.round(wheather.main?.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};
