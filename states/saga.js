import { all } from "redux-saga/effects"
import { mainSagas } from "./ducks/main"

function* rootSaga() {
  let sagas = [].concat(
    mainSagas
  )
  yield all(sagas)
}

export default rootSaga
