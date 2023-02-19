export const actionTypes = {
  APP_LOAD_CONFIG: "APP_LOAD_CONFIG",
  APP_ADD_COUNT: "APP_ADD_COUNT",
  APP_SET_COUNT_CONFIG: "APP_SET_COUNT_CONFIG"
}

export const pendingEvents = {
  LOAD_CONFIG_SUCCESS: "LOAD_CONFIG_SUCCESS",
  LOAD_CONFIG_FAILED: "LOAD_CONFIG_FAILED",
}

export function makeAction(type, payload = {}) {
  let action = {
    type: type
  }
  if (payload) action.payload = payload
  return action
}

export function makePromiseAction(type, resolve, reject, payload) {
  let action = {
    type: type,
    resolve: resolve,
    reject: reject
  }
  if (payload) action.payload = payload
  return action
}
