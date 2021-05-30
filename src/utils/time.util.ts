import * as moment from 'moment';


export function convertDateTimeToUtc(dateTime?: moment.Moment): moment.Moment {
    if(!dateTime) dateTime = moment();
    return dateTime.utc();
}


export function convertUtcToSqlDateTime(utcDateTime = moment().utc(), format = "YYYY-MM-DD HH:mm:ss"): string {
    return utcDateTime.format(format);
}


export function convertDateTimeToSqlFormat(dateTime?: moment.Moment): string {
    const utc = convertDateTimeToUtc(dateTime);
    const formattedDateTime = convertUtcToSqlDateTime(utc);
    return formattedDateTime;
}