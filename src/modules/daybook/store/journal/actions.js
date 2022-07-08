import journalApi from '@/api/journalApi';

export const loadEntries = async ( { commit } ) => {

    const { data } = await journalApi.get( '/entries.json' );

    const entries = [];

    if ( !data ) return commit( 'setEntries', entries );

    for ( const id of Object.keys( data ) ) {

        entries.push( {
            ...data[ id ],
            id,
        } );

    }

    commit( 'setEntries', entries );

};

export const updateEntry = async ( { commit }, val ) => {

    const { id, ...rest } = val;

    await journalApi.put( `/entries/${ id }.json`, rest );

    commit( 'updateEntry', { ...val } );

};

export const createEntry = async ( { commit }, val ) => {

    const { data } = await journalApi.post( '/entries.json', val );

    val.id = data.name;

    commit( 'addEntry', { ...val } );

    return data.name;

};

export const deleteEntry = async ( { commit }, id ) => {

    await journalApi.delete( `/entries/${ id }.json` );

    commit( 'deleteEntry', id );

};