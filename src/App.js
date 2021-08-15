import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CountryNews from './Components/CountryNews';
import {Tabs, Tab, AppBar} from "@material-ui/core";
function App() {

    const routes = ["/", "/in", "/gb"];
    return (
        <div className="App">
            <Router>
                <Route path="/"
                    render={
                        (history) => (
                            <AppBar>
                                <Tabs variant="fullWidth"
                                    value={
                                        history.location.pathname
                                }>
                                    <Tab value={
                                            routes[0]
                                        }
                                        label="United States"
                                        component={Link}
                                        to={
                                            routes[0]
                                        }/>
                                    <Tab value={
                                            routes[1]
                                        }
                                        label="India"
                                        component={Link}
                                        to={
                                            routes[1]
                                        }/>
                                    <Tab value={
                                            routes[2]
                                        }
                                        label="Germany"
                                        component={Link}
                                        to={
                                            routes[2]
                                        }/>
                                </Tabs>
                            </AppBar>
                        )
                    }/>
                <Switch>
                    <Route exact path="/"
                        render={
                            () =>< CountryNews key = {
                                window.location.pathname
                            }
                            country = "us" />
                        }/>
                    <Route exact path="/in"
                        render={
                            () =>< CountryNews key = {
                                window.location.pathname
                            }
                            country = "in" />
                        }/>
                    <Route exact path="/gb"
                        render={
                            () =>< CountryNews key = {
                                window.location.pathname
                            }
                            country = "gb" />
                        }/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
