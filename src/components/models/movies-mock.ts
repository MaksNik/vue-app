import { IMovie } from '@/components/models/models';

const mockDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';

const allMovies: IMovie[] = [
  {
    name: 'The Rock',
    genre: 'Action',
    date: new Date('1996-02-01'),
    posterUrl: 'https://www.themoviedb.org/t/p/w500/j5mxLNWjUlXUUk8weFBtnF4afIR.jpg',
    description: mockDescription,
    rating: 4.1,
    duration: 130,
  },
  {
    name: 'Indiana Jones',
    genre: 'Action & Adventures',
    date: new Date('2008-05-14'),
    posterUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/6dd732de-6d1b-46b0-bbe0-9c2b17c296ef/1920x',
    description: mockDescription,
    rating: 3,
    duration: 130,
  },
  {
    name: 'Interstellar',
    genre: 'Sci-Fi',
    date: new Date('2014-01-01'),
    posterUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/78c36c0f-aefd-4102-bc3b-bac0dd4314d8/1920x',
    description: mockDescription,
    rating: 4.9,
    duration: 130,
  },
  {
    name: 'Inception',
    genre: 'Action & Adventures',
    date: new Date('2010-11-30'),
    posterUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/50f492b4-7ccd-4676-8908-ef779a66a1c3/1920x',
    description: mockDescription,
    rating: 4.8,
    duration: 130,
  },
  {
    name: 'Bad Santa',
    genre: 'Comedy',
    date: new Date('2000-12-12'),
    posterUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/534e4a01-7d81-40be-9623-2de6e34ca442/1920x',
    description: mockDescription,
    rating: 4.4,
    duration: 130,
  },
  {
    name: 'Black Hawk Down',
    genre: 'War &  Action',
    date: new Date('2002-04-13'),
    posterUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/59c9c4a1-563f-4f27-b471-639924448238/1920x',
    description: mockDescription,
    rating: 4.6,
    duration: 130,
  },
  {
    name: 'Transformers',
    genre: 'Action & Adventures',
    date: new Date('2007-10-23'),
    posterUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/c181d90b-1cee-4421-b121-59283c63d913/1920x',
    description: mockDescription,
    rating: 3.8,
    duration: 130,
  },
  {
    name: 'The Shawshank redemption',
    genre: 'Drama',
    date: new Date('2000-06-12'),
    posterUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/e26044e5-2d5a-4b38-a133-a776ad93366f/300x',
    description: mockDescription,
    rating: 5,
    duration: 130,
  },
  {
    name: 'The Boondock Saints',
    genre: 'Action',
    date: new Date('1999-03-03'),
    posterUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/3415504f-b337-4f58-87a1-9cdde3e3f2aa/1920x',
    description: mockDescription,
    rating: 4.2,
    duration: 130,
  },
];
export default allMovies;
