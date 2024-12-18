import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { useCart } from '../../contexts/CartContext'; // Import the useCart hook

const HeroSection = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(4, 0),
  marginBottom: theme.spacing(4),
}));

const CategoryButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  padding: theme.spacing(1, 2),
  textAlign: 'left',
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const priceRanges = [
  'de R$ 0,00 até R$ 24,99 (115)',
  'de R$ 25,00 até R$ 49,99 (12)',
  'de R$ 50,00 até R$ 69,99 (4)',
  'de R$ 70,00 até R$ 99,99 (8)',
  'de R$ 100,00 até R$ 199,99 (12)',
  'de R$ 200,00 até R$ 399,99 (13)',
];

const mockProducts = [
  {
    id: 1,
    name: 'Morango Congelado - CX(10KG)',
    price: 167.50,
    installment: { times: 2, value: 87.90 },
    image: '/images/products/morango.jpg',
  },
  {
    id: 2,
    name: 'Morango Congelado - KG',
    price: 18.60,
    installment: { times: 2, value: 9.76 },
    image: '/images/products/morango.jpg',
  },
  {
    id: 3,
    name: 'Banana Comprida - Madura - UNIDADE',
    price: 1.87,
    installment: { times: 2, value: 0.98 },
    image: '/images/products/banana.jpg',
  },
];

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ ...product, quantity });
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 6,
        },
      }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 200,
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ flexGrow: 1, pt: 2 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {product.name}
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          R$ {product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          até {product.installment.times}x de R$ {product.installment.value.toFixed(2)}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton 
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleQuantityChange(-1);
            }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton 
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleQuantityChange(1);
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Button
          size="small"
          variant="contained"
          onClick={handleAddToCart}
        >
          Adicionar
        </Button>
      </CardActions>
    </Card>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pt: 2 }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Categorias
              </Typography>
              <List disablePadding>
                {['Folhagens', 'Frutas', 'Legumes', 'Raizes', 'Verduras'].map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemText>
                      <CategoryButton color="inherit">
                        {text}
                      </CategoryButton>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>

            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Filtrar por Preço
              </Typography>
              <List disablePadding>
                {priceRanges.map((range) => (
                  <ListItem key={range} disablePadding>
                    <ListItemText>
                      <CategoryButton color="inherit">
                        {range}
                      </CategoryButton>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            {/* Promotional Banner */}
            <Paper sx={{ p: 3, mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  Cadastre-se e ganhe 10% de desconto
                </Typography>
                <Typography color="text.secondary">
                  Ganhe um cupom de 10% de desconto para primeira compra!!
                </Typography>
              </Box>
              <Button variant="contained" color="secondary">
                Cadastrar
              </Button>
            </Paper>

            {/* Products Grid */}
            <Grid container spacing={3}>
              {mockProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
