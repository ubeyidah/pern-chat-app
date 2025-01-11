import { create } from "zustand";
import { MessageType, UserConvType } from "../types/types";

type ConversationType = {
  conversation: UserConvType | null;
  messages: MessageType[] | null;
  setConversation: (conversation: UserConvType) => void;
  setMessages: (messages: MessageType[]) => void;
};

export const useConversation = create<ConversationType>((set) => ({
  conversation: null,
  messages: [],
  setConversation: (conversation) => set({ conversation }),
  setMessages: (messages) => set({ messages }),
}));
