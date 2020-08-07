import React, { Component } from "react";
import BarChart from "./Charts/BarChart";
import RadarChart from "./Charts/RadarChart";
import PolarChart from "./Charts/PolarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import data from "../../../assets/data/songData.json";
import classes from "./DisplayedCharts.module.css";

class DisplayedCharts extends Component {
  state = {
    authors: data.songsNumberByAuthor.map((item) => item.author),
    songsByAuthors: data.songsNumberByAuthor.map((item) => item.songsNumber),
    genres: data.textGenre.map((item) => item.genre),
    genreNumber: data.textGenre.map((item) => item.number),
    sourceType: data.sourcesOfText.map((item) => item.type),
    sourceNumber: data.sourcesOfText.map((item) => item.number),
    relationType: data.genreSourceRelation.map((item) => item.relation),
    relationNumber: data.genreSourceRelation.map((item) => item.number),
    barData: {},
    barOptions: {},
    radarData: {},
    radarOptions: {},
    polarData: {},
    polarOptions: {},
    doughnutData: {},
    doughnutOptions: {},
  };

  componentDidMount() {
    this.getChartHandler();
  }

  componentDidUpdate(prevProps) {
    if (
      this.getMatchParamHandler(this.props) !==
      this.getMatchParamHandler(prevProps)
    ) {
      this.getChartHandler();
    }
  }

  getMatchParamHandler(properProps) {
    return Object.keys(properProps.match.params)[0];
  }

  getChartFactoryHandler(propFn, propsValue, bar, radar, polar, pie) {
    switch (propFn(propsValue)) {
      case "bar":
        return bar;
      case "radar":
        return radar;
      case "polar":
        return polar;
      case "pie":
        return pie;
      default:
        break;
    }
  }

  getProperChartType = (componentType) => {
    return componentType;
  };

  getRenderedChart() {
    return this.getChartFactoryHandler(
      this.getMatchParamHandler,
      this.props,
      this.getProperChartType(
        <BarChart data={this.state.barData} options={this.state.barOptions} />
      ),
      this.getProperChartType(
        <RadarChart
          data={this.state.radarData}
          options={this.state.radarOptions}
        />
      ),
      this.getProperChartType(
        <PolarChart
          data={this.state.polarData}
          options={this.state.polarOptions}
        />
      ),
      this.getProperChartType(
        <DoughnutChart
          data={this.state.doughnutData}
          options={this.state.doughnutOptions}
        />
      )
    );
  }

  getChartDataHandler(propFn, propsValue, bar, radar, polar, pie) {
    switch (propFn(propsValue)) {
      case "bar":
        bar();
        break;
      case "radar":
        radar();
        break;
      case "polar":
        polar();
        break;
      case "pie":
        pie();
        break;
      default:
        break;
    }
  }

  getChartHandler() {
    this.getChartDataHandler(
      this.getMatchParamHandler,
      this.props,
      this.getBarDataHandler,
      this.getRadarDataHandler,
      this.getPolarDataHandler,
      this.getPieDataHandler
    );
  }

  getDataBackgroundColors = () => {
    return [
      "hsla(357, 100%, 17%, 0.5)",
      "hsla(126, 72%, 29%, 0.5)",
      "hsla(37, 100%, 6%, 0.5)",
      "hsla(29, 100%, 50%, 0.5)",
      "hsla(240, 16%, 44%, 0.5)",
      "hsla(46, 74%, 92%, 0.5)",
      "hsla(300, 62%, 68%, 0.5)",
    ];
  };

  getTitleHandler = (title, fontSize, fontColor) => {
    return {
      display: true,
      text: title,
      fontSize: fontSize,
      fontColor: fontColor,
    };
  };

  getTooltipHandler = (
    bcgColor,
    borderLabelColor,
    bcgLabelColor,
    labelColor
  ) => {
    return {
      backgroundColor: bcgColor,
      callbacks: {
        labelColor: () => {
          return {
            borderColor: borderLabelColor,
            backgroundColor: bcgLabelColor,
          };
        },
        labelTextColor: () => labelColor,
      },
    };
  };

  getLegendHandler = (legendFontSize, legendTextColor) => {
    return {
      display: true,
      labels: {
        fontSize: legendFontSize,
        fontColor: legendTextColor,
        usePointStyle: true,
      },
    };
  };

  getChartPropertiesHandler = () => {
    return {
      bar_width: 100,
      tick_labels_padding: 15,
      font_size_title: 20,
      font_size_legend: 15,
      font_color: "#E8E9F3",
      getBackgroundColor: (opacityValue) =>
        `hsla(267, 73%, 3%, ${opacityValue})`,
      getLabelColors: (opacityValue) => `hsla(357, 100%, 17%, ${opacityValue})`,
      label_color: "#2EC4B6",
    };
  };

