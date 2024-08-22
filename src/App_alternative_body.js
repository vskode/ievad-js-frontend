    	render() {
    		const options1 = {
    			theme: "light2",
    			animationEnabled: false,
    			zoomEnabled: false,
    			title:{
    				text: "Ice Cream Sales vs Temperature"
    			},
    			axisX: {
    				title:"Temperature (in °C)",
    				suffix: "°C",
    				crosshair: {
    					enabled: false,
    					snapToDataPoint: false
    				}
    			},
    			axisY:{
    				title: "Sales",
    				crosshair: {
    					enabled: false,
    					snapToDataPoint: false
    				}
    			},
          toolTip: {
            // shared: true,
            updated: this.showTooltip
          },
    			data: [{
    				type: "scatter",
    				markerSize: 15,
    				toolTipContent: "<b>Temperature: {x}°C</b>   <br/> Sales: {y}",
    				dataPoints: [
    					{ x: 14.2, y: 215, z: 15},
    					{ x: 12.9, y: 175, z: 75},
    					{ x: 16.4, y: 325, z: 125},
    					{ x: 26.9, y: 635, z: 35},
    					{ x: 32.5, y: 464, z: 64},
    					{ x: 22.1, y: 522, z: 22},
    					{ x: 19.4, y: 412, z: 12},
    					{ x: 25.1, y: 614, z: 14},
    					{ x: 34.9, y: 374, z: 74},
    					{ x: 28.7, y: 625, z: 25},
    					{ x: 23.4, y: 544, z: 44},
    					{ x: 31.4, y: 502, z: 102},
    					{ x: 40.8, y: 262, z: 62},
    					{ x: 37.4, y: 312, z: 12},
    					{ x: 42.3, y: 202, z: 2},
    					{ x: 39.1, y: 302, z: 12},
    					{ x: 17.2, y: 408, z: 8}
    				]
    			}]
    		}
    		const options2 = {
    			theme: "dark2",
    			animationEnabled: false,
    			zoomEnabled: false,
    			title:{
    				text: "Ice Cream Sales vs Temperature"
    			},
    			axisX: {
    				title:"Temperature (in °C)",
    				suffix: "°C",
    				crosshair: {
    					enabled: false,
    					snapToDataPoint: false
    				}
    			},
    			axisY:{
    				title: "Sales",
    				crosshair: {
    					enabled: false,
    					snapToDataPoint: false
    				}
    			},
          toolTip: {
            // shared: true,
            updated: this.showTooltip
          },
    			data: [{
    				type: "scatter",
    				markerSize: 15,
    				toolTipContent: "<b>Temperature: {x}°C</b>   <br/> Sales: {y}",
    				dataPoints: [
    					{ x: 24.2, y: 215, z: 15},
    					{ x: 2.9, y: 175, z: 75},
    					{ x: 36.4, y: 325, z: 125},
    					{ x: 66.9, y: 635, z: 35},
    					{ x: 32.5, y: 464, z: 64},
    					{ x: 222.1, y: 522, z: 22},
    					{ x: 119.4, y: 412, z: 12},
    					{ x: 205.1, y: 614, z: 14},
    					{ x: 344.9, y: 374, z: 74},
    					{ x: 218.7, y: 625, z: 25},
    					{ x: 3.4, y: 544, z: 44},
    					{ x: 131.4, y: 502, z: 102},
    					{ x: 410.8, y: 262, z: 62},
    					{ x: 317.4, y: 312, z: 12},
    					{ x: 412.3, y: 202, z: 2},
    					{ x: 309.1, y: 302, z: 12},
    					{ x: 217.2, y: 408, z: 8}
    				]
    			}]
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