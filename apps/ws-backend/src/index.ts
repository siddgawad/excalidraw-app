import {WebSocketServer,WebSocket} from "ws";
import http from "http";

const wss = new WebSocketServer({port: 8080});


type RoomId = string;

const socketToRoom = new Map<WebSocket,RoomId>();

const roomToSocket = new Map<RoomId,WebSocket>();

function getRoomSet(roomId:RoomId) : Set<WebSocket>{
    let set = roomToSocket.get(roomId);
    if(!set){
        set = new Set<WebSocket>();
        roomToSocket.set(roomId,set);
        console.log(`Created a new room: `${roomId});
    }
    return set;
}


wss.on("connection", (ws) => {




    ws.on("message", (message) => {
        ws.send(`${message}`);
    })
    })