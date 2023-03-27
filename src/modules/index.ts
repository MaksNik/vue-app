import { IMovie } from '@/models/models';

const BASE_URL = 'https://tame-erin-pike-toga.cyclic.app/';

function request(url: string, options: RequestInit): Promise<IMovie[]> {
  return fetch(`${BASE_URL}${url}`, { method: options.method })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error');
      }

      return response.json();
    })
    .catch((err) => console.error(err));
}

export default request;
