import React from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';

class HostingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.knittingtime;
  }

  handleEvent(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.formType( this.props.area.id ,this.state).then(() => this.props.history.push("/knitting_times"));
  }

  render(){
    if(!this.props.sessionId) {
      return null;
    }

    const year = moment().format("YYYY");
    const month = moment().format("M").length < 2 ? "0" + moment().format("M") : moment().format("M");
    const day = moment().format("D").length < 2 ? "0" + moment().format("D") : moment().format("D");

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h2>Knitting Time Details</h2>
          <label>Date:
            <input type="date" onChange={this.handleEvent("date")} value={this.state.date} min={`${year}-${month}-${day}`}></input>
          </label>

          <label>Start Time:
            <input type="text" onChange={this.handleEvent("start_time")} value={this.state.start_time}></input>
          </label>

          <label>End Time:
            <input type="text" onChange={this.handleEvent("end_time")} value={this.state.end_time}></input>
          </label>
          <label>Address 1:
            <input type="text" onChange={this.handleEvent("address_1")} value={this.state.address_1}></input>
          </label>

          <label>Address 2:
            <input type="text" onChange={this.handleEvent("address_2")} value={this.state.address_2}></input>
          </label>

          <label>City:
            <input type="text" onChange={this.handleEvent("city")} value={this.state.city}></input>
          </label>

          <label>State:
            <input type="text" onChange={this.handleEvent("state")} value={this.state.state}></input>
          </label>

          <label>Zip:
            <input type="text" onChange={this.handleEvent("zip")} value={this.state.zip}></input>
          </label>

          <label>Brief Description:
            <textarea onChange={this.handleEvent("description")} value={this.state.description}></textarea>
          </label>

          <input type="submit" value={this.props.action}></input>
        </form>

      </div>
    )
  }
};



export default withRouter(HostingForm);
