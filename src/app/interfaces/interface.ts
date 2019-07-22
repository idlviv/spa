export interface IChatMsg {
  message: string;
  isOutgoing?: boolean;
  payload?: any;
  room?: string;
}