import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";

export default class PlainColumn2D extends Component {

  constructor(props) {
    super(props);

    this.state = {
      type: "column2d",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "caption": "Countries With Most Oil Reserves [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberSuffix": "K",
          "theme": "fusion"
        },
        "data": [
          {
            "label": "Venezuela",
            "value": "290"
          },
          {
            "label": "Saudi",
            "value": "260"
          },
          {
            "label": "Canada",
            "value": "180"
          },
          {
            "label": "Iran",
            "value": "140"
          },
          {
            "label": "Russia",
            "value": "115"
          },
          {
            "label": "UAE",
            "value": "100"
          },
          {
            "label": "US",
            "value": "30"
          },
          {
            "label": "China",
            "value": "30"
          }
        ]
      }
    };


    this.mapState = {
      chart: {
        caption: "Average Temperature of US States",
        subcaption: "1979 - 2000",
        entityfillhovercolor: "#F8F8E9",
        numbersuffix: "°F",
        showlabels: "1",
        borderthickness: "0.4",
        theme: "fusion",
        entitytooltext:
          "<b>$lname</b> has an average temperature of <b>$datavalue</b>"
      },
      colorrange: {
        minvalue: "20",
        code: "#00A971",
        gradient: "1",
        color: [
          {
            minvalue: "20",
            maxvalue: "40",
            code: "#EFD951"
          },
          {
            minvalue: "40",
            maxvalue: "60",
            code: "#FD8963"
          },
          {
            minvalue: "60",
            maxvalue: "80",
            code: "#D60100"
          }
        ]
      },
      data: [
        {
          id: "HI",
          value: "70.0"
        },
        {
          id: "DC",
          value: "52.3"
        },
        {
          id: "MD",
          value: "54.2"
        },
        {
          id: "DE",
          value: "55.3"
        },
        {
          id: "RI",
          value: "50.1"
        },
        {
          id: "WA",
          value: "48.3"
        },
        {
          id: "OR",
          value: "48.4"
        },
        {
          id: "CA",
          value: "59.4"
        },
        {
          id: "AK",
          value: "26.6"
        },
        {
          id: "ID",
          value: "44.4"
        },
        {
          id: "NV",
          value: "49.9"
        },
        {
          id: "AZ",
          value: "60.3"
        },
        {
          id: "MT",
          value: "42.7"
        },
        {
          id: "WY",
          value: "42.0"
        },
        {
          id: "UT",
          value: "48.6"
        },
        {
          id: "CO",
          value: "45.1"
        },
        {
          id: "NM",
          value: "53.4"
        },
        {
          id: "ND",
          value: "40.4"
        },
        {
          id: "SD",
          value: "45.2"
        },
        {
          id: "NE",
          value: "48.8"
        },
        {
          id: "KS",
          value: "54.3"
        },
        {
          id: "OK",
          value: "59.6"
        },
        {
          id: "TX",
          value: "64.8"
        },
        {
          id: "MN",
          value: "41.2"
        },
        {
          id: "IA",
          value: "47.8"
        },
        {
          id: "MO",
          value: "54.5"
        },
        {
          id: "AR",
          value: "60.4"
        },
        {
          id: "LA",
          value: "66.4"
        },
        {
          id: "WI",
          value: "43.1"
        },
        {
          id: "IL",
          value: "51.8"
        },
        {
          id: "KY",
          value: "55.6"
        },
        {
          id: "TN",
          value: "57.6"
        },
        {
          id: "MS",
          value: "63.4"
        },
        {
          id: "AL",
          value: "62.8"
        },
        {
          id: "GA",
          value: "63.5"
        },
        {
          id: "MI",
          value: "44.4"
        },
        {
          id: "IN",
          value: "51.7"
        },
        {
          id: "OH",
          value: "50.7"
        },
        {
          id: "PA",
          value: "48.8"
        },
        {
          id: "NY",
          value: "45.4"
        },
        {
          id: "VT",
          value: "42.9"
        },
        {
          id: "NH",
          value: "43.8"
        },
        {
          id: "ME",
          value: "41.0"
        },
        {
          id: "MA",
          value: "47.9"
        },
        {
          id: "CT",
          value: "49.0"
        },
        {
          id: "NJ",
          value: "52.7"
        },
        {
          id: "WV",
          value: "51.8"
        },
        {
          id: "VA",
          value: "55.1"
        },
        {
          id: "NC",
          value: "59.0"
        },
        {
          id: "SC",
          value: "62.4"
        },
        {
          id: "FL",
          value: "70.7"
        }
      ]
    }
    
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: { uri: "file:///android_asset/fusioncharts.html" },
      ios: require("./assets/fusioncharts.html")
    });
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.header}>A Column 2D Chart</Text>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={this.state.type}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={this.state.dataSource}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
        </View>


       

      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10
  },
  container2: {
    // flex: 2,
    padding: 10
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },
  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  },
  mapContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});

