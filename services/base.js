// eslint-disable-next-line
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_URL = 'https://api.airtable.com/v0/appu5RedhRnKd7bwJ';
const HEADERS = {
  Authorization: `Bearer ${AIRTABLE_API_KEY}`
};

export const Base = {
  get: async url => {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: 'GET',
      headers: HEADERS
    });

    const json = await response.json();

    return json;
  }
};
