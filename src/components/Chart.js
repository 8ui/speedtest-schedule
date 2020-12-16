import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';


const format = () => tick => {
  const options = {
    hour: 'numeric', minute: 'numeric',
    hour12: false
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(tick));
};
const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1),
    whiteSpace: 'nowrap',
  },
});
const legendItemStyles = () => ({
  item: {
    flexDirection: 'column',
  },
});

const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const demoStyles = () => ({
  chart: {
    paddingRight: '20px',
  },
  title: {
    whiteSpace: 'pre',
  },
});

const titleStyles = {
  title: {
    whiteSpace: 'pre',
  },
};
const TitleText = withStyles(titleStyles)(({ classes, ...props }) => (
  <Title.Text {...props} className={classes.title} />
));

class ChartView extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { classes } = this.props;

    return (
      <Chart
        data={data}
        height={450}
        className={classes.chart}
      >
        <ArgumentAxis
          tickFormat={format}
        />
        <ValueAxis
          max={50}
        />

        <LineSeries
          name="Download"
          valueField="download"
          argumentField="date"
        />
        <LineSeries
          name="Upload"
          valueField="upload"
          argumentField="date"
        />
        <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
        <Title
          text="Dynamics of speed change"
          textComponent={TitleText}
        />
        <Animation />
      </Chart>
    );
  }
}

export default withStyles(demoStyles, { name: 'ChartView' })(ChartView);
