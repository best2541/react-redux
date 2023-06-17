import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice';
import { increment2, decrement2, editColor } from './counter2Slice';
import { Link } from 'react-router-dom';
function Test() {
  const count1 = useSelector((state) => state.counter1)
  const count2 = useSelector((state) => state.counter2)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>counter1</h1>
      <h1>value:{count1.value}</h1>
      <h1>Branch:{count1.branch}</h1>
      <button onClick={() => dispatch(increment())}>เพิ่ม</button>
      <button onClick={() => dispatch(decrement())}>ลด</button>
      <hr />
      <h1>counter2</h1>
      <h1>value:{count2.value}</h1>
      <h1>color:{count2.color}</h1>
      <button onClick={() => dispatch(increment2())}>เพิ่ม</button>
      <button onClick={() => dispatch(decrement2())}>ลด</button>
      <input value={count2.color} onChange={(event) => dispatch(editColor(event.target.value))} />
      <hr />
      <Link to={'/'}>go back</Link>
    </div>
  );
}

export default Test;
