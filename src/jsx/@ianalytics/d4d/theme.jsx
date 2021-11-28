import { createMuiTheme } from "@material-ui/core/styles";

export const plotlyDefaults = {
  plot_bgcolor: "#1d2630",
  paper_bgcolor: "#171e27",
  title_defaults: {
    xref: "paper",
    x: "0",
    yref: "paper",
    y: "1",
    font: { color: "#728ba67f" },
  },
  xaxis_defaults: {
    tickfont: { color: "#728ba6" },
    title: {
      font: {
        color: "this will be replaced I don't know why please don't touch this",
      },
    },

    titlefont: {
      color: "#728ba6",
    },
    color: "#27343f",
    gridcolor: "#27343f",
  },
  yaxis: {
    tickfont: { color: "#728ba6" },
    fixedrange: true,
    titlefont: {
      color: "#728ba6",
    },
    color: "#27343f",
    gridcolor: "#27343f",
  },
  font: { color: "#728ba6" },
};

export const muiTheme = createMuiTheme({
  palette: {
    text: {
      primary: "#728ba6",
      secondary: "#7e96b1",
    },
    primary: {
      main: "#36d7ed",
    },
    secondary: {
      main: "#7a97ae",
    },
    background: {
      default: "#171e27",
      paper: "#242d37",
    },
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#7e96b1",
        textColor: "#728ba6",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "16px",
      },
    },
  },
});
