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

export interface Game {
   id: number,
   title: string,
   admin: string,
   date: string,
   schedule: string,
   front: boolean,
   location: string,
   price: string,
   description: string,
   image: string,
   genre: string
}
