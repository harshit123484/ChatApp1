

import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null,
  setselectedConversation: (selectedConversation) => set({ selectedConversation }), // ✅ Chat Select करने का Function

  messages: [], // ✅ यह Messages Store करेगा
  
  
  setMessages: (messages) => set({ messages }),

  sendingMessage: false,  // ✅ यह ट्रैक करेगा कि मैसेज भेजा जा रहा है या नहीं
  setSendingMessage: (status) => set({ sendingMessage: status }),
}));

export default useConversation;