import { takeEvery, put, select } from 'redux-saga/effects';
import { editCategory, addToUnDo, editCategoryRevive } from '../actions/actions';
import { getEntity } from '../selectors/selectorsForEntities';

export function* editCategoryWatcher() {
    yield takeEvery('START_EDIT_CATEGORY_PROCESS', editCategoryGen);
}

function* editCategoryGen(action) {
    let category = yield select(getEntity(action.payload.path, action.payload.pathParam, action.payload.title));
    yield put(editCategory({ path: action.payload.path, pathParam: action.payload.pathParam, title: action.payload.title }));
    yield put(addToUnDo({
        undoOperation: editCategory,
        redoOperation: editCategoryRevive,
        obj: category
    }));
}