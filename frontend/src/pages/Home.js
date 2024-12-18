import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Button 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: theme.spacing(8, 0, 6),
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/vale-sao-francisco.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  features: {
    padding: theme.spacing(8, 0),
  },
}));

const features = [
  {
    title: 'Polo de Fruticultura',
    description: 'Maior região produtora de frutas irrigadas do Brasil, com destaque para uva e manga.',
    image: '/images/fruits.jpg'
  },
  {
    title: 'Irrigação do São Francisco',
    description: 'Sistema de irrigação moderno alimentado pelo Rio São Francisco, garantindo produção o ano todo.',
    image: '/images/irrigation.jpg'
  },
  {
    title: 'Certificações Internacionais',
    description: 'Produtos certificados com padrão de qualidade internacional, incluindo GlobalG.A.P e Fair Trade.',
    image: '/images/certifications.jpg'
  },
  {
    title: 'Logística Integrada',
    description: 'Estrutura completa com CEAGESP e Porto Seco para distribuição nacional e exportação.',
    image: '/images/logistics.jpg'
  }
];

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            AgroLink Juazeiro
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            O marketplace que conecta produtores e compradores no maior polo de fruticultura irrigada do Brasil
          </Typography>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Button variant="contained" color="secondary" size="large">
              Explorar Produtos
            </Button>
          </div>
        </Container>
      </div>

      <Container className={classes.features} maxWidth="md">
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item key={feature.title} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={feature.image}
                  title={feature.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" align="center" style={{ marginTop: '4rem' }}>
          Principais Culturas
        </Typography>
        <Grid container spacing={4} style={{ marginTop: '2rem' }}>
          {['Uva', 'Manga', 'Goiaba', 'Maracujá', 'Coco Verde', 'Banana'].map((crop) => (
            <Grid item key={crop} xs={6} sm={4} md={2}>
              <Button variant="outlined" color="primary" fullWidth>
                {crop}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
