import {Meteor} from 'meteor/meteor';
import { HTTP} from 'meteor/http';
import moment from 'moment';


Meteor.methods({
  "get.flights":(flightno,carrier,startdate)=>{
  var _settings= Meteor.settings.private.flightstats;
  console.log(startdate);
   console.log(moment(startdate).format("YYYY/MM/DD"));
   var _date=moment(startdate).format("YYYY/MM/DD");
    var response=HTTP.get(`${_settings.host}/${_settings.format.JSON}/flight/${flightno}/${carrier}/departing/${_date}?appId=${_settings.appId}&appKey=${_settings.appKey}`);
     console.log(response)
     return response;
  }

})