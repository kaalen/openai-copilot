// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { useCallback, useState } from "react";
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn, Selection, Label, BaseSelectedItemsList, Link, DialogContent } from "@fluentui/react";
import { Dialog, DialogTrigger, DialogSurface, DialogTitle, DialogBody, DialogActions, Button } from '@fluentui/react-components';
import { TooltipHost, IconButton } from '@fluentui/react';

import styles from "./ContentItemDetails.module.css";
import { BlobServiceClient } from "@azure/storage-blob";
import { getBlobClientUrl, deleteDocument, pushToEmbeddingsQueue } from "../../api";
import { IDocument } from "./DocumentsDetailList";
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { forwardRef, useImperativeHandle } from 'react';

interface Props {
    item: IDocument | null;
}

export const ContentItemDetails = forwardRef(({ item }: Props, ref) => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    }

    useImperativeHandle(ref, () => ({
        openDialog() {
          openHandler();
        }
      }));

    return (
        <FluentProvider theme={webLightTheme}>
            <Dialog
                open={open}
                onOpenChange={(event, data) => {
                    // it is the users responsibility to react accordingly to the open state change
                    console.log(`Dialog was ${data.open ? 'opened' : 'closed'}`);
                    setOpen(data.open);
                }}
                // dialogContentProps={{
                //     type: DialogType.normal,
                //     title: 'Confirm Delete',
                //     subText: `Are you sure you want to delete ${selectedItem?.name}?`,
                // }}
                // modalProps={{
                //     isBlocking: true,
                //     styles: { main: { maxWidth: 450 } },
                // }}
            >
                <DialogSurface>
                    <DialogBody>
                        <DialogTitle>Content Item Details</DialogTitle>
                        <DialogContent>
                            {(item!=null) && 
                                <>
                                <div><label>Name: </label>{item.name}</div>
                                <div><label>File Type: </label>{item.fileType}</div>
                                <div><label>State: </label>{item.state}</div>
                                <div><label>State Description: </label>{item.state_description}</div>
                                <div><label>Uploaded: </label>{item.upload_timestamp}</div>
                                <div><label>Modified: </label>{item.modified_timestamp}</div>
                                </>
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button appearance="primary" >Refresh</Button>
                            <Button appearance="secondary" onClick={() => setOpen(false)}>Close</Button>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>
      </FluentProvider>
    );
})