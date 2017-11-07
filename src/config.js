class Config {
    currency = '';
    country = '';
    i18n = {};

    constructor() {
        if (process.env.REACT_APP_COUNTRY === 'Indonesia') {
            this.currency = 'IDR';
            this.country = 'Indonesia';
            // this.i18n = i18n.Indonesia;
        } else if (process.env.REACT_APP_COUNTRY === 'South Africa') {
            this.currency = 'ZAR';
            this.country = 'South Africa';
            // this.i18n = i18n.SouthAfrica;
        } else {
            this.currency = 'Unknown';
            this.country = 'Unknown';
        }
    }
}

export default new Config();