import { Base } from './base';

const URL = 'Product Inventory';

export const Inventory = {
  fetch: async () => await Base.get(URL)
};
