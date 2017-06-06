import createReducer from 'alexs-redux-helpers/reducers/create-reducer';

const createList = config => {
  const reducerConfig = Object.keys(config).reduce(
    (all, actionType) => ({
      ...all,
      [actionType]: (() => {
        const handler = config[actionType];

        if (typeof handler === 'function') {
          return handler
        }

        if (typeof handler !== 'string') {
          throw new Error('createList handlers must be either a function or a string');
        }

        if (handler === '') {
          return (_, action) => action.payload.result;
        }

        return (_, action) => action.payload.result[handler];
      })()
    }), {})

  return createReducer({
    ...reducerConfig,
    initial: []
  })
}

export default createList;