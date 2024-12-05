import moment from 'moment';

export const formattedDate = (start: Date, end: Date) => {
    const checkin = moment(start).format('DD');
    const checkout = moment(end).format('DD');
    const monthYear = moment(start).format('MMM YYYY');
    return `${checkin}-${checkout} ${monthYear}`;
};