import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

function Chat({ open, onClose }) {
  const [message, setMessage] = useState('');
  const email = 'joaoemanuel2666@gmail.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Aqui você pode implementar a lógica para enviar o email
      window.location.href = `mailto:${email}?subject=Contato AgroLink&body=${encodeURIComponent(message)}`;
      setMessage('');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Central de Atendimento</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{ p: 2 }}
        >
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Digite sua mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
          >
            Enviar Mensagem
          </Button>
        </Paper>
      </DialogContent>
    </Dialog>
  );
}

export default Chat;
