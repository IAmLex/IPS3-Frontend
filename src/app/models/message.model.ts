enum MessageType {
    Message = 0,
    SetUserId = 1,
}

export class Message {
    public type: MessageType;
    public fromUser: Number;
    public toUser: Number;
    public message: String;

    constructor(type: MessageType, fromUser: Number, toUser: Number, message: String) {
        this.type = type;
        this.fromUser = fromUser;
        this.toUser = toUser;
        this.message = message;
    }
}

