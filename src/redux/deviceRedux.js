/* selectors */
export const getDevice = ({ device }) => device;

/* action name creator */
const reducerName = 'device';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_DEVICE = createActionName('SET_DEVICE');

/* action creators */
export const setDevice = payload => ({ payload, type: SET_DEVICE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_DEVICE: {
      const breakpoints = {
        tablet: 992,
        mobile: 768,
        smobile: 375,
      };

      if (action.payload >= breakpoints.tablet) {
        return 'xlarge';
      } else if (action.payload >= breakpoints.mobile) {
        return 'large';
      } else if (action.payload >= breakpoints.smobile) {
        return 'medium';
      } else {
        return 'small';
      }
    }
    default:
      return statePart;
  }
}
