import { takeEvery, put, select } from 'redux-saga/effects';
import { addTask, deleteTask, addToUnDo } from '../actions/actions';
import { getTaskPath } from '../selectors/selectorsForPaths';

export function* addTaskWatcher() {
    yield takeEvery('START_ADD_TASK_PROCESS', addTaskGen);
}

function* addTaskGen(action) {
    yield put(addTask({ path: action.payload.path, title: action.payload.title }));
    let pathParam = yield select(getTaskPath(action.payload.path));
    yield put(addToUnDo({ 
        undoOperation: deleteTask, 
        redoOperation: addTask, 
        obj: { path: action.payload.path, pathParam: pathParam, title: action.payload.title, description: '', isFinished: false } 
    }));
}
