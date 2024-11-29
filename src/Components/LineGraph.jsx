import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineGraph = ({ weather }) => {
    let originalData = []

    weather && (
        originalData = [
            ["Day", "Min Temp (°C)", "Max Temp (°C)"],
            ["Day 1", (weather[0].main.temp / 10).toFixed(2), (weather[0].main.feels_like / 10).toFixed(2)],
            ["Day 2", (weather[1].main.temp / 10).toFixed(2), (weather[1].main.feels_like / 10).toFixed(2)],
            ["Day 3", (weather[2].main.temp / 10).toFixed(2), (weather[2].main.feels_like / 10).toFixed(2)],
            ["Day 4", (weather[3].main.temp / 10).toFixed(2), (weather[3].main.feels_like / 10).toFixed(2)]
        ]
    )

    const data = originalData.slice(1).map((item, index) => ({
        name: item[0],
        minTemp: item[1],
        maxTemp: item[2]
    }));

    return (
        <div className="w-11/12 h-full  rounded-sm bg-white">
            {weather ? <ResponsiveContainer width="100%" height="100%" className='p-2'>
                <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5, }} >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" className='text-xs lg:text-base'/>
                    <YAxis domain={['dataMin - 0.2', 'dataMax + 0.2']} label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }} tickCount={6} className='text-xs lg:text-base'/>
                    <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #ddd' }} labelStyle={{ fontWeight: 'bold' }} />
                    <Legend />
                    <Line type="monotone" dataKey="minTemp" stroke="#8884d8" name="Temperature" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="maxTemp" stroke="#82ca9d" name="Approx Temperature" />
                </LineChart>
            </ResponsiveContainer> : <div className='w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.3)] animate-pulse'>
                Fetching Data ...
            </div>
            }
        </div>
    );
};

export default LineGraph;