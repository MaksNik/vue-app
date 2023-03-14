import { IMovie } from '@/models/models';
import request from '@/modules/index';

export default class Api {
  static getAllMovies() {
    return request('/movies', { method: 'get' });
  }
}
