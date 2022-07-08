export const setEntries = ( state, val ) => {

    state.entries = [ ...state.entries, ...val ];
    state.isLoading = false;

};

export const updateEntry = ( state, val ) => {

    state.entries = state.entries.map( entry => entry.id === val.id ? val : entry );

};

export const addEntry = ( state, val ) => {

    state.entries = [ val, ...state.entries ];

};

export const deleteEntry = ( state, id ) => {

    state.entries = state.entries.filter( entry => entry.id !== id );

};