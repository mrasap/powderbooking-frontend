import { combineReducers } from 'redux';
import overview from './overview';
import resort from './resort';
import map from './map';

export default combineReducers({ overview, resort, map });