  getBarDataHandler = () => {
    const {
      bar_width,
      tick_labels_padding,
      font_size_title,
      font_size_legend,
      font_color,
      getBackgroundColor,
      getLabelColors,
      label_color,
    } = this.getChartPropertiesHandler();

    this.setState({
      barData: {
        labels: this.state.relationType,
        datasets: [
          {
            label: "Genre of text related to the source of text",
            barThickness: bar_width,
            data: this.state.relationNumber,
            backgroundColor: this.getDataBackgroundColors(),
          },
        ],
      },
      barOptions: {
        title: this.getTitleHandler("Bar Chart", font_size_title, font_color),
        legend: this.getLegendHandler(font_size_legend, font_color),
        tooltips: this.getTooltipHandler(
          getBackgroundColor(0.8),
          getLabelColors(0.7),
          getLabelColors(0.5),
          label_color
        ),
        scales: {
          xAxes: [
            {
              gridLines: {
                offsetGridLines: true,
                color: getBackgroundColor(0.2),
              },
              ticks: {
                fontColor: font_color,
                labelOffset: bar_width / 2,
                padding: tick_labels_padding,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                beginAtZero: true,
                color: getBackgroundColor(0.2),
              },
              ticks: {
                beginAtZero: true,
                fontColor: font_color,
                padding: tick_labels_padding,
              },
            },
          ],
        },
      },
    });
  };

  getRadarDataHandler = () => {
    const {
      font_size_title,
      font_size_legend,
      font_color,
      getBackgroundColor,
      getLabelColors,
      label_color,
    } = this.getChartPropertiesHandler();

    this.setState({
      radarData: {
        labels: this.state.authors,
        datasets: [
          {
            label: "Number of songs (by authors)",
            data: this.state.songsByAuthors,
            backgroundColor: this.getDataBackgroundColors(),
            pointRadius: 7,
            pointHoverRadius: 12,
            pointLabelFontColor: font_color,
            borderWidth: 4,
            borderColor: getBackgroundColor(0.8),
            fill: false,
            tension: 0.5,
          },
        ],
      },
      radarOptions: {
        scale: {
          pointLabels: {
            fontColor: font_color,
          },
          ticks: {
            fontColor: font_color,
            backdropColor: getBackgroundColor(0.9),
          },
          angleLines: {
            color: getBackgroundColor(0.5),
          },
          gridLines: {
            lineWidth: 2,
            color: getBackgroundColor(0.4),
            offsetGridLines: true,
          },
          scaleLabel: {
            fontColor: font_color,
          },
        },
        title: this.getTitleHandler("Radar Chart", font_size_title, font_color),
        legend: this.getLegendHandler(font_size_legend, font_color),
        tooltips: this.getTooltipHandler(
          getBackgroundColor(0.8),
          getLabelColors(0.7),
          getLabelColors(0.5),
          label_color
        ),
      },
    });
  };

  getPolarDataHandler = () => {
    const {
      font_size_title,
      font_size_legend,
      font_color,
      getBackgroundColor,
      getLabelColors,
      label_color,
    } = this.getChartPropertiesHandler();

    this.setState({
      polarData: {
        labels: this.state.genres,
        datasets: [
          {
            data: this.state.genreNumber,
            backgroundColor: this.getDataBackgroundColors(),
            borderColor: font_color,
            borderWidth: 2,
            hoverBorderWidth: 5,
          },
        ],
      },
      polarOptions: {
        title: this.getTitleHandler("Polar Chart", font_size_title, font_color),
        tooltips: this.getTooltipHandler(
          getBackgroundColor(0.8),
          getLabelColors(0.7),
          getLabelColors(0.5),
          label_color
        ),
        legend: this.getLegendHandler(font_size_legend, font_color),
        scale: {
          ticks: {
            fontColor: font_color,
            backdropColor: getBackgroundColor(0.9),
          },
          gridLines: {
            lineWidth: 2,
            color: getBackgroundColor(0.3),
          },
        },
      },
    });
  };

  getPieDataHandler = () => {
    const {
      font_size_title,
      font_size_legend,
      font_color,
      getBackgroundColor,
      getLabelColors,
      label_color,
    } = this.getChartPropertiesHandler();

    this.setState({
      doughnutData: {
        labels: this.state.sourceType,
        datasets: [
          {
            data: this.state.sourceNumber,
            backgroundColor: this.getDataBackgroundColors(),
            borderColor: font_color,
            borderWidth: 2,
            hoverBorderWidth: 5,
          },
        ],
      },
      doughnutOptions: {
        cutoutPercentage: 70,
        title: this.getTitleHandler(
          "Doughnut Chart",
          font_size_title,
          font_color
        ),
        tooltips: this.getTooltipHandler(
          getBackgroundColor(0.8),
          getLabelColors(0.7),
          getLabelColors(0.5),
          label_color
        ),
        legend: this.getLegendHandler(font_size_legend, font_color),
      },
    });
  };

  render() {
    return (
      <div className={classes.DisplayedCharts}>{this.getRenderedChart()}</div>
    );
  }
}

export default DisplayedCharts;
