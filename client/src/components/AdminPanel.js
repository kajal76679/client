// client/src/components/AdminPanel.js
import React, { useState } from 'react';
import socket from '../socket';
import { Grid, TextField,Button } from "@mui/material";
import Box from "@mui/material/Box";

const AdminPanel = () => {
    const [updatedProduct, setUpdatedProduct] = useState({
        id: '',
        name: '',
        price: '',
        image: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

    const handleUpdateProduct = () => {
        socket.emit('updateProduct', updatedProduct);
    };

    return (
        <div>
            <h2>Admin Panel</h2>
                <Box paddingTop={5}>
                    <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        type="text"
                        id="id"
                        name="id"
                        label="Product ID"
                        variant="filled"
                        fullWidth
                        value={updatedProduct.id} onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        type="text"
                        id="name"
                        name="name"
                        label="New Name : "
                        variant="filled"
                        fullWidth
                        value={updatedProduct.name} onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        type="number"
                        id="price"
                        name="price"
                        label="New Price : "
                        variant="filled"
                        fullWidth
                        value={updatedProduct.price} onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        type="text"
                        id="image"
                        name="image"
                        label="New Image URL :"
                        variant="filled"
                        fullWidth
                        value={updatedProduct.image} onChange={handleInputChange}
                    />
                </Grid>
                </Grid>
                
                </Box>
                
                <Box>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="success"
                            type="submit" 
                            onClick={handleUpdateProduct}
                        >
                            Update
                        </Button>
                    </Grid>
                </Box>
        </div>
    );
};

export default AdminPanel;
