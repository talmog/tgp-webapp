import moment from 'moment';

const ONE_HOUR = 60 * 60 * 1000;

export const dateUsHelper = orgDate => {
  if (!orgDate) {
    return orgDate;
  }
  // return new Date(orgDate).toLocaleString("en-US")
  try {
    const date = new Date(orgDate);
    const pstDate = new Date(date.getTime() + 8 * ONE_HOUR);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(pstDate);
  } catch (err) {
    console.log('error', err);
    return orgDate;
  }
};

export const validateDate = date => {
  const expression = /^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/;

  return expression.test(date);
};

export const parseDob = dob => {
  if (dob.length === 8) {
    const dobString = `${dob.substr(4, 4)}-${dob.substr(0, 2)}-${dob.substr(
      2,
      2,
    )}`;
    const dobObj = moment(dobString, 'YYYY-MM-DD');
    if (!dobObj.isValid() || dobObj.year() < 1900 || dobObj.year() >= 2100) {
      return false;
    }
    return dobString;
  }
  return false;
};

export const parseDobUS = dob => {
  if (dob.length === 8) {
    return `${dob.substr(0, 2)}/${dob.substr(2, 2)}/${dob.substr(4, 4)}`;
  }
  return dob;
};

// // returns December 12, 2020 * 4 AM PST
// export const formatDateFromUtc = orgDate => {
//   if (!orgDate) {
//     return '';
//   }
//   try {
//     const offset = new Date().getTimezoneOffset() * 1000 * 60;
//     const date = new Date(orgDate + offset);
//     return `${dateTimeUsHelper(date).toString()}`;
//   } catch (err) {
//     return orgDate;
//   }
// };

// returns December 12, 2020 * 4 AM
// export const dateTimeUsHelper = orgDate => {
//   if (!orgDate) {
//     return orgDate;
//   }
//   try {
//     const date = orgDate;
//     const justDate = new Intl.DateTimeFormat('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       weekday: 'short',
//     }).format(date);
//
//     // show minutes only it is not 0 (4PM and 4:30PM)
//
//     const minutes = new Intl.DateTimeFormat('en-US', {
//       minute: 'numeric',
//     }).format(date);
//
//     let time;
//     let esTime;
//     let esDate = new Date(new Date(date).getUTCDate() + 3 * ONE_HOUR);
//
//     if (minutes === '0') {
//       time = new Intl.DateTimeFormat('en-US', {
//         hour: 'numeric',
//       }).format(date);
//
//       esTime = new Intl.DateTimeFormat('en-US', {
//         hour: 'numeric',
//       }).format(esDate);
//     } else {
//       time = new Intl.DateTimeFormat('en-US', {
//         hour: 'numeric',
//         minute: 'numeric',
//       }).format(date);
//
//       esTime = new Intl.DateTimeFormat('en-US', {
//         hour: 'numeric',
//         minute: 'numeric',
//       }).format(esDate);
//     }
//
//     const timezoneDate = new Intl.DateTimeFormat('en-US', {
//       timeZoneName: 'short',
//     }).format(date);
//     let timeZone = '';
//     if (timezoneDate) {
//       const timeZoneArr = timezoneDate.split(',');
//       if (timeZoneArr && timeZoneArr.length > 0) {
//         timeZone = timeZoneArr[1];
//       }
//     }
//
//     return `${justDate} \u00b7 ${time.replace(
//       ' ',
//       '',
//     )} ${timeZone} (${esTime})`;
//   } catch (err) {
//     return orgDate;
//   }
// };
