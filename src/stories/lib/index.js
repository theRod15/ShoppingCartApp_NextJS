const { useDispatch } = require('react-redux')
const { useEffect } = require('react')
const { initStore } = require('../../store')
const { getInitialState } = require('../../actions')

export const useInitStore = () => {
  const store = initStore()
  useEffect(() => {
    ;(async () => {
      await store.dispatch(getInitialState())
    })()
  }, [])
  return store
}
