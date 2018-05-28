import React, { Component } from 'react';
//import Nav from '../Nav';
//import Upload from '../Upload/Upload';
import {Industry} from './Industry';
import { Category } from './Category';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './react-datepicker.css';
import './Scheduler.css';

class Scheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auto: false,
      name: '',
      number: 0,
      startDate: moment(),
      endDate: moment(),
      industry: '',
      category: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.uploadWidget = this.uploadWidget.bind(this);
  }

  handleClick() {

  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log('logging: ',
    [
      this.state.auto.toString(),
      this.state.name.toString(),
      this.state.number.toString(),
      this.state.startDate.format(),
      this.state.endDate.format(),
      this.state.industry.toString(),
      this.state.category.toString(),
      'TBM'
    ]);
  }

  handleChangeStart(date) {
    this.setState({ startDate: date })
  }

  handleChangeEnd(date) {
    this.setState({ endDate: date })
  }

  uploadWidget = () => {
    let myTags = [
      this.state.auto.toString(),
      this.state.name.toString(),
      this.state.number.toString(),
      this.state.startDate.format(),
      this.state.endDate.format(),
      this.state.industry.toString(),
      this.state.category.toString(),
      'TBM'
    ];

    window.cloudinary.openUploadWidget( {
      cloud_name: 'flycrow',
      upload_preset: 'ubx3ytwg',
      tags: myTags,
      sources: ['local', 'url']
    },
      function(error, result) {
          console.log("This is the result of the last upload", result);
      });
  }

  render() {

    return (
      <div>
        <h3 className="text-center">Scheduler</h3>
        <hr/>
        <div className="campaign" onChange={this.handleChange}>
          <table>
            <tr>
              <td colspan="2">
                <h3>Campaign Details</h3>
              </td>
            </tr>

            <tr>
              <td colspan="2">
                <input type="text" name="name" id="name" placeholder="Campaign Name" />
              </td>
            </tr>

            <tr>
              <td>
                Auto Schedule <input type="checkbox" name="auto" />
              </td>

              <td>
                Number of flightings <input type="number" placeholder="0" />
              </td>
            </tr>

            <tr>
              <td>
                <Industry
                  name="industry"
                  value={this.state.industry}
                  onChange={this.handleChange} />
              </td>

              <td>
                <Category
                  name="category"
                  value={this.state.category}
                  onChange={this.handleChange} />
                </td>
              </tr>

              <tr>
                <td>
                  Start Date and Time
                  <DatePicker
                    dateFormat="YYYY/MM/DD HH:mm"
                    name="startDate"
                    todayButton={"Today"}
                    selected={this.state.startDate}
                    onChange={this.handleChangeStart}
                    showTimeSelect
                    timeCaption="Time"
                    timeFormat="HH:mm"
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    showWeekNumbers
                    selectsStart
                  />
              </td>

              <td>
                End Date and Time
                <DatePicker
                  dateFormat="YYYY/MM/DD HH:mm"
                  name="endDate"
                  todayButton={"Today"}
                  selected={this.state.endDate}
                  onChange={this.handleChangeEnd}
                  showTimeSelect
                  timeCaption="Time"
                  timeFormat="HH:mm"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  showWeekNumbers
                  selectsEnd
                />
              </td>
            </tr>
        </table>

             <div className="jumbotron text-center">{/*<input placeholder="Content Tag" onChange={this.handleTagChange}></input>*/}
               <button onClick={this.uploadWidget} className="btn btn-lg btn-info">Upload Content</button>
             </div>
        </div>

      </div>
    );
  }
}

export default Scheduler;
