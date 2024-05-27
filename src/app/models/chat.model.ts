export interface Chat {
   friend: string,
   image: string,
   friendMessages: Message[],
   userMessages: Message[],
   viewed: boolean
}

export interface Message {
   text: string,
   dateTime: string
}