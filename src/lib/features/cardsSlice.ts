import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Detail } from "./types";

interface State {
  cards: Detail[];
  likedCards: Detail[];
}
const initialState: State = {
  cards: [],
  likedCards: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCards(state, action: PayloadAction<Detail[] | undefined>) {
      state.cards = action.payload || [];
    },
    removeCard(state, action: PayloadAction<Detail>) {
      state.cards = state.cards.filter(
        (card) => card.name !== action.payload.name
      );
      state.likedCards = state.likedCards.filter(
        (card) => card.name !== action.payload.name
      );
    },
    addLikedCard(state, action: PayloadAction<Detail>) {
      state.likedCards.push(action.payload);
    },
    removeLikedCard(state, action: PayloadAction<Detail>) {
      state.likedCards = state.likedCards.filter(
        (card) => card.name !== action.payload.name
      );
    },
  },
});

export const { addCards, removeCard, addLikedCard, removeLikedCard } =
  cardsSlice.actions;

export default cardsSlice.reducer;
