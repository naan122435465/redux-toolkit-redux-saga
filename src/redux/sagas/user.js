import { put, takeEvery } from "redux-saga/effects";
import * as userAPI from "../../apis"
import { setUserSlice } from "../slice/user";
import { addUserSlice, deleteUserSlice, editUserSlice, getUsersSlice } from "../slice/users";
import { CREATE_USER, DELETE_USER_BY_ID, GET_USER_BY_ID, GET_USERS, UPDATE_USER_BY_ID } from "../types";

export function* getUsersSaga() {
    console.log("getUsersSagagetUsersSagagetUsersSaga");
    
    const users = yield userAPI.getUsersAPI();
    yield put(getUsersSlice(users.data))
};

export function* getUserSaga(id) {
    const user = yield userAPI.getUserAPI(id);
    yield put(setUserSlice(user.data))
};
export function* createUserSaga(action) {
    console.log("createUserSaga",action)
     yield userAPI.createUserAPI(action.user);

    yield put(addUserSlice(action.user))
};
export function* updateUserSaga(action) {
    console.log("updateUserSaga",action)
    yield userAPI.updateUserAPI(action.user);
    yield put(editUserSlice(action.user))
};
export function* deleteUserSaga(action) {
    console.log("updateUserSaga",action)
    const user = yield userAPI.deleteUserByAPI(action.id);

    yield put(deleteUserSlice(action))
};

export function* watchUsersAsync() {

    yield takeEvery(GET_USERS, getUsersSaga)
    yield takeEvery(GET_USER_BY_ID, getUserSaga)
    yield takeEvery(CREATE_USER, createUserSaga)
    yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga)
    yield takeEvery(DELETE_USER_BY_ID, deleteUserSaga)

}