import Indonesia from './indonesia'
import SouthAfrica from './southAfrica'
import Config from '../config'

let features = {};
if (Config.country === 'Indonesia') {
    features = Indonesia;
} else if (Config.country === 'South Africa') {
    features = SouthAfrica;
}

export default features;