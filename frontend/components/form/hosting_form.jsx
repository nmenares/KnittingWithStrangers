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
                  description: this.props.knittingtime.description,
                  photo: "",
                  photoUrl: this.props.host.photoUrl,
                  brief: this.props.host.description,
                  story: this.props.host.story,
                  quote: this.props.host.quote,
                  chars_left: 700 - this.props.knittingtime.description === null ? this.props.knittingtime.description.length : 0,
                  chars_left_brief: 700 - this.props.host.description === null ? this.props.host.description.length : 0,
                  chars_left_story: 700 - this.props.host.story === null ? this.props.host.story.length : 0,
                  chars_left_quote: 200 - this.props.host.quote === null ? this.props.host.quote.length : 0
                }
  };

  componentDidMount(){
    this.props.deleteErrors();
    window.scrollTo(0, 0);
  };

  componentWillMount(){
    this.props.fetchAreas();
  };

  handleEvent(field, capacity, field2){
    return e => {
      if(capacity){
        const charCount = e.target.value.length;
        const charLeft = capacity - charCount;
        this.setState({
        [field2]: charLeft
        });
      }
      this.setState({
      [field]: e.currentTarget.value,
      });
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
                <h2 style={{marginTop: '0px'}}>Set Knitting Time Details</h2>

                <label>Date<span>*</span></label>
                <input type="date" onChange={this.handleEvent("date", null)} value={this.state.date} min={`${year}-${month}-${day}`} required></input>

                <div className="host-form-time">
                  <label>Start Time<span>*</span>
                    <select onChange={this.handleEvent("start_time", null)} value={this.state.start_time} style={{width: '150px', fontSize: '15px', height: '30px'}} required>
                      <option disabled>Set a start time</option>
                      <option defaultValue>{hours[0]}</option>
                      {hours.slice(1, hours.length - 1).map((hr, idx) => <option key={idx} value={hr}>{hr}</option>)}
                    </select>
                  </label>

                  <label>End Time<span>*</span>
                    <select onChange={this.handleEvent("end_time", null)} value={this.state.end_time} style={{width: '150px', fontSize: '15px', height: '30px'}} required>
                      <option disabled>Set an end time</option>
                      <option disabled>Set an end time</option>
                      <option defaultValue>{hours[hours.indexOf(this.state.start_time)+1]}</option>
                      {hours.slice(2, hours.length).map((hr, idx) => <option key={idx} value={hr}>{hr}</option>)}
                    </select>
                  </label>
                </div>

                <label>Address 1<span>*</span></label>
                <input type="text" onChange={this.handleEvent("address_1", null)} value={this.state.address_1} required></input>

                <label>Address 2</label>
                <input type="text" onChange={this.handleEvent("address_2", null)} value={this.state.address_2}></input>

                <label>City<span>*</span></label>
                <input type="text" onChange={this.handleEvent("city", null)} value={this.state.city} required></input>

                <label>State</label>
                <input type="text" onChange={this.handleEvent("state", null)} value={this.state.state}></input>

                <label>Zip</label>
                <input type="text" onChange={this.handleEvent("zip", null)} value={this.state.zip}></input>

                <label>What might you talk about?<span>*</span></label>
                <textarea onChange={this.handleEvent("description", 700, "chars_left")} value={this.state.description} maxLength="700" required></textarea>
                <p>{700 - this.state.chars_left}/700</p>
              </div>

              <div className="host-form-info">
                <h2 style={{ marginTop: '0px'}}>Update Personal Information</h2>
                <h3>{this.props.host.username}</h3>

                <div className="pre-host-form-photo">
                  <div className="host-form-photo">
                    {preview}
                  </div>
                  <input type="file" onChange={this.fileChangedHandler.bind(this)}/>
                </div>


                <label>A Brief about You<span>*</span></label>
                <textarea onChange={this.handleEvent("brief", 700, "chars_left_brief")} value={this.state.brief=== null ? "" : this.state.brief} maxLength="700" required></textarea>
                <p>{700 - this.state.chars_left_brief}/700</p>

                <label>Your Story<span>*</span></label>
                <textarea onChange={this.handleEvent("story", 700, "chars_left_story")} value={this.state.story=== null ? "" : this.state.story} maxLength="700" required></textarea>
                <p>{700 - this.state.chars_left_story}/700</p>

                <label>Favorite Quote<span>*</span></label>
                <input className="PreSubmit" onChange={this.handleEvent("quote", 200, "chars_left_quote")} value={this.state.quote=== null ? "" : this.state.quote} maxLength="200" required></input>
                <p>{200 - this.state.chars_left_quote}/200</p>
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
