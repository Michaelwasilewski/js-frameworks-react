import './App.css';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <Heading
       name="Neo"
       age="21"
       color="tomato"
       fontSize="32px"
      />
      <Paragraph
       content="I am the chosen one"
       color="lightBlue"
       fontSize="24px"/>
      <Heading
       name="Mr.smith"
       age="212"
       color="gray"
       fontSize="24"
      />
      <Paragraph
       content="No im not"
       color="orange"
       fontSize="16"
      />
    </div>
  );
}

export default App;
