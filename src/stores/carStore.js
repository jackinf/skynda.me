/**
 * Created by jevgenir on 18/09/2016.
 */

import BaseStore from './baseStore';

class CarStore extends BaseStore {
  constructor() {
    super('/cars');
  }
}

export default CarStore;
