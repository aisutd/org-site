import { Officer } from '../../lib/types';
import { Coda } from 'coda-js';
import * as fs from 'fs';

/**
 * A HashMap of all the officers in org and their info.
 */
let OFFICERS_MAP: { [key: string]: Officer } = {};

/**
 * Fetch event information.
 *
 * @param officerId The unique identifier for the event
 */
export const getOfficer = async (officerId: string, fields?: string[]): Promise<Officer> => {
  await getAllOfficers();
  return OFFICERS_MAP[officerId];
};

/**
 * Return all past and upcoming events.
 */

export const getAllOfficers = async (fields?: string[]): Promise<Officer[]> => {
  // If officers were previously parsed, then return those
  const prevOfficers = Object.keys(OFFICERS_MAP);
  if (prevOfficers.length != 0) {
    return Object.values(OFFICERS_MAP);
  }
  try {
    /**
     * Coda API
     * How to get an API KEY:
     * 1. Go to https://coda.io/account and scroll down to "Coda API Tokens"
     * 2. Generate a new API key WITH RESTRICTIONS of read only access to this doc: https://coda.io/d/AIS-Personnel_dzWBpla6LLN/AIS-Officers_sudo_#_lu0Yo
     * 3. Create a file ".env.local" in your project directory
     * 4. Add the following entry: "CODA_OFFICER_API_KEY='{Your API key}'"
     */
    const CodaAPI = new Coda(process.env.CODA_OFFICER_API_KEY);

    // AIS Personnel Doc: zWBpla6LLN
    const doc = await CodaAPI.getDoc('zWBpla6LLN'); // Grab AIS Personnel Doc from Coda API using the Doc ID at https://coda.io/developers/apis/v1
    const table = await doc.getTable('Officers'); // Grab the actual table from the doc
    const rows = await table.listRows({ useColumnNames: true, valueFormat: 'rich' }); // Grab all the officer entries in the doc

    for (let i = 0; i < rows.length; i++) {
      // For each officer in the table
      let ofemail = rows[i].values['AIS Email'];
      let linkedIn = rows[i].values['LinkedIn'];
      let personal = rows[i].values['Personal Website'];
      let imageUrl = rows[i].values['Headshot Photo (1:1 Aspect Ratio)'];

      // Data Cleaning and Verifying
      if (typeof ofemail == 'string')
        ofemail = ofemail.length != 0 ? ofemail.replace(/```/gi, '') : null;
      else ofemail = ofemail['url'];

      if (typeof linkedIn == 'string')
        linkedIn = linkedIn.length != 0 ? linkedIn.replace(/```/gi, '') : null;
      else linkedIn = linkedIn['url'];

      if (typeof personal == 'string')
        personal = personal.length != 0 ? personal.replace(/```/gi, '') : null;
      else personal = personal['url'];

      if (typeof imageUrl == 'string')
        imageUrl = imageUrl.length != 0 ? imageUrl.replace(/```/gi, '') : null;
      else if (Array.isArray(imageUrl)) {
        if (imageUrl.length != 0) imageUrl = imageUrl[0]['url'];
        else imageUrl = null;
      } else imageUrl = imageUrl['url'];

      const officer: Officer = {
        name:
          rows[i].values['First Name'].replace(/```/gi, '') +
          ' ' +
          rows[i].values['Last Name'].replace(/```/gi, ''),
        title: rows[i].values['Title'].replace(/```/gi, ''),
        team: rows[i].values['Department'].replace(/```/gi, ''),
        dateJoined: rows[i].values['Join Date'].length != 0 ? rows[i].values['Join Date'] : null,
        email: ofemail,
        github:
          rows[i].values['GitHub Username'].length != 0
            ? rows[i].values['GitHub Username'].replace(/```/gi, '')
            : null,
        linkedInUrl: linkedIn,
        personalWeb: personal,
        image: imageUrl,
        quote:
          rows[i].values['Short Bio/Quote'].length != 0
            ? rows[i].values['Short Bio/Quote'].replace(/```/gi, '')
            : null,
      };

      OFFICERS_MAP[officer.name] = officer;
    }
    // Create an offline backup if necessary
    storeOfficers();
  } catch (error) {
    // console.log(error);
    console.log('Error No: ' + error.errno);
    console.log('Error Code: ' + error.code);
    // Restore from an offline backup if necessary
    retrieveOfficers();
  }
  return Object.values(OFFICERS_MAP);
};

function storeOfficers(): void {
  fs.writeFile('./pages/api/OfficersBackup.json', JSON.stringify(OFFICERS_MAP), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function retrieveOfficers(): void {
  const officers = fs.readFileSync('./pages/api/OfficersBackup.json');
  OFFICERS_MAP = JSON.parse(officers.toString());
}

// async function retrieveEvents(): Promise<void> {
//   fs.readFile('./pages/api/eventsBackup.json', (err, events) => {
//     if (err) throw err;
//     EVENTS_MAP = JSON.parse(events);
//   });
// }
