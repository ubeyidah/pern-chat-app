export interface User {
  id: string;
  username: string;
  email: string;
  gender: string;
  createdAt: Date;
  updatedAt: Date;
  profile: string;
  conversationIds: string[];
}

export interface UserConvType {
  id: string;
  username: string;
  email: string;
  profile: string;
}

export interface MessageType {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  converstaionId: string;
  senderId: string;
  body: string;
}
