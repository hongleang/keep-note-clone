import React, { useEffect, useRef, useState } from "react";


import { Grid } from "@mui/material";
import { ButtonBase, Checkbox, Icon, IconButton, InputBase, Typography } from "@mui/material";
import { Divider, List, ListItem, ListItemIcon } from "@mui/material";
import { Paper } from "@mui/material";

const ContentLayout = ({ children }) => <Grid container alignItems="center" sx={{ padding: "8px 16px" }}>
    {children}
</Grid>

const InActiveContent = ({ activateAll }) => <ContentLayout>
    <Grid item xs={8}>
        <Typography variant="subtitle1" component="span" sx={{ color: 'gray' }}>
            Take Note...
        </Typography>
    </Grid>
    <Grid container xs={4} justifyContent="center">
        <IconButton onClick={activateAll}><Icon>check_box</Icon></IconButton>
        <IconButton><Icon>edit</Icon></IconButton>
        <IconButton><Icon>image</Icon></IconButton>
    </Grid>
</ContentLayout>

const CheckBoxInput = () => {
    const [inputValue, setInputValue] = useState('');
    // const [hover, setHover] = useState(false);

    return (
        <List dense>
            <Divider />
            <ListItem disablePadding>
                <ListItemIcon alignItems="center" sx={{ justifyContent: "center", marginRight: 0 }}>
                    {inputValue.length === 0
                        ? <Icon>add</Icon>
                        : <Checkbox
                            edge="end"
                            // checked
                            tabIndex={-1}
                            disableRipple
                        />}
                </ListItemIcon>
                <InputBase
                    autoFocus
                    fullWidth
                    placeholder="List item..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </ListItem>
            <Divider />
        </List>)
}

const ActiveContent = ({ save, showCheckboxes }) => {
    const iconProps = {
        color: 'default',
        size: 'small'
    }

    const [title, setTitle] = React.useState('');
    const [textAreaValue, setTextAreaValue] = React.useState('');

    return (
        <ContentLayout>
            <Grid item xs={11}>
                <Typography variant="subtitle1" component="span" sx={{ color: 'gray' }}>
                    <InputBase fullWidth placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Typography>
            </Grid>
            <Grid container xs={1} justifyContent="end">
                <IconButton><Icon>bookmark</Icon></IconButton>
            </Grid>
            <Grid item xs={12} sx={{ margin: "16px 0" }}>
                <Typography variant="body2" component="span" sx={{ color: 'gray' }}>
                    {!showCheckboxes
                        ? <InputBase fullWidth multiline placeholder="Take a note..." autoFocus value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)}/>
                        : <CheckBoxInput />
                    }
                </Typography>
            </Grid>

            <Grid item xs={9}>
                <IconButton edge="start" {...iconProps}><Icon>palette</Icon></IconButton>
                <IconButton {...iconProps}><Icon>image</Icon></IconButton>
                <IconButton {...iconProps}><Icon>archive</Icon></IconButton>
                <IconButton {...iconProps}><Icon>more_vert</Icon></IconButton>
            </Grid>

            <Grid item xs={3}>
                <Grid container justifyContent="end">
                    <ButtonBase sx={{ width: 200, height: 30 }} onClick={(e) => {
                        e.stopPropagation();
                        save({ input: { title, body: textAreaValue }})
                    }}>
                        <Typography variant="subtitle2">
                            Close
                        </Typography>
                    </ButtonBase >
                </Grid>
            </Grid>
        </ContentLayout>
    )
}

const Note = ({ data, setData }) => {
    const [active, setActive] = useState(false);
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    const noteRef = useRef();

    const activateAll = () => {
        setActive(true);
        setShowCheckboxes(true)
    };
    const save = ({ input }) => {
        const copyData = [...data];

        setActive(false);
        setShowCheckboxes(false);
        input && (input.title.length > 0 || input.body.length > 0) && setData([input, ...copyData])
    };

    useEffect(() => {
        const detectOutsideClick = (event) => {
            if (noteRef.current && !noteRef.current.contains(event.target)) {
                save({})
            }
        }

        document.addEventListener("mousedown", detectOutsideClick);

        return () => {
            document.removeEventListener("mousedown", detectOutsideClick);
        };
    }, [noteRef]);

    return (
        <>
            <Paper ref={noteRef} elevation={8} onClick={() => setActive(true)}>
                {active ?
                    <ActiveContent save={save} showCheckboxes={showCheckboxes} />
                    : <InActiveContent activateAll={activateAll} />
                }
            </Paper>
        </>
    );
};

export default Note;
