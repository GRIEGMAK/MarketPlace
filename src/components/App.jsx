import React, {useEffect} from 'react';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import MainPart from "./MainPart";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import Description from "./../components/Description";
import Top from "./Top";
import Header from "./Header";


const App = (props) => {
    const fetchBooks = async () => {
        const {setBooks} = props;
        let api_url = await fetch(`/books.json`);
        setBooks(await api_url.json());
    };
    useEffect(fetchBooks);
    const {books, isReady, bId, book} = props;
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home">
                        <HomeScreen />
                    </Route>
                    <Route exact path="/books">
                        <Header/>
                        <Menu/>
                        <Filter/>
                        <MainPart books={books} isReady={isReady}/>
                        <Top />
                    </Route>
                    <Route exact path={"/books/"+ bId}>
                        <Header />
                        <Menu/>
                        <Description book={book}/>
                        <Top />
                    </Route>
                    <Redirect from="/" to="/home" />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;
