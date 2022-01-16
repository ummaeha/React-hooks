import React from 'react';

const App = () => {
  const sayHello = () => console.log('hello');
  //useEffect는 인자 2개를 받음.(1, function인 effect / 2, deps: deps(dependency)리스트에 있는 값이 변할때만 effect활성화 )
  //deps에 빈배열을 보내면 마운트 되는 시기에면 실행됨
  useEffect(() => {
    sayHello(); // 1.일단 맨 처음에 컴포넌트가 마운트 되자마자 실행됨(componentDidMount 역할)
    // 2.클릭할때마다 실행됨(componentDidUpdate 역할)
  });
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  return (
    <div>
      <div>HI</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
