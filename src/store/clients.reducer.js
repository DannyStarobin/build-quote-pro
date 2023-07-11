const initialState = {
    clients: '',
    client: '',
    projects:'',
    project:'',
    filterBy: {},
    modal: null
}
export function gameReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_GAME':
            newState = { ...state, game: { ...action.game } }
            break;
        case 'SET_PLAYER':
            newState = { ...state, player: { ...action.player } }
            break;
        case 'SET_GAMES':
            newState = { ...state, games: [...action.games] }
            break;
        case 'REMOVE_GAME':
            newState = { ...state, games: state.games.filter(game => game._id !== action.gameId) }
            break;
        case 'ADD_GAME':
            newState = { ...state, games: [...state.games, action.game] }
            break;
        case 'SET_FILTER':
            newState = { ...state, filterBy: { ...action.filterBy } }
            break;
        case 'SET_MODAL':
            newState = { ...state, modal: { ...action.modal } }
            break;
        default:
    }
    return newState;
}