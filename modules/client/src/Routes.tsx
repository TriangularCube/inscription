import { ReactElement } from 'react'
import { Route, Switch } from 'wouter'
import { Create } from '~/routes/create'
import { Game } from '~/routes/game'
import { Play } from '~/routes/play'

export function Routes(): ReactElement {
  return (
    <Switch>
      <Route path={'/create'}>
        <Create />
      </Route>
      <Route path={'/game/:id'}>
        <Game />
      </Route>
      <Route path={'/play/:gameId/:seat'}>
        <Play />
      </Route>
      <Route path={'/'}>Splash</Route>
    </Switch>
  )
}
