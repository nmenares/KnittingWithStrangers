import React from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';

class HostingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.knittingtime;
  }

  componentDidMount(){
    this.props.deleteErrors();
  }

  handleEvent(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.formType( this.props.area.id ,this.state, () => {
    this.props.history.push('/knitting_times')
    } )
  }

  render(){
    if(!this.props.sessionId || !this.props.area) {
      return null;
    }

    const year = moment().format("YYYY");
    const month = moment().format("M").length < 2 ? "0" + moment().format("M") : moment().format("M");
    const day = moment().format("D").length < 2 ? "0" + moment().format("D") : moment().format("D");

    return (
      <div>
        <div className="errors">
          {this.props.errors.length > 0 ? <div id="errors">{this.props.msg}</div> : null}
        </div>

        <div className="hostingform">

          <form onSubmit={this.handleSubmit.bind(this)}>
            <h2>Knitting Time Details</h2>

            <label>Date<span>*</span></label>
            <input type="date" onChange={this.handleEvent("date")} value={this.state.date} min={`${year}-${month}-${day}`}></input>


            <label>Start Time<span>*</span></label>
            <input type="text" onChange={this.handleEvent("start_time")} value={this.state.start_time}></input>

            <label>End Time<span>*</span></label>
            <input type="text" onChange={this.handleEvent("end_time")} value={this.state.end_time}></input>

            <label>Address 1<span>*</span></label>
            <input type="text" onChange={this.handleEvent("address_1")} value={this.state.address_1}></input>

            <label>Address 2</label>
            <input type="text" onChange={this.handleEvent("address_2")} value={this.state.address_2}></input>


            <label>City<span>*</span></label>
            <input type="text" onChange={this.handleEvent("city")} value={this.state.city}></input>


            <label>State</label>
            <input type="text" onChange={this.handleEvent("state")} value={this.state.state}></input>

            <label>Zip</label>
            <input type="text" onChange={this.handleEvent("zip")} value={this.state.zip}></input>

            <label>Description<span>*</span></label>
            <textarea onChange={this.handleEvent("description")} value={this.state.description}></textarea>


            <input className="create" type="submit" value={this.props.action}></input>
            <p><span>*</span> These fields must be filled</p>
          </form>

        </div>
      </div>
    )
  }
};



export default withRouter(HostingForm);
