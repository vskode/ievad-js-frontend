    /* App.js */
    import React, { Component } from 'react';
    import CanvasJSReact from '@canvasjs/react-charts';
    //var CanvasJSReact = require('@canvasjs/react-charts');
     
    // var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    class App extends Component {
      constructor(props) { 
        super(props);
        this.charts = [];
      }
    
      showTooltip = (e) => {
        if (!e || !e.entries || !e.entries[0]) return;
    
        for (let i = 0; i < this.charts.length; i++) {
          if (this.charts[i] !== e.chart && this.charts[i]?.toolTip) {
              // Check if toolTip and container exist and are valid
              const toolTip = this.charts[i].toolTip;
              if (toolTip && toolTip.container && toolTip.container.style) {
                toolTip.showAtX(e.entries[0].dataPoint.z);
              }
          }
        }
      }
    
      hideTooltip = (e) => {
        for (let i = 0; i < this.charts.length; i++) {
          if (this.charts[i] !== e.chart && this.charts[i]?.toolTip) {
              // Check if toolTip and container exist and are valid
              const toolTip = this.charts[i].toolTip;
              if (toolTip && toolTip.container && toolTip.container.style) {
                toolTip.hide();
              }
          }
        }
      }
      render() {
        const options1 = {
          title: {
            text: "Chart 1"
          },
          theme: "dark2",
          toolTip: {
            //shared: true,
            updated: this.showTooltip
          },
          data: [
            {
              type: "scatter",
              toolTipContent: "{x} : {y} <br> z: {z}",
              dataPoints: [
                { x: 1, y: 71, z: 11 },
                { x: 2, y: 55, z: 2 },
                { x: 3, y: 50, z: 3 },
                { x: 4, y: 65, z: 4 },
                { x: 5, y: 95, z: 5 },
                { x: 6, y: 68, z: 6 },
                { x: 7, y: 28, z: 7 },
                { x: 11, y: 34, z: 8 },
                { x: 9, y: 14, z: 9 },
                { x: 23.4, y: 544, z: 44},
                { x: 31.4, y: 502, z: 102},
                { x: 40.8, y: 262, z: 62},
                { x: 37.4, y: 312, z: 12},
                { x: 42.3, y: 202, z: 2},
                { x: 39.1, y: 302, z: 12},
                { x: 17.2, y: 408, z: 8}
              ]
            }
          ]
        }
    
        const options2 = {
          title: {
            text: "Chart 1"
          },
          toolTip: {
            //shared: true,
            updated: this.showTooltip
          },
          data: [
            {
              type: "scatter",
              toolTipContent: "{x} : {y} <br> z: {z}",
              dataPoints: [
                { x: 1, y: 61, z: 2 },
                { x: 2, y: 85, z: 3 },
                { x: 3, y: 30, z: 5 },
                { x: 4, y: 25, z: 11 },
                { x: 5, y: 75, z: 7 },
                { x: 6, y: 18, z: 9 },
                { x: 7, y: 25, z: 4 },
                { x: 8, y: 74, z: 6 },
                { x: 9, y: 54, z: 8 },
                { x: 3.4, y: 544, z: 44},
                { x: 131.4, y: 502, z: 102},
                { x: 410.8, y: 262, z: 62},
                { x: 317.4, y: 312, z: 12},
                { x: 412.3, y: 202, z: 2},
                { x: 309.1, y: 302, z: 12},
                { x: 217.2, y: 408, z: 8}
              ]
            }
          ]
        }
        console.log(this.charts)
        return (
          <div>
            <CanvasJSChart 
            options = {options1}
            onRef={ref => (this.charts.push(ref))} //Reference to the chart-instance
            containerProps={{height : "300px"}}
            />

            <CanvasJSChart 
            options = {options2}
            onRef={ref => (this.charts.push(ref))} //Reference to the chart-instance
            containerProps={{height : "300px"}}
            />
          </div>
        );
    	}
    }
    export default App;                              