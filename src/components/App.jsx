import React, {useEffect} from 'react';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import MainPart from "./MainPart";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import Description from "./../containers/Description";


const App = (props) => {
    const fetchBooks = async () => {
        const {setBooks} = props;
        let api_url = await fetch(`/books.json`);
        setBooks(await api_url.json());
    };
    useEffect(fetchBooks);
    const {books, isReady, bId } = props;
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <HomeScreen />
                    </Route>
                    <Route exact path="/books">
                        <Menu/>
                        <Filter/>
                        <MainPart books={books} isReady={isReady}/>
                    </Route>
                    <Route exact path={"/books/"+ bId}>
                        <Description books={books} isReady={isReady}/>
                    </Route>
                    <Redirect from="/" to="/home" />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;
