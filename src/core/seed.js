import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	spaceBetweenShapes: config.initialSpace,
	selectedShape: config.defaultShape,
};

export default seed;
