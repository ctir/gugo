/*
  Author: Charles Tiriamai
  Date: 2019/2/7
  Update: 2019/2/8
*/

/* Class Definitions */
class TopicButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      displayedColor: getRandomColor(),
      currentColor: "#666",
    };

    this.randomizeColor = this.randomizeColor.bind(this);
  }

  showModal() {
    document.getElementById("topics-modal").style.display = "block";
    document.getElementById("topics-modal").style.overflowY = "scroll";
    document.getElementById('body').style.overflowY = "hidden";
  }

  showHover() {
    this.setState((prevState) => {
      return {
        displayedColor: prevState.displayedColor = "#666",
        boxShadow: "0px 0px #666",
      }
    });
  }

  restoreColor() {
    this.setState((prevState) => {
      return {
        displayedColor: prevState.displayedColor = prevState.currentColor,
      }
    });
  }

  randomizeColor() {
    this.setState((prevState) => {
      return {
        displayedColor: prevState.displayedColor = getRandomColor(),
        currentColor: prevState.displayedColor,
      }
    });
  }

  componentDidMount() {
    setInterval(this.randomizeColor, 2000);
  }

  render() {
    var TopicButtonStyle = {
      width: 50,
      height: 50,
      borderColor: this.state.displayedColor,
      boxShadow: "3px 3px " + this.state.displayedColor,
    };

    var iconStyle = {
      color: this.state.displayedColor,
    }

    return (
      <button id={"modal-btn"}
        onMouseEnter={() => this.showHover()}
        onMouseLeave={() => this.restoreColor()}
        onClick={() => this.showModal()} /* Adapted from https://stackoverflow.com/a/34226188 */
        style={TopicButtonStyle}>
        <i style={iconStyle} id={"btn-icon"} className={"material-icons"}>
          add
        </i>
      </button>
    );
  }
}

function getRandomColor() {
  var colors = ["#f1e", "#fe1", "#1ef", "#1fe", "#e1f", "#ef1",
    "#444", "#789", "#3d7", "#d73", "#d37", "#37d",];
  return colors[Math.floor(Math.random() * colors.length)];
}

ReactDOM.render(
  <div>
    <TopicButton key={2} />
  </div>,
  document.querySelector("#react-topicbutton")
);
