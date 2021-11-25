const initialState = {
  list: [{ title: "밥 먹기", content: "반찬은 김치", final: "배부르다" }],
};

const CREATE = "week4/CREATE";

export function createCard(week4) {
  return { type: CREATE, week4 };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "week4.CREATE": {
      const new_list = [...state.list, action.week4];
      return { list: new_list };
    }

    default:
      return state;
  }
}
