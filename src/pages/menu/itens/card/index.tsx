import products from '../itens.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





type Cardprops = typeof products[0]; 

export default function Cardproduct(card:Cardprops){
const {title,description,photo,size,price} = card

    return(
     <div>
            <Card  sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="160"
              image={photo}
              alt="product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" color={'black'} component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant='outlined' color='success' >{size}</Button>
              <Button size="large" variant='contained' color='success'>${price},00</Button>
            </CardActions>
          </Card>
      
     </div>
    );
}
