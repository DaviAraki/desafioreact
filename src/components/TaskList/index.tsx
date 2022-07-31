import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Button, Checkbox } from '@mui/material';
import { TaskItemContainer } from './styles';
import { Tasks } from '../../store/slices/taskSlice';
import useViewModel from './ViewModel';

export default function TaskList({ name, subMenus, id }: Tasks) {
  const { checked, handleChange, handleClick, open } = useViewModel();

  return (
    <>
      <TaskItemContainer>
        <Button onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
        <ListItemText primary={name} />
        <Checkbox
          checked={checked}
          onChange={() => handleChange(id)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <h3>{subMenus.length}</h3>
      </TaskItemContainer>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {subMenus.map((subMenu) => (
            <ListItemButton sx={{ pl: 4 }} key={subMenu.id}>
              <ListItemText primary={subMenu.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}
