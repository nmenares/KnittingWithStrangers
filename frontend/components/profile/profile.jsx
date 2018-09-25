import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import merge from 'lodash/merge';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.enr = (kt_id) => merge([], this.props.attending_enrollments.filter(enr => enr.knittingtime_id === parseInt(kt_id)));

    this.false_enr = (kt_id, deleted) => merge([], this.props.all_enrollments.filter(enr => enr.knittingtime_id === parseInt(kt_id) && !enr.going && enr.id !== deleted.id));

    this.state = {clickUpdate: false,
                  text: "",
                  quicklook: true,
                  history: false,
                  accountdetails: false,
                  showHost: false,
                  host: null,
                  photo: "" ,
                  photoUrl: this.props.me.photoUrl,
                  editPhoto: false,
                  username: this.props.me.username || "",
                  editUsername: false,
                  quote: this.props.me.quote || "",
                  editQuote: false,
                  story: this.props.me.story || "",
                  editStory: false,
                  description: this.props.me.description || "",
                  editDescription: false,
                  chars_left: 700,
                  kt: null };

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

  handleUpdatePhoto(e){
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photo) {
      formData.append('user[photo]', this.state.photo);
      this.props.updatePhoto(formData, this.props.me.id)
    }
    this.setState({ editPhoto: false });
  };

  toEditAccount(field){
    return e => {
      e.preventDefault();
      this.setState({[field]: true})
    }
  };

  updateAccountDetails(field1, field2, field3){
    return e => {
      e.preventDefault();
      this.setState({[field2]: false})
      this.props.updateUser({id: this.props.me.id, [field1]: field3})
    }
  };

  editAccountDetails(field){
    return e => {
      e.preventDefault();
      this.setState({[field]: e.currentTarget.value})
    }
  };

  handleClick(kt){
    return e => {
      e.preventDefault;
      const enr = this.enr(kt.id)[0];
      this.props.deleteEnrollment(enr.id);
      const falses = this.false_enr(kt.id, enr);
      if (falses.length > 0) {
        this.props.updateEnrollment({id: falses[0].id, user_id: falses[0].user_id, knittingtime_id: falses[0].knittingtime_id, going: true })
      }
    }
  };

  handleDelete(kt_id){
    return e => {
      e.preventDefault();
      this.props.deleteKnittingTime(kt_id);
    }
  };

  handleUpdate(kt){
    return e => {
      e.preventDefault();
      this.setState({clickUpdate: true, kt: kt, text: kt.description, chars_left: 700 - kt.description.length })
    }
  };

  showHostProfile(host){
    return e => {
      e.preventDefault();
      this.props.fetchUser(host.id);
      const user = this.props.users[host.id]
      this.setState({showHost: true, host: user})
    }
  };

  handleSpan(e){
    e.preventDefault();
    this.setState({clickUpdate: false, showHost: false, host: null})
  };

  handleEvent(e){
    e.preventDefault();
    const charCount = e.currentTarget.value.length;
    const charLeft = 700 - charCount;
    this.setState({
      chars_left: charLeft,
      text: e.currentTarget.value,
    });
  };

  updateKnittingTime(e){
    e.preventDefault();
    this.props.updateKnittingTime({
      id: this.state.kt.id,
      description: this.state.text
      });
    this.setState({clickUpdate: false, text: "", chars_left: 700, kt: null });
  };

  handleSubMenu(field){
    return e => {
      e.preventDefault();
      this.setState({quicklook: field === "quicklook", history: field === "history", accountdetails: field === "accountdetails"})
    }
  };

  sendEmail(email){
    return e => {
      e.preventDefault;
      window.open(`mailto:${email}`)
    }
  };

  componentWillMount(){
    this.props.fetchAreas();
    this.props.fetchMe();
  };

  componentDidMount(){
    window.scrollTo(0, 0);
  };

  render(){
    if(!this.props.me || !this.props.attending_enrollments || !this.props.knitting_times) {
      return null;
    }

    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : <img src={window.profile} />;
    const today = moment();

    const next_kt_gap = (21 - today.date());
    const my_kts_attending = this.props.attending_enrollments.filter(kte => kte.going);
    const my_kt_ids = my_kts_attending.map(ae => ae.knittingtime_id);
    const my_kts = my_kt_ids.map(id => this.props.knitting_times[id]);
    const my_kts_f = my_kts.filter(kt => kt.date >= today.format());
    const my_kts_p = my_kts.filter(kt => kt.date < today.format());

    const my_kts_maybe = this.props.attending_enrollments.filter(kte => !kte.going);
    const my_kt_ids_wl = my_kts_maybe.map(ae => ae.knittingtime_id);
    const my_kts_wl = my_kt_ids_wl.map(id => this.props.knitting_times[id]);
    const my_kts_wl_f = my_kts_wl.filter(kt => kt.date >= today.format());

    const hosted_knitting_times_f = this.props.hosted_knitting_times.filter(kt => kt.date >= today.format())
    const hosted_knitting_times_p = this.props.hosted_knitting_times.filter(kt => kt.date < today.format())

    const quickLook = this.state.quicklook ?
      <div className="profile-content">
        <div className="profile-sidebar">
          <h2>Welcome home, {this.props.me.username}!</h2>
          <h3>What are you grateful today?</h3>
          <div  style={{ marginBottom:"35%", marginTop:"15%" }} className="link3"><Link to="/knitting_times">find a knitting time!</Link></div>
        </div>
        <div className="profile-body">
          {my_kts_f.length > 0 ? <h2 style={{ marginBottom:"0" }}>Knitting times you're attending.</h2> : null }
          {my_kts_f.length > 0 ?
            <div className="list-profile">
              <ul> {my_kts_f.map(kt => (
                  <li className="li-attending" key={kt.id}>
                    <div className="profile-kt-box">
                      <p>{moment(kt.date).format('dddd')}</p>
                      <h3>{moment(kt.date).format('MMMM')} {moment(kt.date).date()}</h3>
                      <h4>{kt.start_time} - {kt.end_time}</h4>
                      <p style={{ paddingBottom:"10px" }}>{kt.address_1}{kt.address_2 ? `, ${kt.address_2}` : null}, {kt.city}, {kt.state}, {kt.zip}</p>

                      <div className="cancel-kt" onClick={this.handleClick(kt)}>CANCEL MY SPOT</div>
                    </div>
                    <div className="profile-host-box">
                      <h3>Get to know your host</h3>
                      <div className="photo-p">
                        <div className="hostphoto">
                          {this.props.users[kt.host_id].photoUrl ? <img src={this.props.users[kt.host_id].photoUrl}/> : <img src={window.profile}/>}
                        </div>
                        <p>Keep an eye open for {this.props.users[kt.host_id].username}! So it's easier, here's what they look like :).</p>
                      </div>
                      <div className="host-buttons">
                        <button className="profile-host-info" onClick={this.showHostProfile(this.props.users[kt.host_id])}>{`${this.props.users[kt.host_id].username}'s`} profile</button>
                          {this.state.showHost ?
                            <div className="modal">
                              <div className="divSpan"><span className="close" onClick={this.handleSpan.bind(this)}>&times;</span></div>
                              <div className="modal-content">
                                <div className="divHost">
                                  <div className="divHost-img">{this.state.host.photoUrl ? <img src={this.state.host.photoUrl}/> : <img src={window.profile}/>}</div>
                                  <div className="divHostMain">
                                    <h2 style={{ margin: '0' }}>{this.state.host.username}</h2>
                                    <h4>{this.state.host.email}</h4>
                                    <h3 style={{ fontSize:"14px", fontStyle:"italic", fontWeight:"normal" , margin:"10px"}}>{this.state.host.quote}</h3>
                                  </div>
                                </div>
                                <div className="divHostExtra">
                                  <h4 style={{ margin:"5px", fontSize:"14px", fontWeight:"normal", lineHeight:"1.5em"}}>{this.state.host.description}</h4>
                                  <h3 style={{ marginTop:"10px", marginBottom:"5px", color:"#eda20b"}}>{`${this.state.host.username}'s`} story</h3>
                                  <h4 style={{ margin:"5px", fontSize:"14px", fontWeight:"normal", lineHeight:"1.5em"}}>{this.state.host.story}</h4>
                                </div>
                              </div>
                            </div>
                            :
                            null
                          }
                        <button className="profile-host-info" onClick={this.sendEmail(this.props.users[kt.host_id].email)}>email {this.props.users[kt.host_id].username}</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            : null }
          {my_kts_wl_f.length > 0 ? <h2 style={{ marginBottom:"0" }}>Knitting Times you're in waiting list.</h2> : null }
          {my_kts_wl_f.length > 0 ?
            <div className="list-profile">
              <ul> {my_kts_wl_f.map(kt => (
                  <li className="li-attending" key={kt.id}>
                    <div className="profile-kt-box">
                      <p>{moment(kt.date).format('dddd')}</p>
                      <h3>{moment(kt.date).format('MMMM')} {moment(kt.date).date()}</h3>
                      <h4>{kt.start_time} - {kt.end_time}</h4>
                      <p style={{ paddingBottom:"10px" }}>{kt.address_1}{kt.address_2 ? `, ${kt.address_2}` : null}, {kt.city}, {kt.state}, {kt.zip}</p>

                      <div className="cancel-kt" onClick={this.handleClick(kt)}>CANCEL MY SPOT</div>
                    </div>
                    <div className="profile-host-box">
                      <h3>Get to know your host</h3>
                      <div className="photo-p">
                        <div className="hostphoto">
                          {this.props.users[kt.host_id].photoUrl ? <img src={this.props.users[kt.host_id].photoUrl}/> : <img src={window.profile}/>}
                        </div>
                        <p>Keep an eye open for {this.props.users[kt.host_id].username}! So it's easier, here's what they look like :).</p>
                      </div>
                      <div className="host-buttons">
                        <button className="profile-host-info" onClick={this.showHostProfile(this.props.users[kt.host_id])}>{`${this.props.users[kt.host_id].username}'s`} profile</button>
                          {this.state.showHost ?
                            <div className="modal">
                              <div className="divSpan"><span className="close" onClick={this.handleSpan.bind(this)}>&times;</span></div>
                              <div className="modal-content">
                                <div className="divHost">
                                  <div className="divHost-img">{this.state.host.photoUrl ? <img src={this.state.host.photoUrl}/> : <img src={window.profile}/>}</div>
                                  <div className="divHostMain">
                                    <h2 style={{ margin: '0' }}>{this.state.host.username}</h2>
                                    <h4>{this.state.host.email}</h4>
                                    <h3 style={{ fontSize:"14px", fontStyle:"italic", fontWeight:"normal" , margin:"10px"}}>{this.state.host.quote}</h3>
                                  </div>
                                </div>
                                <div className="divHostExtra">
                                  <h4 style={{ margin:"5px", fontSize:"14px", fontWeight:"normal", lineHeight:"1.5em"}}>{this.state.host.description}</h4>
                                  <h3 style={{ marginTop:"10px", marginBottom:"5px", color:"#eda20b"}}>{`${this.state.host.username}'s`} story</h3>
                                  <h4 style={{ margin:"5px", fontSize:"14px", fontWeight:"normal", lineHeight:"1.5em"}}>{this.state.host.story}</h4>
                                </div>
                              </div>
                            </div>
                            :
                            null
                          }
                        <button className="profile-host-info" onClick={this.sendEmail(this.props.users[kt.host_id].email)}>email {this.props.users[kt.host_id].username}</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
            : null }

          {hosted_knitting_times_f.length > 0 ? <h2 style={{ marginBottom:"0" }}>Knitting times you're hosting.</h2> : null }
          {hosted_knitting_times_f.length > 0 ?
            <div className="list-profile">
            <ul id="hosting"> {hosted_knitting_times_f.map(hkt => (
                <li key={hkt.id} className="hosted-li">

                  <div className="profile-kt-box2">
                    <p>{moment(hkt.date).format('dddd')}</p>
                    <h3>{moment(hkt.date).format('MMMM')} {moment(hkt.date).date()}</h3>
                    <h4>{hkt.start_time} - {hkt.end_time}</h4>
                    <p style={{ paddingBottom:"13.5px" }}>{hkt.address_1}{hkt.address_2 ? `, ${hkt.address_2}` : null}, {hkt.city}, {hkt.state}, {hkt.zip}</p>
                  </div>
                  <div className="modify-hosted">
                    <button className="profile-host-info" id="update-kt" onClick={this.handleUpdate(hkt)} >update</button>
                    {this.state.clickUpdate ?
                      <div className="modal">
                        <div className="divSpan"><span style={{ marginRight:'-20px' }} className="close" onClick={this.handleSpan.bind(this)}>&times;</span></div>
                        <form  style={{ padding:"20px" }} className="modal-content" onSubmit={this.updateKnittingTime.bind(this)}>
                          <h2 style={{ margin:'0' }}>What might you talk about?</h2>
                          <textarea value={this.state.text} onChange={this.handleEvent.bind(this)} maxLength="700" required></textarea>
                          <p>{700 - this.state.chars_left}/700</p>
                          <input style={{ width:"100px", borderRadius:"3px", fontSize:"14px", textTransform:"uppercase", fontWeight:"bold" }} type="submit"></input>
                        </form>
                      </div>
                      :
                      null
                    }

                    <button className="profile-host-info2" onClick={this.handleDelete(hkt.id)}>delete</button>
                  </div>
                </li>
              ))
              }
            </ul>

          </div>
          : null }
        </div>
      </div>
      :
      null

    const history = this.state.history ?
      <div className="profile-content-history-box">
        {(hosted_knitting_times_p.length > 0 || hosted_knitting_times_p.length > 0) ?
        <div className="profile-content-history">
          {my_kts_p.length > 0 ?
            <div className="list-profile2">
              <h2 style={{ fontSize:"28px" }}>Knitting times you attended.</h2>
              <ul style={{ width:"100%" }}> {my_kts_p.map(kt => (
                  <li className="li-attending2" key={kt.id}>
                    <div className="profile-kt-box3">
                      <p>{moment(kt.date).format('dddd')}</p>
                      <h3>{moment(kt.date).format('MMMM')} {moment(kt.date).date()}</h3>
                      <h4>{kt.start_time} - {kt.end_time}</h4>
                      <p style={{ paddingBottom:"13.5px" }}>{kt.address_1}{kt.address_2 ? `, ${kt.address_2}` : null}, {kt.city}, {kt.state}, {kt.zip}</p>
                    </div>
                  </li>
                ))
                }
              </ul>
            </div>
            : null }
          {hosted_knitting_times_p.length > 0 ?
            <div className="list-profile2">
              <h2 style={{ fontSize:"28px" }}>Knitting times you hosted.</h2>
              <ul style={{ width:"100%" }}> {hosted_knitting_times_p.map(hkt => (
                  <li key={hkt.id} className="li-attending2">
                    <div className="profile-kt-box3">
                      <p>{moment(hkt.date).format('dddd')}</p>
                      <h3>{moment(hkt.date).format('MMMM')} {moment(hkt.date).date()}</h3>
                      <h4>{hkt.start_time} - {hkt.end_time}</h4>
                      <p style={{ paddingBottom:"13.5px" }}>{hkt.address_1}{hkt.address_2 ? `, ${hkt.address_2}` : null}, {hkt.city}, {hkt.state}, {hkt.zip}</p>
                    </div>
                  </li>
                ))
                }
              </ul>
            </div>
            : null }
        </div>
        : <h3 style={{ fontSize:"25px", width:"60%", fontWeight:"600", textAlign:"center", color:"DDD", lineHeight:"1.5" }}>You have no event registered so far, but it's never too late to join to Knitting With Strangers!</h3> }
        <div className="link3" style={{ marginTop:"0%", marginBottom:"5%" }}><Link to="/knitting_times">find a knitting time!</Link></div>
      </div>
      :
      null

    const accountdetails = this.state.accountdetails ?
      <div className="account-content">
        <div className="account-content1">

          <div className="profilePhoto">
            <div className="profilePhoto-img">{preview}</div>
            <div className="profilePhoto-settings">
              <input style={{ width: "60%" }} type="file" onChange={this.fileChangedHandler.bind(this)}/>
              <button input style={{ width: "30%" }} onClick={this.handleUpdatePhoto.bind(this)}>Save</button>
            </div>
          </div>

          <div className="AcountTextDetails">
            {this.state.editUsername ?
              <div className="profileUsername">
                <div className="counter">
                  <input type="text" onChange={this.editAccountDetails("username")} value={this.state.username} maxLength="100" required/>
                  <p>{this.state.username.length}/100</p>
                </div>
                <div>
                  <button onClick={this.updateAccountDetails("username", "editUsername", this.state.username)}>Save</button>
                </div>
              </div>
              :
              <div className="profileUsername">
                <h2>{this.props.me.username}</h2>
                <img src={window.edit} onClick={this.toEditAccount("editUsername")}/>
              </div>
            }

            {this.state.editQuote ?
              <div className="profileUsername">
                <div className="counter">
                  <input type="text" onChange={this.editAccountDetails("quote")} value={this.state.quote} maxLength="200" required/>
                  <p>{this.state.quote.length}/200</p>
                </div>
                <div>
                    <button onClick={this.updateAccountDetails("quote", "editQuote", this.state.quote)}>Save</button>
                </div>
              </div>
              :
              <div className="profileUsername">
                <h3>{this.props.me.quote}</h3>
                <img src={window.edit} onClick={this.toEditAccount("editQuote")}/>
              </div>
            }

            {this.state.editDescription ?
              <div className="profileUsername">
                <div className="counter">
                  <textarea onChange={this.editAccountDetails("description")} value={this.state.description} maxLength="700" required></textarea>
                  <p>{this.state.description.length}/700</p>
                </div>
                <div>
                  <button onClick={this.updateAccountDetails("description", "editDescription", this.state.description)}>Save</button>
                </div>
              </div>
              :
              <div className="profileUsername">
                <h4>{this.props.me.description}</h4>
                <img src={window.edit} onClick={this.toEditAccount("editDescription")}/>
              </div>
            }

          </div>
        </div>

        {this.state.editStory ?
          <div className="profileUsername">
            <div className="counter">
              <textarea onChange={this.editAccountDetails("story")} value={this.state.story} maxLength="700" required></textarea>
              <p>{this.state.story.length}/700</p>
            </div>
            <div>
              <button onClick={this.updateAccountDetails("story", "editStory", this.state.story)}>Save</button>
            </div>
          </div>
          :
          <div className="profileUsername">
            <h4>{this.props.me.story}</h4>
            <img src={window.edit} onClick={this.toEditAccount("editStory")}/>
          </div>
        }
      </div>
      :
      null

    return (
      <div>
        {this.props.me ?
        <div className="dashboardMain">
          <div className="profile-menu">
            <p style={{textDecoration: `${this.state.quicklook ? "underline" : "none"}`}} onClick={this.handleSubMenu("quicklook")}>QUICK LOOK</p>
            <p style={{textDecoration: `${this.state.history ? "underline" : "none"}`}} onClick={this.handleSubMenu("history")}>HISTORY</p>
            <p style={{textDecoration: `${this.state.accountdetails ? "underline" : "none"}`}} onClick={this.handleSubMenu("accountdetails")}>ACCOUNT DETAILS</p>
          </div>
          {quickLook}
          {history}
          {accountdetails}
        </div>
      : <Redirect to="/login" />}
      </div>
  )

  }
};

export default Profile;
