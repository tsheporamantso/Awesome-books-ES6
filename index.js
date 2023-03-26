import { DateTime } from './modules/luxon.js';

const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
document.getElementById('timeText').innerHTML = currentDate;
