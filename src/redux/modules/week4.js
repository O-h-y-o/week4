import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const initialState = {
  list: [{ title: "밥 먹기", content: "반찬은 김치", final: "배부르다" }],
};

// console.log(db);

const LOAD = "week4/LOAD";
const CREATE = "week4/CREATE";

export function createCard(card_data) {
  return { type: CREATE, card_data };
}

export function loadCard(card_list) {
  return { type: LOAD, card_list };
}

export const loadCardFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "week4"));

    let card_list = [];

    card_data.forEach((b) => {
      // console.log(b.id, b.data());
      card_list.push({ id: b.id, ...b.data() });
    });

    // console.log(card_list);
    dispatch(loadCard(card_list));
  };
};

export const addCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "week4"), card);
    const card_data = { id: docRef.id, ...card };
    dispatch(createCard(card_data));
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "week4/CREATE": {
      const new_list = [...state.list, action.week4];
      return { list: new_list };
    }

    case "week4/LOAD": {
      // console.log(action.card_list);
      return { list: action.card_list };
    }

    default:
      return state;
  }
}
