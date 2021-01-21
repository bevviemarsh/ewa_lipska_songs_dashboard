const chartUtils = {
  getDataBackgroundColors: () => {
    return [
      "hsla(357, 100%, 17%, 0.5)",
      "hsla(126, 72%, 29%, 0.5)",
      "hsla(37, 100%, 6%, 0.5)",
      "hsla(29, 100%, 50%, 0.5)",
      "hsla(240, 16%, 44%, 0.5)",
      "hsla(46, 74%, 92%, 0.5)",
      "hsla(300, 62%, 68%, 0.5)",
    ];
  },

  getTitleHandler: (title, fontSize, fontColor) => {
    return {
      display: true,
      text: title,
      fontSize: fontSize,
      fontColor: fontColor,
    };
  },

  getTooltipHandler: (
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
  },

  getLegendHandler: (legendFontSize, legendTextColor) => {
    return {
      display: true,
      labels: {
        fontSize: legendFontSize,
        fontColor: legendTextColor,
        usePointStyle: true,
      },
    };
  },

  getChartPropertiesHandler: () => {
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
  },
};

export default chartUtils;
