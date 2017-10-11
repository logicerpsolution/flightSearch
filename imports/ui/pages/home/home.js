import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import moment from 'moment';
import './home.less';
import './home.html';
import '../../components/searchDetails'


Template.home.onCreated(function(){
    this.searchData=new ReactiveVar();
});

Template.home.helpers({ 
  getFlights: function() { 
     return Template.instance().searchData.get();
  }
}); 

// Template.name.events({ 
//   'click #foo': function(event, template) { 
     
//   } 
// }); 



Template.home.onRendered(function(){
     const self=this;
      var currentDate= moment().format(Meteor.settings.public.dateformat);
       self.$('.datetimepicker').datetimepicker({
         minDate: currentDate ,
         maxDate:moment(currentDate).add(2,'months'),
         defaultDate:currentDate,
         format:Meteor.settings.public.dateformat

     });
});

Template.home.events({
  'submit #frmflight':(event,instance)=>{
      event.preventDefault();
      debugger;
    let startDate= event.target.stardate.value;
    let carrierCode= event.target.carrierCode.value;
    let flightId= event.target.flightId.value;
    const _template=instance;
     Meteor.call("get.flights",carrierCode,flightId,startDate,(error,res)=>{
       if(res)
       {
         console.log(res)
         _template.searchData.set(res.data.scheduledFlights);
       }
     })
  }


})














