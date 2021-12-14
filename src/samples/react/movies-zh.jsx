import Nav from './Nav.js'
import NavItem from './NavItem.js'
import List from './List.js'
import ListItem from './ListItem.js'

export default function Movies({ movies }) {
  return (
    <div className="divide-y divide-gray-100">
      <Nav>
        <NavItem href="/new" isActive>新片上映</NavItem>
        <NavItem href="/top">熱門電影</NavItem>
        <NavItem href="/picks">文森精選</NavItem>
      </Nav>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </div>
  )
}
