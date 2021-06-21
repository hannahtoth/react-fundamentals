import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FuntionalComponentDemo from '../concepts/FunctionalComponents/FunctionalComponentDemo';
import JSXRules from '../concepts/site/JSXRules';

const Sidebar = () => {
    return(
        <div className='sidebar'>
          <div className='sidebar-list-styling'>
              <ul className='sidebar-list list-unstyled'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/resources'>Resources</Link></li>
                  <li><Link to='/funtionalcomponent'>Functional Component</Link></li>
                  <li><Link to='/jsxrules'> JSX Rules</Link></li>
              </ul>
          </div>
          <div className='sidebar-route'>
              <Switch>
                  <Route exact path='/home'><Home /></Route>
                  <Route exact path='/resources'><Resources /></Route>
                  <Route exact path='/'><Home /></Route>
                  <Route exact path='/functionalcomponent'><FuntionalComponentDemo/></Route>
                  <Route exact path='/jsxriles'><JSXRules /></Route>
              </Switch>
          </div>
        </div>
    );
};

export default Sidebar;