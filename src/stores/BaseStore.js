import {observable, action} from 'mobx';
// import {host} from '../config';
import fetch from 'node-fetch';

const host = "http://skynda.me";


class BaseStore {
  baseApi;

  constructor(api) {
    this.baseApi = host + api;
  }

  @observable items = [];
  @observable isLoading = true;
  @observable item = {};

  @action getAll() {
    this.isloading = true;
    console.log(this.baseApi);
    fetch(this.baseApi)
      .then(response => response.json())
      .then(data => {
        for(var item of data) {
          this.items.push(item);
        }
        this.isloading = false;
      })
  }

  @action getSingle(id) {
    this.isLoading = true;
    fetch(`${this.baseApi}/${id}`)
      .then(response => response.json())
      .then(item => {
        this.item = item;
        this.isloading = false;
      })
  }

  @action add(item, onSuccess) {
    var data = new FormData();
    for (var key in item) {
      data.append(key, item[key]);
    }

    return fetch(this.baseApi, {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then((newItem) => {
        this.items.push(newItem);
        onSuccess();
      });
  }

  @action update(item, onSuccess) {
    var data = new FormData();
    for (var key in item) {
      data.append(key, item[key]);
    }

    return fetch(`${this.baseApi}/${item.id}`, {
      method: 'PUT',
      body: data
    })
      .then(res => res.json())
      .then(item => {
        onSuccess(item);
      });
  }

  @action remove(id) {
    return fetch(`${this.baseApi}/${id}`, {
      method: 'DELETE'
    }).then(() => {
      this.items = this.items.filter(item => item.id !== id);
    });
  }

}

export default BaseStore;
