import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
  Chip,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const ProductCard = ({ product }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={product.image || '/images/products/default.jpg'}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          R$ {product.price.toFixed(2)}
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <Rating value={product.rating} readOnly precision={0.5} />
          <Typography variant="body2" color="text.secondary" ml={1}>
            ({product.reviewCount} avaliações)
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src={product.seller.avatar} sx={{ width: 24, height: 24, mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {product.seller.name}
          </Typography>
          <Chip
            size="small"
            label={`${product.seller.rating}★`}
            sx={{ ml: 1, bgcolor: '#FFD700' }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" paragraph>
          {product.description}
        </Typography>
        <Box display="flex" gap={1} mt="auto">
          <Button variant="contained" color="primary" fullWidth>
            Comprar
          </Button>
          <Button variant="outlined" color="primary">
            Chat
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
