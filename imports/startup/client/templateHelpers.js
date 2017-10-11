import moment from 'moment';

Template.registerHelper("FormatDate",
    _date => moment(_date).format(Meteor.settings.public.dateformat)
)

Template.registerHelper("FormatTime",
    _date => moment(_date).format("HH:mm")
)