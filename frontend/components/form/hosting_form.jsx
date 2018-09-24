import React from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';

class HostingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: this.props.knittingtime.date,
                  start_time: this.props.knittingtime.start_time,
                  end_time: this.props.knittingtime.end_time,
                  address_1: this.props.knittingtime.address_1,
                  address_2: this.props.knittingtime.address_2,
                  city: this.props.knittingtime.city,
                  state: this.props.knittingtime.state,
                  zip: this.props.knittingtime.zip,
                  area_id: this.props.knittingtime.area_id,
                  host_id: this.props.knittingtime.host_id,
                  description: this.props.knittingtime.description || "",
                  photo: "",
                  photoUrl: this.props.host.photoUrl,
                  brief: this.props.host.description || "",
                  story: this.props.host.story || "",
                  quote: this.props.host.quote || "",
                }
  };

  componentDidMount(){
    this.props.deleteErrors();
    window.scrollTo(0, 0);
  };

  componentWillMount(){
    this.props.fetchAreas();
  };

  handleEvent(field){
    return e => {
      this.setState({
      [field]: e.currentTarget.value
      })
    }
};

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser({id: this.props.host.id, description: this.state.brief, story: this.state.story, quote: this.state.quote})
    const formData = new FormData();
    if (this.state.photo) {
      formData.append('user[photo]', this.state.photo);
      this.props.updatePhoto(formData, this.props.host.id)
    }
    this.props.createKnittingTime( this.props.area.id , {date: this.state.date,
                  start_time: this.state.start_time,
                  end_time: this.state.end_time,
                  address_1: this.state.address_1,
                  address_2: this.state.address_2,
                  city: this.state.city,
                  state: this.state.state,
                  zip: this.state.zip,
                  area_id: this.state.area_id,
                  host_id: this.state.host_id,
                  description: this.state.description}, () => {
    this.props.history.push('/me')
    })
  };

  fileChangedHandler(e){
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
    this.setState({ photo: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  render(){
    if(!this.props.sessionId || !this.props.area) {
      return null;
    }

    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : <img src={window.profile} />;

    const year = moment().format("YYYY");
    const month = moment().format("M").length < 2 ? "0" + moment().format("M") : moment().format("M");
    const day = moment().format("D").length < 2 ? "0" + moment().format("D") : moment().format("D");
    const hours = ["8:00 AM", "8:30 AM",
                   "9:00 AM", "9:30 AM",
                   "10:00 AM", "10:30 AM",
                   "11:00 AM", "11:30 AM",
                   "12:00 AM", "12:30 AM",
                   "1:00 PM", "1:30 PM",
                   "2:00 PM", "2:30 PM",
                   "3:00 PM", "3:30 PM",
                   "4:00 PM", "4:30 PM",
                   "5:00 PM", "5:30 PM",
                   "6:00 PM", "6:30 PM",
                   "7:00 PM", "7:30 PM",
                   "8:00 PM", "8:30 PM",
                   "9:00 PM", "9:30 PM",
                   "10:00 PM", "10:30 PM"]

    return (
      <div>
        <div className="errors">
          {this.props.errors.length > 0 ? <div id="errors">{this.props.msg}</div> : null}
        </div>

        <div className="hostingform">

          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="subForm">
              <div className="host-form-kt">
                <h2 style={{marginTop: '0px', textAlign:"center"}}>Set Knitting Time Details</h2>

                <label>Date<span>*</span></label>
                <input type="date" onChange={this.handleEvent("date")} value={this.state.date} min={`${year}-${month}-${day}`} required></input>

                <div className="host-form-time">
                  <label>Start Time<span>*</span>&nbsp;
                    <select onChange={this.handleEvent("start_time")} value={this.state.start_time} style={{width: '150px', fontSize: '15px', height: '30px'}} required>
                      <option disabled>Set a start time</option>
                      <option defaultValue>{hours[0]}</option>
                      {hours.slice(1, hours.length - 1).map((hr, idx) => <option key={idx} value={hr}>{hr}</option>)}
                    </select>
                  </label>

                  <label>End Time<span>*</span>&nbsp;
                    <select onChange={this.handleEvent("end_time")} value={this.state.end_time} style={{width: '150px', fontSize: '15px', height: '30px'}} required>
                      <option disabled>Set an end time</option>
                      <option disabled>Set an end time</option>
                      <option defaultValue>{hours[hours.indexOf(this.state.start_time)+1]}</option>
                      {hours.slice(2, hours.length).map((hr, idx) => <option key={idx} value={hr}>{hr}</option>)}
                    </select>
                  </label>
                </div>

                <label>Address 1<span>*</span></label>
                <input type="text" onChange={this.handleEvent("address_1")} value={this.state.address_1} required></input>

                <label>Address 2</label>
                <input type="text" onChange={this.handleEvent("address_2")} value={this.state.address_2}></input>

                <label>City<span>*</span></label>
                <input type="text" onChange={this.handleEvent("city")} value={this.state.city} required></input>

                <label>State</label>
                <input type="text" onChange={this.handleEvent("state")} value={this.state.state}></input>

                <label>Zip</label>
                <input type="text" onChange={this.handleEvent("zip")} value={this.state.zip}></input>

                <label>What might you talk about?<span>*</span></label>
                <textarea onChange={this.handleEvent("description")} value={this.state.description} maxLength="700" required></textarea>
                <p>{this.state.description.length}/700</p>
              </div>

              <div className="host-form-info">
                <h2 style={{ marginTop: '0px', textAlign:"center"}}>Update Personal Information</h2>
                <h2 style={{ fontSize: '20px', textAlign:"center"}}>{this.props.host.username}</h2>

                <div className="pre-host-form-photo">
                  <div className="host-form-photo">
                    {preview}
                  </div>
                  <input type="file" onChange={this.fileChangedHandler.bind(this)}/>
                </div>


                <label>A Brief about You<span>*</span></label>
                <textarea onChange={this.handleEvent("brief")} value={this.state.brief} maxLength="700" required></textarea>
                <p>{this.state.brief.length}/700</p>

                <label>Your Story<span>*</span></label>
                <textarea onChange={this.handleEvent("story")} value={this.state.story} maxLength="700" required></textarea>
                <p>{this.state.story.length}/700</p>

                <label>Favorite Quote<span>*</span></label>
                <input className="PreSubmit" onChange={this.handleEvent("quote")} value={this.state.quote} maxLength="200" required></input>
                <p>{this.state.quote.length}/200</p>
              </div>
            </div>
            <input className="create" type="submit" value={this.props.action}></input>
            <p><span>*</span> These fields must be filled</p>
          </form>

        </div>
      </div>
    )
  }
};



export default withRouter(HostingForm);
