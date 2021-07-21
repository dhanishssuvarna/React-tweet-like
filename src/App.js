import React from 'react';
import Tweet from './Tweet';

const App = () => {
    return (
        <div className="app">
            <h1 className="title">React Tweets</h1>
            <div className="tweets">
                <Tweet name="Dhanish" msg="My frnd is Mangu" />
                <Tweet name="Vaishnavi" msg="My frnd is Golu" />
                <Tweet name="C N Tejas" msg="My frnd is gulla" />
                <Tweet name="Gulaisha" msg="My frnd is Maari" />
            </div>
        </div>
    );
};

export default App;
