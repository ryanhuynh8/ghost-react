import Indonesia from './indonesia'
import SouthAfrica from './southAfrica'
import Config from '../config'

let language = {};
if (Config.country === 'Indonesia') {
    language = Indonesia;
} else if (Config.country === 'South Africa') {
    language = SouthAfrica;
}

export default language;