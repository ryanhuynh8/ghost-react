/**
 * Created by huyhuynh on 8/7/17.
 */
const sessionList = [
    { name: 'Chemistry Session', description: '15 minute Zoom Call'},
    { name: 'Contracting Session', description: '1 hour Zoom Call'},
    { name: 'Coaching Session', description: '1 hour 30 minute Zoom Call', price: 120},
    { name: 'Mentoring Session', description: '1 hour Zoom Call'},
    { name: 'Visioning Session', description: '2 hour Face to Face Meeting', price: 280},
    { name: 'Incubator Phase 1', description: '1 hour 30 minute Zoom Call'},
    { name: 'Incubator Phase 2', description: '2 hour Face to Face Meeting'},
    { name: 'Incubator Phase 3', description: '2 hour Face to Face Meeting'},
    { name: 'Incubator Phase 3', description: '2 hour Face to Face Meeting'},
    { name: 'Incubator Phase 4', description: '2 hour Face to Face Meeting'},
    { name: 'Incubator Phase 5', description: '2 hour Face to Face Meeting'},
    { name: 'Check in Call', description: '15 minute Zoom Call'},
];

const dateList = [
    { dayOfWeek: 'Monday', date: '3 July, 2017', available: 'am / pm' },
    { dayOfWeek: 'Tuesday', date: '4 July, 2017', available: 'am / pm' },
    { dayOfWeek: 'Wednesday', date: '5 July, 2017', available: 'unavailable' },
    { dayOfWeek: 'Thursday', date: '6 July, 2017', available: 'unavailable' },
    { dayOfWeek: 'Friday', date: '7 July, 2017', available: 'am / pm' },
    { dayOfWeek: 'Saturday', date: '8 July, 2017', available: 'unavailable'},
    { dayOfWeek: 'Sunday', date: '9 July, 2017', available: 'am / pm' },

];

/* simulate AJAX calls */
export default class MockApiService {
    static getSessionList = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(sessionList), 100);
        });
    };

    static getDateList = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(dateList), 100);
        });
    }
}
