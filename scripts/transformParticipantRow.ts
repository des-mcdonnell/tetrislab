import fs from 'fs';
import csv from 'csv-parser';
import { parse } from 'json2csv';

import { CSV_COLUMNS_TO_INCLUDE } from './constants';
import { getFilteredParticipantData, getTransformedParticipantData } from './helpers'
import { ParticipantRow } from './types';

const csvInputPath = '../Sources/participants_rows.csv';
const csvOutputPath = '../Data/participantData.csv';
const jsonOutputPath = '../Data/participantData.json';

const results: any[] = [];

fs.createReadStream(csvInputPath)
  .pipe(csv())
  .on('data', (data: ParticipantRow) => {
    const filteredParticipantData = getFilteredParticipantData(data, CSV_COLUMNS_TO_INCLUDE);
    const transformedParticipantData = getTransformedParticipantData(filteredParticipantData);

    results.push(transformedParticipantData);
  })
  .on('end', () => {
    // Write JSON file
    fs.writeFile(jsonOutputPath, JSON.stringify(results, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file has been saved.');
      }
    });

    // Convert JSON to CSV and write CSV file
    try {
      const csvData = parse(results);
      fs.writeFile(csvOutputPath, csvData, (err) => {
        if (err) {
          console.error('Error writing CSV file:', err);
        } else {
          console.log('CSV file has been saved.');
        }
      });
    } catch (err) {
      console.error('Error converting JSON to CSV:', err);
    }
  });