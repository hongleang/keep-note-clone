import React, { useEffect, useRef, useState } from "react";

import {
    Add,
    ArchiveOutlined,
    CheckBoxOutlined,
    ImageOutlined,
    ModeEditOutlineOutlined,
    MoreVertOutlined,
    PaletteOutlined,
    PushPinOutlined
} from '@mui/icons-material';

import { Grid } from "@mui/material";
import { ButtonBase, Checkbox, IconButton, InputBase, Typography } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
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
        <IconButton onClick={activateAll}><CheckBoxOutlined /></IconButton>
        <IconButton><ModeEditOutlineOutlined /></IconButton>
        <IconButton><ImageOutlined /></IconButton>
    </Grid>
</ContentLayout>

const CheckBoxInput = () => <List>
    <ListItem disablePadding>
        <ListItemIcon>
            <Add />
            <Checkbox
                edge="start"
                // checked
                tabIndex={-1}
                disableRipple
                // inputProps={{ 'aria-labelledby': labelId }}
            />
        </ListItemIcon>
        <InputBase autoFocus placeholder="List item..." />
    </ListItem>

</List>

const ActiveContent = ({ deactivateAll, showCheckboxes }) => {
    const iconProps = {
        color: 'default',
        size: 'small'
    }

    return (
        <ContentLayout>
            <Grid item xs={10}>
                <Typography variant="subtitle1" component="span" sx={{ color: 'gray' }}>
                    <InputBase placeholder="Title" />
                </Typography>
            </Grid>
            <Grid container xs={2} justifyContent="end">
                <IconButton><PushPinOutlined /></IconButton>
            </Grid>
            <Grid item xs={8} sx={{ margin: "16px 0" }}>
                <Typography variant="body2" component="span" sx={{ color: 'gray' }}>
                    {!showCheckboxes ? <InputBase multiline placeholder="Take a note..." autoFocus /> : <CheckBoxInput />}
                </Typography>
            </Grid>

            <Grid item xs={9}>
                <IconButton edge="start" {...iconProps}><PaletteOutlined /></IconButton>
                <IconButton {...iconProps}><ImageOutlined /></IconButton>
                <IconButton {...iconProps}><ArchiveOutlined /></IconButton>
                <IconButton {...iconProps}><MoreVertOutlined /></IconButton>
            </Grid>

            <Grid item xs={3}>
                <Grid container justifyContent="end">
                    <ButtonBase sx={{ width: 200, height: 30 }} onClick={(e) => {
                        e.stopPropagation();
                        deactivateAll()
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

const Note = () => {
    const [active, setActive] = useState(false);
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    const noteRef = useRef();

    const activateAll = () => {
        setActive(true);
        setShowCheckboxes(true)
    };
    const deactivateAll = () => {
        setActive(false);
        setShowCheckboxes(false)
    };

    useEffect(() => {
        const detectOutsideClick = (event) => {
            if (noteRef.current && !noteRef.current.contains(event.target)) {
                deactivateAll()
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
                {active ? <ActiveContent deactivateAll={deactivateAll} showCheckboxes={showCheckboxes} /> : <InActiveContent activateAll={activateAll} />}
            </Paper>
        </>
    );
};

export default Note;
