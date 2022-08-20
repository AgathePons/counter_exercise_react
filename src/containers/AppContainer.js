// == Import
import { useState, useEffect } from 'react';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Table from '../components/Table';

// == Composant
function App() {
  const [result, setResult] = useState(0);
  const [paragraphText, setParagraphText] = useState('Click the buttons to add or remove 1.');
  const [actionsList, setActionsList] = useState([]);

  const onPlusButtonClick = () => {
    setResult((value) => value + 1);
    setParagraphText('You add 1.');
  };
  const onMoinsButtonClick = () => {
    setResult((value) => value - 1);
    setParagraphText('You remove 1.');
  };

  useEffect(() => {
    if (paragraphText === 'Click the buttons to add or remove 1.') {
      setActionsList([{ id: 0, action: 'Init...', result: 0 }]);
    }
    else {
      const ids = actionsList.map((action) => action.id);
      console.table(actionsList);
      setActionsList((value) => [
        ...value,
        {
          id: Math.max(...ids) + 1,
          action: paragraphText,
          result: result,
        },
      ]);
    }
  }, [result]);

  return (
    <div className="app">
      <Title title="Counter" />
      <Paragraph text={paragraphText} />
      <div className="result">
        {result}
      </div>
      <div className="counter">
        <Button
          text="+"
          onButtonClick={onPlusButtonClick}
        />
        <Button
          text="-"
          onButtonClick={onMoinsButtonClick}
        />
      </div>
      <div className="actions">
        <Table actions={actionsList} />
      </div>
    </div>
  );
}

// == Export
export default App;
