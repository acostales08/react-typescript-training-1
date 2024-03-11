import { RouterConfig } from './config'
import { Counter, FetchData, Factorial, ForCallback, Task } from '../pages'
import { Switch, Route } from 'react-router-dom'

type DynamicRouterProps = {
    component: any 
    exact: boolean
    path: string
}

const DynamicRouter = ({component: Component, ...rest}: DynamicRouterProps) => {
  return (
        <Route
            {...rest}
            render={(props) => (
                <Component {...props}/>
            )}
        />
  )
}

export default () => (
    <Switch>
        <DynamicRouter exact path={RouterConfig.counter.path} component={Counter}/>
        <DynamicRouter exact path={RouterConfig.fetchdata.path} component={FetchData}/>
        <DynamicRouter exact path={RouterConfig.factorial.path} component={Factorial}/>
        <DynamicRouter exact path={RouterConfig.forCallback.path} component={ForCallback}/>
        <DynamicRouter exact path={RouterConfig.task.path} component={Task}/>
    </Switch>
)
