import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function bike_type_plot(data, {width} = {}) {
    // if needed, variables can be created here

    return Plot.plot({
        title: `Bike Availability at ${station.get('name')}`,
        marks: [
            Plot.barY(data, {
                x: "bike_type",
                y: "count",
                fill: d => d.bike_type === "ebike" ? "#0073e6" : "#ffcc00",
                tip: true
              })
        ],
        x: {
            label: "Bike Type"
        },
        y:{
            label: "Available Bikes",
            domain: [0, totalSlots],
            ticks: d3.range(0, totalSlots + 1, 5),
            grid: true
        },
        color: {
            domain: ["ebike", "normal_bike"],
            range: ["#0073e6", "#ffcc00"],
            legend: true
        }
    })
}