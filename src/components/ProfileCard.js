import React, { Component } from 'react';
import Devices from './Devices';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Interests from './Interests';
import people from '../people.json';
import * as helpers from '../helpers/helpers.js';
import '../css/ProfileCard.css';

const findById = helpers.findById;
const data = findById(people.people);

class ProfileCard extends Component {
  render () {
    let devices = data[this.props.id].devices;
    let social = data[this.props.id].social;
    let interests = data[this.props.id].interests;
    let scores = data[this.props.id].scores;
    return (
      <div className='profile-card' id='profile'>
        <img src={require('../images/' + this.props.avatar)} id="avatar" alt="" />
        <a data-toggle="collapse" data-target={'#' + this.props.id} aria-expanded="false" aria-controls="details">
          <span id='list-name'>{this.props.firstName} {this.props.lastName}</span></a>
        <div className="collapse" id={this.props.id}>
          <div className="card card-block">
            <div className="card-block" id="personal">
              <h4 className="card-header" id='person-title'>Personal</h4>
              <ul>
                <li><strong>Age:  </strong> {this.props.age}</li>
                <li><strong>Job:  </strong> {this.props.job}</li>
                <li><strong>Company:  </strong> {this.props.company}</li>
                <li><strong>City:  </strong> {this.props.city}</li>
                <li><strong>country:  </strong> {this.props.country}</li>
              </ul>
            </div>
            <div className="card-block" id="devices">
              <h4 className="card-header" id='devices-title'>Devices</h4>
              {devices.map((device, i) => {
                return <Devices
                  total={devices.length}
                  key={i}
                  name={device.name}
                  vendor={device.vendor}
                  count={device.count}
                />;
              })}
            </div>
            <div className="card-block" id="social">
              <h4 className="card-header" id="social-title">Social</h4>
              {social.map((account, i) => {
                if (account.type === 'twitter') {
                  return <Twitter
                    key={i}
                    type={account.type}
                    username={account.username}
                    url={account.url}
                    account_age={account.account_age}
                    following={account.following}
                    followers={account.followers}
                  />;
                }
                if (account.type === 'facebook') {
                  return <Facebook
                    key={i}
                    type={account.type}
                    id={account.id}
                    url={account.url}
                    account_age={account.account_age}
                    friends={account.friends}
                  />;
                }
              })}
            </div>
            <div className="card-block" id="interests">
              <h4 className="card-header" id="interests-title">Interests</h4>
              {interests.map((interest, i) => {
                return <Interests
                  key={i}
                  name={interest.name}
                  count={interest.count}
                />;
              })}
            </div>
            <div className="card-block" id="scores">
              <h4 className="card-header">Scores</h4>
              <ul>
                <li>Footprint: {scores.footprint_size}</li>
                <li>ID: {scores.id}</li>
                <li>Commenter: {scores.commenter}</li>
                <li>Sharer: {scores.sharer}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
