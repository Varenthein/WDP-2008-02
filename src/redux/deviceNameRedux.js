/* selectors */
export const getDeviceName = ({ deviceName }) => deviceName;
// action name creator
const reducerName = 'deviceName';
const createActionName = name => `app/${reducerName}/${name}`;
// action types
export const ADD_WINDOW_WIDTH = createActionName('ADD_WINDOW_WIDTH');
// action creatos
export const addWindowWidth = payload => ({ payload, type: ADD_WINDOW_WIDTH });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_WINDOW_WIDTH: {
      console.log('action.payload', action.payload);
      console.log('oldStatePart', statePart);

      let screenMode = '';
      if (action.payload < 375) {
        screenMode = 'smobile';
      } else if (action.payload < 768) {
        screenMode = 'mobile';
      } else if (action.payload < 992) {
        screenMode = 'tablet';
      } else {
        screenMode = 'desktop';
      }
      console.log('newStatePart', screenMode);
      return screenMode;
    }
    default:
      return statePart;
  }
}
