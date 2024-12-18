import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  Divider,
  IconButton,
  Card,
  CardMedia,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

const mockProducts = {
  1: {
    id: 1,
    name: 'Morango Congelado - CX(10KG)',
    price: 167.50,
    installment: { times: 2, value: 87.90 },
    image: '/images/products/morango.jpg',
    code: 'FRUMORANCONKG',
    description: 'Morango congelado de alta qualidade, ideal para sucos, sobremesas e vitaminas.',
    thumbnails: [
      '/images/products/morango.jpg',
      '/images/products/morango-2.jpg',
    ],
  },
  2: {
    id: 2,
    name: 'Morango Congelado - KG',
    price: 18.60,
    installment: { times: 2, value: 9.76 },
    image: '/images/products/morango.jpg',
    code: 'FRUMORANCONKG',
    description: 'Morango congelado de alta qualidade, vendido por quilo.',
    thumbnails: [
      '/images/products/morango.jpg',
      '/images/products/morango-2.jpg',
    ],
  },
  3: {
    id: 3,
    name: 'Banana Comprida - Madura - UNIDADE',
    price: 1.87,
    installment: { times: 2, value: 0.98 },
    image: '/images/products/banana.jpg',
    code: 'FRUBANCOMUNI',
    description: 'Banana comprida madura, ideal para frituras e cozidos.',
    thumbnails: [
      '/images/products/banana.jpg',
    ],
  },
};

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const product = mockProducts[id];

  if (!product) {
    return (
      <Container>
        <Typography variant="h4" sx={{ mt: 4 }}>
          Produto não encontrado
        </Typography>
      </Container>
    );
  }

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Imagens do Produto */}
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 2 }}>
            <CardMedia
              component="img"
              image={product.thumbnails[selectedImage]}
              alt={product.name}
              sx={{ width: '100%', height: 'auto', aspectRatio: '1/1', objectFit: 'cover' }}
            />
          </Card>
          <Grid container spacing={1}>
            {product.thumbnails.map((thumb, index) => (
              <Grid item key={index}>
                <Card 
                  sx={{ 
                    cursor: 'pointer',
                    border: selectedImage === index ? '2px solid #4CAF50' : 'none',
                  }}
                  onClick={() => setSelectedImage(index)}
                >
                  <CardMedia
                    component="img"
                    image={thumb}
                    alt={`${product.name} - imagem ${index + 1}`}
                    sx={{ width: 80, height: 80, objectFit: 'cover' }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Informações do Produto */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            
            <Typography color="text.secondary" gutterBottom>
              Cód: {product.code}
            </Typography>

            <Typography variant="h4" color="primary" sx={{ mt: 3 }}>
              R$ {product.price.toFixed(2)}
            </Typography>
            
            <Typography variant="body1" color="text.secondary" gutterBottom>
              até {product.installment.times}x de R$ {product.installment.value.toFixed(2)}
            </Typography>

            <Button 
              variant="text" 
              color="primary" 
              sx={{ mt: 1, mb: 3 }}
            >
              mais formas de pagamento
            </Button>

            <Divider />

            <Box sx={{ my: 3 }}>
              <Typography variant="h6" gutterBottom>
                Quantidade
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton onClick={() => handleQuantityChange(-1)}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{quantity}</Typography>
                <IconButton onClick={() => handleQuantityChange(1)}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>

            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ mb: 2 }}
            >
              Comprar
            </Button>

            <Divider />

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Descrição do Produto
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {product.description}
              </Typography>
            </Box>

            {/* Calculadora de Frete */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Calcular taxa de serviço
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs>
                  <input
                    type="text"
                    placeholder="Digite seu CEP"
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained">
                    Calcular
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
