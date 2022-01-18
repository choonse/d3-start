import React, {useEffect} from 'react';
import * as d3 from 'd3';

const DATA = [
  {x: 10, y: 20},
  {x: 30, y: 40},
  {x: 50, y: 80},
  {x: 70, y: 80},
  {x: 90, y: 40},
] 

const App = () =>{

  useEffect(()=>{

    const margin = { top:10, right:40, bottom:30, left:30 },
    width=450 - margin.left - margin.right,
    height=400 - margin.top - margin.bottom;

    const svg = d3.select("#area").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

    const x = d3.scaleLinear().domain([0, 100]).range([0, width]);

    svg.append("g").attr("transform", `translate(0, ${height})`).call(d3.axisBottom(x));

    const y = d3.scaleLinear().domain([0,100]).range([height,0]);
    
    svg.append("g").call(d3.axisLeft(y));

    svg.selectAll('what').data(DATA).enter().append('circle').attr('cx',(d)=>x(d.x)).attr('cy',(d)=>y(d.y)).attr('r',7)

  },[]);

  return (
    <div className="App">
      <svg id="area" height={400} width={500}>
      </svg>
    </div>
  )
}

export default App;