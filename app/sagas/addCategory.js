import { takeEvery, put, select } from 'redux-saga/effects';
import {
  addCategory,
  deleteCategory,
  addToUnDo,
  clearReDo,
} from '../actions';
import { getCategoryPath } from '../selectors';

export function* addCategoryGen({ payload: { title } }) {
  yield put(clearReDo());

  yield put(addCategory({ title }));
  const path = yield select(getCategoryPath);
  yield put(addToUnDo({
    undoOperation: deleteCategory,
    redoOperation: addCategory,
    obj: {
      path: [path.split('-')[0]],
      pathParam: path.split('-')[1],
      title,
      subCategories: [],
      tasks: [],
    },
  }));
}

function* addCategoryWatcher() {
  yield takeEvery('START_ADD_CATEGORY_PROCESS', addCategoryGen);
}

export default addCategoryWatcher;
