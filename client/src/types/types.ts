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
