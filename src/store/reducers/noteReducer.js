const initState = {
  notes: [
    {id: '1', title: 'this is a test', content: 'bla vla vla vla'},
    {id: '2', title: 'this is a test1', content: 'bla vla vla vla'},
    {id: '3', title: 'this is a test2', content: 'bla vla vla vla'},
    {id: '4', title: 'this is a test3', content: 'bla vla vla vla'},
  ]
}

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_NOTE':
      console.log('note added', action.note);
      return state;
    case 'CREATE_NOTE_ERROR':
      console.log('error while adding', action.err);
      return state;
    default:
      return state;
  }
}

export default noteReducer;