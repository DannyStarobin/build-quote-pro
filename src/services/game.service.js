import { httpService } from "./http.service"
// import { SocketSevice} from "./socket.service"
import { utilService } from "./util.service"

async function getGames(filterBy = '') {
    return httpService.get(`game`, { filterBy });
}

async function createGame(userName) {
    const game = {
        playerOneName: userName,
        isDrawing: userName,
        playerOneIsActive: true,
        isGameActive: 'pending',
        points: 0,
        rounds:0,
        _id: utilService.makeId(),
       savedDrawing:'{\"lines\":[{\"points\":[{\"x\":0,\"y\":0}],\"brushColor\":\"#000000\",\"brushRadius\":5}],\"width\":400,\"height\":400}'
    }
    return game;
}

async function addGame(game) {
    const AddedGame = await httpService.post(`game`, game);
    return AddedGame;
}

async function setPlayerTwo(user){
    const game = await getById(user.gameId)
    game.userTwoName = user.name
    game.userTwoIsActive = true
    game.isGameActive = true
    const savedGame = await saveGame(game)
    return savedGame
}

async function saveGame(game) {
    const savedGame = await httpService.put(`game/${game._id}`, game);
    // socketService.emit("board-update", savedBoard);
    return savedGame;
}

async function remove(gameId) {
    await httpService.delete(`game/${gameId}`)

}

async function getById(gameId) {
    return await httpService.get(`game/${gameId}`)
    
}


export const gameService = {
    getGames,
    addGame,
    saveGame,
    remove,
    getById,
    setPlayerTwo,
    createGame
}