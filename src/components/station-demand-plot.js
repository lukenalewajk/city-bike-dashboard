import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function station_demand_plot(network_data, station_data, {width} = {}) {
    // if needed, variables can be created here

    return Plot.plot({
        title: `Station Demand for ${network["name"]}`,
        marks: [
            // CHALLENGE 6.2
            // Your code here
            Plot.barY(data, {
                x: "name",
                y: "empty_slots",
                sort: {x: "y"},
                tip: true
              })
        ],
        x: {
            // CHALLENGE 6.3
            // Your code here
            label: "Station Names",
            tickRotate: -45
        },
        y: {
            // CHALLENGE 6.4
            // Your code here
            label: "Number of Empty Slots"
        },
        // CHALLENGE 6.5
        marginLeft: 60,
        marginBottom: 100,
        width: 800,
        height: 400
    });
}