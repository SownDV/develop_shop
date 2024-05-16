import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDialogCustom(props) {
    return (
        <React.Fragment>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                maxWidth="xs"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    {props?.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props?.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' size='small' color='error' onClick={props.handleClose}>Hủy</Button>
                    <Button variant='contained' size='small' onClick={props.handleYesDelete} autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
