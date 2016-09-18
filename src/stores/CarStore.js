/**
 * Created by jevgenir on 18/09/2016.
 */

import BaseStore from './BaseStore';

class CarStore extends BaseStore {
  constructor() {
    super('/api/car');
  }
}

export default CarStore;
