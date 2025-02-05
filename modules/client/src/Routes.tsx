import { ReactElement } from 'react'
import { Route, Switch } from 'wouter'
import { Create } from '~/routes/create'

export function Routes(): ReactElement {
  return (
    <Switch>
      <Route path={'/create'}>
        <Create />
      </Route>
      <Route path={'/'}>Splash</Route>
    </Switch>
  )
}
