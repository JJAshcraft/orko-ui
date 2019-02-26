import { Base } from './base';

const URL = 'Personnel?maxRecords=3&view=Main View';

export const Personnel = {
  fetch: async () => await Base.get(URL)
};
