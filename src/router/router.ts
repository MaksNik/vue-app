import HomePage from '@/components/pages/HomePage.vue';
import DetailsPage from '@/components/pages/DetailsPage.vue';
import NotFoundPage from '@/components/pages/NotFoundPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { IMovie } from '@/models/models';
import actionTypes from '@/store/action-types';
import store from '../store/index';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  {
    path: '/movies/:id',
    name: 'movieDetails',
    component: DetailsPage,
  },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  if (!store.getters.getMoviesList.length) {
    await store.dispatch(actionTypes.getAllMovies);
  }

  if (to.name === 'movieDetails' && to.params.id) {
    const movies = await store.getters.getMoviesList;

    const foundMovie = movies.find((
      movie: IMovie,
    ) => movie.id.toString() === to.params.id);

    return foundMovie ? true : { name: 'notFound' };
  }

  return true;
});

export default router;
