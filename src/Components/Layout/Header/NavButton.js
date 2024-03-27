import { Button } from 'react-bootstrap'

const NavButton = (props) => {

  return (
    <Button variant='light' className='mx-auto' onClick={props.onOpenHandle}>
      Your Cart{0}
    </Button>
  )
}

export default NavButton
