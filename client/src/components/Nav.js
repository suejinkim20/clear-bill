import { AppBar, Tabs, Tab } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <AppBar position="static">
                <Tabs>
                    <Tab label="Home" component={Link} to="/" />
                    <Tab label="Login" component={Link} to="/login" />
                    <Tab label="SignUp" component={Link} to="/signup"/>
                    {/* <Tab label="Dashboard" component={Link} to="/dashboard" /> */}
                </Tabs>
            </AppBar>
        </div>
    )
}