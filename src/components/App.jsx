import React, {useEffect} from 'react';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import MainPart from "./MainPart";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import HomeScreen from "./HomeScreen";


const App = (props) => {
    const fetchBooks = async () => {
        const {setBooks} = props;
        let api_url = await fetch(`/books.json`);
        setBooks(await api_url.json());
    };
    useEffect(fetchBooks);
    const {books, isReady, bId } = props;
    let booksId = "/" + bId
    return (
        <div>
            <Menu/>
            {bId}
            <Filter/>
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <HomeScreen />
                    </Route>
                    <Route path="/books">
                        <MainPart books={books} isReady={isReady}/>
                    </Route>
                    <Route path={"/books/" + booksId}>
                        <h1>Hdkjnck</h1>
                    </Route>
                    <Redirect from="/" to="/home" />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;
