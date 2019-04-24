export default function(store) {
  store.actions.setLoading(true)
  store.actions.setModal({
    ...store.state.modal,
    modalStatus: false,
  })
  setTimeout(() => store.actions.setLoading(false), 300)
}
