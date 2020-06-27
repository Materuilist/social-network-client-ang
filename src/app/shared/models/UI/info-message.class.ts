export enum InfoMessageTypes{
    Warning,
    Info,
    Error,
    Success
}

export class InfoMessage{
    constructor(public message:string, public type:InfoMessageTypes = InfoMessageTypes.Info){}
}