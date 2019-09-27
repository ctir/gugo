/*
  Author: Charles Tiriamai
  Date: 2019/2/7
  Update: 2019/2/8
*/

/* Class Definitions */
class DateTimer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dateText: new Date() + "",
    };

    this.updateDateTimer = this.updateDateTimer.bind(this);
  }

  updateDateTimer() {
    this.setState((prevState) => {
      return {
        dateText: prevState.dateText = new Date() + '',
      }
    });
  }

  componentDidMount() {
    setInterval(this.updateDateTimer, 1000);
  }

  render() {
    var dateTimerStyle = {
      marginTop: 110,
      textAlign: "center",
    };

    return (
      <div style={dateTimerStyle}>
        {this.state.dateText}
      </div>
    );
  }
}


ReactDOM.render(
  <div>
    <DateTimer key={1} />
  </div>,
  document.querySelector("#react-datetimer")
);
