import React, { Component } from "react";
import BarChart from "./Charts/BarChart";
import RadarChart from "./Charts/RadarChart";
import PolarChart from "./Charts/PolarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import data from "../../../assets/data/songData.json";
import classes from "./DisplayedCharts.module.css";

import chartUtils from "../../../utils/chartUtils";

const {
  getDataBackgroundColors,
  getTitleHandler,
  getLegendHandler,
  getTooltipHandler,
  getChartPropertiesHandler,
} = chartUtils;

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
    if (this.props.chartId !== prevProps.chartId) {
      this.getChartHandler();
    }
  }

  getChartFactoryHandler(propsValue, bar, radar, polar, pie) {
    switch (propsValue) {
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
      this.props.chartId,
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

  getChartDataHandler(propsValue, bar, radar, polar, pie) {
    switch (propsValue) {
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
      this.props.chartId,
      this.getBarDataHandler,
      this.getRadarDataHandler,
      this.getPolarDataHandler,
      this.getPieDataHandler
    );
  }

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
    } = getChartPropertiesHandler();

    this.setState({
      barData: {
        labels: this.state.relationType,
        datasets: [
          {
            label: "genre-source text's relation",
            barThickness: bar_width,
            data: this.state.relationNumber,
            backgroundColor: getDataBackgroundColors(),
          },
        ],
      },
      barOptions: {
        title: getTitleHandler(
          "Genre of text related to the source of text",
          font_size_title,
          font_color
        ),
        legend: getLegendHandler(font_size_legend, font_color),
        tooltips: getTooltipHandler(
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
    } = getChartPropertiesHandler();

    this.setState({
      radarData: {
        labels: this.state.authors,
        datasets: [
          {
            label: "number of songs",
            data: this.state.songsByAuthors,
            backgroundColor: getDataBackgroundColors(),
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
        title: getTitleHandler(
          "Number of songs (by authors)",
          font_size_title,
          font_color
        ),
        legend: getLegendHandler(font_size_legend, font_color),
        tooltips: getTooltipHandler(
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
    } = getChartPropertiesHandler();

    this.setState({
      polarData: {
        labels: this.state.genres,
        datasets: [
          {
            data: this.state.genreNumber,
            backgroundColor: getDataBackgroundColors(),
            borderColor: font_color,
            borderWidth: 2,
            hoverBorderWidth: 5,
          },
        ],
      },
      polarOptions: {
        title: getTitleHandler("Genres", font_size_title, font_color),
        tooltips: getTooltipHandler(
          getBackgroundColor(0.8),
          getLabelColors(0.7),
          getLabelColors(0.5),
          label_color
        ),
        legend: getLegendHandler(font_size_legend, font_color),
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
    } = getChartPropertiesHandler();

    this.setState({
      doughnutData: {
        labels: this.state.sourceType,
        datasets: [
          {
            data: this.state.sourceNumber,
            backgroundColor: getDataBackgroundColors(),
            borderColor: font_color,
            borderWidth: 2,
            hoverBorderWidth: 5,
          },
        ],
      },
      doughnutOptions: {
        cutoutPercentage: 70,
        title: getTitleHandler("Type of source", font_size_title, font_color),
        tooltips: getTooltipHandler(
          getBackgroundColor(0.8),
          getLabelColors(0.7),
          getLabelColors(0.5),
          label_color
        ),
        legend: getLegendHandler(font_size_legend, font_color),
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
