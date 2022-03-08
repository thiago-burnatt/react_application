import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './example/actions';
import * as types from './types';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

// Função geradora
function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaosuccess());
  } catch {
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
