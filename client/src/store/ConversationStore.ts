import { create } from "zustand";
import { MessageType, UserConvType } from "../types/types";

type ConversationType = {
  selectedConversation: UserConvType | null;
  messages: MessageType[] | null;
  setSelectedConversation: (conversation: UserConvType) => void;
  setMessages: (messages: MessageType[]) => void;
  clearMessage: () => void;
};

export const useConversation = create<ConversationType>((set) => ({
  selectedConversation: null,
  messages: [],
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  setMessages: (messages) => set({ messages }),
  clearMessage: () => set({ messages: [] }),
}));
