import React from 'react';

//모든건 ref가 설정되어있기 떄문에 동작하는 것임
const useClick = (onClick) => {
  if (typeof onClick !== 'function') return; // 이런건 typescript하면 필요없을듯
  //누군가 클릭하면 알려주기
  const element = useRef(); // #2: reference 생성
  useEffect(() => {
    //컴포넌트가 mount되었을 때 실행
    if (element.current) {
      element.current.addEventLister('click', onClick);
    }
    //componentWillUnmount도 구현 해줘야함(이벤트 정리) -> 컴포넌트가 mount되지 않았을 때, eventListen가 배치되지 않도록 하기위함
    return () => {
      if (element.current) {
        element.current.removeEventLister('click', onClick);
      }
    };
  }, []);
  return element; //#3: 리턴
};

//사용법
const App = () => {
  //   const input = useRef();
  const sayHello = () => console.log('hello!');
  const title = useClick(sayHello); // #1
  //reference: component의 어떤 부분을 선택할 수 있는 방법(cf. document.querySelector)
  //   setTimeout(() => input.current.focus(), 3000); //마치 doument.querySelector로 input태그에 접근한 것 처럼 효과가 나타남.
  return (
    <div>
      <div ref={title}>HI</div>
      {/* <input ref="input" placeholder="la" /> */}
      {/* 모든 컴포넌트는 ref를 props로 가지고있음*/}
    </div>
  );
};

export default useClick;
