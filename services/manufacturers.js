import { Base } from './base';

const URL = 'Manufacturers?maxRecords=3&view=All Manufacturers';

export const Manufacturers = {
  fetch: async () => await Base.get(URL)
};
