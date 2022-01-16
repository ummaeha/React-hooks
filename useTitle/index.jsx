import React from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const HtmlTitle = document.querySelector('title');
    HtmlTitle.innerText = title;
  };
  useEffect(() => {
    updateTitle;
  }, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home', 5000)); //5초뒤에 타이틀이 바뀌나 테스트

  return (
    <div>
      <div>HI</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
