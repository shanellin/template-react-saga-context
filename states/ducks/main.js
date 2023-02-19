import produce from "immer"
import { clone } from "ramda"
import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { actionTypes, makeAction, makePromiseAction } from "../actions"
import api from "../apiServices"

export let mainSagas = [
  takeLatest(actionTypes.APP_LOAD_CONFIG, loadConfig),
]

const initialState = {
  number: 0,
  config: {},
  isLoading: false
}

const subActions = {
  LOAD_CONFIG_START: "LOAD_CONFIG_START",
  LOAD_CONFIG_SUCCESS: "LOAD_CONFIG_SUCCESS",
  LOAD_CONFIG_FAILED: "LOAD_CONFIG_FAILED",
}

export default (state = initialState, action = {}) =>
  produce(state, (draft) => {
    switch (action.type) {
      case subActions.LOAD_CONFIG_START:
        Object.assign(draft, {
          config: {},
          isLoading: true
        })
        break
      case subActions.LOAD_CONFIG_SUCCESS:
        Object.assign(draft, {
          config: action.payload.result,
          isLoading: false
        })
        break
      case subActions.LOAD_CONFIG_FAILED:
        Object.assign(draft, {
          config: {},
          isLoading: false
        })
        break
      case actionTypes.APP_ADD_COUNT:
        Object.assign(draft, {
          number: draft.number + 1,
        })
        break
      case actionTypes.APP_SET_COUNT_CONFIG:
        Object.assign(draft.config, {
          number: draft.number
        })
        break
    }
  })

// load config
const loadConfigStart = () => makeAction(subActions.LOAD_CONFIG_START)
const loadConfigSuccess = (result) => makeAction(subActions.LOAD_CONFIG_SUCCESS, { result })
const loadConfigFailed = (error) => makeAction(subActions.LOAD_CONFIG_FAILED, { error })

function* loadConfig() {
  log("Load Config Start")
  const main = yield select((state) => state.main)
  try {
    // const { data: json } = yield call(() => api.load("config"))
    const json = { data: "Redux saga: load config example", number: 0 }
    log(json)
    yield put(loadConfigSuccess(json))
  } catch (err) {
    yield put(loadConfigFailed(err))
    log(`Error ${err}`)
  }
  log("Load Config End")
}

function log(text) {
  console.log("%c Main ", "color: white; background-color: #95B46A", text)
}
