export interface Chat {
   friend: string,
   image: string,
   friendMessages: Message[],
   userMessages: Message[]
}

export interface Message {
   text: string,
   dateTime: string
}