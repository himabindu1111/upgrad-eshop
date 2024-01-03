import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function MediaCard() {
  return (
    <Stack direction="row" spacing={6} sx= {{mr:2}}>
    <Card sx={{ maxWidth: 300, maxHeight:500 }}>
      <CardMedia
        sx={{ height: 275 }}
        image="https://th.bing.com/th/id/OIP.SMKLgFi0xtn2uCagEna2RwHaHa?rs=1&pid=ImgDetMain"
        title="Shoes"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shoes         Rs.1000
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Shoes for men|Running shoes for men|white color shoes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant= "contained" color ="inherit">Buy</Button>

      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 300, maxHeight: 500 }}>
      <CardMedia
        sx={{ height: 275 }}
        image="https://horizontechnical.net/wp-content/uploads/2020/08/boAt-Airdopes-131-pink.jpg"
        title="Airpods"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Airpods 131       Rs.1299
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Airpods 131| wireless airpods| comes with carrying case
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant= "contained" color ="inherit">Buy</Button>

      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 300, maxHeight: 500 }}>
      <CardMedia
        sx={{ height: 275 }}
        image="https://www.runnerinn.com/f/13634/136346128_5/nike-air-zoom-vomero-12.jpg"
        title="Shoes"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Running Shoes             Rs.1679
        </Typography>
        <Typography variant="body2" color="text.secondary">
          unique design running Shoes| comes with textile mesh
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant= "contained" color ="inherit">Buy</Button>

      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 300, maxHeight: 500 }}>
      <CardMedia
        sx={{ height: 275 }}
        image="https://i5.walmartimages.com/asr/42b64942-bba8-41e9-b8d1-d75b69c5813a_1.cbe8bc3e89fe54caa873693f5c191064.jpeg"
        title="jeans"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Levis Jeans             Rs.1000
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Slim fit Stretch jeans| comfort with style| Made of high Quality cotton
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant= "contained" color ="inherit">Buy</Button>

      </CardActions>
    </Card>


    </Stack>
  );
  }
  