import request from '@/modules/index';

export default class Api {
  static getMovies() {
    return request('/movies', { method: 'get' });
  }
}
