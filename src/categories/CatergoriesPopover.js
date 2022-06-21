import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './Categories.css';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

export const Example = () => (
  <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popover}>
    <div className='nav-component'>Categories</div>
  </OverlayTrigger>
);

// export default Example;