import React from 'react';
import { 
    Checkbox, 
    FormControlLabel,
    Button, 
    Divider,
    ExpansionPanel, 
    ExpansionPanelSummary, 
    ExpansionPanelActions
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type TodoItemProps = {
    title: string
    id: number
    completed: boolean
    onChange(id: number): void
    onRemove(event: React.MouseEvent, id: number): void
}

export const TodoItem: React.FC<TodoItemProps> = ({title, id, completed, onChange, onRemove}) => {
  const classes: string = completed ? 'completed' : '';

  return (
    <ExpansionPanel>
    <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id={`additional-actions1-header-${id}`}
    >
        <FormControlLabel
            className={classes}
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
            control={<Checkbox 
                checked={completed} 
                onChange={onChange.bind(null, id)}
                color="primary"
            />}
            label={title}
        />          
    </ExpansionPanelSummary> 
    <Divider />
    <ExpansionPanelActions>
    <Button variant="contained" color="secondary" onClick={event => onRemove(event, id)}>
        Удалить
    </Button>
    </ExpansionPanelActions>
    </ExpansionPanel>
    )
}