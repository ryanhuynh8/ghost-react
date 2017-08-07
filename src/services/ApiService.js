/**
 * Created by huyhuynh on 8/7/17.
 */
const sessionList = [
    { name: 'Chemistry Session', description: '15 minute Zoom Call'},
    { name: 'Contracting Session', description: '1 hour Zoom Call'},
    { name: 'Coaching Session', description: '1 hour 30 minute Zoom Call'},
];

/* simulate AJAX calls */
class MockApiService {
    static getSessionList = () => {
        const self = this;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(sessionList), 1000);
        });
    }
}

export default MockApiService = MockApiService;
