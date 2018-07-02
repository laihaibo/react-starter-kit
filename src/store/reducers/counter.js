import { ADD, MINUS } from '../constants/counter';
import produce from 'immer';

export default produce(
  (draft, action) => {
    switch (action.type) {
      case ADD:
        draft.num += 1;
        break;
      case MINUS:
        draft.num -= 1;
        break;
      default:
        break;
    }
  },
  { num: 0 }
);
