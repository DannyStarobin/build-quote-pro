import { gameService } from "../services/game.service";

export function loadGames() {
    return async (dispatch) => {
        try {

            const games = await gameService.getGames();
            if (games) {
                dispatch({ type: "SET_GAMES", games });
                // if (!game) throw new Error();
                if (!games) throw new Error();
            } else {
                dispatch({ type: "SET_GAMES", games: null });
            }
        } catch (err) {
            console.log("Cannot get games", err);
        }
    };
}

export function loadGame(gameId) {
    return async (dispatch) => {
        try {
            const game = await gameService.getById(gameId);            
            if (game) {
                dispatch({ type: "SET_GAME", game });
                return game
                // if (!game) throw new Error();
                if (!game) throw new Error();
            } else {
                dispatch({ type: "SET_GAMES", game: null });
            }
        } catch (err) {
            console.log("Cannot get game", err);
        }
    };
}


export function updateGame(game) {
    return async (dispatch) => {
        try {
            const newgame = await gameService.saveGame(game);
            dispatch({ type: "SET_GAME", newgame });
        } catch (err) {
            console.log("Cannot update game", err);
        }
    };
}


export function removeGame(gameId) {
    return async dispatch => {
        try {
            await gameService.remove(gameId)
            dispatch({ type: 'REMOVE_GAME', gameId })
        } catch (err) {
            console.log('gameAction: err in removeGame', err)
        }
    }
}

export function addGame(game) {
    return async dispatch => {
        try {
            const addedGame = await gameService.addGame(game)
            dispatch({ type: 'ADD_GAME', game: addedGame })
        } catch (err) {
            console.log('gameAction: err in addGame', err)
        }
    }
}

export function setGame(game) {   
    return async dispatch => {
        try {
            dispatch({ type: 'SET_GAME', game: game })
        } catch (err) {
            console.log('gameAction: err in setGame', err)
        }
    }
}

export function setPlayer(currPlayer) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_PLAYER', player: currPlayer })
        } catch (err) {
            console.log('gameAction: err in setPlayer', err)
        }
    }
}

