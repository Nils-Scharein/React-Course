import {useState} from 'react';
import Ratingnew from './components/Ratingnew.tsx';

const Counter = () => {
    const [count, setCounter] = useState(() => {
        const start: number = 5;
        console.log(`Init count state... to ${start}`);
        return start;
    });

    return (
        <>
            <h2>Count: {count} </h2>
            <button
                onClick={() => {
                    setCounter((prevCount) => prevCount + 1);
                }}
            >
                Increment Counter
            </button>
        </>
    );
};

const App = () => {
    return (
        <div>
            {/* <Rating
        heading="How do you feel about Coding?"
        color="Gold"
        feedbackMessages={[
          'Hate it',
          'Dislike it',
          'Meh',
          'Like it',
          'Love it',
        ]}
      /> */}
            <Ratingnew
                color="Gold"
                heading={'How do you feel about Coding?'}
                feedbackMessages={[
                    'Hate it',
                    'Dislike it',
                    'Meh',
                    'Like it',
                    'Love it',
                ]}
            />
            {/* <Counter /> */}
        </div>
    );
};

export default App;
